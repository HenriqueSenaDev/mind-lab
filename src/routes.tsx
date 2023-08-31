import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import MainLayout from "./layouts/main";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Lesson from "./pages/lesson";
import Personalization from "./pages/personalization";
import Home from "./pages/home";

function AppRoutes() {
    function onMainLayout(element: React.ReactNode) {
        return <MainLayout children={element} />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={onMainLayout(<Home />)} />
                <Route path="/courses" element={onMainLayout(<Courses />)} />
                <Route path="/courses/*" element={onMainLayout(<Lesson />)} />
                <Route path="/performance" element={onMainLayout(<h1>Página indisponível</h1>)} />
                <Route path="/materials" element={onMainLayout(<h1>Página indisponível</h1>)} />
                <Route path="/forums" element={onMainLayout(<h1>Página indisponível</h1>)} />
                <Route path="/achievements" element={onMainLayout(<h1>Página indisponível</h1>)} />
                <Route path="/personalization" element={onMainLayout(<Personalization />)} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;