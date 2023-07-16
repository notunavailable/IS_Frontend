import ToggleSwitch from '../form/ToggleSwitch'
import {useState, useEffect} from 'react'

const PracticingSwitch = ({practicing, skillId, userId}) => {
    const [checked, setChecked] = useState(practicing);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [apiData, setApiData] = useState(null);  // Add this line

    const callPracticing = async () => {
        const res = await fetch(`http://localhost:5001/api/v1/user/practice/${userId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
               skillId: skillId,
            }),
        });

        // Await for data for any desirable next steps and update the state
        const data = await res.json();
        setApiData(data);  // Update state with response data
    }

    useEffect(() => {
        if (!isInitialRender) {
            callPracticing();
        } else {
            setIsInitialRender(false);
        }
    }, [checked]);

    return <ToggleSwitch label = "Track your skill" checked = {checked} setChecked = {setChecked}/>
}

export default PracticingSwitch;