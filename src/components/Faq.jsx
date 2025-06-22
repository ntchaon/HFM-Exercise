import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const faq = ({ index, isOpen, onToggle, question, answer }) => {
//   console.log(props.isOpen);
  return (
    <div className="w-full border-b-[1px] border-[#E4E4E4]">
      <div
        onClick={() => onToggle(index)}
        className="w-full text-base lg:text-xl flex justify-between py-3 px-0 lg:px-10 "
      >
        <div className="font-bold">{question}</div>
        <div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-auto" : "max-h-0"
        }`}
      >
        <div className="py-3 px-0 lg:px-10 text-start mt-0 lg:mt-2">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
export default faq;
