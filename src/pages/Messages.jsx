import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    Bell, 
    User, 
    ChevronDown, 
    Settings, 
    HelpCircle, 
    LogOut,
    Search,
    Phone,
    Video,
    MoreHorizontal,
    Send,
    Paperclip,
    Smile
} from 'lucide-react';

const Messages = () => {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [selectedChat, setSelectedChat] = useState(0);
    const [newMessage, setNewMessage] = useState('');
    const dropdownRef = useRef(null);

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

    // Handle click outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // User Dropdown Component
    const UserDropdown = () => (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-all duration-200"
            >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                </div>
                <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-gray-900">Welcome, Nguyên</div>
                    <div className="text-xs text-gray-500">lenguyentime16@gmail.com</div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isUserDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                N
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Welcome, Nguyên</p>
                                <p className="text-sm text-gray-500">lenguyentime16@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-2">
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <User className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Thông tin cá nhân</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <Settings className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Cài đặt tài khoản</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="py-2">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Câu hỏi thường gặp</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Điều khoản và điều kiện</span>
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                            <span className="text-gray-700 font-medium">Chính sách bảo mật</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150">
                            <HelpCircle className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700 font-medium">Trợ giúp và hỗ trợ</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 my-2"></div>

                    <div className="px-4 py-2">
                        <button className="w-full bg-[#FDF3E1] text-[#FDCB6E] rounded-lg py-3 px-4 font-medium hover:bg-[#FCF0D0] transition-all duration-200 flex items-center justify-center space-x-2">
                            <LogOut className="w-4 h-4" />
                            <span>Đăng xuất</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

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
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-[#FDCB6E]">Edumentor</div>
                    
                        <nav className="flex items-center space-x-8">
                            <Link to="/dashboard" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                Dashboard
                            </Link>
                            <Link to="/find-tutor" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                Find a tutor
                            </Link>
                            <Link to="/my-bookings" className="text-gray-600 hover:text-[#FDCB6E] transition-colors">
                                My Bookings
                            </Link>
                            <Link to="/messages" className="text-[#FDCB6E] font-medium transition-colors">
                                Messages
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-[#FDCB6E] transition-colors duration-200" />
                            <UserDropdown />
                        </div>
                    </div>
                </div>
            </header>

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
                                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                                        selectedChat === index ? 'bg-orange-50 border-r-2 border-[#FDCB6E]' : ''
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
                                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                        message.isOwn
                                            ? 'bg-[#FDCB6E] text-white'
                                            : 'bg-gray-100 text-gray-900'
                                    }`}>
                                        <p className="text-sm">{message.content}</p>
                                        <p className={`text-xs mt-1 ${
                                            message.isOwn ? 'text-orange-100' : 'text-gray-500'
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