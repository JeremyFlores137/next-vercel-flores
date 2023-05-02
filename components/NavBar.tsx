import { ActiveLink } from './ActiveLink';
import Style from './NavBar.module.css';
export const NavBar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <nav className={Style['menu-container']}>
      {menuItems.map((navLink) => (
        <ActiveLink
          key={navLink.href}
          text={navLink.text}
          href={navLink.href}
        />
      ))}
    </nav>
  );
};
