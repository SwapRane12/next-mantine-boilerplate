'use client'

import {CacheProvider} from '@emotion/react'
import {useEmotionCache, ColorSchemeProvider, MantineProvider, ColorScheme} from '@mantine/core'
import {useServerInsertedHTML} from 'next/navigation'
import {useState} from 'react'

export default function RootStyleRegistry({children}: { children: React.ReactNode }) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
	const cache = useEmotionCache()
	cache.compat = true
	
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
	
	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' '),
			}}
		/>
	))
	
	return (
		<CacheProvider value={cache}>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme}}>
					{children}
				</MantineProvider>
			</ColorSchemeProvider>
		</CacheProvider>
	)
}