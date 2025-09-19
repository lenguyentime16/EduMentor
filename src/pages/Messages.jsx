import React, { useState } from 'react';
import {
    Search,
    Phone,
    Video,
    MoreHorizontal,
    Send,
    Paperclip,
    Smile
} from 'lucide-react';
import Header from '../components/layout/Header';

const Messages = () => {
    const [selectedChat, setSelectedChat] = useState(0);
    const [newMessage, setNewMessage] = useState('');

    // Mock data for chat conversations
    const conversations = [
        {
            id: 1,
            name: 'Nguyễn Thị Hương',
            lastMessage: 'Tôi có thể hỗ trợ bạn về môn Hóa học không?',
            time: '3 phút trước',
            unreadCount: 3,
            avatar: 'N',
            bgColor: 'bg-pink-500',
            isOnline: true
        },
        {
            id: 2,
            name: 'Trần Văn Minh',
            lastMessage: 'Bài tập về Python cơ bản đã được giao.',
            time: '1 giờ trước',
            unreadCount: 0,
            avatar: 'T',
            bgColor: 'bg-blue-500',
            isOnline: false
        },
        {
            id: 3,
            name: 'Lê Thị Mai',
            lastMessage: 'Chúng ta có thể lên lịch buổi học IELTS không?',
            time: '3 giờ trước',
            unreadCount: 1,
            avatar: 'L',
            bgColor: 'bg-green-500',
            isOnline: true
        },
        {
            id: 4,
            name: 'Nguyễn Minh An',
            lastMessage: 'Xin chào! Tôi có câu hỏi về bài toán.',
            time: '1 ngày trước',
            unreadCount: 0,
            avatar: 'N',
            bgColor: 'bg-purple-500',
            isOnline: false
        }
    ];

    // Mock messages for selected conversation
    const messages = [
        {
            id: 1,
            sender: 'Nguyễn Thị Hương',
            content: 'Chào em! Cô thấy em có vẻ khó hiểu trong bài học hôm nay',
            time: '15:00',
            isOwn: false
        },
        {
            id: 2,
            sender: 'Bạn',
            content: 'Dạ chào cô! Em thật sự cần hỗ trợ về cơ chế phản ứng hóa học này',
            time: '15:01',
            isOwn: true
        },
        {
            id: 3,
            sender: 'Nguyễn Thị Hương',
            content: 'Không sao em, cô sẽ giải thích từ đầu. Em có thể xem lại tài liệu cô vừa chia sẻ không?',
            time: '15:02',
            isOwn: false
        },
        {
            id: 4,
            sender: 'Nguyễn Thị Hương',
            content: 'Có câu hỏi gì thì em hỏi cô nhé!',
            time: '15:04',
            isOwn: false
        },
        {
            id: 5,
            sender: 'Bạn',
            content: 'Cảm ơn cô! Em muốn hỏi về cơ chế của phản ứng oxi hóa khử và cách cân bằng phương trình.',
            time: '15:07',
            isOwn: true
        },
        {
            id: 6,
            sender: 'Nguyễn Thị Hương',
            content: 'Được rồi. Đầu tiên ta cần xác định số oxi hóa của các nguyên tố trong hợp chất.',
            time: '15:10',
            isOwn: false
        }
    ];



    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Here you would typically send the message to the backend
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage="Messages" />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex">
                    {/* Left Sidebar - Chat List */}
                    <div className="w-1/3 border-r border-gray-200 flex flex-col">
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Chat</h2>

                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm cuộc trò chuyện..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Chat List */}
                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conversation, index) => (
                                <div
                                    key={conversation.id}
                                    onClick={() => setSelectedChat(index)}
                                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${selectedChat === index ? 'bg-orange-50 border-r-2 border-[#FDCB6E]' : ''
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <div className={`w-12 h-12 ${conversation.bgColor} rounded-full flex items-center justify-center text-white font-semibold`}>
                                                {conversation.avatar}
                                            </div>
                                            {conversation.isOnline && (
                                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                                                <span className="text-xs text-gray-500">{conversation.time}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-600 truncate flex-1 mr-2">{conversation.lastMessage}</p>
                                                {conversation.unreadCount > 0 && (
                                                    <span className="bg-[#FDCB6E] text-white text-xs rounded-full px-2 py-1 font-medium">
                                                        {conversation.unreadCount}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Chat Window */}
                    <div className="flex-1 flex flex-col">
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className={`w-10 h-10 ${conversations[selectedChat]?.bgColor} rounded-full flex items-center justify-center text-white font-semibold`}>
                                        {conversations[selectedChat]?.avatar}
                                    </div>
                                    {conversations[selectedChat]?.isOnline && (
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">{conversations[selectedChat]?.name}</h3>
                                    <p className="text-sm text-green-600">
                                        {conversations[selectedChat]?.isOnline ? 'Đang hoạt động' : 'Hoạt động 1 giờ trước'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-500 hover:text-[#FDCB6E] hover:bg-gray-100 rounded-lg transition-all duration-200">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-[#FDCB6E] hover:bg-gray-100 rounded-lg transition-all duration-200">
                                    <Video className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-[#FDCB6E] hover:bg-gray-100 rounded-lg transition-all duration-200">
                                    <MoreHorizontal className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isOwn
                                            ? 'bg-[#FDCB6E] text-white'
                                            : 'bg-gray-100 text-gray-900'
                                        }`}>
                                        <p className="text-sm">{message.content}</p>
                                        <p className={`text-xs mt-1 ${message.isOwn ? 'text-orange-100' : 'text-gray-500'
                                            }`}>
                                            {message.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-500 hover:text-[#FDCB6E] hover:bg-gray-100 rounded-lg transition-all duration-200">
                                    <Paperclip className="w-5 h-5" />
                                </button>

                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Nhập tin nhắn..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDCB6E] focus:border-[#FDCB6E] outline-none transition-all duration-200"
                                    />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-[#FDCB6E] transition-all duration-200">
                                        <Smile className="w-4 h-4" />
                                    </button>
                                </div>

                                <button
                                    onClick={handleSendMessage}
                                    className="p-2 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#E6B862] transition-all duration-200"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;