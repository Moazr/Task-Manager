import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import ToggleColorMode from "./ToggleColorMode";
export default function Nav() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useHistory

  const handleLogOut = () => {
    setUser({ loggedIn: false });
    navigate("/");
  };

  return (
    <Flex p={"10px"} mb={"30px"} alignItems="center" wrap={"wrap"}>
      <Heading>Task Manager</Heading>
      <Spacer></Spacer>

      <HStack spacing="20px">
        <Avatar src="public/images/IMG_2585.JPG" />
        <Text>Mohammed Alzarea</Text>
        <Button
          onClick={() => {
            handleLogOut();
          }}
          colorScheme="linkedin"
        >
          Log Out
        </Button>
        <ToggleColorMode/>
      </HStack>
    </Flex>
  );
}

export const logOut = () => {
  handleLogOut;
};
