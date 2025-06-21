const element = (props) => {
  return (
    <>
      <img className="w-[60px] lg:w-auto mb-3" src={props.image} alt="" />
      <div>{props.detail}</div>
    </>
  );
};
export default element;
