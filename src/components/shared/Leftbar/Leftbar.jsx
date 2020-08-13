import React from 'react';
import {Box, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import CachedIcon from '@material-ui/icons/Cached';
import themeStyles from './Leftbar.styles';
import {connect} from "react-redux";
import {logout} from "../../../store/userReducer";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Leftbar = (props) => {
    const classes = useStyles();

    return (
        <Drawer variant="permanent" anchor="left" classes={{paper: classes.drawer}}>
            <List>
                <ListItem button component={NavLink} to={"/"}>
                    <ListItemIcon className={classes.listIcon}>
                        <HomeIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
            </List>
            <Divider className={classes.divider}/>
            <List>
                <ListItem button>
                    <ListItemIcon className={classes.listIcon}>
                        <CachedIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Views"/>
                </ListItem>
            </List>
            <Divider className={classes.divider}/>
            <Box m="1rem 0 0">
                <List>
                    <ListItem>
                        <Button variant="contained" fullWidth={true}>Create New</Button>
                    </ListItem>
                    <ListItem button component={NavLink} to={"/"} className={classes.link}>
                        <ListItemText primary="All Tickets (5)"/>
                    </ListItem>
                    <ListItem button component={NavLink} to={"/"} className={classes.link}>
                        <ListItemText primary="Unresolved Tickets (2)"/>
                    </ListItem>
                    <ListItem button component={NavLink} to={"/"} className={classes.link}>
                        <ListItemText primary="Recently updated (0)"/>
                    </ListItem>
                    <ListItem button component={NavLink} to={"/"} className={classes.link}>
                        <ListItemText primary="Solved Tickets (5)"/>
                    </ListItem>
                </List>
            </Box>
            <Box m="3rem 0 0">
                <List>
                    <ListItem button onClick={props.logout}>
                        <ListItemText primary="Logout"/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
};


export default connect(null, {logout})(Leftbar);
