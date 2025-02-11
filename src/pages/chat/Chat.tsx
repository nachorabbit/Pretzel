import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/Buttons';
import nasujiImage from '../../assets/nasuji.png';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };

    setMessages(prev => [...prev, newUserMessage]);
    
    // Check for exit command
    if (inputValue.trim() === '!종료') {
      navigate('/summary');
    } else {
      // Normal message response
      setTimeout(() => {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: "그래그래그래그래그래그래그래그래그래그래 그랬구나",
          isUser: false,
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
    
    setInputValue('');
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-[#FFF0E9] to-[#FF9AA7] pt-[78px] pb-[36px]">
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between bg-transparent">
        <div className="flex items-center">
          <BackButton 
            onClick={() => navigate('/calendar')}
          />
          <img 
            src={nasujiImage}
            alt="나수지"
            className="w-8 h-8 ml-2"
          />
          <div className="ml-2 text-base font-semibold">나수지</div>
        </div>
        <button 
          onClick={() => navigate('/summary')}
          className="px-[14px] py-[14px] bg-[#FF6D81] text-white rounded-full text-[14px] leading-none mr-[20px]"
        >
          종료하기
        </button>
      </div>
      
      {/* Chat box */}
      <div className="flex-1 flex flex-col rounded-[40px] bg-white overflow-hidden pt-[30px] px-[20px] pb-[20px] mx-[4vw]">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'} mb-4`}
            >
              <div className={`flex items-start gap-2 w-full ${message.isUser ? 'flex-row-reverse gap-0' : ''}`}>
                {!message.isUser && (
                  <img 
                    src={nasujiImage}
                    alt="나수지"
                    className="w-8 h-8 mt-1"
                  />
                )}
                <div
                  className={`w-fit max-w-[70%] px-[14px] py-[14px] text-[14px] ${
                    message.isUser
                      ? 'bg-[#FF6E81] text-white rounded-[20px] rounded-tr-none'
                      : 'bg-[#FDF7F7] text-[#656363] rounded-[20px] rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
              <span className={`text-xs text-gray-500 mt-1 ${message.isUser ? '' : 'pl-10'}`}>
                {message.timestamp}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleSendMessage}
        >
          {/* Input box */}
          <div className="flex items-center gap-2 rounded-[20px] bg-[#FDF7F7] px-[20px]">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="채팅을 입력하세요..."
              rows={1}
              className="flex-1 text-left py-[10px] rounded-[20px] focus:outline-none text-sm max-h-[72px] min-h-[44px] resize-none overflow-y-auto bg-transparent"
              style={{
                height: 'auto',
                lineHeight: '1.4',
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${Math.min(target.scrollHeight, 72)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (!e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }
              }}
            />

            {/* Send button */}
            <button
              type="submit"
              className="bg-[#646262] text-white rounded-[20px] pl-[3.5px] pb-[3.5px] pt-[5.83px] pr-[5.83px] flex items-center"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;