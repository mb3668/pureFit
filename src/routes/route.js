import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../screens/loginScreen/loginScreen";
import HomeScreen from '../screens/homeScreen/homeScreen';
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginScreen/>} />
                <Route exact path="Home" element={<HomeScreen/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;