import React, { useState } from 'react';
import { Image, Smile, Calendar } from 'lucide-react';

const TweetBox: React.FC = () => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tweet submission here
    setTweet('');
  };

  return (
    <div className="p-4 border-b border-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <img
            src="https://i.pravatar.cc/48"
            alt="User avatar"
            className="rounded-full w-12 h-12"
          />
          <div className="flex-1">
            <textarea
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              placeholder="What's happening?"
              className="w-full bg-transparent outline-none text-xl resize-none"
              rows={3}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4 text-blue-400">
                <button type="button" className="hover:text-blue-500 transition">
                  <Image size={20} />
                </button>
                <button type="button" className="hover:text-blue-500 transition">
                  <Smile size={20} />
                </button>
                <button type="button" className="hover:text-blue-500 transition">
                  <Calendar size={20} />
                </button>
              </div>
              <button
                type="submit"
                disabled={!tweet.trim()}
                className="bg-blue-500 text-white rounded-full px-6 py-2 font-bold hover:bg-blue-600 transition disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;