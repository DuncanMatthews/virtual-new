import React from "react";
import Link from "next/link";

import styles from "../public/buttonGlow.module.css";
const ButtonGlow = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.button} href={"/dream"}>
        Generate Renovation
      </Link>
    </div>
  );
};

export default ButtonGlow;
