import { useState } from "react";
import { logo } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const twitter = "https://twitter.com/stockgme";
const telegram = "https://t.me/+C19NMpqAHw9iMmJk";
const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="flex md:flex-row justify-between py-[5px] px-[8%] w-screen mt-[5px] mb-[25px] gap-6 novasquare">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" width="30px" />
        <p className="font-semibold ml-[5px]">STOCK</p>
      </div>
      <div className="md:flex hidden items-center justify-center gap-10">
        
        <a href={"#about"}>About</a>
        <a href={twitter}>Twitter</a>
        <a href={telegram}>Telegram</a>
      </div>
      <a href="https://dexscreener.com/solana/6bnv6mbrnuxct4q5vj1thccbxsst5xcgq5eibyqbbals" className="md:flex hidden">
        <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
        Buy $STOCK

        </button>
      </a>
      {toogleMenu ? (
        <RxCross2
          fontSize={40}
          className="cursor-pointer md:hidden flex z-20"
          onClick={() => setToogleMenu(false)}
        />
      ) : (
        <HiMenuAlt3
          fontSize={40}
          className="cursor-pointer md:hidden z-20"
          onClick={() => setToogleMenu(true)}
        />
      )}
      {toogleMenu && (
        <div
          onClick={() => setToogleMenu(false)}
          className="h-screen w-screen z-10 top-0 right-0 flex absolute"
        >
          <div className="gap-4 z-10 justify-center flex flex-col items-center flex-initial w-[200px] absolute top-12 right-0 rounded-xl glass-effect md:hidden py-5 ">
            <a href={"#about"}>About</a>
            <a href={twitter}>Twitter</a>
            <a href={telegram}>Telegram</a>
            <a href="https://dexscreener.com/solana/6bnv6mbrnuxct4q5vj1thccbxsst5xcgq5eibyqbbals" className="">
              <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
Buy $STOCK
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
