
import React from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Sponsor } from "../types";

interface SponsorsBannerProps {
  sponsors: Sponsor[];
  onBackClick: () => void;
  gameTime: number;
  player1Score: number;
  player2Score: number;
  currentSet: number;
}

const SponsorsBanner: React.FC<SponsorsBannerProps> = ({
  sponsors,
  onBackClick,
  gameTime,
  player1Score,
  player2Score,
  currentSet
}) => {
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="bg-[#F0F4FF] border-b border-[#E0E7FF] py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBackClick} 
          className="text-navy hover:text-primary transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
        
        <div className="flex items-center gap-3 ml-4">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-navy font-bold text-sm uppercase tracking-wider">LIVE</span>
          <div className="flex items-center gap-1.5 ml-2 px-3 py-1 bg-navy/10 rounded-full">
            <Clock className="w-3.5 h-3.5 text-navy/70" />
            <span className="text-navy text-sm font-medium">{formatTime(gameTime)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-navy/70 text-xs uppercase font-semibold tracking-wider">SPONSORED BY</span>
        <div className="flex items-center gap-4">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="bg-white px-3 py-1.5 rounded-md shadow-sm hover:shadow transition-all border border-gray-100"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-7 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-[#001a2c] py-2 px-4 rounded-full shadow-md">
        <div className="text-[#4CAF50] font-bold text-2xl">{player1Score}</div>
        <div className="text-white text-base font-light">-</div>
        <div className="text-[#3db5e6] font-bold text-2xl">{player2Score}</div>
        <div className="text-white text-xs font-bold bg-[#253446] px-2 py-0.5 rounded">SET {currentSet}</div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
