import Head from '@resume-app/components/Head';
import styles from '@resume-app/styles/cover-letter.module.scss';
function CoverLetter (props:any) {
  const {
    PersonalDets
  } = props
  const headOptions = {
    noTitle: true, noWebsite: true,
    containerClass: styles.header
  }
  const HiringManName = 'Hiring Manager'
  const jobListingName = 'Devops Engineer'
  return (
    <div className={styles.container}>
      <Head data={PersonalDets} options={headOptions} />
      <div className={styles.salutation}>Dear {HiringManName}</div>
      <div className={styles.intro}>As someone who enjoys problem solving and loves a good technical challenge, I found your job listing of {jobListingName} very interesting.</div>
      <div className={styles.body}>With more than 6 years of experience in Software Development as a full-stack developer and as a DevOps Engineer. I have worked on front end technologies like ReactJs, AngularJs, SCSS and backend technologies like nodeJs, express, nestJs and serverless framework. I have recently moved to Canada on an open work permit and I&apos;m looking for a job opportunity as a Software Developer and Devops Engineer. I am passionate about Devops and automation, i love to automate daily tasks as much as possible. i got interested in Devops while I was working as a Backend developer and i could see there was a knowledge gap between the Developers and the Devops as the Devops person will only know about the infrastructure and the developer will only know about the Code and this results in a big gap and a challenge when trying to debug any production issue. </div>
      <div className={styles.conclusion}>As</div>
    </div>
  )
}

export default CoverLetter;
