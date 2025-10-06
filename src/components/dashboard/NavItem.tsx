import Link from 'next/link';
import React from 'react';
import { IconBaseProps } from 'react-icons';

interface NavItemProps {
  text: string;
  icon?: React.ReactElement<IconBaseProps>;
  href?: string;
}

export function NavItem({ text, icon, href = '#' }: NavItemProps) {
  return (
    <li className="hover:bg-primary-medium/25 p-2 rounded-lg w-full">
      <Link
        href={href}
        className="text-black font-bold flex items-center gap-2"
      >
        {icon &&
          React.cloneElement(icon, {
            className: `inline text-primary-dark  ${icon.props.className || ''}`,
            size: 20,
          })}
        {text}
      </Link>
    </li>
  );
}
