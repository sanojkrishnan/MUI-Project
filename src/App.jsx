import React from "react";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import {Box, Stack} from "@mui/material"

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
      <SideBar />
      <Feed />
      <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
