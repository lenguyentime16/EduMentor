import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="My Bookings" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Đặt lịch của tôi</h1>

            {/* Tabs */}
            <div className="flex space-x-8 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('all')}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'all'
                  ? 'border-[#FDCB6E] text-[#FDCB6E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setActiveTab('confirmed')}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'confirmed'
                  ? 'border-[#FDCB6E] text-[#FDCB6E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Đã xác nhận
              </button>
              <button
                onClick={() => setActiveTab('scheduled')}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'scheduled'
                  ? 'border-[#FDCB6E] text-[#FDCB6E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Đã lên lịch
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'completed'
                  ? 'border-[#FDCB6E] text-[#FDCB6E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Hoàn thành
              </button>
              <button
                onClick={() => setActiveTab('cancelled')}
                className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'cancelled'
                  ? 'border-[#FDCB6E] text-[#FDCB6E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Đã hủy
              </button>
            </div>

            {/* Table Headers */}
            <div className="bg-gray-50 rounded-t-lg p-4">
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700">
                <div>GV / BOOKING ID</div>
                <div>NGÀY / GIỜ BẮT ĐẦU</div>
                <div>TÊN HỌC SINH</div>
                <div>BUỔI HỌC / CẤP ĐỘ</div>
                <div>TRẠNG THÁI</div>
              </div>
            </div>

            {/* Empty State */}
            <div className="bg-white rounded-b-lg border border-t-0 border-gray-200 p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#FDCB6E] bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[#FDCB6E]" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Không có lịch đặt đang chờ xử lý</h3>
              <p className="text-gray-500 mb-6">Các yêu cầu đặt lịch của bạn sẽ xuất hiện ở đây</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Action Center */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#FDCB6E] bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-5 h-5 text-[#FDCB6E]" />
                </div>
                <h3 className="font-semibold text-gray-900">Trung tâm hành động</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Không cần thực hiện hành động nào</p>
                    <p className="text-sm text-gray-500">Bạn đã sẵn sàng cho buổi học</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Buổi học sắp tới</h3>
                <span className="text-sm text-[#FDCB6E] cursor-pointer hover:underline">Xem tất cả</span>
              </div>

              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-900 font-medium mb-2">Chưa có buổi học nào được đặt</p>
                <p className="text-sm text-gray-500 mb-4">Các buổi học đã đặt sẽ xuất hiện ở đây</p>
                <Link to="/find-tutor">
                  <button className="bg-[#FDCB6E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#E6B862] transition-colors">
                    Tìm kiếm gia sư
                  </button>
                </Link>
              </div>
            </div>

            {/* Contact Support */}
            <button className="w-full bg-[#FDCB6E] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#E6B862] transition-colors">
              Liên hệ với chúng tôi miễn phí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
