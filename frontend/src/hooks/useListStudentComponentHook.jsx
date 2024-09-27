import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listStudents, deleteStudent } from "../services/StudentService";
import { listDorms } from "../services/DormsService";

const useListStudentComponentHook = () => {
  const [students, setStudents] = useState([]);
  const [dorms, setDorms] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await listStudents();
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDorms = async () => {
    try {
      const response = await listDorms();
      setDorms(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchDorms();
  }, []);

  const getDormName = (dormId) => {
    const dorm = dorms.find((dorm) => dorm.id === dormId);
    return dorm ? dorm.dormName : "Unknown Dorm";
  };

  const updateStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

  const deleteStudentById = async (id) => {
    await deleteStudent(id);
    toast.error("Student deleted successfully!");
    fetchStudents();
  };

  return {
    students,
    dorms,
    fetchStudents,
    fetchDorms,
    getDormName,
    updateStudent,
    deleteStudentById,
  };
};

export default useListStudentComponentHook;