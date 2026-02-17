import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import MonthlyAward from "../components/MonthlyAward";
import Performance from "../components/Performance";
import PerformanceChart from "../components/PerformanceChart";
import SupervisorPreview from "../components/SupervisorPreview";


const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Banner></Banner>
      <MonthlyAward></MonthlyAward>
      <Performance></Performance>
      <PerformanceChart></PerformanceChart>
      <SupervisorPreview></SupervisorPreview>
      
    </div>
  );
};

export default Home;
