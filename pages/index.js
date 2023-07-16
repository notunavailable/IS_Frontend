import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { getSession, useSession } from "next-auth/react"
import Link from 'next/link'
import HabitCheck from '../components/HabitCheck'

import Status from '../components/Status'

export default function Home({ status }) {
  return (
    <main className={styles.main}>
      <Status status={status} />
      <div className={styles.grid}>
        <Link href="/Skills" className={styles.card}>
          <h2>
            Skills <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Practice and evolve your skills.
          </p>
        </Link>
        <Link href="/Habits" className={styles.card}>
          <h2>
            Habits <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Build and maintain habits.
          </p>
        </Link>
        <Link href="/Market" className={styles.card}>
          <h2>
            Market <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            Shop for a plethora of things.
          </p>
        </Link>
        <Link href="/Quests" className={styles.card}>
          <h2>
            Quests <span className={styles.arrow}>&rarr;</span>
          </h2>
          <p>
            View your active quests.
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
  let status;
  const response = await fetch(`http://localhost:5001/api/v1/user/status/${session.id}`);
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
    props: { status: status }
  }
}