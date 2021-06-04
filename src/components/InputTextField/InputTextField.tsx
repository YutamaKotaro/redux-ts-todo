import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  label: string;
  margin?: string;
  multiline: boolean;
  fullWidth: boolean;
  required: boolean;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextField: React.VFC<Props> = (props) => {
  return (
    <TextField
      label={props.label}
      margin={'dense'}
      multiline={props.multiline}
      value={props.value}
      fullWidth={props.fullWidth}
      required={props.required}
      type={props.type}
      onChange={props.onChange}
    />
  );
};
