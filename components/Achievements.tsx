import styles from '@resume-app/styles/achievements.module.scss';
import Icon from './Icon';
import star from '@resume-app/images/star.png';

type ListItem = {
	title: string;
	details: string[];
};
type PropType = {
	list: ListItem[];
};

function Achievements({list}: PropType) {
	return list.map(({title, details}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['achivement-row']}`} key={title}>
			<div className={styles['star-container']}>
				<Icon className={styles.icon} src={star} alt='Achievement' />
			</div>
			<div>
				<div className={styles.title}>{title}</div>
				{details.map(item => <div className={styles.details} key={item}>{item}</div>)}
			</div>
		</div>
	));
}

export default Achievements;
