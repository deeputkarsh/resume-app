import styles from '@resume-app/styles/education.module.scss';

interface propType { list: any }
interface listItem {
  courseName: string,
  institute: string,
  duration: string,
}

function Education({ list }: propType) {
  return list.map(({ courseName, institute, duration }: listItem) => (
    <div className={`${styles["list-items"]} ${styles["edu-item"]}`} key={courseName}>
      <div className={styles["course-name"]}>{courseName}</div>
      <div className={styles["institute"]}>{institute}</div>
      <div className={styles["duration"]}>{duration}</div>
    </div>
  ));
}

export default Education;
