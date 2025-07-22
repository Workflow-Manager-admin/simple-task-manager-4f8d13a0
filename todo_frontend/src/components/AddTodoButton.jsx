import React from "react";
import styles from "./AddTodoButton.module.css";

// PUBLIC_INTERFACE
/**
 * AddTodoButton is the floating circular button used to add new todos.
 */
function AddTodoButton() {
  return (
    <button className={styles.addTodoBtn} aria-label="Add ToDo">
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6eda7c-688a-4892-bc94-27bf5dde66e0"
        alt="Add ToDo"
      />
    </button>
  );
}

export default AddTodoButton;
