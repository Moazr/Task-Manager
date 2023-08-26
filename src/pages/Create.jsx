import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";

import { db } from "../config/firebase";
import { addDoc,  collection } from "firebase/firestore";


export default function Create() {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const tasksCollectionRef = collection(db, "tasks");

  // add a new task
  const onSubmitTask= async () => {
    try {
      await addDoc(tasksCollectionRef, {
        title: taskTitle,
        description: taskDescription,
        dueDate: dueDate,
        id: Date.now() 
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box maxWidth={"480px"}>
      <Form method="post" action="/create">
        <FormControl mb={"40px"}>
          <FormLabel>Task Title:</FormLabel>
          <Input
            name="title"
            type="text"
            placeholder="Enter the Name of the task here..."
            onChange={(e) => setTaskTitle(e.target.value)}
            colorScheme="linkedin"
          />
        </FormControl>
        <FormControl mb={"40px"}>
          <FormLabel>Task Description:</FormLabel>
          <Textarea
            type="description"
            placeholder="Enter the Description of the task here..."
            onChange={(e)=> setTaskDescription(e.target.value)}
            colorScheme="linkedin"
          />
        </FormControl>

        <FormControl mb={"40px"}>
          <FormLabel>Task Due Date:</FormLabel>
          <Input
           name="date" 
           type="date" 
           onChange={(e)=> setDueDate(e.target.value)}

           colorScheme="linkedin.400" />
        </FormControl>

        <Center>
          <Button type="submit" colorScheme="linkedin" onClick={onSubmitTask}>
            Submit
          </Button>
        </Center>
      </Form>
    </Box>
  );
}



export const submit = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
  };
console.log(task)
  return redirect("/");
};
