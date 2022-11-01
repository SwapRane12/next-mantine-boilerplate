'use client'

import {
	
	Container,
	
} from '@mantine/core'

export default function AuthLayouts({
	                                    children,
                                    }: {
	children: React.ReactNode
}) {
	return (
		<Container size={420} my={40}>
			{children}
		</Container>
	)
}