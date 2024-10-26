import { PropsWithChildren } from 'react';

import { NavBar } from '@/components/layout/Navbar';

export const dynamic = 'force-dynamic';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />

      <main className="h-[calc(100vh-68px)]">{children}</main>
    </>
  );
};

export default AuthLayout;
