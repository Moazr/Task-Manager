import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import { DarkMode, Grid, GridItem, LightMode, useColorModeValue } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  const bgColor = useColorModeValue('white', 'gray.700');

  // const texColor = useColorModeValue();
  return (
    <Grid templateColumns={'repeat(6, 1fr)'} bg={'gray.50'}>
      <GridItem
      as={'aside'}
      colSpan={ {base: '6', lg: '2', xl: '1',} }
      bg={'linkedin.500'}
      color={'white'}
      minHeight={{xl:'100vh'}}
      p={'30px'}
      >
      <Sidebar />
      </GridItem>

      <GridItem
      as={'main'}
      colSpan={ {base: '6', lg: '4', xl: '5',} }
      bg={bgColor}
      p={'30px'}
      >
      <Nav />
      <Outlet />
      </GridItem>
    </Grid>
    
  )
}
