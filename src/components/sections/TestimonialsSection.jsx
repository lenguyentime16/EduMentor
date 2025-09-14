// src/components/sections/TestimonialsSection.jsx
import React from 'react';
import Card from '../ui/Card';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Trần Minh',
            role: 'Học sinh lớp 12',
            content: 'Nhờ có gia sư từ Edumentors, em đã cải thiện điểm Toán từ 6 lên 9. Thầy dạy rất tận tình và phương pháp rất hiệu quả.',
            rating: 5,
            avatar: '[TESTIMONIAL_AVATAR_1]'
        },
        {
            id: 2,
            name: 'Nguyễn Hạnh',
            role: 'Phụ huynh',
            content: 'Con tôi học Tiếng Anh với cô giáo từ ĐH Ngoại thương. Sau 3 tháng, con đã tự tin giao tiếp và điểm kiểm tra tăng rõ rệt.',
            rating: 5,
            avatar: '[TESTIMONIAL_AVATAR_2]'
        },
        {
            id: 3,
            name: 'Lê Hoàng',
            role: 'Học sinh lớp 11',
            content: 'Thầy Vật lý từ Bách Khoa dạy rất dễ hiểu. Em từ sợ Vật lý giờ đã yêu thích môn học này và có động lực học tập.',
            rating: 5,
            avatar: '[TESTIMONIAL_AVATAR_3]'
        },
        {
            id: 4,
            name: 'Phạm An',
            role: 'Phụ huynh',
            content: 'Dịch vụ tuyệt vời! Gia sư rất chuyên nghiệp và có phương pháp phù hợp với con tôi. Tôi rất hài lòng với sự tiến bộ của con.',
            rating: 5,
            avatar: '[TESTIMONIAL_AVATAR_4]'
        }
    ];

    const faqs = [
        {
            question: 'Làm sao để tìm được gia sư phù hợp?',
            answer: 'Bạn có thể lọc theo môn học, trình độ, và kinh nghiệm. Chúng tôi cũng có buổi học thử miễn phí để bạn đánh giá.'
        },
        {
            question: 'Chi phí học phí như thế nào?',
            answer: 'Học phí tùy thuộc vào gia sư và môn học, dao động từ 150,000đ - 300,000đ/giờ. Bạn có thể thương lượng trực tiếp với gia sư.'
        },
        {
            question: 'Có đảm bảo chất lượng không?',
            answer: 'Tất cả gia sư đều được kiểm tra kỹ lưỡng. Nếu không hài lòng, bạn có thể thay đổi gia sư hoặc được hoàn tiền.'
        },
        {
            question: 'Học online hay offline?',
            answer: 'Cả hai hình thức đều có. Bạn có thể chọn học trực tuyến qua video call hoặc gặp trực tiếp tại nhà.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Testimonials */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Loved by parents & children
                        </h2>
                        <p className="text-lg text-gray-600">
                            Hàng nghìn phụ huynh và học sinh đã tin tưởng Edumentors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="h-full" hover>
                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={`/testimonials/${testimonial.avatar}.jpg`}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                        placeholder={testimonial.avatar}
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                                        <div className="text-gray-500 text-xs">{testimonial.role}</div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h3>
                        <p className="text-gray-600">
                            Những câu hỏi thường gặp từ phụ huynh và học sinh
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="h-full">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;