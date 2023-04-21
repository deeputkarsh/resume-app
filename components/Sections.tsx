import styles from '@resume-app/styles/section.module.scss';
import {type SectionData} from '@resume-app/data/types';
import {type ComponentType} from 'react';

type PropType = {
	Component: ComponentType<{list: any[]}>;
	data: SectionData & {list: any[]};
};
function Sections({Component, data}: PropType) {
	const {title, list} = data;
	return (
		<div>
			<div className={styles.header}>{title}</div>
			<Component list={list} />
		</div>
	);
}

export default Sections;
