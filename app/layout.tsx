import type { Metadata } from 'next';

import ThemeProvider from '@/components/theme/ThemeProvider';
import SideBar from '@/components/shared/SideBar';
import TopBar from '@/components/shared/TopBar';

import './globals.css';

export const metadata: Metadata = {
	title: 'Social Media App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<ThemeProvider>
					<main className="relative min-h-[100svh] h-full w-full flex">
						<TopBar />
						<SideBar />

						<section className="flex flex-grow w-full p-4 bg-primary">
							{children}
						</section>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
