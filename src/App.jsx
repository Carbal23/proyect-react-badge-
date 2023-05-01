import { MainPage } from "./pages";
import "bootstrap/dist/css/bootstrap.css";
import { BadgesPages } from "./pages/BadgesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./Componentes/NotFound";
import { NavBar } from "./pages/NavBar";
import { BadgeEdit } from "./pages/BadgesEdit";
import { BadgeDetails } from "./pages/BadgeDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/badgesPages" element={<BadgesPages />} />
          <Route path="/:badgeId/edit" element={<BadgeEdit/>}/>
          <Route path="/:badgeId/details" element={<BadgeDetails/>}/>
          <Route path="*" element={<NotFound />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
