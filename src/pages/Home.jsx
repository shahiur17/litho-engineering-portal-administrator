import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import MonthlyAward from "../components/MonthlyAward";
import Performance from "../components/Performance";
import PerformanceChart from "../components/PerformanceChart";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Banner></Banner>
      <MonthlyAward></MonthlyAward>
      <Performance></Performance>
      <PerformanceChart></PerformanceChart>
      
    </div>
  );
};

export default Home;
