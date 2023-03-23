import calendar from '@resume-app/images/calendar.png'
import locationImg from '@resume-app/images/location.png'
import Image from 'next/image';
import Icon from './Icon';

import styles from '@resume-app/styles/dura-loc.module.scss'

interface propType {
  duration: string,
  location: string
}
export default function DuraLoc({ duration, location }: propType) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Icon className={styles.icon} src={calendar} alt="Duration" />
        {duration}
      </div>
      <div className={styles.item}>
        <Icon className={styles.icon} src={locationImg} alt="Location" />
        {location}
      </div>
    </div>
  );
}
