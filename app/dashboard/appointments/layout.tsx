'use client'


import NextLink from 'next/link'
import {Button, Text, Title} from '@mantine/core'

export default function AppointmentLayout({
	                                          children,
                                          }: {
	children: React.ReactNode
}) {
	return (
		<div>
			<div className=" flex flex-col gap-2">
				<div className="flex flex-col  sm:flex-row justify-between">
					<Title order={2} className="">Patients</Title>
					<div className="flex gap-2">
						<NextLink href="/dashboard/patients/new" passHref>
							<Button component="a" variant="filled" color="green">New Patient</Button>
						</NextLink>
						<Button variant="filled" color="blue">All Patients</Button>
					</div>
				</div>
			
			
			</div>
			
			{children}
		</div>
	
	
	)
}
