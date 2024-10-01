import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listStudents, deleteStudent } from "../services/StudentService";

const useListStudentComponentHook = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await listStudents();
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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
    fetchStudents,
    updateStudent,
    deleteStudentById,
  };
};

export default useListStudentComponentHook;