import { useState, useEffect } from 'react'

const useChatLogic = (socket, username, roomID) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCurrentTime = () => {
        const now = new Date(Date.now());
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12; 
        const minutesFormatted = String(minutes).padStart(2, '0');
        return `${hours12}:${minutesFormatted} ${ampm}`;
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12; 
        const minutesFormatted = String(minutes).padStart(2, '0');
        return `${hours12}:${minutesFormatted} ${ampm}`;
    };

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const data = {
                username: username,
                room: roomID,
                author: username,
                message: currentMessage,
                type: "text",
                time: getCurrentTime()
            }
            await socket.emit("send_message", data);
            setMessageList((list) => [...list, data]);
            setCurrentMessage("");
        }
    }

    const pickPhoto = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = {
                    username: username,
                    room: roomID,
                    author: username,
                    photo: event.target.result,
                    type: "photo",
                    time: getCurrentTime()
                }
                socket.emit("send_photo", data);
                setMessageList((list) => [...list, data]);
            };
            reader.readAsDataURL(file);
        }
        e.target.value = '';
    }

    const pickVideo = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('video/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = {
                    username: username,
                    room: roomID,
                    author: username,
                    video: event.target.result,
                    type: "video",
                    time: getCurrentTime()
                }
                socket.emit("send_video", data);
                setMessageList((list) => [...list, data]);
            };
            reader.readAsDataURL(file);
        }
        e.target.value = '';
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    useEffect(() => {
        socket.on("previous_messages", (messages) => {
            const formattedMessages = messages.map(msg => ({
                username: msg.author,
                author: msg.author,
                message: msg.message,
                photo: msg.mediaData && msg.type === 'photo' ? msg.mediaData : undefined,
                video: msg.mediaData && msg.type === 'video' ? msg.mediaData : undefined,
                type: msg.type,
                time: formatTime(msg.timestamp)
            }));
            setMessageList(formattedMessages);
            setIsLoading(false);
        });

        socket.on("message_recieve", (data) => {
            setMessageList((list) => [...list, data]);
        });

        socket.on("photo_recieve", (data) => {
            setMessageList((list) => [...list, data]);
        });

        socket.on("video_recieve", (data) => {
            setMessageList((list) => [...list, data]);
        });


        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, [socket]);

    return {
        currentMessage,
        setCurrentMessage,
        messageList,
        isLoading,
        sendMessage,
        pickPhoto,
        pickVideo,
        handleKeyPress
    };
};

export default useChatLogic
