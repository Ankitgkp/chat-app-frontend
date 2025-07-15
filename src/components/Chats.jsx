import React from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import useChatLogic from '../hooks/useChatLogic'

const Chats = ({ socket, username, roomID, onLeaveRoom }) => {
    const {
        currentMessage,
        setCurrentMessage,
        messageList,
        isLoading,
        sendMessage,
        pickPhoto,
        pickVideo,
        handleKeyPress
    } = useChatLogic(socket, username, roomID);

    return (
        <div className="h-full flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-sm w-full max-w-4xl h-full sm:max-h-[600px] flex flex-col border border-neutral-200 overflow-hidden">
                <ChatHeader roomID={roomID} username={username} onLeaveRoom={onLeaveRoom} />

                <div className="flex-1 overflow-hidden bg-neutral-50">
                    <MessageList messageList={messageList} username={username} isLoading={isLoading} />
                </div>

                <ChatInput
                    currentMessage={currentMessage}
                    setCurrentMessage={setCurrentMessage}
                    sendMessage={sendMessage}
                    pickPhoto={pickPhoto}
                    pickVideo={pickVideo}
                    handleKeyPress={handleKeyPress}
                />
            </div>
        </div>
    )
}

export default Chats
