const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="font-saira text-sm tracking-wide text-gray-700">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoading;
