import { auth, googleProvider } from "../config/firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const signIn = async () => {
    try {
      console.log('before')
      await createUserWithEmailAndPassword(auth, email, password)
      setUser({ loggedIn: true });

      console.log('after')

    } catch (err) {
      console.error(err);
    } navigate("/home");
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

    } catch (err) {
      console.error(err);
    }
  };
  const bgColor = useColorModeValue("gray.100", "gray.500");

  return (
    <>
      {/* <input
        name="email"
        type="email"
        placeholder="example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        name="password"
        type="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>
        Sign in with Google 
      </button> */}

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
          <FormControl isRequired mb={"20px"}>
            <FormLabel>Email: </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired mb={"20px"}>
            <FormLabel>Password: </FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Center>
            <HStack>
              <Button
                colorScheme="linkedin"
                onClick={signInWithGoogle}
                leftIcon={<FaGoogle />}
              >
                Sign in with Google
              </Button>
              <Button type="submit" colorScheme="linkedin">
                Sign In
              </Button>
            </HStack>
          </Center>
        </form>

        <Center></Center>
      </Container>
    </>
  );
}
