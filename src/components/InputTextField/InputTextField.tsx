import React from "react";
import {TextField} from "@material-ui/core";

interface Props {
    label: string,
    margin?: string,
    multiline: boolean,
    fullWidth: boolean,
    required: boolean,
    type: string
}

export const InputTextField: React.VFC<Props> = (props) => {
    return (
        <TextField
            label={props.label} margin={'dense'} multiline={props.multiline}
            fullWidth={props.fullWidth} required={props.required} type={props.type}
        />
    )
}