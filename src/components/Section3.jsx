import { pepe1, logo1 } from "../assets";
import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiMonkey } from "react-icons/gi";

const Card = ({ icon, title, subtitle, bg }) => (
  <div className="flex flex-col min-h-[15.625rem] w-full justify-start p- cursor-pointer white-glassmorphism hover:shadow-xl">
    <div
      className={`w-full ${bg} h-60 rounded-[16px] flex items-center justify-center bg-[#fff]`}
    >
      {icon}
    </div>
    <div className="flex md:max-w-xs flex-col flex-1 m-4">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section3 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen my-10 sm:px-32 px-5 novasquare">
        <div className="w-full novasquare flex justify-center md:p-[30px] white-glassmorphism">
          <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
            <div className="flex flex-col gap-5 sm:items-center items-center">
              <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
                <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
                  $STOCK
                </div>
              </h1>

              {/* <p className="sm:text-2xl sm:text-center text-center text-lg font-medium text-[#ebebf5ad]">
                Are you ready to take your crypto journey to the next level?
                Look no further than Tate Fork ($TORK) – where innovation meets
                attitude, and Andrew Tate wields a fork like a true Top G!
              </p> */}
              <div className="flex gap-5 justify-center items-center md:flex-row flex-col">
                <Card
                  icon={<MdGroups3 fontSize={21} className="text-[#000]" />}
                  title="Smart Shopping"
                  subtitle="Ask Rufus AI anything about shopping, and watch as it delivers precise and relevant information. From product specifications to reviews and comparisons, Rufus AI is your go-to source for all Amazon."
                  bg="bg1"
                />
                {/* <Card
                  icon={<MdGroups3 fontSize={21} className="text-[#000]" />}
                  title="Real-Time Updates"
                  subtitle="Rufus AI is constantly updated with the latest information from Amazon, ensuring that you receive real-time updates on product availability, prices, and promotions. Never miss out on a great deal again!"
                  bg="bg2"
                /> */}
              </div>
              {/* <div className="flex gap-4">
                <a href="https://Twitter.com/Tate_Fork">
                  <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                    Twitter(X)
                  </button>
                </a>
                <a href="https://t.me/TateFork_ERC">
                  <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                    Telegram
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section3;
