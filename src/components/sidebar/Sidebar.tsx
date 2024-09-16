import React from "react";
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";
import MicIcon from '@mui/icons-material/Mic';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return <div className="sidebar">
        <div className="sidebarLeft">
            <div className="serverIcon">
                <img src="./discordIcon.png" alt=""></img>
            </div>
            <div className="serverIcon">
                <img src="./discordIcon.png" alt=""></img>
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

                <div className="sidebarFooter">
                    <div className="sidebarAccount">
                        <img src="./icon.png" alt="柴犬のアイコン"></img>
                        <div className="accountName">
                            <h4>ShinCode</h4>
                            <span>#8162</span>
                        </div>
                    </div>

                    <div className="sidebarVoice">
                        <MicIcon></MicIcon>
                        <HeadsetMicIcon></HeadsetMicIcon>
                        <SettingsIcon></SettingsIcon>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Sidebar;