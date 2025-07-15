import React from 'react'

const JoinRoom = ({ username, roomID, setroomID, joinRoom }) => {
    return (
        <div className="bg-white shadow-sm rounded-lg p-6 sm:p-8 w-full max-w-md border border-neutral-200">
            <div className="text-center mb-8">
                <div className="bg-neutral-800 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">Join Chat Room</h1>
                <p className="text-sm sm:text-base text-neutral-600">Welcome, {username}! Connect with others in real-time</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Room ID
                    </label>
                    <input
                        onChange={(event) => setroomID(event.target.value)}
                        type="text"
                        placeholder="Enter room ID"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                        value={roomID}
                    />
                </div>

                <button
                    onClick={joinRoom}
                    disabled={!roomID}
                    className="w-full bg-neutral-800 text-white font-medium py-3 px-6 rounded-lg hover:bg-neutral-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                >
                    Join Room
                </button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-neutral-500">
                    Create a room ID and share it with friends to start chatting!
                </p>
            </div>
        </div>
    )
}

export default JoinRoom
