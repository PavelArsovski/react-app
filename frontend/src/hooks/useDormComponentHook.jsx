import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getDormById, createDorm, updateDorm } from "../services/DormsService";

const useDormComponentHook = () => {
  const [dormName, setDormName] = useState("");
  const [dormDescription, setDormDescription] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getDorm = async (id) => {
    const response = await getDormById(id);
    const dorm = response.data;
    setDormName(dorm.dormName);
    setDormDescription(dorm.dormDescription);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Dorm");
      getDorm(id);
    } else {
      setTitle("Add Dorm");
    }
  }, [id]);

  const saveOrUpdateDorm = async (e) => {
    e.preventDefault();
    const dorm = { dormName, dormDescription };
    if (dormName && dormDescription) {
      if (id) {
        await updateDorm(id, dorm);
        toast.info("Dorm updated successfully!");
        navigate("/dorms");
        return;
      }
      await createDorm(dorm);
      toast.success("Dorm added successfully!");
      navigate("/dorms");
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return {
    dormName,
    setDormName,
    dormDescription,
    setDormDescription,
    title,
    saveOrUpdateDorm,
  };
};

export default useDormComponentHook; 