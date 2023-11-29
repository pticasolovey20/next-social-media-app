import { classNames } from '@/utils';

import ThemeSwitcher from '../theme/ThemeSwitcher';

const TopBar = () => {
	return (
		<div
			className={classNames(
				'md:hidden fixed top-5 right-0',
				'flex justify-end py-2.5 pl-4 pr-3',
				'rounded-l-xl bg-secondary'
			)}
		>
			<ThemeSwitcher />
		</div>
	);
};

export default TopBar;
