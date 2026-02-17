import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", Projects: 6 },
  { name: "Week 2", Projects: 8 },
  { name: "Week 3", Projects: 7 },
  { name: "Week 4", Projects: 11 },
];

const PerformanceChart = () => {
  return (
    <div className="py-15 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          📈 Project Completion Chart
        </h2>
        <p className="text-gray-500 mt-2">
          Weekly Performance Overview
        </p>
      </div>

      <div className="w-11/12 mx-auto h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Projects" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
