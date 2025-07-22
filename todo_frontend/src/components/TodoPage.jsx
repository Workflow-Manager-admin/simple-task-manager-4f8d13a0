import React from "react";
import StatusBar from "./StatusBar";
import AppBar from "./AppBar";
import TodosList from "./TodosList";
import AddTodoButton from "./AddTodoButton";
import NavigationBar from "./NavigationBar";
import styles from "./TodoPage.module.css";

// PUBLIC_INTERFACE
/**
 * TodoPage is the main layout for the todo app, matching the Figma visual.
 * Contains status bar, app bar, todos area, floating action button, and navigation bar.
 */
function TodoPage() {
  return (
    <div className={styles.todoFrame}>
      <StatusBar />
      <AppBar />
      <TodosList />
      <AddTodoButton />
      <NavigationBar />
    </div>
  );
}

export default TodoPage;
