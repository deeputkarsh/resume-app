import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';
import axios from 'axios';
import {type AvailableUserNames, type UserData} from '@resume-app/data/types';
import {getAllUserPaths} from '@resume-app/utils/helpers';

function SinglePageResume(props: {userData: UserData}) {
	const {
		personalDetails,
		achievementsData,
		corporateExpData,
		educationData,
		techStackData,
	} = props.userData;

	const leftSection = [{
		key: 'CorporateExp',
		Component: CorporateExp,
		data: corporateExpData,
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
							rightSection.map(({key, Component, data}) => <Sections
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

export default SinglePageResume;

export const getStaticPaths = getAllUserPaths;

export const getStaticProps = async ({params}: {params: {username: AvailableUserNames}}) => {
	const userData = (await axios.get<UserData>(`/api/user/${params.username}?caData=true`)).data;
	return {
		props: {userData},
	};
};
