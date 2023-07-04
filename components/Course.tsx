import styles from '@resume-app/styles/course.module.scss';


type Grade = {
    subjectName: string;
    score: string;
}

type ListItem = {
	title: string;
	grades: Grade[];
};

type PropType = {
	list: ListItem[];
};

function renderGradeItem({subjectName, score}:Grade){
    return <div className={styles['grade-item']}>
        <div>{subjectName}</div>
        <div>{score}</div>
    </div>
}

function Course({list}: PropType) {
	return <>{list.map(({title, grades = []}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['course-item']}`} key={title}>
			<div className={styles.title}>{title}</div>
			{grades.map(renderGradeItem)}
		</div>
	))}</>;
}

export default Course;
