import styles from '@resume-app/styles/head.module.scss';
import Icon from './Icon';

import call from '@resume-app/images/call.png'
import mail from '@resume-app/images/mail.png'
import linkBlue from '@resume-app/images/link-blue.png'
import locationBlue from '@resume-app/images/location-blue.png'


function Head() {
  return (
    <header className={styles["header"]}>
      <div className={styles["name"]}>UTKARSH DEEP</div>
      <div className={styles["title"]}>DevOps Lead</div>
      <div className={styles["contact-section"]}>
        <div className={styles["phone"]}>
          <Icon className={styles["icon"]} src={call} alt="Call" />
          {' '}
          <a href="tel:+16729712711">+1 672-971-2711</a>

        </div>
        <div className={styles["email"]}>
          <Icon className={styles["icon"]} src={mail} alt="E-mail" />
          {' '}
          <a href="mailto:utkarshdeep@outlook.com">utkarshdeep@outlook.com</a>
        </div>
        <div className={styles["website"]}>
          <Icon className={styles["icon"]} src={linkBlue} alt="Link" />
          {' '}
          <a href="https://github.com/deeputkarsh">https://github.com/deeputkarsh</a>
        </div>
        <div className={styles["location"]}>
          <Icon className={styles["icon"]} src={locationBlue} alt="Location" />
          {' '}
          Vancouver, BC
        </div>
      </div>
    </header>
  );
}

export default Head;
