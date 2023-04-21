import styles from '@resume-app/styles/tech-stack.module.scss';

type ListItem = {
	title: string;
	items: string[];
};

type PropType = {
	list: ListItem[];
};

function SubSection({title, items}: ListItem, index: number) {
	return (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['tech-stack-section']}`} key={title}>
			<div className={styles.title}>{title}</div>
			<div className={styles['tile-container']}>{items.map(item => (<div className={styles.tiles} key={item}>{item}</div>))}</div>
		</div>
	);
}

function TechStack({list}: PropType) {
	return list.map(SubSection);
}

export default TechStack;
