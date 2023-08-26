import { AddIcon, CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Text,
  CheckboxIcon,
  Checkbox,
  LightMode,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

import { db } from "../config/firebase";
import { getDocs, doc, collection, deleteDoc } from "firebase/firestore";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const bgColor = useColorModeValue("gray.50", "gray.500");
  // const tasks = useLoaderData();

  const [taskList, setTaskList] = useState([]);
  const tasksCollectionRef = collection(db, "tasks");
  const [isDone, setIsDone] = useState(false);

// display the tasks on the dashboard
  const getTaskList = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTaskList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

 // delete a task

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'tasks', id)
    await deleteDoc(taskDoc); 
    getTaskList();
  }
 
  useEffect(() => {
    getTaskList();
  }, []);


 
  return (
    <>
      <Button mb="10px" colorScheme="linkedin" leftIcon={<AddIcon />}>
        <NavLink to={"/create"}>Add New Tasks</NavLink>
      </Button>
      <Spacer />
      <SimpleGrid spacing="25px" minChildWidth="300px">
        {taskList.map((task) => (
          <Card
            key={task.id}
            borderTop={"8px solid"}
            borderColor={"linkedin.500"}
            bgColor={bgColor}
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={""} />
                <Box>
                  <Heading as="h3" size="md">
                    {task.title}
                  </Heading>
                  <Text>by m</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody>
              <Text>{task.description}</Text>
            </CardBody>
           
              <Text
              pl='20px'
             fontWeight='bold'
              color={isDone ? "green.400": "red.400"}
              
              > Due Date: {task.dueDate}</Text>
            <Divider />

            <CardFooter>
              <HStack>
                <Checkbox 
                onChange={(e)=> setIsDone(e.target.checked)}
                >Done</Checkbox>
                {/* <Button variant={'ghost'} leftIcon={<CheckCircleIcon />}>Done</Button> */}
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Edit
                </Button>
                <Button 
                onClick={()=> deleteTask(task.id)}
                variant={"ghost"} leftIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}

      </SimpleGrid>
    </>
  );
}

// export const taskLoader = async () => {
//   const result = await fetch("http://localhost:3000/tasks");

//   return result.json();
// };
