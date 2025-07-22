import React from "react";
import styles from "./TodosList.module.css";

// PUBLIC_INTERFACE
/**
 * TodosList displays the list of todos or a placeholder image (Figma-mock).
 */
function TodosList() {
  return (
    <div className={styles.todosList}>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0c7655d-9056-4f35-a385-3e432be2bd18"
        alt="Todos List"
      />
    </div>
  );
}

export default TodosList;
