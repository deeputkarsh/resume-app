import Head from '@resume-app/components/Head';
import styles from '@resume-app/styles/cover-letter.module.scss';
function CoverLetter (props:any) {
  const {
    PersonalDets,
    CoverLetterData
  } = props
  
  const { HiringManName, jobListingName } = CoverLetterData

  return (
    <div className={styles.container}>
      <div className={styles.salutation}>Dear {HiringManName},</div>
      <div className={styles.intro}>I am writing to express my interest in the {jobListingName} role currently available at your company. Having recently moved to Canada from India on an open work permit, I am looking for a job to build on my experience in the software industry of more than six years. I am confident that I have the skills and expertise required to excel in any development or devops position.</div>
      <div className={styles.body}>In my current role as a DevOps Lead, I have led the digital transformation of my current organization. When I joined the organization we had 3 EC2 instances and there was no CI-CD setup, deployments were manually done on the instances. Now we have more than 250 CodePipelines with over 100 executions daily, we have almost 650 lambda functions created using serverless framework used for REST APIs, 30 plus docker containers running on ECS Fargate with near zero downtime and deployments using Codedeploy blue-green deployments. We use AWS CDK with typescript to manage all of our infrastructure as code, from codepipelines to VPC. When we expanded to the UAE, we had to set up all of our infrastructure in the UAE region for data residency and GDPR compliance. I have led teams of developers and engineers, and helped set up best practices.</div>
      {/* <div className={styles.body}>In my current role as a DevOps Lead, I have been responsible for the design, implementation, and maintenance of a complex cloud-based infrastructure in AWS. I have led teams of developers and engineers, and have a proven track record of delivering high-quality products on time and within budget.</div> */}
      <div className={styles.body}>My experience has given me a deep understanding of the software development life cycle, and I am a cloud evangelist well-versed in a variety of DevOps tools and technologies and their best practices. I love automation and I have helped automate and scale my current organization, from 2-3 builds daily and a production release every other week to more than 100 builds daily and multiple production releases in a day. I have focused on mastering AWS cloud for cloud native applications and have worked with various AWS services like S3, SQS, EC2, ELB, Codepipeline, Codebuild, ECS, Lambda, Cloudfront, Cloudwatch, EventBridge, Opensearch and IAC services like Cloudformation and AWS CDK with typescript.</div>
      <div className={styles.body}>As a {jobListingName}, I am excited about the prospect of using the knowledge that I have acquired and further upgrading my knowledge and collaborating with other departments to deliver the best possible results. I have excellent communication skills and am adept at working with cross-functional teams. I am also comfortable presenting to senior management and am skilled in providing technical leadership to my team.</div>
      {/* <div className={styles.body}>With more than 6 years of experience in Software Development as a full-stack developer and as a DevOps Engineer. I have worked on front end technologies like ReactJs, AngularJs, SCSS and backend technologies like nodeJs, express, nestJs and serverless framework. I have recently moved to Canada on an open work permit and I&apos;m looking for a job opportunity as a Software Developer and Devops Engineer. I am passionate about Devops and automation, i love to automate daily tasks as much as possible. i got interested in Devops while I was working as a Backend developer and i could see there was a knowledge gap between the Developers and the Devops as the Devops person will only know about the infrastructure and the developer will only know about the Code and this results in a big gap and a challenge when trying to debug any production issue. </div> */}
      <div className={styles.conclusion}>I am confident that my experience and skills make me a strong candidate for this role, and I am excited about the opportunity to contribute to your company&apos;s success. Thank you for your consideration, and I look forward to hearing from you soon.</div>
      <div className={styles.regards}>Sincerely,<br/>Utkarsh Deep</div>
    </div>
  )
}

export default CoverLetter;
