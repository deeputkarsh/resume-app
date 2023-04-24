
import {type UserData} from '@resume-app/types';
import cmsClient from './cms-client';

type IdResult = {
	id: number;
};
type UserResult = IdResult & {
	attributes: {
		urlPath: string;
	};
};
export const getAllUserPaths = async () => {
	const userNames = await cmsClient.graphql(`query {
		resumeUsers {
			data {
				id
				attributes {
					urlPath
				}
			}
		}
	}`).then(({resumeUsers}) => resumeUsers.data as UserResult[]);
	const paths = userNames.map(({attributes: {urlPath}}) => ({params: {username: urlPath}}));
	return {
		paths,
		fallback: false,
	};
};

export const getSpecificUserData = async ({params, preview}: {params: {username: string}; preview: boolean}) => {
	const userId = await getSpecificUserId(params.username);
	const userData = (await cmsClient.get(`${cmsClient.apiList.resumeUsers}/${userId}`, preview)) as UserData;
	return {
		props: {userData},
	};
};

export const getSpecificUserId = async (urlPath: string) => {
	const userNames = await cmsClient.graphql(`query {
		resumeUsers(filters:{urlPath: {eq: "${urlPath}"}}) {
			data {
				id
			}
		}
	}`).then(({resumeUsers}) => resumeUsers.data as IdResult[]);
	const [userId] = userNames.map(({id}) => id);
	return userId;
};
