import { Box, Typography } from '@mui/material'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useState } from 'react'
import Markdown from 'react-markdown'

export default function AIBubble({ data }) {

    return(
        <Box
        display="flex"
        alignSelf="start"
        >   
            <SmartToyOutlinedIcon
            sx={{
                border: "2px solid black",
                borderRadius: "25px",
                padding: "2px",
                fontSize: "28px"
                
            }}
            />
            <Box
            maxWidth="550px"
            display="flex"
            alignSelf="start"
            p={2}
            sx={{ backgroundColor: "#e7e7e7", borderRadius: "30px", px: "20px", marginLeft: "10px"}}
            >
                <Typography
                color="black"
                >
                    <Markdown>{data}</Markdown>
                </Typography>
            </Box>
        </Box>
    )
}