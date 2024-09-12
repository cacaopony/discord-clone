import React from "react";
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
    return <div className="sidebar">
        <div className="sidebarLeft">
            <div className="serverIcon">
                <img src="./logo192.png" alt=""></img>
            </div>
            <div className="serverIcon">
                <img src="./logo192.png" alt=""></img>
            </div>
        </div>
        <div className="sidebarRight">
            <div className="sidebarTop">
                <h3>Discord</h3>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>
            <div className="sidebarChannels">
                <div className="sidebarChannelsHeader">
                    <div className="sidebarHeader">
                        <ExpandMoreIcon></ExpandMoreIcon>
                        <h4>なんとなくチャンネル</h4>
                    </div>
                    <AddIcon className="sidebarAddIcon"></AddIcon>
                </div>

                <div className="sidebarChannelList">
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                </div>
            </div>
        </div>
    </div>;
};

export default Sidebar;