import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface Props {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const useStyles = makeStyles({
  button: {
    backgroundColor: '#888',
    color: '#000',
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    width: 256,
    borderColor: '#000',
  },
});

export const PrimaryButton: React.VFC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};
