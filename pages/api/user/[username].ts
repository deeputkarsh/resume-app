// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import utkarsh from '@resume-app/data/utkarsh';
import megha from '@resume-app/data/megha';
import {type ListItem, type UserData} from '@resume-app/data/types';

const alluserData = {utkarsh, megha};

type Data = UserData | {
	message: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const {username, caData} = req.query;
	console.log(caData);
	let userData = alluserData[username as keyof typeof alluserData];
	if (caData === 'true') {
		const {achievementsData, techStackData} = userData;
		userData = {
			...userData,
			achievementsData: {...achievementsData, list: achievementsData.list.slice(0, 3)},
			techStackData: {
				...techStackData,
				list: techStackData.list.map(({title, items}: ListItem) => {
					const filteredItems = items.filter((item: string) => ![
						'Application Load Balancer',
						// 'JavaScript',
						'Cloudflare',
						'Route53',
					].includes(item));
					return {title, items: filteredItems};
				}),
			},
		};
	}

	if (userData) {
		res.status(200).json(userData);
	} else {
		res.status(404).json({message: 'User not found'});
	}
}
