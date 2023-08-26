import React, { useContext } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

import {auth} from "../config/firebase"; 

import {createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from "react";

export default function Home() {
  const bgColor = useColorModeValue("gray.100", "gray.500");

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const signIn = async () => {
    try {
      console.log('bafore')
      await createUserWithEmailAndPassword(auth, email, password)
      setUser({ loggedIn: true });

      console.log('after')

    } catch (err) {
      console.error(err);
    } navigate("/home");
  };
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate(); // Initialize useHistory

  // const handleLogin = (event) => {
  //   event.preventDefault(); // Prevent the default form submission
  //   // console.log("Logging in...");

  //   const formData = new FormData(event.target);

  //   // Simulate a successful login
  //   setUser({ loggedIn: true });

  //   // Redirect to the dashboard
  //   navigate("/");
  // };

  return (
    <>
      <Heading mt={"150px"} textAlign={"center"}>
        Task Manager
      </Heading>
      <Container
        bg={bgColor}
        p={"20px"}
        mt={"20px"}
        border={"2px solid"}
        borderRadius={"15px"}
      >
        <Heading mb={"20px"} textAlign={"center"}>
          Log In
        </Heading>
        <form onSubmit={signIn}>
          {" "}
          {/* Use the onSubmit handler */}
          <FormControl isRequired mb={"20px"}>
            <FormLabel>Email: </FormLabel>
            <Input name="email" type="email" placeholder="example@gmail.com" 
            onChange={(e)=> setEmail(e.target.value)}
            />
          </FormControl>

          
          <FormControl isRequired mb={"20px"}>
            <FormLabel>Password: </FormLabel>
            <Input name="password" type="password" placeholder="********" 
            onChange={(e)=>setPassword(e.target.value)}
            />
            
          </FormControl>
         
          <Center>
            <Button colorScheme="linkedin" type="submit">
              Log In
            </Button>
          </Center>
        </form>
      </Container>
    </>
  );
}

export const logIn = () => {
  handleLogin();
};
