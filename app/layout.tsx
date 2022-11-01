import RootStyleRegistry from './emotion'
import './globals.css'

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<head>
			<title>Next App HomePage</title>
			<meta name="description" content="Generated by create next app"/>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			<link rel="icon" href="/public/favicon.ico"/>
		</head>
		<body>
		
		<RootStyleRegistry>
			{children}
		</RootStyleRegistry>
		
		</body>
		</html>
	)
}
