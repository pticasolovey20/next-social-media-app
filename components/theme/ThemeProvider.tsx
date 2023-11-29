'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as ThemeProviderComponent } from 'next-themes';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return <div className="w-full h-[100svh] flex items-center justify-center">Loading...</div>;

	return (
		<ThemeProviderComponent disableTransitionOnChange={true} attribute="class">
			{children}
		</ThemeProviderComponent>
	);
};

export default ThemeProvider;
