import logo from "./logo.svg";
import "./App.css";
import { UsersList } from "./UsersList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CreateUser } from "./CreateUser";
import { Edituser } from "./Edituser";
import { Login } from "./Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AppLogout from "./AppLogout";

function App() {

  const MainDashboardEntry = () => {
    return (
        <AppLogout>
            <UsersList />
        </AppLogout>
    )
}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            
            <Route path="/usersList" element={<MainDashboardEntry />} />
            <Route path="/usersList/:userId" element={<Edituser />} />
            <Route path="/createUser" element={<CreateUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <UsersList /> */}
    </div>
  );
}

export default App;
