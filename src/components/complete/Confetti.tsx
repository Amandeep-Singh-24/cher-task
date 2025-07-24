export const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f87171'][Math.floor(Math.random() * 5)],
            }}
          />
        </div>
      ))}
    </div>
  );
};