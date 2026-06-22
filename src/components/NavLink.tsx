'use client';

import { Link, usePathname } from '../i18n/navigation';

import { type UrlObject } from "url";

const NavLink = ({ href, children }: { href: string | UrlObject, children: React.ReactNode }) => {
  const pathname = usePathname();

  const targetPathname = typeof href === 'object' ? href.pathname : href;
  const isActive = pathname === targetPathname;

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'text-guidepost-green font-semibold' : 'text-stardust hover:text-guidepost-green transition-colors'
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
