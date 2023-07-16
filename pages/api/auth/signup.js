import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, firstName, lastName, birthday, username } = req.body;

    // Enhanced validation for email and password
    if (
      !email ||
      !email.includes('@') ||
      email.length < 6 ||
      password.length < 6
    ) {
      res.status(422).json({ message: 'Invalid Data' });
      return;
    }

    const client = await MongoClient.connect(
      process.env.URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Database connection failed' });
    });
    
    if (!client) {
      return;
    }

    const db = client.db();
    const checkExisting = await db
      .collection('users')
      .findOne({ email: email });

    if (checkExisting) {
      res.status(422).json({ message: 'User already exists' });
      client.close();
      return;
    }

    const hashedPassword = await hash(password, 12);
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      username,
      firstName,
      lastName,
      birthday
    });

    res.status(201).json({ message: 'User created', result });
    client.close();
  } else {
    res.status(500).json({ message: 'Route not valid' });
  }
}

export default handler;