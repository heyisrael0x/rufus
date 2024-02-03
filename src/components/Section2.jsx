import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiMonkey } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Card = ({ icon, title, subtitle }) => (
  <div className="flex flex-col max-w-xs min-h-[15.625rem] justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-gradient-linear">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section2 = () => {
  return (
    <div className="w-full novasquare my-[20px] ">
      <div className="w-full text-white text-4xl font-bold flex text-center items-center justify-center">
      How to Use Rufus AI
      </div>
      <div className="flex flex-wrap w-screen my-[20px] gap-[26px] novasquare justify-center items-center">
        <Card
          icon={<BsTelegram fontSize={21} className="text-[#ffff]" />}
          title="Through DMs"
          subtitle="Simply interact with Rufus AI through text commands in it dm, and let the AI do the rest. Whether you're on any device, Rufus AI seamlessly integrates into your Amazon shopping experience."
        />
        <Card
          icon={<MdGroups3 fontSize={21} className="text-[#ffff]" />}
          title="In Community Chat"
          subtitle="Rufus AI can be Utilized in the community chat by sending '/Rufus {and your Question}' and let the AI handle the rest. Rufus AI seamlessly blends into your Amazon shopping journey."
        />
        <Card
          icon={<FaGlobeAmericas fontSize={21} className="text-[#ffffff]" />}
          title="Through it Website"
          subtitle="Experience the sheer simplicity of Rufus AI through the web using text command. Rufus AI seamlessly intertwines with your Amazon shopping journey, creating a fluid and intuitive experience."
        />
      </div>
    </div>
  );
};
export default Section2;
