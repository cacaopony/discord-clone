import React from "react";
import "./ChatMessage.scss"
import { Avatar } from "@mui/material";

const ChatMessage = () =>{
    return <div className="message">
        <Avatar></Avatar>
        <div className="messageInfo">
            <h4>Shin Code
                <span className="messageTimestamp">2024/9/16</span>
            </h4>

            <p>メッセージ本文</p>
        </div>
    </div>
};

export default ChatMessage;