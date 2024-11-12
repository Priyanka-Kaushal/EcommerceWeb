import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact index path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
