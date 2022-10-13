import {Navbar, ScrollArea, createStyles} from '@mantine/core'
import {
	IconNotes,
	IconCalendarStats,
	IconGauge,
	IconPresentationAnalytics,
	IconFileAnalytics,
	IconAdjustments,
	IconLock,
} from '@tabler/icons'
import UserButton from '../UserButton'
import LinksGroup from '../NavbarLinksGroup'
import Logo from '../Logo'
import ColorSwitch from '../ColorSwitch'

const mockdata = [
	{label: 'Dashboard', icon: IconGauge},
	{
		label: 'Appointments',
		icon: IconNotes,
		initiallyOpened: true,
		links: [
			{label: 'Upcoming Appointments', link: '/dashboard/appointments'},
			{label: 'New Appointment', link: '/dashboard/appointments/new'},
		],
	},
	{
		label: 'Patients',
		icon: IconLock,
		links: [
			{label: 'Patient List', link: '/dashboard/patients/'},
		],
	},
	{
		label: 'Visits',
		icon: IconLock,
		links: [
			{label: 'Visits List', link: '/dashboard/visits/'},
			// {label: 'New Visit', link: '/dashboard/patients/new'},
		
		],
	},
	
	{
		label: 'Register',
		icon: IconCalendarStats,
	},
	{label: 'E-Wallet', icon: IconPresentationAnalytics},
	{label: 'Payout', icon: IconFileAnalytics},
	{label: 'E-Pin', icon: IconAdjustments},

]

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},
	
	links: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
	},
	
	linksInner: {
		paddingTop: theme.spacing.sm,
		paddingBottom: theme.spacing.sm,
	},
	
	footer: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}))

type Props = {
	opened: boolean
}

export default function UserNavbar({opened}: Props) {
	const {classes} = useStyles()
	const links = mockdata.map((item) => (
		<LinksGroup {...item} key={item.label}/>
	))
	
	return (
		<Navbar
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{sm: 300}}
			px="md"
			className={classes.navbar}
		>
			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>
			<ColorSwitch/>
			<Navbar.Section className={classes.footer}>
				<UserButton
					image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
					name="Ann Nullpointer"
					email="anullpointer@yahoo.com"
				/>
			</Navbar.Section>
		</Navbar>
	)
}
