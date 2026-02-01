import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;