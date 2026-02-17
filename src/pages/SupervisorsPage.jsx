import { useState } from "react";
import supervisors from "../data/supervisors";

const SupervisorsPage = () => {
  const [search, setSearch] = useState("");

  const filtered = supervisors.filter((sup) =>
    sup.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        👷 All Supervisors
      </h2>

      {/* Search */}
      <div className="text-center mb-10">
        <input
          type="text"
          placeholder="Search supervisor..."
          className="input input-bordered w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-10">
        {filtered.map((sup) => (
          <div
            key={sup.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
          >
            <figure className="relative">
              <img
                src={sup.image}
                alt={sup.name}
                className="h-60 w-full object-cover"
              />
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

            <div className="card-body">
              <h3 className="font-bold text-xl">{sup.name}</h3>
              <p className="text-gray-500">{sup.position}</p>
              <p className="mt-3">{sup.about}</p>

              <div className="mt-3 text-yellow-500 font-semibold">
                ⭐ {sup.rating}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={`tel:${sup.phone}`}
                  className="btn btn-success btn-sm"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/${sup.phone.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  💬 Chat
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupervisorsPage;
