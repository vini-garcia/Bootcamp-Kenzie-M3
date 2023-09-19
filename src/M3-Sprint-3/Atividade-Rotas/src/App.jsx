import { Routes, Route } from "react-router-dom";
import { members } from "./dataBase/members";
import { Home } from "./pages/Home";
import { Customer } from "./pages/Customer";
import { Company } from "./pages/Company";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home members={members} />} />
      <Route path="/customer/:id" element={<Customer members={members} />} />
      <Route path="/company/:id" element={<Company members={members} />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default App;
