import { Box, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react'

export default function UserBubble({ data }) {

    return(
        <Box
        display="flex"
        alignSelf="flex-end"
        >
            <Box
            maxWidth="400px"
            display="flex"
            alignSelf="flex-end"
            p={2}
            sx={{ backgroundColor: "red", borderRadius: "30px", px: "20px", marginRight: "10px"}}
            >
                <Typography
                color="white"
                >
                    {data}
                </Typography>
            </Box>
            <AccountCircleOutlinedIcon
            sx={{
                color: "red",
                fontSize: "28px"
            }}
            />
        </Box>
    )
}