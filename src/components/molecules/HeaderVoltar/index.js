import React from "react";
import * as styles from './index.module.css'

const HeadeVoltar = ({onClickVoltar}) => (
    <div className={styles.topBar}>
    <div className={styles.leftIcons}>
      <button type="button" onClick={() => onClickVoltar()}>Voltar</button>
    </div>
  </div>
);

export default HeadeVoltar;