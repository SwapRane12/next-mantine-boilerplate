'use client'


import NextLink from 'next/link'
import {Button, Text, Title} from '@mantine/core'

export default function AppointmentLayout({
	                                          children,
                                          }: {
	children: React.ReactNode
}) {
	return (
		
		<div className=" flex flex-col gap-2">
			<div className="flex flex-col  sm:flex-row justify-between gap-2">
				<Title order={2} className="">Appointments</Title>
				<div className="flex flex-col w-full sm:w-auto sm:flex-row flex-wrap gap-2">
					<NextLink href="/dashboard/patients/new" passHref>
						<Button className="w-full sm:w-auto " component="a" variant="filled" color="green">New
							Appointment</Button>
					</NextLink>
					<Button className="w-full sm:w-auto " variant="filled" color="blue">All Appointments</Button>
				</div>
			
			</div>
			
			{children}
		</div>
	
	
	)
}
