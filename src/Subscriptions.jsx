import React from 'react';
import { motion } from 'framer-motion';
import { FaShare, FaHandshake, FaChartLine, FaHistory, FaLock, FaEnvelope, FaServer, FaUserShield, FaBox, FaSave, FaHeadset, FaGift, FaCheck } from 'react-icons/fa';
import { CiGift } from 'react-icons/ci';
import { ImGift } from 'react-icons/im';
import { TbChartBarPopular } from 'react-icons/tb';

const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-[#08081b] text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-semibold font-serif">
            Your Glucose Clinic
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-300">Your Journey to Healthy Life starts here!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b border-t-white/45 from-[#15243b] to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-white/50  transition-all duration-300"
          >
            <div className="p-8">
              <div className='flex gap-5'>
              <h2 className="text-4xl font-sons font-bold mb-2">Basic</h2> 
              
              <p className='flex bg-sky-200 h-fit my-auto rounded-full p-1 px-2 w-fit text-gray-700 font-semibold fo'>
              <FaGift className='my-auto mr-1'/>
              <p className=''>15% Off</p>
              </p>
              </div>
              
              <p className="text-gray-400 mt-2 font-semibold mb-6">This is best up for your folder design created in a business context.</p>
              
              <div className="mb-8">
                <span className="text-7xl font-bold font-serif"> ₹1999</span>
                
              </div>

              

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaChartLine className="mr-2 text-amber-200/75" /> Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Yearly 3 consultations 
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Fbs ppbs hba1c every time 
                  </li>
                  <li className="flex">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Diet chart  (one chart )
                  </li>
                  <li className="flex">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    5 percent off on medications *
                  </li>
                  <p className='font-light text-md'>
                  * diabetes hypertension and vitamins only 
                  </p>
                </ul>
              </div>

              <button className="w-full bg-amber-400/50 hover:bg-amber-500/30 hover:text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                Contact
              </button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-[#1B3BA0] border-t-white/45 to-[#152759] rounded-xl overflow-hidden border border-gray-700 hover:border-white/50 transition-all duration-500 transform hover:scale-101"
          >
            <div className="p-8">
                            <div className='flex gap-5'>
              <h2 className="text-4xl font-bold mb-2">Standard</h2> 
              
              <p className='flex bg-sky-200 h-fit my-auto rounded-full p-1 px-2 w-fit text-gray-700 font-semibold fo'>
              <TbChartBarPopular className='my-auto mr-1'/>
              <p className=''>Most Popular</p>
              </p>
              </div>
              <p className="text-gray-300 mt-2 font-semibold mb-6">Our graphics are more likely to work for consultants. Get all personal details.</p>
              
              <div className="mb-8 flex">
                <span className="text-7xl font-bold font-serif"> ₹2999</span>
                <p className="text-gray-400 text-lg mt-auto -translate-y-1 ml-1 font-bold">/ YEAR</p>
              </div>

              <div className='border-white/10 mb-5 w-full border-1'></div>


              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaChartLine className="mr-2 text-amber-200/75" /> Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className='bg-white/80 text-gray-900 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Yearly 4 consultations 
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white/80 text-gray-900 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Fbs ppbs hba1c every time 
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white/80 text-gray-900 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Dietician  counselling either via call or in person twice
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white/80 text-gray-900 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Diet charts
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white/80 text-gray-900 rounded-full p-1 mr-2 text-md shrink-0'/>
                    10 percent off on medications *
                  </li>
 <p className='font-light text-md'>
                  * diabetes hypertension and vitamins only 
                  </p>
                </ul>
              </div>

              <button className="w-full bg-amber-400/50 hover:bg-amber-500/30 hover:text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                Contact
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-b from-[#15243b] border-t-white/45 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-white/50 transition-all duration-300"
          >
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-2">Premium</h2>
              <p className="text-gray-300 mt-2 font-semibold mb-6">The plug plug-in is multiple daily graphics running on the same store.</p>
              
              <div className="mb-8 flex">
                <span className="text-7xl font-bold font-serif"> ₹3999</span>
                <p className="text-gray-400 text-lg mt-auto ml-1 font-bold">/ YEAR</p>
              </div>

              

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaChartLine className="mr-2 text-amber-200/75" /> Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Yearly 4 consultations 
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
                    Fbs ppbs hba1c every time 
                  </li>
                  
                  <li className="flex">
                    <FaCheck className='bg-white mt-1.5 text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
Diet chart customised during every visits ( 4 charts )
                  </li>
                  <li className="flex">
                    <FaCheck className='bg-white mt-1.5 text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
Dietician  counselling either via call or in person yearly 4 times
                  </li>
                  <li className="flex items-center">
                    <FaCheck className='bg-white text-gray-800 rounded-full p-1 mr-2 text-md shrink-0'/>
15 percent off on medications *
                  </li>
                  <p className='font-light text-md'>
                  * diabetes hypertension and vitamins only 
                  </p>
                </ul>
              </div>

              <button className="w-full bg-amber-400/50 hover:bg-amber-500/30 hover:text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;