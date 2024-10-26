'use client';

import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

import { cn, PropsWithClassName } from '@/lib/utils/ui-utils';
import { buttonVariants } from '../ui/button';

export const PublicAuthButtons = ({ className }: PropsWithClassName) => {
  return (
    <div className={cn('inline-flex items-center gap-x-3', className)}>
      <LoginLink className={cn(buttonVariants({ variant: 'secondary' }))}>
        Sign In
      </LoginLink>

      <RegisterLink
        className={cn(
          buttonVariants({ variant: 'default' }),
          'ring-1 ring-white',
        )}
      >
        Sign Up
      </RegisterLink>
    </div>
  );
};
