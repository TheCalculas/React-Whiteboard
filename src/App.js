import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CreateRoom from "./components/Froms/CreateRoom/CreateRoom";
import JoinRoom from "./components/Froms/JoinRoom/JoinRoom";
import Room from "./pages/Room/Room";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateRoom />} />
        <Route path="/createRoom" element={<CreateRoom />} />
        <Route path="/joinRoom" element={<JoinRoom />} />
        <Route path="/:roomId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
