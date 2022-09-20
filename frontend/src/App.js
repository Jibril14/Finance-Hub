import "./App.css";
import Layout from "./Layout/Layout";
import BlankPage from "./Pages/Blank";
//import RegistrationPage from "./Pages/RegistrationPage";
import Register from "./Components/Ui/Register/Register";
import Login from "./Components/Ui/Login/Login";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/order" element={<BlankPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
