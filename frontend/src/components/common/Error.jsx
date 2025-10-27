//

export default function Error({ error }) {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="text-red-600">Error: {error}</div>
      </div>
    </div>
  );
}
