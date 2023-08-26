import {
  ChatIcon,
  CheckIcon,
  EmailIcon,
  PhoneIcon,
  CheckCircleIcon,
  WarningIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Tabs 

    variant='enclosed'
    colorScheme="linkedin"
    bg={"linkedin"}
    >
      <TabList>
        <Tab isSelected 
        >Account Info</Tab>
        <Tab>Tasks History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List p={"10px"} spacing={4}>
            <ListItem>
              <ListIcon>
                <InfoIcon />
              </ListIcon>
              Name : Mohammed Alzarea 
            </ListItem>
            <ListItem>
              <ListIcon>
                <EmailIcon />
              </ListIcon>
              Email : 
              <Link href="moazr193@gmail.com">
                Mohammed.Alzarea@gmail.com
              </Link>
              
            </ListItem>
            <ListItem>
              <ListIcon>
                <PhoneIcon />
              </ListIcon>
              Phone Number : +966 50 489 9897
            </ListItem>
            <ListItem>
              <ListIcon>
                <ChatIcon />
              </ListIcon>
              Chat With Me : Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List p={"10px"} spacing={4}>
            <ListItem>
              <ListIcon>
                <CheckCircleIcon color={"green.400"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <WarningIcon color={"red"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <CheckCircleIcon color={"green.400"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <WarningIcon color={"red"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <CheckCircleIcon color={"green.400"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <WarningIcon color={"red"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <CheckCircleIcon color={"green.400"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <WarningIcon color={"red"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <CheckCircleIcon color={"green.400"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon>
                <WarningIcon color={"red"} />
              </ListIcon>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
