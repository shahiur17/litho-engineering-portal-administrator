import { Link } from "react-router-dom";
import supervisors from "../data/supervisors";

const SupervisorPreview = () => {
  const topFive = supervisors.slice(0, 5);

  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        👷 Our Supervisors
      </h2>

      <div className="grid md:grid-cols-5 gap-6 px-10">
        {topFive.map((sup) => (
          <div
            key={sup.id}
            className="card bg-white shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <figure className="relative">
              <img
                src={sup.image}
                alt={sup.name}
                className="h-48 w-full object-cover"
              />

              {/* Status Indicator */}
              <span
                className={`absolute top-3 right-3 badge ${
                  sup.status === "online"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                {sup.status}
              </span>
            </figure>

            <div className="card-body text-center">
              <h3 className="font-bold text-lg">{sup.name}</h3>
              <p className="text-sm text-gray-500">{sup.position}</p>
              <p className="text-sm mt-2">{sup.phone}</p>

              {/* Rating */}
              <div className="mt-2 text-yellow-500 font-semibold">
                ⭐ {sup.rating}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/supervisors">
          <button className="btn btn-primary">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default SupervisorPreview;
