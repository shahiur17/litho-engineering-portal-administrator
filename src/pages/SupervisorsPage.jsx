import supervisors from "../data/supervisors";

const SupervisorsPage = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        👷 All Supervisors
      </h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">
        {supervisors.map((sup) => (
          <div key={sup.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={sup.image} alt={sup.name} className="h-60 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="font-bold text-xl">{sup.name}</h3>
              <p className="text-gray-500">{sup.position}</p>
              <p className="mt-3">{sup.about}</p>

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
