import { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const Performance = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          📊 Monthly Performance Overview
        </h2>
        <p className="text-gray-500 mt-2">
          Operational & Safety Statistics
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 px-10 text-center">

        <div className="card bg-white shadow-xl p-8 hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-bold text-green-600">
            <Counter target={98} />%
          </h3>
          <p className="mt-3 text-gray-600">Safety Compliance</p>
        </div>

        <div className="card bg-white shadow-xl p-8 hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-bold text-blue-600">
            <Counter target={1240} />
          </h3>
          <p className="mt-3 text-gray-600">Duty Hours</p>
        </div>

        <div className="card bg-white shadow-xl p-8 hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-bold text-yellow-600">
            <Counter target={32} />
          </h3>
          <p className="mt-3 text-gray-600">Projects Completed</p>
        </div>

        <div className="card bg-white shadow-xl p-8 hover:scale-105 transition duration-300">
          <h3 className="text-4xl font-bold text-red-600">
            <Counter target={0} />
          </h3>
          <p className="mt-3 text-gray-600">Accidents Reported</p>
        </div>

      </div>
    </div>
  );
};

export default Performance;
