import { useState } from "react";
import Form from "./components/Form/Form";
import ShowProfile from "./components/ShowProfile/ShowProfile";
import { Routes, Route, useNavigate } from "react-router";

const App = () => {
  const [formReady, setFormReady] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const checkReadiness = (data) => {
    setFormReady(true);
    setFormData(data);

    navigate("/profile", { replace: true });
  };

  return (
      <Routes>
        <Route path="/" element={<Form onSubmit={checkReadiness} />} />
        <Route
          path="/profile"
          element={<ShowProfile data={formData} isProfileReady={formReady} />}
        />
      </Routes>
  );
};

export default App;
