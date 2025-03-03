import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import PostDetail from '../pages/PostDetail';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ProtectedRoute from '../components/ProtectedRoute';
import NavigationBar from '../components/NavigationBar';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postId" element={<PostDetail />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;