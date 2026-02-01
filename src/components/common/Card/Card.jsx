const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`card p-6 ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;