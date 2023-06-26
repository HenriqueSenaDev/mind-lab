import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import MainLayout from "./layouts/main";
import Login from "./pages/login";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<MainLayout children={<h1>MindLab home page</h1>} />} />
                <Route path="/lessons" element={<MainLayout children={<h1>MindLab lessons page</h1>} />} />
                <Route path="/performance" element={<MainLayout children={<h1>MindLab performance page</h1>} />} />
                <Route path="/materials" element={<MainLayout children={<h1>MindLab materials page</h1>} />} />
                <Route path="/forums" element={<MainLayout children={<h1>MindLab forums page</h1>} />} />
                <Route path="/achievements" element={<MainLayout children={<h1>MindLab achievements page</h1>} />} />
                <Route path="/personalization" element={<MainLayout children={<h1>MindLab personalization page</h1>} />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;