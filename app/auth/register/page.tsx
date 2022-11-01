'use client'

import {Anchor, Button, Checkbox, Group, Paper, PasswordInput, Text, TextInput, Title} from '@mantine/core'
import NextLink from 'next/link'

export default function RegisterPage() {
	return (
		<>
			<Title
				align="center"
				sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}
			>
				Register
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Do not have an account yet?{' '}
				<Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
					Create account
				</Anchor>
			</Text>
			
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput label="Email" placeholder="you@mantine.dev" required/>
				<PasswordInput label="Password" placeholder="Your password" required mt="md"/>
				<Group position="apart" mt="md">
					<Checkbox label="Remember me"/>
					<NextLink href="/auth/forgot-password" passHref>
						<Text size="sm">
							Forgot password?
						</Text>
					</NextLink>
				
				</Group>
				<Button fullWidth mt="xl">
					Sign in
				</Button>
			</Paper>
		</>
	)
}