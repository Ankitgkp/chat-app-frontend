import React from 'react'

const ChatHeader = ({ roomID, username, onLeaveRoom }) => {
    return (
        <div className="bg-white border-b border-neutral-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                    <div className="bg-neutral-800 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm sm:text-lg font-semibold text-neutral-900 truncate">Room: {roomID}</h2>
                        <p className="text-xs sm:text-sm text-neutral-600 truncate">Welcome, {username}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <div className="hidden sm:flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-neutral-600 font-medium">Online</span>
                    </div>
                    <button
                        onClick={onLeaveRoom}
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-medium"
                    >
                        Leave
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
