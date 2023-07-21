import styles from '../styles/Home.module.css'
import { getSession } from "next-auth/react"
import Link from 'next/link'
import {USER_STATUS, USER_MESSAGES} from '../utils/api-defs'
import {useEffect} from 'react'

import Status from '../components/Status'

export default function Home({ status, messages, setMessages, setMessagePointer }) {
  useEffect(() => {
    setMessagePointer(messages.length-1)
    setMessages(messages)
  }, [messages, setMessages, setMessagePointer]);
  return (
    <main className={styles.main}>
      <Status status={status} />
      <div className={styles.grid}>
        <Link href="/Skills" className={`${styles.card} ${styles.active}`}>
          <h2>
            Skills <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Practice and evolve your skills.
          </p>
        </Link>
        <Link href="/" className={styles.card}>
          <h2>
            Habits <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Build and maintain habits.
          </p>
          <p style = {{color: "#000000"}}>
            Not available at this time.
          </p>
        </Link>
        <Link href="/" className={styles.card}>
          <h2>
            Market <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Shop for a plethora of things.
          </p>
          <p style = {{color: "#000000"}}>
            Not available at this time.
          </p>
        </Link>
        <Link href="/" className={styles.card}>
          <h2>
            Quests <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            View your active quests.
          </p>
          <p style = {{color: "#000000"}}>
            Not available at this time.
          </p>
        </Link>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    }
  }
  let messages = await fetch(USER_MESSAGES({id: session.id}));
  if (messages.ok) {
    const text = await messages.text();
    if (text.length > 0) {
      const json = JSON.parse(text);
      messages = json;
    } else {
      console.error('Empty JSON response');
    }
  } else {
    console.error(`Error fetching data: ${messages.status}`);
  }
  let status;
  const response = await fetch(USER_STATUS({id: session.id}));
  if (response.ok) {
    const text = await response.text();
    if (text.length > 0) {
      const json = JSON.parse(text);
      status = json;
    } else {
      console.error('Empty JSON response');
    }
  } else {
    console.error(`Error fetching data: ${response.status}`);
  }

  return {
    props: { status: status, messages: messages }
  }
}