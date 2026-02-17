import {Button, SxProps} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

type SendMailButtonProps = {
    isEnabled: boolean;
    inProNumbers?: Array<string>
    sx?: SxProps
}

export default function SendMailButton(props: Readonly<SendMailButtonProps>) {
    const generateMailTo = () => {
        const subject = encodeURIComponent("Validated Location data for Project " + props.inProNumbers.join(", "));
        const body = encodeURIComponent(`Dear sir or madam, \n\rThis email contains validated location data for the project(s): \n${props.inProNumbers.join(", \n")}\nIt was validated by the "Location Validator" on https://mapme-initiative.github.io/ogm-validator/. You can use the Location Validator Tool (https://mapme-initiative.github.io/ogm-validator/) yourself to check the data validity and see all project locations printed on a map.\nYours sincerly, `);
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }
    return (
        <Button variant="contained"
            disabled={!props.isEnabled}
            endIcon={<SendIcon />} sx={props.sx}
            onClick={generateMailTo} >
            Send Email
        </Button>
    )
}