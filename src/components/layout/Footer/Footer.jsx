import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">CryptoTracker</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Real-time cryptocurrency tracking and portfolio management.
            </p>
          </div>

          {/* Internal Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/markets"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-dark-border mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} CryptoTracker. Data provided by CoinGecko API.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
