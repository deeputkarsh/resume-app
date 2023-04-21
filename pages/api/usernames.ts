// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import utkarsh from '@resume-app/data/utkarsh';
import megha from '@resume-app/data/megha';

const alluserData = {utkarsh, megha};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string[]>,
) {
	res.status(200).json(Object.keys(alluserData));
}
