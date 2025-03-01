
import React from "react";

interface CentralStatementProps {
  animationComplete: boolean;
}

const CentralStatement: React.FC<CentralStatementProps> = ({ animationComplete }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mt-4 mb-8 ${animationComplete ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'} transition-all duration-1000`}>
      <p className="text-white/60 text-sm md:text-base leading-relaxed">
        "We didn't just design a scheduling app; we built a full engagement ecosystem. 
        From highlight reels to analytics that keep players obsessed, 
        to interactive scoreboards for sponsor revenue— 
        it's a holistic flywheel of user attraction, revenue generation, and brand loyalty."
      </p>
    </div>
  );
};

export default CentralStatement;
