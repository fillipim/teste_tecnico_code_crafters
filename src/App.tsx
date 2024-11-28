import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";

import "@/styles/index.css";

const App: React.FC = () => {
  return (
    <Box p="2rem">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
