import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createRoom, updateRoom, getRoomById } from "../services/RoomService";
import { listDorms } from "../services/DormsService";

const useRoomComponentHook = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [dormId, setDormId] = useState("");
  const [title, setTitle] = useState("");
  const [dorms, setDorms] = useState([]); 
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDorms = async () => {
    try {
      const response = await listDorms();
      setDorms(response.data);
    } catch (error) {
      console.error("Error fetching dorms:", error);
    }
  };

  const getRoom = async (roomId) => {
    try {
      const response = await getRoomById(roomId);
      const room = response.data;
      setRoomNumber(room.roomNumber);
      setCapacity(room.capacity);
      setDormId(room.dormId);
    } catch (error) {
      toast.error("Error fetching room data. Please try again.");
      console.error("Error fetching room data:", error);
    }
  };

  useEffect(() => {
    fetchDorms(); 
    if (id) {
      setTitle("Update Room");
      getRoom(id); 
    } else {
      setTitle("Add Room");
    }
  }, [id]);

  const saveOrUpdateRoom = async (e) => {
    e.preventDefault();
    const room = { roomNumber, capacity, dormId };

    if (roomNumber && capacity && dormId) {
      try {
        if (id) {
          await updateRoom(id, room);
          toast.info("Room updated successfully!");
        } else {
          await createRoom(room);
          toast.success("Room added successfully!");
        }
        navigate("/rooms");
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating room:", error);
      }
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return {
    roomNumber,
    setRoomNumber,
    capacity,
    setCapacity,
    dormId,
    setDormId,
    title,
    saveOrUpdateRoom,
    dorms, 
  };
};

export default useRoomComponentHook;