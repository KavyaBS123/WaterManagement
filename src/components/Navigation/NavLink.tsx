import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
    >
      {label}
    </a>
  );
};

export default NavLink;