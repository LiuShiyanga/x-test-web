import React from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface TweetProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  avatar: string;
}

const Tweet: React.FC<TweetProps> = ({
  username,
  handle,
  content,
  timestamp,
  likes,
  retweets,
  replies,
  avatar,
}) => {
  return (
    <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 transition cursor-pointer">
      <div className="flex space-x-4">
        <img src={avatar} alt={username} className="rounded-full w-12 h-12" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{username}</span>
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{timestamp}</span>
          </div>
          <p className="mt-2 text-white">{content}</p>
          <div className="flex justify-between mt-4 text-gray-500 max-w-md">
            <button className="flex items-center space-x-2 hover:text-blue-400 transition">
              <MessageCircle size={18} />
              <span>{replies}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-400 transition">
              <Repeat2 size={18} />
              <span>{retweets}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-red-400 transition">
              <Heart size={18} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-400 transition">
              <Share size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;