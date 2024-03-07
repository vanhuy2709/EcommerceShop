const TimeBlock = ({ time, format }) => {
  return (
    <div className="bg-white px-2 py-5 rounded-md w-24 h-24">
      <p className="text-[#00B207] text-[32px] leading-[39px] mb-1">{time}</p>
      <p className="text-[#618062] uppercase text-[14px] leading-[14px] tracking-[0.42px]">{format}</p>
    </div>
  );
};

export default TimeBlock;