/* eslint-disable react/jsx-props-no-spreading */
import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Projects from '@resume-app/components/Projects';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';

import AchievementsData from '@resume-app/data/utkarsh/Achievements.json';
import ProjectsData from '@resume-app/data/utkarsh/Projects.json';
import CorporateExpData from '@resume-app/data/utkarsh/CorporateExp.json';
import EducationData from '@resume-app/data/utkarsh/Education.json';
import TechStackData from '@resume-app/data/utkarsh/TechStack.json';

function App() {
  const leftSection = [{
    key: 'CorporateExp',
    Component: CorporateExp,
    data: CorporateExpData,
  }, /* {
    key: 'TechStack',
    Component: TechStack,
    data: TechStackData,
  } */];
  const rightSection = [{
    key: 'Achievements',
    Component: Achievements,
    data: AchievementsData,
  }, {
    key: 'Projects',
    Component: Projects,
    data: ProjectsData,
  }, /* {
    key: 'Education',
    Component: Education,
    data: EducationData,
  } */];
  return (
    <div className={styles["App"]}>
      <Head />
      <div className={styles["resume-body"]}>
        <div className={styles["row"]}>
          <div className={styles["left-sections"]}>
            {
              leftSection.map(({key,Component,data}) => <Sections
                key={key}
                Component={Component}
                data={data}
                />
              )
            }
          </div>
          <div className={styles["right-sections"]}>
            {
              rightSection.map(({key,Component,data}) => <Sections
                key={key}
                Component={Component}
                data={data}
                />
              )
            }
          </div>
        </div>
        <div className={styles["row"]}>
          <div className={styles["left-sections"]}>
            <Sections Component={TechStack} data={TechStackData} />
          </div>
          <div className={styles["right-sections"]}>
            <Sections Component={Education} data={EducationData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
