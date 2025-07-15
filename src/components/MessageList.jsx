import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import MessageBubble from './MessageBubble'
import useAutoScroll from '../hooks/useAutoScroll'

const MessageList = ({ messageList, username, isLoading }) => {
    const messagesEndRef = useAutoScroll(messageList);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="bg-neutral-200 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-neutral-500 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    <p className="text-neutral-600 text-lg font-medium">Please wait...</p>
                    <p className="text-neutral-500 text-sm">Loading your messages</p>
                </div>
            </div>
        )
    }

    if (messageList.length === 0) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="bg-neutral-200 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <p className="text-neutral-500 text-lg">No messages yet</p>
                    <p className="text-neutral-400 text-sm">Start the conversation!</p>
                </div>
            </div>
        )
    }

    return (
        <ScrollToBottom
            className="h-full"
            followButtonClassName="scroll-follow-button"
        >
            <div className="p-4">
                {messageList.map((messageContent, index) => (
                    <MessageBubble
                        key={index}
                        messageContent={messageContent}
                        username={username}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </ScrollToBottom>
    )
}

export default MessageList
