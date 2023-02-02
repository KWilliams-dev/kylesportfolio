import { Box, Typography } from "@mui/material"

export const RightInfoBlock = ({title, info}) => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 3,
            marginLeft: 35
        }}>
            <Typography sx={{display: 'flex', justifyContent: 'right'}} variant="h3">{title}</Typography>
            <Typography sx={{display: 'flex', textAlign: "right"}} >{info}</Typography>
        </Box>
    )
}