const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <a href="/" className="font-bold text-white text-xl">
        Pipe
      </a>
      <nav>
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Products
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        The Suite
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Solutions
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                    Use cases
                  </p>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Developers
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Documentation
                    <p className="text-gray-500 font-normal">
                      Start integrating in no time
                    </p>
                  </a>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Get started
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Libraries and SDKs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Plugins
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Code samples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Tutorials
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Guides
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Accept online payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Editing video like a pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Automation techniques
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Create stunning effects
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default">
              Resources
            </button>
            <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-3 py-2">
            <a href="#" className="hover:opacity-50 cursor-default">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
            >
              <span className="mr-2">Sign in</span>
              <svg
                className="stroke-current"
                width="10"
                height="10"
                strokeWidth="2"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <g fillRule="evenodd">
                  <path
                    className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                    d="M0 5h7"
                  ></path>
                  <path
                    className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                    d="M1 1l4 4-4 4"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
