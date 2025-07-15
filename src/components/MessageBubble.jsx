import React from 'react'

const MessageBubble = ({ messageContent, username }) => {
    const isOwn = messageContent.username === username;

    return (
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 ${isOwn
                ? 'bg-neutral-800 text-white rounded-lg rounded-br-md'
                : 'bg-white text-neutral-800 shadow-sm rounded-lg rounded-bl-md border border-neutral-200'
                }`}>
                {!isOwn && (
                    <p className="text-xs font-medium text-neutral-600 mb-1">
                        {messageContent.username}
                    </p>
                )}

                {messageContent.type === "text" && (
                    <p className="text-sm leading-relaxed">{messageContent.message}</p>
                )}

                {messageContent.type === "photo" && (
                    <img
                        src={messageContent.photo}
                        className="max-w-full h-auto rounded-md cursor-pointer"
                        onClick={() => window.open(messageContent.photo)}
                    />
                )}

                {messageContent.type === "video" && (
                    <video
                        src={messageContent.video}
                        controls
                        className="max-w-full h-auto rounded-md"
                    />
                )}

                <p className={`text-xs mt-2 ${isOwn ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                    {messageContent.time}
                </p>
            </div>
        </div>
    )
}

export default MessageBubble
