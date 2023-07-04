import styles from '@resume-app/styles/language.module.scss';


type Rating = 0|1|2|3|4|5

type ListItem = {
	title: string;
	subtitle: string;
	rating: Rating;
};

type PropType = {
	list: ListItem[];
};

function renderRating(rating:Rating){
    return <div className={styles['rating-container']}>
        {[1,2,3,4,5].map((circleNum) => <div key={circleNum} className={`${styles['rating-circle']} ${circleNum<=rating ? styles.blue: ''}`} />)}
    </div>
}

function Language({list}: PropType) {
	return <>{list.map(({title, subtitle, rating}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['course-item']}`} key={title}>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
			{renderRating(rating)}
		</div>
	))}</>;
}

export default Language;
