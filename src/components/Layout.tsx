import React from 'react';
import { Home, Bell, Mail, User, LogOut } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto flex">
        {/* Sidebar */}
        <nav className="w-64 fixed h-screen p-4">
          <div className="space-y-6">
            <div className="text-2xl font-bold text-blue-400">𝕏</div>
            <div className="space-y-4">
              <NavItem icon={<Home />} text="Home" active />
              <NavItem icon={<Bell />} text="Notifications" />
              <NavItem icon={<Mail />} text="Messages" />
              <NavItem icon={<User />} text="Profile" />
            </div>
            <button className="bg-blue-500 text-white rounded-full py-3 px-8 w-full font-bold hover:bg-blue-600 transition">
              Post
            </button>
          </div>
          <div className="absolute bottom-4">
            <NavItem icon={<LogOut />} text="Logout" />
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="ml-64 flex-1 border-l border-r border-gray-800 min-h-screen">
          {children}
        </main>
        
        {/* Right Sidebar */}
        <div className="w-80 p-4">
          <div className="bg-gray-900 rounded-xl p-4">
            <h2 className="font-bold text-xl mb-4">Who to follow</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={`https://i.pravatar.cc/40?img=${i}`}
                      alt="avatar"
                      className="rounded-full w-10 h-10"
                    />
                    <div>
                      <div className="font-bold">User {i}</div>
                      <div className="text-gray-500">@user{i}</div>
                    </div>
                  </div>
                  <button className="bg-white text-black px-4 py-1 rounded-full font-bold hover:bg-gray-200 transition">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}> = ({ icon, text, active }) => (
  <div
    className={`flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 cursor-pointer transition ${
      active ? 'font-bold' : ''
    }`}
  >
    <div className="w-6 h-6">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Layout;