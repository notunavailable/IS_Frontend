import React from "react";
import styles from "../styles/message.module.css"
import {MESSAGE_SEEN} from '../utils/api-defs'

const Message = ({ message, messagePointer, setMessagePointer }) => {
    const handleClose = async () => {
        const res = await fetch(MESSAGE_SEEN({id: message._id}), {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            }
        });
        if(res.status == 200){
            setMessagePointer(messagePointer-1)
        }
    };

    return (
        messagePointer != -1 && (<div className={styles.messageModal}>
            <div className={styles.box}>
                <button onClick={handleClose}>X</button>
                <h1>{message.title}</h1>
                <h2>{message.description}</h2>
            </div>
        </div>)

    )
}

export default Message;