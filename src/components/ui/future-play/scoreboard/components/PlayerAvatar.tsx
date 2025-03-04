
import React from 'react';

interface PlayerAvatarProps {
  name: string;
  avatar: string;
  winRate: string;
  color: string;
  rightAlign?: boolean;
  playerPosition?: { x: number, y: number };
  playerId?: string;
  side?: 'left' | 'right';
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  name,
  avatar,
  winRate,
  color,
  rightAlign = false,
  playerPosition,
  playerId,
  side
}) => {
  return (
    <div className="flex items-center gap-2">
      {rightAlign && (
        <div>
          <div className={`text-white text-sm font-semibold ${rightAlign ? 'text-right' : ''}`}>{name}</div>
          <div className={`text-[${color}] text-xs ${rightAlign ? 'text-right' : ''}`}>{winRate} win rate</div>
        </div>
      )}
      
      <div className={`w-10 h-10 rounded-full overflow-hidden border-2 border-[${color}] ring-2 ring-[${color}]/30 ${rightAlign ? 'order-last' : ''}`}>
        <img 
          src={avatar} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {!rightAlign && (
        <div>
          <div className="text-white text-sm font-semibold">{name}</div>
          <div className={`text-[${color}] text-xs`}>{winRate} win rate</div>
        </div>
      )}
    </div>
  );
};

export default PlayerAvatar;
