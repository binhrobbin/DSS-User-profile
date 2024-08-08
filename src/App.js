import './App.css';
import {Route, Routes} from "react-router-dom";
import Users from "./components/user/Users";
import DefaultLayout from "./layout/DefaultLayout";
import AccessDenied from "./components/error/AccessDenied";

function App() {
  return (
      <>
          <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
              <Route path="/users" element={<Users/>}></Route>
            </Route>
            <Route path={"/access-denined"} element={<AccessDenied />} />
          </Routes>
      </>
  );
}

export default App;
