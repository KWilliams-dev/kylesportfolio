import { Box, Typography, Button } from "@mui/material"

const textInputStyle = {
    width: "85%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "3px solid #555"
}

const slectionInputStyle = {
    marginTop: "5"
}

export const ContactModal = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <form>
                <Typography variant="h4" style={{paddingBottom: 20}}>Want to get in touch?</Typography>
                <label for="fname"><Typography>First Name</Typography></label>
                <input style={textInputStyle} type="text" id="fname" name="fname" />
                <label for="lname"><Typography>Last Name</Typography></label>
                <input style={textInputStyle} type="text" id="lname" name="lname" />
                <label for="lname"><Typography>Email</Typography></label>
                <input style={textInputStyle} type="text" id="lname" name="lname" />
                <label style={{ marginTop: 10 }} for="project"><Typography>Are you interested in learning more about one of the projects?</Typography></label>
                <select style={{
                    width: "100%",
                    padding: "16px 20px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#f1f1f1",
                }} type="select" id="project" name="project">
                    <option style={slectionInputStyle} value={"QuicKart"}>QuicKart</option>
                    <option style={slectionInputStyle} value={"SoftIQ"}><Typography>SoftIQ</Typography></option>
                    <option style={slectionInputStyle} value={"Lost Resident"}><Typography>Lost Resident</Typography></option>
                    <option style={slectionInputStyle} value={"Client Registrar"}><Typography>Client Registrar</Typography></option>
                </select>
                <Button style={{marginTop: 20}} variant="outlined">Submit</Button>
            </form>
        </Box>
    )
}