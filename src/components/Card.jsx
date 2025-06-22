const card = (props) => {

  return (
    <div className="relative bg-white rounded-[20px] h-[180px] lg:h-[210px]  overflow-hidden">
      {props?.prize?.isPrize ? (
        <div className="text-md md:text-lg lg:text-2xl font-bold text-white absolute max-lg:-right-20 -right-24 top-3 h-10 lg:h-14 content-center bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F]  w-[70%] lg:w-1/2 rotate-45">
          ${props?.prize?.price}
        </div>
      ) : null}
      <div className="flex items-center h-full p-4 ">
        <div className="w-[20%] me-4  lg:w-[30%] flex justify-center">
          <img className="" src="/images/trophy-01.png" alt="" />
        </div>
        <div className="w-[70%] text-base lg:text-lg text-start">
          <div className=" w-fit font-bold bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] bg-clip-text text-transparent">
            {props.title}
          </div>
          <div className="py-4">
            <div> {props.name}</div>
            <div className="text-[#a8a8a8]"> {props.memberId}</div>
          </div>
          <div className="font-bold">
            TOTALGAIN OF <span className="text-[#CD0511]"> {props.total}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default card;
