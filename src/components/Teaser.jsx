import Burger from "../assets/icon/burger.png";
import Pizza from "../assets/icon/pizza.png";
import Spoon from "../assets/icon/spoon.png";
const Teaser = () => {
  return (
    <div className=" w-full justify-between items-center flex px-[25vw] min-h-44 ">
      <div className=" flex flex-col text-center items-center gap-3 font-medium h-full">
        <img src={Burger} alt="burger" className=" h-[50%]" />
        <p>Item Makanan</p>
        <p>6</p>
      </div>
      <div className=" flex flex-col text-center items-center gap-3 font-medium h-full">
        <img src={Spoon} alt="burger" className=" h-[50%]" />
        <p>Tahun Berpengalaman</p>
        <p>5+</p>
      </div>
      <div className=" flex flex-col text-center items-center gap-3 font-medium h-full ">
        <img src={Pizza} alt="burger" className=" h-[50%]" />
        <p>Pelanggan</p>
        <p>220</p>
      </div>
    </div>
  );
};

export default Teaser;
