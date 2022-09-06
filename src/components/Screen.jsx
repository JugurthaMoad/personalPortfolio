import Deco2 from "./Deco2";
import Header from "./Header";
import Info from "./Info";
const Screen = () => {
  return (
    <div className="screen">
      <div className="container">
        <Deco2 className="deco1" />
        <Header />
        <Info />
        <Deco2 className="deco2" />
      </div>
    </div>
  );
};

export default Screen;
