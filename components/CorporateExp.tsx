import styles from '@resume-app/styles/experience.module.scss';
import DuraLoc from './DuraLoc';

type ListItem = {
	details: {
		designation: string;
		companyName: string;
		duration: string;
		location: string;
		companyOverview: string;
	};
	responsiblities: string[];
};
type PropType = {
	list: ListItem[];
};

function ExpItem({details, responsiblities}: ListItem, index: number) {
	const {
		designation,
		companyName,
		duration,
		location,
		companyOverview,
	} = details;
	return (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['exp-item']}`} key={companyName}>
			<div className={styles.details}>
				<div className={styles.designation}>{designation}</div>
				<div className={styles['company-name']}>{companyName}</div>
				<DuraLoc duration={duration} location={location} />
			</div>
			<div className={styles['company-desc']}>{companyOverview}</div>
			<ul>
				{responsiblities.map(item => (<li key={item}>{item}</li>))}
			</ul>
		</div>
	);
}

function CorporateExp({list}: PropType) {
	return <>{list.map(ExpItem)}</>;
}

export default CorporateExp;
