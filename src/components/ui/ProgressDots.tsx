interface ProgressDotsProps {
  total: number;
  current: number;
  completed: boolean[];
}

export const ProgressDots = ({ total, current, completed }: ProgressDotsProps) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current
              ? 'bg-gradient-to-r from-red-500 to-red-600 scale-125'
              : completed[index]
              ? 'bg-green-500'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};