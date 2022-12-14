import '../styles/globals.css'
import {useState} from 'react'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core'


export default function App(props: AppProps) {
	const {Component, pageProps} = props
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
	
	return (
		<>
			<Head>
				<title>Page title</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			</Head>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					
					
					theme={{colorScheme}}
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	)
}