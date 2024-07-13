import { Box, Flex } from "@radix-ui/themes";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebarPc";
import { useState } from "react";
import SidebarMoBile from "./components/sidebarMobile";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleToggleMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  };
  return (
    <BrowserRouter>
      <Box className="h-screen !flex !flex-col">
        <Header
          handleToggleMenu={handleToggleMenu}
          handleToggleMenuMobile={handleToggleMenuMobile}
        />
        <Flex className="!flex-grow">
          <Box className="h-full">
            <Sidebar isOpenMenu={isOpenMenu} />
            {isOpenMenuMobile && (
              <SidebarMoBile
                handleToggleMenuMobile={handleToggleMenuMobile}
                isOpenMenuMobile={isOpenMenuMobile}
              />
            )}
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
