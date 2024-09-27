import React, { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import useListRoomComponentHook from "../hooks/useListRoomComponentHook";
import axios from "axios";

const ListRoomComponent = () => {
  const { rooms, updateRoom, removeRoom } = useListRoomComponentHook();
  const [dorms, setDorms] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchDorms = async () => {
      const dormsResponse = await axios.get("http://localhost:8080/api/dorms");
      setDorms(dormsResponse.data);
    };

    const fetchStudents = async () => {
      const studentsResponse = await axios.get("http://localhost:8080/api/students");
      setStudents(studentsResponse.data);
    };

    fetchDorms();
    fetchStudents();
  }, []);

  const getDormName = (id) => {
    const dorm = dorms.find((dorm) => dorm.id === id);
    return dorm ? dorm.dormName : "Unknown Dorm";
  };

  const getStudentName = (id) => {
    const student = students.find((student) => student.id === id);
    return student ? `${student.firstName} ${student.lastName}` : "Unknown Student";
  };

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Rooms</h2>
      <ButtonLink text="Add Room" toAction="/add-room" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Room Number</th>
            <th scope="col">Capacity</th>
            <th scope="col">Dorm</th>
            <th scope="col">Student</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => {
            return (
              <tr key={room.id}>
                <td>{room.roomNumber}</td>
                <td>{room.capacity}</td>
                <td>{getDormName(room.dormId)}</td>
                <td>{getStudentName(room.studentId)}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => updateRoom(room.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeRoom(room.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListRoomComponent;