import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme} from "../../../store/slice/themeSlice.js";
import Navigation from "./Navigation.jsx";



const Header = ()=>{

const dispatch = useDispatch();
const {mode} = useSelector((state) => state.theme);

    return (
<header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gradient">CryptoTracker</span>
          </Link>

          <Navigation />

          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </header>
    );
}

export default Header;
