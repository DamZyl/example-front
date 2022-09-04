import React from 'react';
import { SideNav } from '../side-nav/side-nav';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen">
    <SideNav />
    <div className="grow">
      <div className="m-5">{children}</div>
    </div>
  </div>
);
