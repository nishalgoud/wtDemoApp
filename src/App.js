import logo from "./logo.svg";
import "./App.css";
import { UsersList } from "./UsersList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CreateUser } from "./CreateUser";
import { Edituser } from "./Edituser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usersList"  element={<UsersList />} />
          <Route path="/usersList/:userId"   element={<Edituser />} />
          <Route path="/createUser" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
      {/* <UsersList /> */}
    </div>
  );
}

export default App;
