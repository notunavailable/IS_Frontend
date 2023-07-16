import React, { useState } from 'react';
import styles from '../styles/admin/admin.module.css'

import ButtonToggle from '../components/admin/ButtonToggle'
import RegisterSkill from '../components/admin/RegisterSkill'
import RegisterAttribute from '../components/admin/RegisterAttribute'
import SkillCard from '../components/admin/SkillCard'

import {ATTR_GET, UNRQUEUE_GET_SKILL} from '../utils/api-defs'

const Admin = ({ attributes, unregisteredSkills }) => {
    //button toggle active buttons
    //[skill, attribute, difficulty]
    const [isActiveButtons, setIsActiveButtons] = useState([true, false, false, false]);

    const renderUnregisteredList = () => {
        return unregisteredSkills.items.map((skill) => {
            const skillData = {
                name: skill.name,
                difficulty: skill.difficulty.name,
                attributes: skill.attributes,
                description: skill.description,
                difficultyExplanation: skill.difficultyDescription,
                category: skill.category,
                attributeExplanation: skill.attributesDescription,
                approved: skill.approved

            }
            return (<SkillCard key={skill.name} skill={skillData} />)
        })
    }

    const renderPopups = () => {
        if (isActiveButtons[0]) {
            return (<RegisterSkill attributes={attributes} />);
        } else if (isActiveButtons[1]) {
            return (<RegisterAttribute />);
        } else if (isActiveButtons[2]) {

        } else if (isActiveButtons[3]) {
            return (
                <div>
                    {renderUnregisteredList()}
                </div>
            )
        }
    }

    return (
        <div className={styles.container}>
            <h1>Admin</h1>
            <div className={styles.toggle}>
                <ButtonToggle
                    isActiveButtons={isActiveButtons}
                    setIsActiveButtons={setIsActiveButtons} // Removed the function call parentheses
                />
            </div>
            {renderPopups()}
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const attributeResponse = await fetch(ATTR_GET());
        const attributes = await attributeResponse.json(); // Assuming the API response is JSON

        const unregisteredSkillsResponse = await fetch(UNRQUEUE_GET_SKILL());
        const unregisteredSkills = await unregisteredSkillsResponse.json(); // Assuming the API response is JSON
        return {
            props: {
                attributes,
                unregisteredSkills: unregisteredSkills.queue
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                attributes: [] // Return an empty array if there's an error or no data
            }
        };
    }
}

export default Admin;