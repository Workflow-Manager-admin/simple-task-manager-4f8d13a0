import React from "react";
import styles from "./AppBar.module.css";

// PUBLIC_INTERFACE
/**
 * AppBar visual header as in Figma, displaying the app banner/image.
 */
function AppBar() {
  return (
    <div className={styles.appBar}>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ff07ff2-a1a1-4b06-b4d2-ee75c15343ef"
        alt="App Bar"
      />
    </div>
  );
}

export default AppBar;
