import React from 'react';
import Layout from './components/Layout';
import TweetBox from './components/TweetBox';
import Tweet from './components/Tweet';

const SAMPLE_TWEETS = [
  {
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just deployed my first React application! 🚀 #webdev #react',
    timestamp: '2h',
    likes: 42,
    retweets: 5,
    replies: 3,
    avatar: 'https://i.pravatar.cc/48?img=1',
  },
  {
    username: 'Jane Smith',
    handle: 'janesmith',
    content: 'Beautiful morning for a coffee and some coding ☕️ #coding #developer',
    timestamp: '4h',
    likes: 128,
    retweets: 12,
    replies: 8,
    avatar: 'https://i.pravatar.cc/48?img=2',
  },
  {
    username: 'Tech News',
    handle: 'technews',
    content: 'Breaking: New JavaScript framework promises to revolutionize web development! What are your thoughts? 🤔',
    timestamp: '6h',
    likes: 256,
    retweets: 45,
    replies: 23,
    avatar: 'https://i.pravatar.cc/48?img=3',
  },
];

function App() {
  return (
    <Layout>
      <div className="flex flex-col">
        <header className="p-4 border-b border-gray-800 backdrop-blur bg-black/50 sticky top-0">
          <h1 className="text-xl font-bold">Home</h1>
        </header>
        <TweetBox />
        <div className="divide-y divide-gray-800">
          {SAMPLE_TWEETS.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;