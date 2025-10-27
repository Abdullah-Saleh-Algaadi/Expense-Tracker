//

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded-lg w-48"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-8 bg-gray-400 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
