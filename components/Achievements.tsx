import styles from '@resume-app/styles/achievements.module.scss';
import Icon from './Icon';
import star from '@resume-app/images/star.png'

interface propType { list: any }
interface listItem {
  title: string,
  details: string[]
}

function Achievements({ list }: propType) {
  return list.map(({ title, details }: listItem) => (
    <div className={`${styles["list-items"]} ${styles["achivement-row"]}`} key={title}>
      <div className={styles["star-container"]}>
        <Icon className={styles["icon"]} src={star} alt="Achievement" />
      </div>
      <div>
        <div className={styles["title"]}>{title}</div>
        {details.map((item) => <div className={styles["details"]} key={item}>{item}</div>)}
      </div>
    </div>
  ));
}

export default Achievements;
