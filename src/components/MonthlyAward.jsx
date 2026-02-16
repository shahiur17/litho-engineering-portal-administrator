const MonthlyAward = () => {
  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          🏆 Employee of The Month
        </h2>
        <p className="text-gray-500 mt-2">
          Recognizing Excellence & Safety Commitment
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {/* Worker 1 */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Worker"
              className="h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="font-bold text-lg">Md. Rahman</h3>
            <p className="text-gray-500">Welding Supervisor</p>
            <div className="badge badge-success mt-3">0 Accident Record</div>
          </div>
        </div>

        {/* Worker 2 */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Worker"
              className="h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="font-bold text-lg">S. Karim</h3>
            <p className="text-gray-500">Marine Engineer</p>
            <div className="badge badge-primary mt-3">Best Performance</div>
          </div>
        </div>

        {/* Worker 3 */}
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c"
              alt="Worker"
              className="h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body text-center">
            <h3 className="font-bold text-lg">J. Alam</h3>
            <p className="text-gray-500">Safety Officer</p>
            <div className="badge badge-warning mt-3">Safety Champion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyAward;
