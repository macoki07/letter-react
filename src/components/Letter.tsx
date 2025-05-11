import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Letter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`
      bg-white 
      rounded-lg 
      p-8 
      max-w-md 
      w-full 
      shadow-2xl 
      transition-all 
      duration-1000
      transform
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}>
      <div className="text-center mb-6">
        <Heart className="text-red-500 mx-auto mb-4" size={40} fill="currentColor" />
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Happy Mother's Day</h1>
        <div className="w-16 h-1 bg-red-300 mx-auto"></div>
      </div>
      
      <div className="space-y-4 font-serif text-gray-700 text-center">
              <p>Dear Mom aka Ho Siew Leng,</p>
      
      <p>To be honest, I forgot that it was mother's day weekend so I didn't buy you anything (Also because I know you don't appreciate expensive and luxurious gifts)</p>
      
      <p>I appreciate you and all you do for this family especially me. Though I may sometimes throw you my BS, I still love you.</p>
      
      <p>Thank you for being my mom, you're the best mom I could ask for! My prayer for you is to get grounded and rooted in a church community 😊.</p>
      
        <p className='pt-4'>Love,</p>
        <p className='font-bold'><strong>Your first egg</strong></p>

      </div>
      
      <div className="mt-8 flex justify-center">
      </div>
    </div>
  );
};

export default Letter;