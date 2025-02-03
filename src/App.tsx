import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartScreen from "./pages/StartScreen";
import JoinName from './pages/JoinName';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFEFE8]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/join-name" element={<JoinName />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}