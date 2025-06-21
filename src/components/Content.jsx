import React, { useState } from "react";
import Element from "./Element";
import Card from "./Card";
import Prize from "./Prize";
//import Faq from "./Faq";
import { ElementData, PrizeData, InfoData, RankData } from "../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
const Content = () => {
  const [info, setInfo] = useState(InfoData);
  //const [prize, setprize] = useState(PrizeData);
  const [rank, setRank] = useState(RankData);
  const [prize, setPrize] = useState(PrizeData);
  const [element, setElement] = useState(ElementData);
  // form
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    country: "",
    code: "",
    telephone: "",
    experience: "",
    email: "",
    is_consent: false,
  });
  const handleChange = (event) => {
    let { value, name } = event.target;
    setForm({ ...form, [name]: value });
    console.log(value, name);
  };
  const onSubmit = (value) => {
    console.log(value);
    console.log(form);
    // e.preventDefault();

    emailjs
      .send("service_qrffngu", "template_w2ir9hd", form, {
        publicKey: "8mxb5Z6SqR54-RxEu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log(error);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main className="text-sm md:text-base">
      {/* ----- Form ----- */}
      <div className="bg-[#000000] p-4 lg:pt-16 lg:pb-12">
        <div className="container mx-auto">
          <div>
            <div className="text-center py-10 md:pb-12">
              <div className="text-4xl md:text-[70px] font-bold font-sofia leading-none bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] bg-clip-text text-transparent">
                LOREM IPSUM DOLOR
              </div>
              <div className="text-4xl md:text-[70px] font-bold font-sofia leading-none text-white">
                SIT AMET TOSIK
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white w-full md:w-[760px] p-4 md:p-9 rounded-[10px]">
                <div className="text-lg md:text-2xl font-bold">
                  Lorem ipsum dolor sit amet
                </div>
                <form action={onSubmit}>
                  <div className="flex flex-col md:flex-row gap-4 my-4">
                    <div className="w-full md:w-1/2">
                      <input
                        className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full md:w-1/2">
                      <input
                        className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 my-4">
                    <div className="w-full md:w-1/2">
                      <select
                        className="w-full text-[#999999] p-[10px] border-[1px] border-[#999999] rounded"
                        name="country"
                        onChange={handleChange}
                        value={form.country}
                      >
                        <option value="" disabled selected>
                          Country
                        </option>
                        <option value="1">Thailand</option>
                        <option value="2">USA</option>
                        <option value="3">China</option>
                        <option value="4">India</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="flex flex-col md:flex-row gap-4 ">
                        <div className="w-full md:w-[30%]">
                          <input
                            className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                            type="number"
                            name="code"
                            onChange={handleChange}
                            placeholder="Code"
                          />
                        </div>
                        <div className="w-full md:w-[70%]">
                          <input
                            className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                            type="tel"
                            name="telephone"
                            onChange={handleChange}
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <input
                        className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <select
                        className="w-full p-[10px] text-[#999999] border-[1px] border-[#999999] rounded"
                        name="experience"
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          Experience
                        </option>
                        <option value="1">Bad</option>
                        <option value="2">Medium</option>
                        <option value="3">Good</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center flex items-center mt-4">
                    <input
                      className="me-3"
                      type="checkbox"
                      name="is_consent"
                      id="is_consent"
                      onChange={handleChange}
                      value={true}
                    />
                    <label
                      className="text-[#999999] text-xs  text-start"
                      htmlFor="is_consent"
                    >
                      I have read and accepted the 
                      <a href="#" className="text-[#CD0511]">
                        Privacy Policy
                      </a>
                       and 
                      <a href="#" className="text-[#CD0511]">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>

                  <button className="text-md md:text-lg font-bold text-white  bg-[#179149] hover:bg-[#0f6933] transition duration-300 py-3 w-[307px] rounded mt-4">
                    JOIN NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Phone ----- */}
      <div className="bg-[#F5F5F5] px-4 pt-10 lg:pt-16 lg:py-0">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center font-sofia text-4xl md:text-[50px] py-4 md:pb-12">
              Quisque rutrum
            </div>
            <div className="md:flex justify-center">
              <div className="relative flex flex-wrap lg:block">
                <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-[50%] lg:w-[180px] mb-14 lg:mb-0 p-2 lg:p-0 block lg:absolute left-[-40%]">
                  <img
                    className="w-[60px] lg:w-auto mb-3"
                    src="/images/main-icon-2.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-[50%] lg:w-[180px] mb-14 lg:mb-0 p-2 lg:p-0 block lg:absolute left-[-40%] top-[50%]">
                  <img
                    className="w-[60px] lg:w-auto mb-3"
                    src="/images/main-icon-2.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-[50%] lg:w-[180px] mb-14 lg:mb-0 p-2 lg:p-0 block lg:absolute right-[-40%] ">
                  <img
                    className="w-[60px] lg:w-auto mb-3"
                    src="/images/main-icon-3.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center lg:text-start items-center lg:items-start w-[50%] lg:w-[180px] mb-14 lg:mb-0 p-2 lg:p-0 block lg:absolute right-[-40%] top-[50%] ">
                  <img
                    className="w-[60px] lg:w-auto mb-3"
                    src="/images/main-icon-1.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <img src="/images/main-phone.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Prize ----- */}
      <div className="bg-[#FFFFFF] px-4 py-10 lg:p-[70px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-sofia text-4xl md:text-[50px] py-4 md:pb-12">
            PRIZE
          </div>
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-3 gap-4">
            {prize.map((item) => {
              return (
                <Prize name={item.name} prize={item.prize} image={item.image} />
              );
            })}
            {/* <div className="bg-[#f4f4f4] rounded-[20px] flex flex-col items-center justify-center w-[250px]  lg:w-full h-[250px] lg:h-[350px]">
              <div>
                <img
                  className="w-[60px] lg:w-auto mb-3"
                  src="/images/medal-01.png"
                  alt=""
                />
              </div>
              <div className="text-2xl lg:text-[50px]mb-4 lg:mb-8 font-bold">
                $1000
              </div>
              <div className="text-base md:text-xl text-start h-unset md:h-[4rem] flex items-start md:items-center">
                CRAS DAPIBUS &<br />
                CRAS DAPIBUS
              </div>
            </div>
            <div className="bg-[#f4f4f4] rounded-[20px] flex flex-col items-center justify-center w-[250px]  lg:w-full h-[250px] lg:h-[350px]">
              <div>
                <img
                  className="w-[60px] lg:w-auto mb-3"
                  src="/images/medal-02.png"
                  alt=""
                />
              </div>
              <div className="text-2xl lg:text-[50px]mb-4 lg:mb-8 font-bold">
                $1000
              </div>
              <div className="text-base md:text-xl text-start h-unset md:h-[4rem] flex items-start md:items-center">
                CRAS DAPIBUS
              </div>
            </div>
            <div className="bg-[#f4f4f4] rounded-[20px] flex flex-col items-center justify-center w-[250px]  lg:w-full h-[250px] lg:h-[350px]">
              <div>
                <img
                  className="w-[60px] lg:w-auto mb-3"
                  src="/images/medal-03.png"
                  alt=""
                />
              </div>
              <div className="text-2xl lg:text-[50px]mb-4 lg:mb-8 font-bold">
                $1000
              </div>
              <div className="text-base md:text-xl text-start h-unset md:h-[4rem] flex items-start md:items-center">
                CRAS DAPIBUS
              </div>
            </div> */}
          </div>
          <button className="text-sm md:text-lg bg-[#179149] hover:bg-[#0f6933] transition duration-300 text-white font-bold py-3 w-[307px] rounded mt-4 lg:mt-12 mb-2.5">
            JOIN NOW
          </button>
          <div className="text-center text-xs text-[#A8A8A8] hover:text-black  transition duration-300">
            <a href="#">Terms and Conditions apply</a>
          </div>
        </div>
      </div>

      {/* ----- RANK ----- */}
      <div className="bg-[#F5F5F5] px-4 py-10 lg:py-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-sofia text-4xl md:text-[50px] py-4 md:pb-12">
            SED FRINGILLA MAURIS SIT
          </div>
          <div className="flex gap-10 flex-col md:flex-row gap-4 my-4">
            <div className="w-full md:w-[45%]">
              <div className="grid gap-4">
                {info.map((item) => {
                  return (
                    <Card
                      title={item.title}
                      name={item.name}
                      memberId={item.memberId}
                      total={item.total}
                      prize={item.prize}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              <div className="text-lg lg:text-xl text-center lg:text-start font-bold mb-0 mt-8 lg:mb-10 lg:mt-0">
                ALIQUAM LOREM ANT
              </div>
              <table className="w-full t-sm lg:text-base">
                <thead>
                  <th className="text-start p-4 text-[#CD0511]">NAME</th>
                  <th className="text-end p-4 text-[#CD0511]">GAIN</th>
                </thead>
                <tbody>
                  {rank.map((item) => (
                    <tr className="border-y-[1px]">
                      <td className="text-start p-3">{item.name}</td>
                      <td className="text-end font-bold p-3">{item.gain}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-start text-xs text-[#A8A8A8] mt-2">
                Nam quam nunc, blandit vel, luctus pulvinar
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#179149] hover:bg-[#0f6933] transition duration-300 text-white font-bold py-3 w-[307px] rounded mt-t lg:mt-12 mb-2.5">
              JOIN NOW
            </button>
            <div className="text-md md:text-lg text-center text-xs text-[#A8A8A8] hover:text-black  transition duration-300">
              <a href="#">Terms and Conditions apply</a>
            </div>
          </div>
        </div>
      </div>

      {/* ----- FAQ ----- */}
      <div className="bg-[#F5F5F5] px-4 py-10 lg:p-[70px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-sofia text-4xl md:text-[50px] pb-12">
            FAQs
          </div>
          <div className="flex gap-10 flex-col md:flex-row gap-4 my-4">
            <div className="w-full">
              <div className="text-xl font-bold flex justify-between py-3 border-b-[1px] border-[#E4E4E4]">
                <div>
                  {/* {info.map((item) => {
                    return <Faq title={item.title} />;
                  })} */}
                </div>
                <div>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
