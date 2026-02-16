const Performance = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          📈 Monthly Performance Overview
        </h2>
        <p className="text-gray-500 mt-2">Safety & Operational Statistics</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 px-10 text-center">
        <div className="card bg-base-100 shadow-lg p-6">
          <h3 className="text-3xl font-bold text-green-600">98%</h3>
          <p className="mt-2 text-gray-600">Safety Compliance</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6">
          <h3 className="text-3xl font-bold text-blue-600">1,240</h3>
          <p className="mt-2 text-gray-600">Duty Hours</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6">
          <h3 className="text-3xl font-bold text-yellow-600">32</h3>
          <p className="mt-2 text-gray-600">Projects Completed</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6">
          <h3 className="text-3xl font-bold text-red-600">0</h3>
          <p className="mt-2 text-gray-600">Accidents Reported</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
