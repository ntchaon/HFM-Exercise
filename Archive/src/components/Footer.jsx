import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white pt-12 pb-12 px-4 lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <div className=" w-full lg:w-[25%]">
            <div className='mb-5'>
              <div className="font-bold text-center lg:text-start mb-2">Find us on</div>
              <div className='flex lg:block justify-center'>
                <a href="#">
                  <img src="/images/footer-social.png" alt="" />
                </a>
              </div>
            </div>
            <div>
              <div className="font-bold text-center lg:text-start mb-4">Download HFM App</div>
              <div className='flex justify-center lg:justify-start gap-2'>
                <a href="#">
                  <img src="/images/appstore.png" alt="" />
                </a>
                <a href="#">
                  <img src="/images/googleplay.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[75%] flex flex-col justify-center">
            <div className="font-bold text-start mb-10">Risk Warning</div>
            <div className="text-[11px] text-[#999999] text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem
              ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
