const CryptoCardSkeleton = () => {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-40"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCardSkeleton;