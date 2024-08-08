import './App.css';
import {Route, Routes} from "react-router-dom";
import Users from "./components/user/Users";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
      <>
          <Routes>
              {/*<Route path="/users" element={<Users/>}></Route>*/}
          <Route path={"/"} element={<DefaultLayout/>}>
              <Route path="/users" element={<Users/>}></Route>
          </Route>
          </Routes>
      </>
  );
}

export default App;
