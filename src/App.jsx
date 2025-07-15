import io from 'socket.io-client'
import './App.css'
import { useState, useEffect } from 'react'
import Chats from './components/Chats';
import JoinRoom from './components/JoinRoom';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'

const socket = io.connect('https://chat-app-backend-6f5h.onrender.com/');

function App() {
  const [roomID, setroomID] = useState(() => {
    return localStorage.getItem('currentRoomID') || '';
  });
  const [showChat, setShowChat] = useState(() => {
    return !!localStorage.getItem('currentRoomID');
  });
  const { user } = useUser();

  useEffect(() => {
    if (user && roomID && showChat) {
      socket.emit("join_room", roomID);
    }
  }, [user, roomID, showChat]);

  const joinRoom = () => {
    if (user && roomID) {
      socket.emit("join_room", roomID);
      localStorage.setItem('currentRoomID', roomID);
      setShowChat(true);
    }
  }

  const leaveRoom = () => {
    localStorage.removeItem('currentRoomID');
    setShowChat(false);
    setroomID('');
  }

  return (<div className="h-screen bg-neutral-50 overflow-hidden">
    <SignedOut>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full border border-neutral-200">

          <div className="text-center mb-8">
            <div className="bg-neutral-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
              Welcome to Realtime Chat
            </h1>
            <p className="text-neutral-600">
              Please sign in to continue
            </p>
          </div>


          <div className="text-center">
            <SignInButton mode="modal">
              <button className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2">
                Sign In
              </button>
            </SignInButton>

            <p className="mt-4 text-sm text-neutral-500">
              Secure authentication powered by Clerk
            </p>
          </div>
        </div>
      </div>
    </SignedOut>

    <SignedIn>
      <div className="h-screen bg-neutral-50 flex flex-col overflow-hidden">
        <div className="bg-white shadow-sm border-b border-neutral-200 flex-shrink-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-neutral-900">Realtime Chat</h1>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {!showChat ? (
            <div className="h-full flex items-center justify-center px-2 sm:px-4 lg:px-8">
              <JoinRoom
                username={user?.firstName || user?.emailAddresses[0]?.emailAddress}
                roomID={roomID}
                setroomID={setroomID}
                joinRoom={joinRoom}
              />
            </div>
          ) : (
            <div className="h-full px-2 sm:px-4 lg:px-8 py-2 sm:py-4">
              <Chats
                socket={socket}
                username={user?.firstName || user?.emailAddresses[0]?.emailAddress}
                roomID={roomID}
                onLeaveRoom={leaveRoom}
              />
            </div>
          )}
        </div>
      </div>
    </SignedIn>
  </div>
  )
}

export default App
