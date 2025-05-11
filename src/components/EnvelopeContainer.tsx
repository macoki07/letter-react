import React, { useState } from 'react';
import Envelope from './Envelope';
import Letter from './Letter';
import ParticleEffect from './ParticleEffect';

const EnvelopeContainer: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpened) {
      setIsOpened(true);
      setShowParticles(true);
      
      // Show letter after particle effect
      setTimeout(() => {
        setShowLetter(true);
      }, 2000);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {showParticles && <ParticleEffect />}
      
      {!showLetter && (
        <div className={`transition-all duration-1000 ${isOpened ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
          <Envelope isOpened={isOpened} onClick={handleEnvelopeClick} />
        </div>
      )}
      
      {showLetter && <Letter />}
    </div>
  );
};

export default EnvelopeContainer;