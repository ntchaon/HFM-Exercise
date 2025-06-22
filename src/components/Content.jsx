import React, { useState } from "react";

import Card from "./Card";
import Prize from "./Prize";
import Faq from "./Faq";
import { PrizeData, InfoData, RankData, FaqData } from "../assets/data";

import emailjs from "@emailjs/browser";
const Content = () => {
  const [info, setInfo] = useState(InfoData);
  const [rank, setRank] = useState(RankData);
  const [prize, setPrize] = useState(PrizeData);
  const [faqItems, setFaq] = useState(FaqData);
  const [isOpen, setIsOpen] = useState([]);
  //const [element, setElement] = useState(ElementData);
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
  const toggleIndex = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleChange = (event) => {
    let { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (value) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          window.alert("success");
          // console.log("SUCCESS!");
          setForm({
            first_name: "",
            last_name: "",
            country: "",
            code: "",
            telephone: "",
            experience: "",
            email: "",
            is_consent: false,
          });
        },
        (error) => {
          console.log(error);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <main className="text-sm lg:text-base">
      {/* ----- Form ----- */}
      <div
        style={{ backgroundImage: "url('images/main-bg.png')" }}
        className=" bg p-4 lg:pt-16 lg:pb-12 md:bg-center bg-cover bg-no-repeat"
      >
        <div className="container mx-auto">
          <div>
            <div className="text-center py-10 lg:pb-12">
              <div className="text-4xl lg:text-[70px] font-bold font-sofia leading-none bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] bg-clip-text text-transparent">
                LOREM IPSUM DOLOR
              </div>
              <div className="text-4xl lg:text-[70px] font-bold font-sofia leading-none text-white">
                SIT AMET TOSIK
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white w-full lg:w-[760px] p-4 lg:p-9 rounded-[10px]">
                <div className="text-lg lg:text-2xl font-bold">
                  Lorem ipsum dolor sit amet
                </div>
                <form action={onSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4 my-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full sm:w-1/2">
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
                  <div className="flex flex-col sm:flex-row gap-4 my-4">
                    <div className="w-full sm:w-1/2">
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
                    <div className="w-full sm:w-1/2">
                      <div className="flex flex-col sm:flex-row gap-4 ">
                        <div className="w-full sm:w-[30%]">
                          <input
                            className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                            type="number"
                            name="code"
                            onChange={handleChange}
                            placeholder="Code"
                          />
                        </div>
                        <div className="w-full sm:w-[70%]">
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full lg:w-1/2">
                      <input
                        className="w-full p-[10px] border-[1px] border-[#999999] rounded"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
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

                  <button className="text-md lg:text-lg font-bold text-white  bg-[#179149] hover:bg-[#0f6933] transition duration-300 py-3 w-full sm:w-[307px] rounded mt-4">
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
            <div className="text-center font-sofia text-4xl lg:text-[50px] py-4 lg:pb-12">
              Quisque rutrum
            </div>
            <div className="md:flex justify-center">
              <div className="relative flex flex-wrap justify-center w-full">
                <div className="flex flex-col text-center xl:text-start items-center xl:items-start w-[50%] md:w-[30%] xl:w-[180px] mb-14 md:mb-4 xl:mb-0 p-4  lg:p-10 xl:p-0 block relative md:absolute right-unset left-[0] xl:left-[6%] ">
                  <img
                    className="w-[60px] xl:w-auto mb-3"
                    src="/images/main-icon-1.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center xl:text-start items-center xl:items-start w-[50%] md:w-[30%] xl:w-[180px] mb-14 md:mb-4 xl:mb-0 p-4  lg:p-10 xl:p-0 block relative md:absolute right-unset left-[0] xl:left-[6%]   top-unset sm:top-[50%]">
                  <img
                    className="w-[60px] xl:w-auto mb-3"
                    src="/images/main-icon-2.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center xl:text-start items-center xl:items-start w-[50%] md:w-[30%] xl:w-[180px] mb-14 md:mb-4 xl:mb-0 p-4  lg:p-10 xl:p-0 block relative md:absolute right-unset right-[0] xl:right-[6%] ">
                  <img
                    className="w-[60px] xl:w-auto mb-3"
                    src="/images/main-icon-3.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <div className="flex flex-col text-center xl:text-start items-center xl:items-start w-[50%] md:w-[30%] xl:w-[180px] mb-14 md:mb-4 xl:mb-0 p-4  lg:p-10 xl:p-0 block relative md:absolute right-unset right-[0] xl:right-[6%] top-unset sm:top-[50%] ">
                  <img
                    className="w-[60px] xl:w-auto mb-3"
                    src="/images/main-icon-1.png"
                    alt=""
                  />

                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>

                <img
                  className="w-full md:w-[40%] xl:w-[auto]"
                  src="/images/main-phone.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Prize ----- */}
      <div className="bg-[#FFFFFF] px-4 py-10 lg:p-[70px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-sofia text-4xl lg:text-[50px] py-4 lg:pb-12">
            PRIZE
          </div>
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-3 gap-4">
            {prize.map((item) => {
              return (
                <Prize name={item.name} prize={item.prize} image={item.image} />
              );
            })}
          </div>
          <button className="text-sm lg:text-lg bg-[#179149] hover:bg-[#0f6933] transition duration-300 text-white font-bold py-3 w-full sm:w-[307px] rounded mt-4 lg:mt-12 mb-2.5">
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
          <div className="text-center font-sofia text-4xl lg:text-[50px] py-4 lg:pb-12">
            SED FRINGILLA MAURIS SIT
          </div>
          <div className="flex gap-10 flex-col sm:flex-row gap-4 my-4">
            <div className="w-full sm:w-[45%]">
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
            <div className="w-full sm:w-[55%]">
              <div className="text-lg lg:text-xl text-center md:text-start font-bold mb-0 mt-8 lg:mb-10 lg:mt-0">
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
            <button className="bg-[#179149] hover:bg-[#0f6933] transition duration-300 text-white font-bold py-3 w-full sm:w-[307px] rounded mt-t lg:mt-12 mb-2.5">
              JOIN NOW
            </button>
            <div className="text-md lg:text-lg text-center text-xs text-[#A8A8A8] hover:text-black  transition duration-300">
              <a href="#">Terms and Conditions apply</a>
            </div>
          </div>
        </div>
      </div>

      {/* ----- FAQ ----- */}
      <div className="bg-[#F5F5F5] px-4 py-10 lg:p-[70px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center font-sofia text-4xl lg:text-[50px] pb-12">
            FAQs
          </div>
          {faqItems.map((item, index) => (
            <Faq
              key={index}
              index={index}
              isOpen={isOpen[index]}
              onToggle={toggleIndex}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Content;
