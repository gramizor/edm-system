import React, { useState } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Card2 from "./Pages/CustomCard/Card2";
import { Alert, Snackbar } from "@mui/material";

const App = () => {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarStatus, setSnackbarStatus] = useState('success');

  const handleSnackbarOpen = (status, message) => {
    setSnackbarMessage(message);
    setSnackbarStatus(status);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home handleSnackbarOpen={handleSnackbarOpen} />} />
        <Route path="/user/:id" element={<Card2 handleSnackbarOpen={handleSnackbarOpen} />} />
      </Routes>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbarStatus}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </HashRouter>
  );
};

export default App;
