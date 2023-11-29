'use client';

import { usePathname } from 'next/navigation';
import { classNames } from '@/utils';
import { sideBarLinks } from '@/constants';

import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import ThemeSwitcher from '../theme/ThemeSwitcher';

import avatar from '@/assets/avatar.png';

const SideBar = () => {
	const pathname = usePathname();

	return (
		<nav
			className={classNames(
				'hidden md:flex w-[270px]',
				'flex-col justify-between gap-16 px-6 py-10',
				'bg-secondary shadow-black/50 shadow-[0px_0px_5px] z-10'
			)}
		>
			<div className="flex flex-col gap-11">
				<Link href="/" className="flex items-center gap-6">
					<div
						className={classNames(
							'flex items-center justify-center',
							'h-14 w-14 rounded-full overflow-hidden',
							'dark:shadow-neomorphism-dark shadow-neomorphism-light'
						)}
					>
						<Image src={avatar} alt="avatar" className="w-full h-full" priority />
					</div>

					<div className="flex flex-col">
						<p className="text-primary text-[18px] font-bold leading-[140%]">
							S. Dmytro
						</p>
						<p className="text-secondary text-[14px] font-normal leading-[140%]">
							@pticasolovey21
						</p>
					</div>
				</Link>

				<ul className="flex flex-col gap-6 text-light-5 dark:text-dark-4">
					{sideBarLinks.map(({ route, label }) => {
						const isActive = pathname === route;

						return (
							<li
								key={label}
								className={classNames(
									'text-[16px] font-medium leading-[140%]',
									'rounded-lg shadow transition ease-in-out duration-300',
									isActive ? 'bg-button-active' : 'bg-button-primary',
									'text-primary hover:text-hover'
								)}
							>
								<Link href={route} className="flex py-2.5 px-4">
									{label}
								</Link>
							</li>
						);
					})}

					<ThemeSwitcher />
				</ul>
			</div>

			<Button
				className={classNames(
					'flex justify-start py-2.5 px-4',
					'rounded-lg bg-button-primary shadow transition',
					'text-primary hover:text-hover',
					'transition ease-in-out duration-300'
				)}
			>
				<p className="font-medium leading-[140%] text-[14px] lg:text-[16px]">Logout</p>
			</Button>
		</nav>
	);
};

export default SideBar;
