import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';
import { caData } from '@resume-app/data/utkarsh';

function SinglePageResume(props:any) {
  const {
    PersonalDets,
    AchievementsData,
    CorporateExpData,
    EducationData,
    TechStackData
  } = props.caData

  const leftSection = [{
    key: 'CorporateExp',
    Component: CorporateExp,
    data: CorporateExpData,
  }];
  const rightSection = [{
    key: 'Achievements',
    Component: Achievements,
    data: AchievementsData,
  }, {
    key: 'TechStack',
    Component: TechStack,
    data: TechStackData,
  }, {
    key: 'Education',
    Component: Education,
    data: EducationData,
  }];
  return (
    <div className={styles["App"]}>
      <Head data={PersonalDets} />
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
      </div>
    </div>
  );
}

export default SinglePageResume;

export async function getStaticProps() {
  return {
    props: {caData}, // will be passed to the page component as props
  }
}