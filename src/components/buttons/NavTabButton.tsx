import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils/ui-utils';

type Props = PropsWithChildren<{
  isActive: boolean;
  onClick: () => void;
}>;

export const NavTabButton = ({ isActive, onClick, children }: Props) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-full transition-colors duration-150 text-sm lg:text-base',
        {
          'bg-primary text-white': isActive,
          'text-gray-500 hover:bg-gray-100': !isActive,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
