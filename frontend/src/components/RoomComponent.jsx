import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const RoomComponent = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [dormId, setDormId] = useState("");
  const [studentId, setStudentId] = useState("");

  const [dorms, setDorms] = useState([]);
  const [students, setStudents] = useState([]);
  const [title, setTitle] = useState("Add Room");

  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    const fetchDorms = async () => {
      const dormsResponse = await axios.get("http://localhost:8080/api/dorms");
      setDorms(dormsResponse.data);
    };

    const fetchStudents = async () => {
      const studentsResponse = await axios.get("http://localhost:8080/api/students");
      setStudents(studentsResponse.data);
    };

    const fetchRoomData = async () => {
      if (id) {
        const roomResponse = await axios.get(`http://localhost:8080/api/rooms/${id}`);
        const room = roomResponse.data;
        setRoomNumber(room.roomNumber);
        setCapacity(room.capacity);
        setDormId(room.dormId);
        setStudentId(room.studentId);
        setTitle("Update Room");
      }
    };

    fetchDorms();
    fetchStudents();
    fetchRoomData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roomData = { roomNumber, capacity, dormId, studentId };

    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/rooms/${id}`, roomData);
      } else {
        await axios.post("http://localhost:8080/api/rooms", roomData);
      }

      navigate("/rooms");
    } catch (error) {
      console.error("Error saving room:", error);
    }
  };

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/rooms" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Room Number:</label>
                <input
                  type="text"
                  name="roomNumber"
                  placeholder="Enter Room Number"
                  className="form-control"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Capacity:</label>
                <input
                  type="number"
                  name="capacity"
                  placeholder="Enter Room Capacity"
                  className="form-control"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Select Dorm:</label>
                <select
                  className="form-control"
                  value={dormId}
                  onChange={(e) => setDormId(e.target.value)}
                  required 
                >
                  <option value="">-- Select Dorm --</option>
                  {dorms.map((dorm) => (
                    <option key={dorm.id} value={dorm.id}>
                      {dorm.dormName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Select Student:</label>
                <select
                  className="form-control"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required 
                >
                  <option value="">-- Select Student --</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.firstName} {student.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomComponent;