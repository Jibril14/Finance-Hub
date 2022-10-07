import "./App.css";
import Layout from "./Layout/Layout";
//import BlankPage from "./Pages/Blank";
//import RegistrationPage from "./Pages/RegistrationPage";
import Register from "./Components/Ui/Register/Register";
import Login from "./Components/Ui/Login/Login";
import Home from "./Pages/Home";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Detail from "./Pages/Detail";
import Category from "./Pages/Category";
import Featured from "./Pages/Featured";
import Activation from "./Pages/Activation";


function App() {
    const location = useLocation();

    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/hn/:id" element={<Featured />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/activate/:uid/:token" element={<Activation />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
