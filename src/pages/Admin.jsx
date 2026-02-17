import { useState } from "react";
import supervisorsData from "../data/supervisors";

const Admin = () => {
  const [supervisors, setSupervisors] = useState(supervisorsData);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const newSup = {
      id: Date.now(),
      name,
      position: "New Supervisor",
      phone: "+65 00000000",
      about: "Newly added supervisor.",
      rating: 4,
      status: "online",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    };

    setSupervisors([...supervisors, newSup]);
    setName("");
  };

  const handleDelete = (id) => {
    setSupervisors(supervisors.filter((sup) => sup.id !== id));
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Supervisor Name"
          className="input input-bordered mr-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-success">
          Add
        </button>
      </div>

      {supervisors.map((sup) => (
        <div key={sup.id} className="flex justify-between border p-3 mb-2">
          <span>{sup.name}</span>
          <button
            onClick={() => handleDelete(sup.id)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
