import React from "react";
import "./Nav.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { Avatar } from "@material-ui/core";

function Nav(){
    return (
        <div className="nav_container">
            <div className="nav_left">
            <DehazeIcon/>
            <img src="https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy"/>
            <SearchIcon/>
            <input type="text"/>
            </div>
            <div className="nav_right">
            <ViewComfyIcon/>
            <NotificationsIcon/>
            <Avatar/>
            </div>
        </div>
    );
}
export default Nav;
