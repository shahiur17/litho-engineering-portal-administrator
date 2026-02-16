const Banner = () => {
  return (
    <div>
      {/* 🔴 Top Emergency Alert */}
      <div className="bg-red-700 text-white text-center py-3 font-semibold tracking-wide">
        ⚠️ SAFETY FIRST – Zero Accident Policy | PPE Is Mandatory
      </div>

      {/* 🟢 Safety Corporate Section */}
      <div className="py-16 bg-gradient-to-r from-slate-100 to-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Shipyard Safety Guidelines
          </h2>
          <p className="text-gray-600 mt-3">
            Protect Yourself Before You Protect The Ship
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 px-10">
          {/* PPE */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <figure className="relative">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e8c1d5f1f4c"
                alt="PPE"
                className="h-52 w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
                PPE
              </div>
            </figure>
            <div className="card-body text-center">
              <h3 className="font-bold text-lg">Wear PPE</h3>
              <p className="text-gray-600">
                Helmet, gloves & safety boots must be worn at all times.
              </p>
            </div>
          </div>

          {/* Gas Check */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <figure className="relative">
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b1"
                alt="Gas Check"
                className="h-52 w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-sm rounded-full">
                Safety
              </div>
            </figure>
            <div className="card-body text-center">
              <h3 className="font-bold text-lg">Gas Check</h3>
              <p className="text-gray-600">
                Always test gas levels before entering confined spaces.
              </p>
            </div>
          </div>

          {/* Permit */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <figure className="relative">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
                alt="Permit"
                className="h-52 w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-yellow-600 text-white px-3 py-1 text-sm rounded-full">
                PTW
              </div>
            </figure>
            <div className="card-body text-center">
              <h3 className="font-bold text-lg">Permit to Work</h3>
              <p className="text-gray-600">
                Obtain supervisor approval before starting operations.
              </p>
            </div>
          </div>

          {/* Emergency */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <figure className="relative">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                alt="Emergency"
                className="h-52 w-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-sm rounded-full">
                Alert
              </div>
            </figure>
            <div className="card-body text-center">
              <h3 className="font-bold text-lg">Emergency Response</h3>
              <p className="text-gray-600">
                Know exit routes & emergency contact numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
