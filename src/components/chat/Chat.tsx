import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import { Gif } from "@mui/icons-material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "./ChatMessage";

const Chat = () => {
    return <div className="chat">
        <ChatHeader></ChatHeader>
        <div className="chatMessage">
            <ChatMessage></ChatMessage>
            <ChatMessage></ChatMessage>
            <ChatMessage></ChatMessage>
            <ChatMessage></ChatMessage>
        </div>
        <div className="chatInput">
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
            <form>
                <input type="text" placeholder="#Udemyへメッセージを送信"></input>
                <button type="submit" className="chatInputbutton">

                </button>
            </form>
            <div className="chatInputIcons">
                <CardGiftcardIcon></CardGiftcardIcon>
                <Gif></Gif>
                <EmojiEmotionsIcon></EmojiEmotionsIcon>
            </div>
        </div>
    </div>
}

export default Chat;