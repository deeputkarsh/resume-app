// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Record<string, string>>,
) {
	const {username} = req.query;
	res.status(404).json({message: 'User not found'});
}
