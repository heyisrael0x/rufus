import { logo1, x } from "../assets";
import { FaTelegram } from "react-icons/fa";
const telegram = "https://t.me/GameKyuubi_Sol";
const twitter = "https://Twitter.com/GameKyuubi_S";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center py-[5px] px-[2%] w-screen mt-[5px] mb-[25px] gap-3 novasquare">
      {/* <div className="flex flex-col items-center justify-center">
        <img src={logo1} alt="Logo" width="80px" />
        <p className="font-semibold ml-[5px]">$LYNDON</p>
      </div> */}
      <div className="flex items-center justify-center gap-1">
        <a href={twitter}>
          <img src={x} alt="Logo" width="50px" height="50px" />
        </a>
        <a href={telegram}>
          <FaTelegram fontSize={29} className="text-white" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
