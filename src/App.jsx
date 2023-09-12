// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Navigation from "../src/components/Navigation";
// import HomePage from "../src/pages/HomePage";
// import ArchivesPage from "../src/pages/ArchivesPage";
// import NoteDetailPage from "../src/pages/NoteDetailPage";
// import AddPage from "./pages/AddPage";
// import NotFoundPage from "./pages/NotFoundPage";

// function App() {
//   return (
//     <div className="app-container">
//       <header>
//         <Navigation />
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/archives" element={<ArchivesPage />} />
//           <Route path="/notes/:id" element={<NoteDetailPage />} />
//           <Route path="/notes/new" element={<AddPage />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../src/components/Navigation";
import HomePage from "../src/pages/HomePage";
import ArchivesPage from "../src/pages/ArchivesPage";
import NoteDetailPage from "../src/pages/NoteDetailPage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  const [locale, setLocale] = React.useState(localStorage.getItem("locale") || "id");

  React.useEffect(() => {
    const fetchUserLogged = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false); // Set initializing ke false setelah data pengguna diambil
      } catch (error) {
        console.error("Error fetching user:", error);
        setInitializing(false); // Set initializing ke false jika terjadi kesalahan saat mengambil data pengguna
      }
    };

    fetchUserLogged();
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    setLocale(newLocale);
  };

  if (initializing) {
    return null; // Tampilkan null jika aplikasi masih dalam proses inisialisasi
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleProvider value={{ locale, toggleLocale }}>
          <div className="app-container">
            <header>
              <Navigation locale={locale} />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} locale={locale} />} />
                <Route path="/register" element={<RegisterPage locale={locale} />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{ locale, toggleLocale }}>
        <div className="app-container">
          <header>
            <Navigation
              showArchivesButton={authedUser !== null} // Tampilkan tombol arsip jika pengguna sudah login
              showLogoutButton={authedUser !== null} // Tampilkan tombol logout jika pengguna sudah login
              logout={onLogout}
              name={authedUser?.name}
              locale={locale} // Tambahkan prop locale di sini
            />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage locale={locale} />} />
              <Route path="/archives" element={<ArchivesPage locale={locale} />} />
              <Route path="/notes/:id" element={<NoteDetailPage />} />
              <Route path="/notes/new" element={<AddPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
