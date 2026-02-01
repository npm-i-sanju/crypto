import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/markets', label: 'Markets' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/watchlist', label: 'Watchlist' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `hover:text-primary-600 transition-colors ${
              isActive ? 'text-primary-600 font-semibold' : ''
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;