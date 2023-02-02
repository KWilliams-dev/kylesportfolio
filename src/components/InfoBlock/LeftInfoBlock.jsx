import { Box, Typography } from "@mui/material"

export const LeftInfoBlock = ({title, info}) => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 3,
            width: "80%"
        }}>
            <Typography variant="h3">{title}</Typography>
            <Box sx={{marginTop: 2}}>
                <Typography>{info}</Typography>
            </Box>
        </Box>
    )
}

