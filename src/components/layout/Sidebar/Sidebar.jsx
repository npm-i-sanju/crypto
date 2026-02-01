import { NavLink } from 'react-router-dom';
import { FiHome, FiTrendingUp, FiBriefcase, FiStar } from 'react-icons/fi';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/markets', label: 'Markets', icon: FiTrendingUp },
    { path: '/portfolio', label: 'Portfolio', icon: FiBriefcase },
    { path: '/watchlist', label: 'Watchlist', icon: FiStar },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border h-screen sticky top-16">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;