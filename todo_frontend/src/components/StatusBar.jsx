import React from "react";
import styles from "./StatusBar.module.css";

// PUBLIC_INTERFACE
/**
 * StatusBar renders the top info bar with time and icons.
 */
function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <img
        className={styles.statusTime}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffc91e39-6737-472e-9aad-54edf98be73e"
        alt="Time"
      />
      <img
        className={styles.statusIcons}
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65c1d550-fe03-472e-96c7-1d430adb8b5e"
        alt="Icons"
      />
    </div>
  );
}

export default StatusBar;
