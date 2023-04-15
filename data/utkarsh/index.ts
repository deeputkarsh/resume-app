import PersonalDets from './PersonalDets.json';
import AchievementsData from './Achievements.json';
import ProjectsData from './Projects.json';
import CorporateExpData from './CorporateExp.json';
import CorporateExpWtProjectData from './CorporateExp.json';
import EducationData from './Education.json';
import TechStackData from './TechStack.json';
import CoverLetterData from './cover-letter.json';

interface listItem {
  title: string,
  items: string[],
}
const defaultData = {
  PersonalDets,
  AchievementsData,
  ProjectsData,
  CorporateExpData,
  CorporateExpWtProjectData,
  EducationData,
  TechStackData,
  CoverLetterData
}

export const caData = {
  PersonalDets,
  CorporateExpData,
  EducationData,
  AchievementsData: { ...AchievementsData, list: AchievementsData.list.slice(0,3) },
  TechStackData : {
    ...TechStackData,
    list: TechStackData.list.map(({title, items}:listItem) => {
      const filteredItems = items.filter((item:string)=>![
        'Application Load Balancer',
        // 'JavaScript',
        'Cloudflare',
        'Route53'
      ].includes(item))
      return {title,items:filteredItems}
    })
  }
}

export default defaultData