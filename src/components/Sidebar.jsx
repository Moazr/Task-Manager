import { CalendarIcon, EditIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <List color={'white'} spacing={'30px'} fontSize={'24px'} position={{xl: 'fixed', lg: 'fixed'}}>   
            <ListItem border={'1px solid'} borderRadius={'10px'} p={'10px'}>
                <NavLink to={'/'}>
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
            </ListItem>

            <ListItem border={'1px solid'} borderRadius={'10px'} p={'10px'}>
                <NavLink to={'/create'}>
                    <ListIcon as={EditIcon} />
                    Tasks
                </NavLink>
            </ListItem>

            <ListItem border={'1px solid'} borderRadius={'10px'} p={'10px'}>
                <NavLink to={'/profile'}>
                    <ListIcon as={InfoOutlineIcon} />
                    Profile
                </NavLink>
            </ListItem>
        </List>
    )
}
