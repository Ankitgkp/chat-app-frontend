import React from 'react'

const JoinRoom = ({ username, roomID, setroomID, joinRoom }) => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">Join Chat Room</h1>
                    <p className="text-gray-600">Welcome, {username}! Connect with others in real-time</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Room ID
                        </label>
                        <input
                            onChange={(event) => setroomID(event.target.value)}
                            type="text"
                            placeholder="Enter room ID"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                            value={roomID}
                        />
                    </div>

                    <button
                        onClick={joinRoom}
                        disabled={!roomID}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Join Room
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Create a room ID and share it with friends to start chatting!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JoinRoom
