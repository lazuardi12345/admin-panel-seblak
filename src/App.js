import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// Layout
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./components/login";
import Dashboard from "./scenes/dashboard";  // Pastikan import ini sudah benar
import Produk from "./scenes/produk";
import EditProduk from "./scenes/produk";
import AddProduk from "./scenes/produk";
import Contacts from "./scenes/transaction";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Level from "./scenes/level";
import Kategori from "./scenes/kategori";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          {/* Public Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} /> {/* Halaman Dashboard */}
              <Route path="/produk" element={<Produk />} />
              <Route path="/edit-produk/:id" element={<EditProduk />} />
              <Route path="/tambah-produk" element={<AddProduk />} />
              <Route path="/transaction" element={<Contacts />} />
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/level" element={<Level />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
