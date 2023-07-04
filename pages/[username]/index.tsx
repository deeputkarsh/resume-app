import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Projects from '@resume-app/components/Projects';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';
import Summary from '@resume-app/components/Summary';
import Course from '@resume-app/components/Course';
import Language from '@resume-app/components/Language';
import {type UserData} from '@resume-app/types';
import {getAllUserPaths, getSpecificUserData} from '@resume-app/utils/helpers';

function App(props: {userData: UserData}) {
	const {
		personalDetails,
		achievementsData,
		projectsData,
		corporateExpData,
		educationData,
		techStackData,
		courseData,
		languageData
	} = props.userData;

	const leftSection = [{
		key: 'Summary',
		Component: Summary,
		data: {
			title: 'SUMMARY',
			list: [personalDetails.summary],
		},
	}, {
		key: 'CorporateExp',
		Component: CorporateExp,
		data: corporateExpData,
	}, {
		key: 'Projects',
		Component: Projects,
		data: projectsData,
	}, {
		key: 'Achievements',
		Component: Achievements,
		data: achievementsData,
	}, ];
	const rightSection = [{
		key: 'TechStack',
		Component: TechStack,
		data: techStackData,
	}, {
		key: 'Course',
		Component: Course,
		data: courseData
	}, {
		key: 'Education',
		Component: Education,
		data: educationData,
	}, {
		key: 'Language',
		Component: Language,
		data: languageData
	}];
	return (
		<div className={styles.App}>
			<Head data={personalDetails} />
			<div className={styles['resume-body']}>
				<div className={styles.row}>
					<div className={styles['left-sections']}>
						{
							leftSection.filter(({data}) => Boolean(data))
							.map(({key, Component, data}) => <Sections
								key={key}
								Component={Component}
								data={data}
							/>,
							)
						}
					</div>
					<div className={styles['right-sections']}>
						{
							rightSection.filter(({data}) => Boolean(data))
							.map(({key, Component, data}) => key === 'Language' ? <>
								<br key={'ed-0'}/><br key={'ed-1'}/>
								<br key={'ed-2'}/><br key={'ed-3'}/>
								<br key={'ed-4'}/><br key={'ed-5'}/>
								<Sections
									key={key}
									Component={Component}
									data={data}
								/>
							</> : <Sections
								key={key}
								Component={Component}
								data={data}
							/>,
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

export const getStaticPaths = getAllUserPaths;

export const getStaticProps = getSpecificUserData;
