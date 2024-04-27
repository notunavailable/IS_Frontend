# InfinitSeed - Frontend

## Overview

This website aims to gamify skill progression in real
life. It allows users to add skills to their status 
sheet and level up those skills by practicing them in 
real life.


## Data Model

The application will store Users and Skills

* users can have multiple skills (via references)

An Example User:

```javascript
{
  username: "jdoe",
  password: // a password hash,
  birthday: 12/01/2004,
  firstName: "john",
  lastName: "doe",
  email: "johndoe@email.com", 
  skills: // an array of references to Skill documents and their level,
  level: //level of user
  experience: //experience user has gained through practicing their skill
}
```


## Wireframes

/ - Home page. Shows user's status screen

/skills - page for showing all of user's skills and adding skills to user's list.

/login - page for logging in

/register - page for signing up

## Site map

Login/Signup --> Home
Home --> Skills

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new skill
4. as a user, I can view all of the skills I've added to my list of skills
5. as a user, I can log my practice time in a skill and level it up

## Research Topics

* (6 points) React
    * I'm going to be using React for my frontend framework
* (6 points) Next
    * I'm going to be using Nextjs for my frontend framework
* (4 points) Auth
    * I'm going to be using authjs for my user authentication logic

16 points total out of 10 required points


## Annotations / References Used

1. [Getting Started with Next.js](https://nextjs.org/docs)
2. [Getting Started on auth.js](https://authjs.dev/getting-started)