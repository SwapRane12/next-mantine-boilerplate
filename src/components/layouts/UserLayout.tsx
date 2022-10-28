'use client'

import {useState} from 'react'
import {
	AppShell,
	
	Header,
	Footer,
	
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from '@mantine/core'
import UserNavbar from './UserNavbar'
import ColorSwitch from '../ColorSwitch'

type Props = {
	children: React.ReactNode
}

export default function UserLayout({children}: Props) {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[0]
							: theme.black,
					
				},
			}}
			navbarOffsetBreakpoint="sm"
			// asideOffsetBreakpoint="sm"
			navbar={<UserNavbar opened={opened}/>}
			// aside={
			// 	<MediaQuery smallerThan="sm" styles={{ display: "none" }}>
			// 		<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
			// 			<Text>Application sidebar</Text>
			// 		</Aside>
			// 	</MediaQuery>
			// }
			footer={
				<Footer height={40} p="xs">
					Application footer
				</Footer>
			}
			header={
				<Header height={70} p="md" styles={{
					root: {
						color:
							theme.colorScheme === 'dark'
								? theme.colors.dark[0]
								: theme.black,
					}
				}}>
					<div
						style={{display: 'flex', alignItems: 'center', height: '100%'}}
					>
						<MediaQuery largerThan="sm" styles={{display: 'none'}}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						
						<Text
						
						
						>Application header</Text>
					</div>
					<div>
					
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	)
}
