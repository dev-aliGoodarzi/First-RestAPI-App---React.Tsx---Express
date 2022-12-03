import React from "react";
import styles from "./Hr.module.css";

type HrProps = {
  text?: string;
};

const Hr: React.FunctionComponent<HrProps> = ({ text }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center mt-2 text-center ${styles.hrEl}`}
    >
      <div
        className={`flex flex-row items-center justify-center text-center ${styles.inner}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Hr;
