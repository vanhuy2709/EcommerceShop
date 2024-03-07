import { PiMapPin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const ContactInfo = () => {

  return (
    <div className="bg-white px-5 shadow-lg">
      <div className="border-b py-6 flex flex-col items-center">
        <PiMapPin className="text-[#2C742F] w-[51px] h-[51px] mb-4" />
        <p className="text-center text-gray-800 leading-7">2715 Ash Dr. San Jose, South Dakota 83475</p>
      </div>

      <div className="border-b py-6 flex flex-col items-center">
        <AiOutlineMail className="text-[#2C742F] w-[51px] h-[51px] mb-4" />
        <p className="text-center text-gray-800 leading-7">Proxy@gmail.com</p>
        <p className="text-center text-gray-800 leading-7">Help.proxy@gmail.com</p>
      </div>

      <div className="py-6 flex flex-col items-center">
        <BsTelephone className="text-[#2C742F] w-[51px] h-[51px] mb-4" />
        <p className="text-center text-gray-800 leading-7">(219) 555-0114</p>
        <p className="text-center text-gray-800 leading-7">(164) 333-0487</p>
      </div>
    </div>
  );
};

export default ContactInfo;