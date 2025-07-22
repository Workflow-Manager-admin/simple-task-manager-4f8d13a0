import React from "react";
import styles from "./NavigationBar.module.css";

// PUBLIC_INTERFACE
/**
 * NavigationBar is the bottom persistent navigation bar from Figma design.
 */
function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a94d266-4bdb-4927-9bb2-4796e0fcda28"
        alt="Navigation Bar"
      />
    </div>
  );
}

export default NavigationBar;
