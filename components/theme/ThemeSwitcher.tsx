'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { classNames } from '@/utils';

import Moon from '@/components/icons/Moon';
import Sun from '@/components/icons/Sun';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			className={classNames(
				'flex justify-center items-center',
				'h-[42px] w-[42px] py-2.5 px-4',
				'rounded-lg bg-button-primary shadow',
				'text-primary hover:text-hover',
				'transition ease-in-out duration-300'
			)}
		>
			{theme === 'dark' ? (
				<button onClick={() => setTheme('light')}>
					<Sun />
				</button>
			) : (
				<button onClick={() => setTheme('dark')}>
					<Moon />
				</button>
			)}
		</div>
	);
};

export default ThemeSwitcher;
