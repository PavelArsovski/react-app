import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listDorms, deleteDorm } from "../services/DormsService";
import { toast } from "react-toastify";

const useListDormComponentHook = () => {
  const [dorms, setDorms] = useState([]);
  const navigate = useNavigate();

  const getDorms = async () => {
    try {
      const response = await listDorms();
      setDorms(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateDorm = (id) => {
    navigate(`/edit-dorm/${id}`);
  };

  const removeDorm = async (id) => {
    await deleteDorm(id);
    toast.error("Dorm deleted successfully!");
    getDorms();
  };

  useEffect(() => {
    getDorms();
  }, []);

  return {
    dorms,
    getDorms,
    updateDorm,
    removeDorm,
  };
};

export default useListDormComponentHook;