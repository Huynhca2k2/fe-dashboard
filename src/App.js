import { Box, Flex } from "@radix-ui/themes";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Box className="h-screen !flex !flex-col">
        <Header />
        <Flex className="!flex-grow">
          <Box width="64px" className="h-full">
            <Sidebar />
          </Box>
          <Box className="h-full w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </Flex>
      </Box>
    </BrowserRouter>
  );
}

export default App;
