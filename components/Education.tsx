import styles from '@resume-app/styles/education.module.scss';
import {type CmsStringList} from '@resume-app/types';

type ListItem = {
	courseName: string;
	institute: string;
	duration: string;
	details: CmsStringList[];
};

type PropType = {
	list: ListItem[];
};

function Education({list}: PropType) {
	return <>{list.map(({courseName, institute, duration, details = []}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['edu-item']}`} key={courseName}>
			<div className={styles['course-name']}>{courseName}</div>
			<div className={styles.institute}>{institute}</div>
			<div className={styles.duration}>{duration}</div>
			<ul>
				{details.map(({id, value}) => (<li key={id}>{value}</li>))}
			</ul>
		</div>
	))}</>;
}

export default Education;
