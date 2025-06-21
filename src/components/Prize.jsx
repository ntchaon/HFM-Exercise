const prize = (props) => {
  return (
    <div className="bg-[#f4f4f4] rounded-[20px] flex flex-col items-center justify-center w-[250px]  lg:w-full h-[250px] lg:h-[350px]">
      <div>
        
        <img className="w-[60px] lg:w-auto mb-3" src={props.image} alt="" />
      </div>
      <div className="text-2xl lg:text-[50px]mb-4 lg:mb-8 font-bold">
        $ {props.prize}
      </div>
      <div className="text-base md:text-xl text-start h-unset md:h-[4rem] flex items-start md:items-center">
        {props.name}
      </div>
    </div>
  );
};
export default prize;
