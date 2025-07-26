"use client" 
import { Box, TextField, IconButton, Stack } from  '@mui/material' 
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useRef } from 'react'
import UserBubble from './UserBubble'
import AIBubble from './AIBubble'
import { POST } from '../api/chat/route'

export default function Chatbox() {
    const [prompt, setPrompt] = useState('')
    const [aiMessage, setAiMessage] = useState('')
    const [messages, setMessages] = useState([])
    const messageEndRef = useRef(null)

    const handleSend = async () => {
        const res = await POST(prompt)
        console.log(res)
        setAiMessage(res)
        
        setMessages((message) => [...message, { role: 'user', text: prompt }])
        setMessages((message) => [...message, { role: 'ai', text: res }])
        setPrompt('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent new line in the text field
            handleSend();
        }
    }

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth'});
    };

    useEffect (() =>{
        scrollToBottom();
    }, [messages]);

    return(
        <Box
        height="85vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ marginTop: "100px"}}
        >
            <Box
            width="100%"
            maxWidth="1000px"
            sx={{
                marginBottom: "20px",
                overflow: 'auto'
            }}
            >
                <Stack>
                    {messages.map((message, index) => (
                        message.role === 'user' ? (
                            <UserBubble key={index} data={message.text} />
                        ) : message.role === 'ai' ? (
                            <AIBubble key={index} data={message.text} />
                        ) : null
                    ))}
                    <div ref={messageEndRef} />
                </Stack>

            </Box>

            <Box
            border="1px solid red"
            borderRadius="30px"
            display="flex"
            alignItems="center"
            marginBottom={3}
            width="100%"
            maxWidth="950px"
            >
                <TextField
                placeholder="Ask TeslaGuideAI..."
                fullWidth
                value={prompt}
                autoComplete='off'
                sx={{
                    "& fieldset": {
                        border: "none"
                    },
                    paddingLeft: "20px"
                }}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                />  
                    <IconButton 
                        onClick={() => {
                            handleSend();
                        }}
                    >
                        <SendIcon
                        sx={{ color: "red", margin: "5px" }}
                        />
                    </IconButton>
            </Box>
        </Box>
    )
}