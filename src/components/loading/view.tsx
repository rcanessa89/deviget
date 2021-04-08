import { FunctionComponent } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingProps } from './types';
import { useLoadingStyles } from './styles';

const Loading: FunctionComponent<LoadingProps> = ({ open, close }) => {
  const classes = useLoadingStyles();

  return (
    <Backdrop className={classes.backdrop} open={open} onClick={close}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
