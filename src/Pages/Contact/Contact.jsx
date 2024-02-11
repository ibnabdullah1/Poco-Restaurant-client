import Cover from "../Shared/Cover/Cover";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <Cover location={"Contact"} />
      <div className="max-w-6xl mx-auto  px-4">
        <h2 className=" text-gray-900 pt-6 text-4xl font-semibold justify-start items-center">
          Call us or visit place
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className=" flex flex-wrap items-center gap-5 md:gap-10 lg:gap-32">
          <div>
            <IoPhonePortraitOutline className="text-5xl text-[#ffcc00]" />
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xm mb-2 mt-1">
              Phone:
            </h2>
            <p className="text-sm">+ 44 123 456 78 90</p>
            <p className="text-sm">+ 844 123 444 77 88</p>
          </div>
          <div>
            <CiLocationOn className="text-6xl text-[#ffcc00]" />
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xm mb-2 mt-1">
              ADDRESS
            </h2>
            <p className="text-sm">Box 565, Pinney's Beach, Charlestown,</p>
            <p className="text-sm">Nevis, West Indies, Caribbean</p>
          </div>
          <div>
            <TfiEmail className="text-5xl text-[#ffcc00]" />
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xm mb-2 mt-1">
              Email
            </h2>
            <p className="text-sm">contact@example.com</p>
            <p className="text-sm">info@example.com</p>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="max-w-6xl mx-auto px-5 py-24  lg:flex ">
          <div className="lg:w-2/3 min-h-[300px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-4 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />

            <div className="bg-white absolute py-3 w-[300px] px-4 rounded ">
              <h2 className="title-font font-semibold text-gray-900 text-sm  ">
                ADDRESS
              </h2>
              <p className="mt-1 text-xs">East New York</p>
              <p className="mt-1 text-xs">Brooklyn, NY, USA</p>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className=" text-gray-900 text-4xl font-semibold justify-start items-center">
              Send us a message
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ffcc00] focus:ring-2 focus:ring-[#ffcc00] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ffcc00] focus:ring-2 focus:ring-[#ffcc00] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#ffcc00] focus:ring-2 focus:ring-[#ffcc00] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white border-[#ffcc00] bg-[#ffcc00] border py-2 px-6 focus:outline-none hover:bg-transparent hover:border hover:border-[#ffcc00] transform duration-200 hover:text-[#ffcc00] rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
