import Link from 'next/link'
import styles from '../styles/habit.module.css'

function Habits() {
    const habits = [
        {
            id: 1,
            name: 'Exercise',
            description: 'Physical activity aimed at improving physical fitness',
            frequency: 'Daily'
        },
        {
            id: 2,
            name: 'Reading',
            description: 'Reading a book or news articles for at least 30 minutes',
            frequency: 'Daily'
        },
        {
            id: 3,
            name: 'Meditation',
            description: 'Meditation or mindfulness practice for mental wellness',
            frequency: 'Daily'
        },
        // more habits...
    ];
    return (

        <div className={styles.container}>
            <h1>Habits</h1>
            {habits.map((habit) => (
                <div key={habit.id} className={styles.habitCard}>
                    <h2>{habit.name}</h2>
                    <p>{habit.description}</p>
                    <p>Frequency: {habit.frequency}</p>
                </div>
            ))}
            <Link href="/"><h2 className={styles.backLink}>⟵ Back to Home</h2></Link>
        </div>
    )
}

export default Habits
