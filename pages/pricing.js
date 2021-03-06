import Head from "next/head";
// import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import TestPricing from "../components/PricingPlans";

export default function pricing() {
  return (
    <>
      <Head>
        <title>pricing | internet for new generation</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      {/* <motion.section exit={{ opacity: 0 }}> */}
      <div className='flex flex-col items-center h-full'>
        <div className='text-center'>
          {/* Subheading Goes Here */}

          {/* CTA Buttons */}

          <div className='px-8 pt-10 '>
            {/* <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-base font-bold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span> */}
          </div>
          {/* ShortParagraph/marketing Goes Here */}
          <h1 className='text-2xl font-bold text-white mx-2'>
            <span className='bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
              70% faster internet
            </span>{" "}
            🚀 and more efficient
          </h1>
        </div>
        <div className='max-w-7xl w-screen lg:py-16 px-4 sm:px-10 md:px-8 lg:px-8 lg:pb-16'>
          <div className='space-y-8 pb-4 mt-14 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4'>
            {/* GRAPPLER package one */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  grappler
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-green-200 via-green-400 to-purple-700'>
                    ৳700
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      20Mbps{" "}
                    </span>
                    (Shared)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Multi-platform Streaming</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Fixed Bandwith</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlusCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Real IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>IoT Integration Support</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Parental Controll</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p>
                </div>
                <button className='w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                  Choose Plan
                </button>
              </div>
            </div>
            {/* MAINSTREAM package two */}

            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  mainstream
                </h3>

                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500'>
                    ৳1000
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <span className='absolute -mt-3 mr-3 top-0 shadow-xl right-0 text-xs font-semibold inline-block py-1 px-2 rounded text-fuchsia-600 bg-fuchsia-200 uppercase'>
                  popular 😎
                </span>

                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      40Mbps{" "}
                    </span>
                    (Shared)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Multi-platform Streaming</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Reliable Bandwith</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlusCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Real IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>IoT Integration Support</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Parental Controll</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p>
                </div>
                <button className='w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                  Choose Plan
                </button>
              </div>
            </div>

            {/* EXPRESS package three */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  express
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600'>
                    ৳2000
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <span className='absolute -mt-3 mr-3 top-0 shadow-xl right-0 text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 uppercase'>
                  value for money 🎨
                </span>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      20Mbps{" "}
                    </span>
                    (Dedicated)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Multi-platform Streaming</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Fixed Bandwith</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Real IPv4 </span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>IoT Integration Support</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Parental Controll</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-red-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p>
                </div>
                <button className='w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                  Choose Plan
                </button>
              </div>
            </div>

            {/* SUPREME package four */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  supreme
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500'>
                    ৳4000
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      50Mbps{" "}
                    </span>
                    (Dedicated)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Multi-platform Streaming</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Fixed Bandwith</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Real IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Full QoS Support</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>IoT Integration Support</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Parental Controll</span>
                  </p>

                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p>
                </div>
                <button className='w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          <div className='h-[.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700'></div>
          <div className='py-14 lg:py-4'>
            <div className='rounded-lg bg-gradient-to-bl from-sky-400 to-blue-500'>
              <div className='h-full bg-hero-pattern bg-hero-size'>
                <div className='min-h-full flex items-center justify-center text-white'>
                  <div className='grid md:grid-cols-4 gap-4 p-6 md:p-20 max-w-7xl'>
                    <div className='hidden md:col-span-4 md:flex md:justify-center pb-8'>
                      <h1 className='text-5xl font-bold'>
                        Unmatched Perfomance Optimization
                      </h1>
                    </div>
                    {/* card 1 */}
                    <div className='p-6 rounded  md:col-span-2 bg-black/20 '>
                      <h1 className='uppercase'>Enhance Your Business With</h1>
                      <h1 className='text-3xl font-bold sm:text-5xl'>
                        Our Customized Services
                      </h1>
                      <p className='mt-6 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                    {/* form */}
                    <div className=' p-6 rounded md:col-span-2  bg-white text-gray-800'>
                      <form action='' className='space-y-4'>
                        <div>
                          <label className='sr-only' htmlFor='company-name'>
                            Company Name
                          </label>
                          <input
                            className='w-full p-3 text-sm border-gray-200 rounded-lg'
                            placeholder='Company Name'
                            type='text'
                            id='cname'
                          />
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <div>
                            <label className='sr-only' htmlFor='email'>
                              Email
                            </label>
                            <input
                              className='w-full p-3 text-sm border-gray-200 rounded-lg'
                              placeholder='Company Email address'
                              type='email'
                              id='email'
                            />
                          </div>

                          <div>
                            <label className='sr-only' htmlFor='phone'>
                              Phone
                            </label>
                            <input
                              className='w-full p-3 text-sm border-gray-200 rounded-lg'
                              placeholder='Phone Number'
                              type='tel'
                              id='phone'
                            />
                          </div>
                        </div>

                        <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                          <div>
                            <input
                              className='sr-only'
                              id='option1'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option1'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Small{" "}
                              </span>
                            </label>
                          </div>

                          <div>
                            <input
                              className='sr-only'
                              id='option2'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option2'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Medium{" "}
                              </span>
                            </label>
                          </div>

                          <div>
                            <input
                              className='sr-only'
                              id='option3'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option3'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Enterprise{" "}
                              </span>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className='sr-only' htmlFor='message'>
                            Message
                          </label>
                          <textarea
                            className='w-full p-3 text-sm border-gray-200 rounded-lg'
                            placeholder='Message'
                            rows='8'
                            id='message'
                          ></textarea>
                        </div>

                        <div className='mt-4'>
                          <button
                            type='submit'
                            className='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg sm:w-auto'
                          >
                            <span className='font-medium'>
                              {" "}
                              Get A Quotation{" "}
                            </span>

                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='w-5 h-5 ml-3'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M14 5l7 7m0 0l-7 7m7-7H3'
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.section> */}
    </>
  );
}
