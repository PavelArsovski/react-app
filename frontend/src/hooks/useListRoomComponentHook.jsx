import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listRooms, deleteRoom } from "../services/RoomService";

const useListRoomComponentHook = () => {
  const [rooms, setRooms] = useState([]); 
  const navigate = useNavigate();

  const getRooms = async () => {
    try {
      const response = await listRooms();
      setRooms(response.data);
    } catch (err) {
      console.error("Error fetching rooms:", err);
    }
  };

  const updateRoom = (id) => {
    navigate(`/edit-room/${id}`);
  };

  const removeRoom = async (id) => {
    try {
      await deleteRoom(id);
      toast.error("Room deleted successfully!");
      getRooms(); 
    } catch (err) {
      toast.error("Error deleting room. Please try again.");
      console.error("Error deleting room:", err);
    }
  };

  useEffect(() => {
    getRooms(); 
  }, []);

  return {
    rooms,
    getRooms,
    updateRoom,
    removeRoom, 
  };
};

export default useListRoomComponentHook;