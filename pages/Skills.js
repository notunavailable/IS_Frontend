import styles from '../styles/skills.module.css'
import SkillList from '../components/skill/SkillList'
import { getSession } from "next-auth/react"
import { useState } from "react"
import AddSkillPopup from '../components/skill/AddSkillPopup'

const Skills = ({skills, userId}) => {
  const [popup, setPopup] = useState(false);

  const renderPage = () => {
    if(popup){
      return <AddSkillPopup id={userId}/>
    } else {
      return <SkillList skills={skills} setPopup={setPopup} userId = {userId}/>;
    }
  }


  return (
    <div className={styles.container}>
      {renderPage()}
    </div>
  )
}

export default Skills;


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
  let skills;
  const response = await fetch(`http://localhost:5001/api/v1/user/skills/${session.id}`);
    if (response.ok) {
      const text = await response.text();
      if (text.length > 0) {
        const json = await JSON.parse(text);
        skills = json;
      } else {
        console.error('Empty JSON response');
      }
    } else {
      console.error(`Error fetching data: ${response.status}`);
    }

  return {
    props: { skills: skills, userId: session.id }
  }
}

