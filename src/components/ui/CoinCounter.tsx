interface CoinCounterProps {
  coins: number;
}

export const CoinCounter = ({ coins }: CoinCounterProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 cursor-pointer">
      <div className="relative">
        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">₿</span>
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
      </div>
      <span className="font-medium text-black text-base">{coins}</span>
      <span className="text-gray-600 text-sm">coins</span>
    </div>
  );
};