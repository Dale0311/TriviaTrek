function Loading() {
  return (
    <div className="flex justify-center space-y-2 text-gray-700 bg-white h-full rounded-t-3xl p-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"></div>
        <p className="text-lg">Loading please wait</p>
      </div>
    </div>
  );
}

export default Loading;
