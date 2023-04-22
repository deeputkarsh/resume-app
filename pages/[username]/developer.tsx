import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';
import {getAllUserPaths} from '@resume-app/utils/helpers';
import {type AvailableUserNames, type UserData} from '@resume-app/data/types';
import axios from 'axios';
import Summary from '@resume-app/components/Summary';
import Projects from '@resume-app/components/Projects';

function DeveloperResume(props: {userData: UserData}) {
	const {
		personalDetails,
		achievementsData,
		projectsData,
		corporateExpDataDev,
		educationData,
		techStackData,
	} = props.userData;
	const leftSection = [{
		key: 'Summary',
		Component: Summary,
		data: {
			title: 'SUMMARY',
			list: [personalDetails.summaryDev],
		},
	}, {
		key: 'CorporateExp',
		Component: CorporateExp,
		data: corporateExpDataDev,
	}, {
		key: 'Projects',
		Component: Projects,
		data: projectsData,
	}];
	const rightSection = [{
		key: 'Achievements',
		Component: Achievements,
		data: achievementsData,
	}, {
		key: 'TechStack',
		Component: TechStack,
		data: techStackData,
	}, {
		key: 'Education',
		Component: Education,
		data: educationData,
	}];
	return (
		<div className={styles.App}>
			<Head data={personalDetails} />
			<div className={styles['resume-body']}>
				<div className={styles.row}>
					<div className={styles['left-sections']}>
						{
							leftSection.map(({key, Component, data}) => <Sections
								key={key}
								Component={Component}
								data={data}
							/>,
							)
						}
					</div>
					<div className={styles['right-sections']}>
						{
							rightSection.map(({key, Component, data}) => key === 'Education' ? <>
								<br key={'ed-0'}/>
								<br key={'ed-1'}/>
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

export default DeveloperResume;

export const getStaticPaths = getAllUserPaths;

export const getStaticProps = async ({params}: {params: {username: AvailableUserNames}}) => {
	const userData = (await axios.get<UserData>(`/api/user/${params.username}`)).data;
	return {
		props: {userData},
	};
};
