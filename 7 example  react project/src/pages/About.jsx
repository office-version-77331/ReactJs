import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      {/* Welcome Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mt-2 mb-6">
        <h1 className="text-2xl font-bold text-center text-green-500 mb-4">
          Hello, Welcome to Example Project
        </h1>
        <p className="text-gray-700 text-center">
          The best About Us pages share the company and founders’ stories. It’s a chance to pull back the curtain on the business and showcase the people who make it happen.
        </p>
      </div>

      {/* Insight Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What Makes a Great About Us Page?</h2>
        <p className="text-gray-700 mb-4">
          Some of the most effective About Us pages:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Connect the consumer to the business on a deeper level</li>
          <li>Provide contextual insight into why the founders created the business</li>
          <li>Share the business’s core values, mission, beliefs, and vision</li>
          <li>Answer any questions that consumers may have about the business</li>
        </ol>
      </div>

      {/* Image Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
        <img
          src="https://t3.ftcdn.net/jpg/00/80/00/60/240_F_80006047_Wv2onf4mow2R6sE5AB5EBSCXqI9hpOEB.jpg"
          alt="About Us"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Icons Section */}
      <div className="flex space-x-8 justify-center">
        <div className="flex flex-col items-center text-center">
          <button onClick={() => navigate('/')}>

          <PhoneCall  className="w-10 h-10 text-green-500" />
          </button>
          <span className="text-sm text-gray-700 mt-2">Call Us</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <button onClick={() => navigate('/')}>

          <MessageCircle  className="w-10 h-10 text-green-500" />
          </button>
          <span className="text-sm text-gray-700 mt-2">Message Us</span>
        </div>
      </div>
    </div>
  );
};

export default About;
