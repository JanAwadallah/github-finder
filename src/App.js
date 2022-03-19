import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./context/alert/AlertContext";
import GithubContext, { GithubProvider } from "./context/githup/GithubContext";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div
            style={{ caretColor: "transparent" }}
            className="flex flex-col justify-between h-screen"
          >
            <Navbar />
            <main className="container mx-auto px-3">
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:login" element={<UserPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
