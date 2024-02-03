import { logo, pepe1 } from "../assets";

const Section4 = () => {
  return (
    <div className="w-full novasquare flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-cebter items-center">
          <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
            Get Started <br />
            with{" "}
            <i className="bg-gradient-linear bg-clip-text text-transparent">
              Rufus AI
            </i>
          </h1>
          <p className="sm:text-2xl sm:text-center text-center text-lg font-medium max-w-[500px] text-[#EBEBF599]">
            Join the ranks of savvy shoppers who have embraced the future of
            online shopping with Rufus AI.
          </p>
          <div className="flex gap-4">
                <a href="https://twitter.com/RufusAiETH">
                  <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                    Twitter(X)
                  </button>
                </a>
                <a href="https://t.me/RufusAi_ERC">
                  <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                    Telegram
                  </button>
                </a>
              </div>
          </div>
        <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
          <img src={logo} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Section4;
