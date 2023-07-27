import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import MainLayout from "./layouts/main";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Lesson from "./pages/lesson";

function AppRoutes() {
    function onMainLayout(element: React.ReactNode) {
        return <MainLayout children={element} />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={onMainLayout(<h1>MindLab home page</h1>)} />
                <Route path="/courses" element={onMainLayout(<Courses />)} />
                <Route path="/courses/*" element={onMainLayout(<Lesson />)} />
                <Route path="/performance" element={onMainLayout(<h1>MindLab performance page</h1>)} />
                <Route path="/materials" element={onMainLayout(<h1>MindLab materials page</h1>)} />
                <Route path="/forums" element={onMainLayout(<h1>MindLab forums page</h1>)} />
                <Route path="/achievements" element={onMainLayout(<h1>MindLab achievements page</h1>)} />
                <Route path="/personalization" element={onMainLayout(<h1>MindLab personalization page</h1>)} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;