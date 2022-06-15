import Image from "next/image";
import { useRouter } from "next/router";

import { useRef } from "react";
const HomePage = () => {
  // defining the router
  const router = useRouter();
  // search Container
  const SearchRef = useRef(null);

  // haandling the onsubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const status = SearchRef.current.value;
    // checking if the search input is empty
    if (!status.trim()) {
      return;
    }
    router.push(`/search/${status.trim()}`);
    SearchRef.current.value = null;
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center items-center sm:mt-20 lg:mt-0 mt-16"
    >
      <div className="mb-8">
        {" "}
        <Image
          width="300"
          height="100"
          objectFit="cover"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
          className="mx-auto "
        />
      </div>
      <div className="bg-white rounded-full py-[8px] input-shadow border border-[#dfe1e5] w-[90%] sm:w-[80%] lg:w-[35%] flex justify-between items-center">
        <div className="text-slate-400 ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          ref={SearchRef}
          placeholder="Search anything"
          className="w-[80%] outline-none py-2 text-sm"
        />
        <div className="text-slate-400 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
      </div>
      <div className="space-x-3">
        <button className="bg-gray-100 px-2 mt-8 rounded-sm py-2 text-gray-600 font-normal  text-sm">
          Google Search
        </button>
        <button className="bg-gray-100 px-2 mt-8 rounded-sm py-2 text-gray-600 font-normal  text-sm">
          I am Feeling Lucky !
        </button>
      </div>
    </form>
  );
};

export default HomePage;
