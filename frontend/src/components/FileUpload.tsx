import * as React from 'react';
import {ReactNode} from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {SxProps} from "@mui/material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
type FileUploadProps = {
    onChange:React.ChangeEventHandler
    title:string
    sx: SxProps
    icon?: ReactNode
}

export default function FileUpload(props:FileUploadProps) {
    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={!props.icon ? <CloudUploadIcon/> : props.icon}
            sx={props.sx}
        >
            {!props.title ? "Upload file" : props.title}
            <VisuallyHiddenInput
                type="file"
                onChange={props.onChange}
                accept=".json,.csv,.xlsx,.geojson"
            />
        </Button>
    );
}
