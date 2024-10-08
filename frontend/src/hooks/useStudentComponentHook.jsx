import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateStudent, createStudent, getStudentById } from "../services/StudentService";

const useStudentComponentHook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateStudent = async (e) => {
    e.preventDefault();

    const student = { firstName, lastName, email, city };

    if (firstName && lastName && email && city) {
      try {
        if (id) {
          await updateStudent(id, student);
          toast.info("Student updated successfully!");
          navigate("/");
        } else {
          await createStudent(student);
          toast.success("Student added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating student:", error);
      }
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  const getStudentData = async (studentId) => {
    try {
      const response = await getStudentById(studentId);
      const student = response.data;
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setEmail(student.email);
      setCity(student.city); 
    } catch (error) {
      toast.error("Error fetching student data. Please try again.");
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Student");
      getStudentData(id);
    } else {
      setTitle("Add Student");
    }
  }, [id]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    city, 
    setCity,  
    saveOrUpdateStudent,
    title,
  };
};

export default useStudentComponentHook;