import personalDetails from './PersonalDets.json';
import achievementsData from './Achievements.json';
import projectsData from './Projects.json';
import corporateExpData from './CorporateExp.json';
import corporateExpDataDev from './CorporateExpDev.json';
import corporateExpWtProjectData from './CorporateExp.json';
import educationData from './Education.json';
import techStackData from './TechStack.json';
import coverLetterData from './cover-letter.json';
import {type ListItem, type UserData} from '../types';

const defaultData: UserData = {
	personalDetails,
	achievementsData,
	projectsData,
	corporateExpData,
	corporateExpWtProjectData,
	educationData,
	techStackData,
	coverLetterData,
};

export const caData = {
	personalDetails,
	corporateExpData,
	corporateExpDataDev,
	educationData,
	achievementsData: {...achievementsData, list: achievementsData.list.slice(0, 3)},
	techStackData: {
		...techStackData,
		list: techStackData.list.map(({title, items}: ListItem) => {
			const filteredItems = items.filter((item: string) => ![
				'Application Load Balancer',
				// 'JavaScript',
				'Cloudflare',
				'Route53',
			].includes(item));
			return {title, items: filteredItems};
		}),
	},
};

export default defaultData;
