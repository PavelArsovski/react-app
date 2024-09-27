import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";
import ListDormComponent from "./components/ListDormComponent"; 
import DormComponent from "./components/DormComponent"; 
import ListRoomComponent from "./components/ListRoomComponent";
import RoomComponent from './components/RoomComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />
          <Route path="/dorms" element={<ListDormComponent />} /> 
          <Route path="/add-dorm" element={<DormComponent />} /> 
          <Route path="/edit-dorm/:id" element={<DormComponent />} />
          <Route path="/rooms" element={<ListRoomComponent />} />
          <Route path="/add-room" element={<RoomComponent />} />
          <Route path="/edit-room/:id" element={<RoomComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;