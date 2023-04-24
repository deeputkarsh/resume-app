import personalDetails from './PersonalDets.json';
import achievementsData from './Achievements.json';
import projectsData from './Projects.json';
import corporateExpData from './CorporateExp.json';
import corporateExpDataDev from './CorporateExpDev.json';
import corporateExpWtProjectData from './CorporateExp.json';
import educationData from './Education.json';
import techStackData from './TechStack.json';
import coverLetterData from './cover-letter.json';
import {type UserData} from '../types';

const defaultData: UserData = {
	personalDetails,
	achievementsData,
	projectsData,
	corporateExpData,
	corporateExpDataDev,
	corporateExpWtProjectData,
	educationData,
	techStackData,
	coverLetterData,
};

export default defaultData;
