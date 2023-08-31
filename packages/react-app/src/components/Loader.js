import React from "react";

import styles from "../styles";
import { ether } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className={styles.loader}>
      <img
        src={ether}
        alt="ethereum logo"
        className={styles.loaderImg}
      />
      <p className={styles.loaderText}>{title}</p>
    </div>
  );
};

export default Loader;
