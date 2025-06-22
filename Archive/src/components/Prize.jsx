const prize = (props) => {
  return (
    <div className="bg-[#f4f4f4] rounded-[20px] flex flex-col items-center justify-center w-[250px] sm:w-[200px] lg:w-full h-[230px] lg:h-[350px]">
      <div>
        <img
          className="w-[60px] lg:w-auto mb-4 lg:mb-8"
          src={props.image}
          alt=""
        />
      </div>
      <div className="text-2xl lg:text-[50px] mb-4 lg:mb-8 font-bold">
        $ {props.prize}
      </div>
      <div className="text-base md:text-xl h-unset sm:h-[4rem] flex items-start lg:items-center px-4 lg:px-10">
        {props.name}
      </div>
    </div>
  );
};
export default prize;
