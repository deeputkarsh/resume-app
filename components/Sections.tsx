import styles from '@resume-app/styles/section.module.scss';
import { ComponentType } from 'react';

interface propType {
  Component: ComponentType<{list:any}>,
  data: any
}
function Sections({ Component, data }:propType) {
  const { title, list } = data;
  return (
    <div>
      <div className={styles.header}>{title}</div>
      <Component list={list} />
    </div>
  );
}

export default Sections;
