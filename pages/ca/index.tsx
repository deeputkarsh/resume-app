import styles from '@resume-app/styles/App.module.scss';
import Achievements from '@resume-app/components/Achievements';
import CorporateExp from '@resume-app/components/CorporateExp';
import Head from '@resume-app/components/Head';
import TechStack from '@resume-app/components/TechStack';
import Education from '@resume-app/components/Education';
import Sections from '@resume-app/components/Sections';

function SinglePageResume(props:any) {
  const {
    PersonalDets,
    AchievementsData,
    CorporateExpData,
    EducationData,
    TechStackData
  } = props
  interface listItem {
    title: string,
    items: string[],
  }
  
  TechStackData.list = TechStackData.list.map(({title, items}:listItem) => {
    const filteredItems = items.filter((item)=>![
      'Application Load Balancer',
      // 'JavaScript',
      'Cloudflare',
      'Route53'
    ].includes(item))
    return {title,items:filteredItems}
  })
  const leftSection = [{
    key: 'CorporateExp',
    Component: CorporateExp,
    data: CorporateExpData,
  }];
  const rightSection = [{
    key: 'Achievements',
    Component: Achievements,
    data: {...AchievementsData, list: AchievementsData.list.slice(0,3)},
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
