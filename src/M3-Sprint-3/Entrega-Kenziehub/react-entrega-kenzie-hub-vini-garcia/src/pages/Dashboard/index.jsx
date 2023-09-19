import { Header } from "../../components/Header";
import { StyledHeaderDashboard, StyledSectionDashboard } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Loader } from "../../components/Loader";
import { StyledLoader } from "../../components/Loader/style";
import { NewTechModal } from "../../components/NewTechModal";
import { EditTechModal } from "../../components/EditTechModal";
import { ToastContext } from "../../providers/ToastContext";
import { TechContext } from "../../providers/TechContext";

export function DashboardPage() {
  const { userData, user, loadingUser, userTechs, Navigate } = useContext(UserContext);
  const { Toaster } = useContext(ToastContext);
  const { setIsNewTechOpen, isNewTechOpen, setCurrentTech, currentTech } = useContext(TechContext);

  if (loadingUser) {
    return (
      <>
        <StyledLoader>
          <Loader></Loader>
        </StyledLoader>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header innerText={"Sair"} />
      <StyledHeaderDashboard>
        {userData ? (
          <>
            <h1>Olá, {user.name}</h1>
            <span>{user.course_module}</span>
          </>
        ) : null}
      </StyledHeaderDashboard>
      <main>
        <StyledSectionDashboard>
          <div>
            <h1>Tecnologias</h1>
            <button
              onClick={() => {
                setIsNewTechOpen(true), setCurrentTech(null);
              }}
            >
              +
            </button>
          </div>
          <section>
            <ul>
              {userTechs.length == 0 ? (
                <h4>Nenhuma tecnologia cadastrada</h4>
              ) : (
                <>
                  {userTechs.map((tech) => {
                    return (
                      <li
                        key={tech.id}
                        onClick={() => {
                          setCurrentTech(tech), setIsNewTechOpen(false);
                        }}
                      >
                        <h1>{tech.title}</h1>
                        <h2>{tech.status}</h2>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </section>
          {isNewTechOpen ? <NewTechModal /> : null}
          {currentTech ? <EditTechModal /> : null}
        </StyledSectionDashboard>
        <div>
          <Toaster />
        </div>
      </main>
    </>
  );
}
