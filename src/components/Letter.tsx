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
      
      <div className="space-y-4 font-serif text-gray-700">
        <p>Dear Mom,</p>
        
        <p>
          On this special day, I wanted to take a moment to express how thankful I am for everything you've done for me. Your love, support, and guidance have shaped me into the person I am today.
        </p>
        
        <p>
          You've always been there for me through thick and thin, celebrating my victories and helping me through my defeats. Your strength and wisdom continue to inspire me every day.
        </p>
        
        <p>
          Thank you for all the sacrifices you've made, for all the late nights and early mornings, for all the love you've given so selflessly.
        </p>
        
        <p className="pt-4">
          With all my love,
        </p>
        <p className="font-bold">
          Your child
        </p>
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="text-xs text-gray-500 italic">
          You can personalize this message with your own words
        </div>
      </div>
    </div>
  );
};

export default Letter;