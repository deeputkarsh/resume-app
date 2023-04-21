import axios from 'axios';
import {type AvailableUserNames} from '@resume-app/data/types';

export const getAllUserPaths = async () => {
	const userNames = (await axios.get<AvailableUserNames[]>('/api/usernames')).data;
	const paths = userNames.map(username => ({params: {username}}));
	return {
		paths,
		fallback: false,
	};
};
