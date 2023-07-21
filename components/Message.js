import React from "react";
import styles from "../styles/message.module.css"

const Message = ({message, seen, setMessage, setSeen}) => {
  const handleClose = () => {
    setSeen(false);
    setMessage(null);
  };

  return (
    seen && (
      <div className={styles.messageModal}>
        <button onClick={handleClose}>X</button>
        <h1>{message.title}</h1>
        <h2>{message.description}</h2>
      </div>
    )
  );
}

export default Message;