'use client'

import UserLayout from '../../src/components/layouts/UserLayout'

export default function DashboardLayout({
	                                        children,
                                        }: {
	children: React.ReactNode
}) {
	return (
		<UserLayout>
			{children}
		</UserLayout>
	)
}
