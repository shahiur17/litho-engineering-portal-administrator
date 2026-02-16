import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import MonthlyAward from "../components/MonthlyAward";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Banner></Banner>
      <MonthlyAward></MonthlyAward>
    </div>
  );
};

export default Home;
