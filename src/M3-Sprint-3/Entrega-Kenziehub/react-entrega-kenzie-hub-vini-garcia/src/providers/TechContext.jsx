import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
import { ToastContext } from "./ToastContext";

export const TechContext = createContext({});

export function TechProvider() {
  const { setUserTechs, userTechs, api } = useContext(UserContext);
  const [isNewTechOpen, setIsNewTechOpen] = useState(false);
  const { handleToastSuccess, handleToastError } = useContext(ToastContext);

  const [currentTech, setCurrentTech] = useState(null);

  async function editTechModal(formData) {
    try {
      const token = localStorage.getItem("@kenzieHub:token");

      const response = await api.put(`/users/techs/${currentTech.id} `, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      updateStateEdit(formData.status);
      setCurrentTech(null);
      handleToastSuccess("Tecnologia editada");
    } catch (error) {
      handleToastError(error.response.data.message);
    }
  }

  function updateStateEdit(status) {
    const techId = currentTech.id;
    const myTechs = userTechs;
    let index = "";

    const otherTechs = myTechs.filter((tech) => tech.id !== techId);

    const techToUpdate = userTechs.find((tech, i) => {
      if (tech.id === techId) {
        index = i;
        return tech;
      }
    });
    const updatedTech = { ...techToUpdate, status: status };
    otherTechs.splice(index, 0, updatedTech);

    setUserTechs(otherTechs);
  }

  async function deleteTech(techId) {
    try {
      const token = localStorage.getItem("@kenzieHub:token");

      const response = await api.delete(`/users/techs/${techId} `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListTechs = userTechs.filter((tech) => tech.id !== techId);
      setUserTechs(newListTechs);
      setCurrentTech(null);
      handleToastSuccess("Tecnologia deletada");
    } catch (error) {
      handleToastError(error.response.data.message);
    }
  }

  async function newTech(formData) {
    try {
      const token = localStorage.getItem("@kenzieHub:token");

      const response = await api.post("/users/techs ", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserTechs([...userTechs, response.data]);
      setIsNewTechOpen(false);
      handleToastSuccess("Tecnologia criada");
    } catch (error) {
      handleToastError(error.response.data.message);
      setIsNewTechOpen(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        setIsNewTechOpen,
        isNewTechOpen,
        setCurrentTech,
        currentTech,
        editTechModal,
        deleteTech,
        newTech,
      }}
    >
      <Outlet />
    </TechContext.Provider>
  );
}
