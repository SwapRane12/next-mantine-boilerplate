// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {createRouter, expressWrapper} from 'next-connect'
import cors from 'cors'


const router = createRouter<NextApiRequest, NextApiResponse>()


router.use(expressWrapper(cors()))
	
	.post(async (req, res) => {
		
		res.json({user: 'demouser'})
		console.log('login success')
	})


export default router.handler({
	onError: (err, req, res) => {
		console.error(err.stack)
		res.status(500).end('Something broke!')
	},
	onNoMatch: (req, res) => {
		res.status(404).end('Page is not found')
	},
})