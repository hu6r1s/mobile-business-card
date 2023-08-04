import Title from "../assets/images/Title.svg";
import HomeImage from "../assets/images/HomeImage.svg";

const Header = () => {
  return (
    <>
      <img src={Title} alt="메인 타이틀" />
      <br />
      <img src={HomeImage} alt="메인 로고" />
    </>
  );
};

export default Header;