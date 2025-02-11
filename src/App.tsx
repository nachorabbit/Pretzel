import { Routes, Route } from 'react-router-dom';
import Chat from '@chat/Chat';
import ChooseChar from "@chat/ChooseChar";
import Summary from "@chat/Summary";
import StartScreen from '@auth/StartScreen';
import Join from '@auth/Join';
import Calendar from '@home/CalendarHome';
import Mypage from '@profile/Mypage';
import Store from '@store/Store';
import Connect from '@auth/Connect';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFEFE8]">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/join" element={<Join />} />
        <Route path="/choose-char" element={<ChooseChar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </div>
  );
}