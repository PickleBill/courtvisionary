
import React, { useEffect } from "react";
import PlayerModalHeader from "./player-modal/PlayerModalHeader";
import PlayerProfile from "./player-modal/PlayerProfile";
import PerformanceStats from "./player-modal/PerformanceStats";
import RecentMatches from "./player-modal/RecentMatches";
import UpcomingReservations from "./player-modal/UpcomingReservations";
import FriendsCommunity from "./player-modal/FriendsCommunity";
import PlayerModalFooter from "./player-modal/PlayerModalFooter";

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal = ({ isOpen, onClose }: PlayerModalProps) => {
  // Add effect to handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#0FA0CE]/10 rounded-xl w-full max-w-5xl max-h-[98vh] overflow-hidden flex flex-col">
        {/* Header */}
        <PlayerModalHeader onClose={onClose} />
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          {/* Profile Section */}
          <PlayerProfile />
          
          {/* Stats Overview */}
          <PerformanceStats />
          
          {/* Recent Matches */}
          <RecentMatches />
          
          {/* Upcoming Reservations */}
          <UpcomingReservations />
          
          {/* Friends & Community */}
          <FriendsCommunity />
        </div>
        
        {/* Footer */}
        <PlayerModalFooter onClose={onClose} />
      </div>
    </div>
  );
};

export default PlayerModal;
