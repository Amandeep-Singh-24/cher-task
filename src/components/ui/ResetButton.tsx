interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This will clear your coins and lesson progress.')) {
      onReset();
    }
  };

  return (
    <button
      onClick={handleReset}
      className="fixed bottom-4 left-4 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg z-50"
      title="Reset all progress"
    >
      Reset Progress
    </button>
  );
};