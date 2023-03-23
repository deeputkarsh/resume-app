import styles from '@resume-app/styles/tech-stack.module.scss';

interface propType { list: any }
interface listItem {
  title: string,
  items: string[],
}

function SubSection({ title, items }: listItem) {
  return (
    <div className={`${styles["list-items"]} ${styles["tech-stack-section"]}`} key={title}>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["tile-container"]}>{items.map((item) => (<div className={styles["tiles"]} key={item}>{item}</div>))}</div>
    </div>
  );
}

function TechStack({ list }:propType) {
  return list.map(SubSection);
}

export default TechStack;
