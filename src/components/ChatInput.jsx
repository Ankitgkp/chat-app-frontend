import React from 'react'

const ChatInput = ({
    currentMessage,
    setCurrentMessage,
    sendMessage,
    pickPhoto,
    pickVideo,
    handleKeyPress
}) => {
    const pickMedia = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                pickPhoto(e);
            } else if (file.type.startsWith('video/')) {
                pickVideo(e);
            }
        }
    }

    return (
        <div className="bg-white border-t border-neutral-200 p-3 sm:p-4 rounded-b-lg">
            <div className="flex items-center space-x-2 sm:space-x-3">
                <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={pickMedia}
                    style={{ display: 'none' }}
                    id="mediaInput"
                />

                <button
                    onClick={() => document.getElementById('mediaInput').click()}
                    className="bg-neutral-100 hover:bg-neutral-200 text-neutral-600 p-2 sm:p-3 rounded-lg transition-all duration-200 border border-neutral-300 flex-shrink-0"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                </button>

                <input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent bg-neutral-50 focus:bg-white transition-all duration-200 text-sm sm:text-base"
                />

                <button
                    onClick={sendMessage}
                    className="bg-neutral-800 text-white p-2 sm:p-3 rounded-lg hover:bg-neutral-900 transition-all duration-200 flex-shrink-0"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ChatInput
