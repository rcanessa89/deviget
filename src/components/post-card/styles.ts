import { makeStyles } from '@material-ui/core/styles';

export const postCardUseStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    position: 'relative'
  },
  unread: {
    backgroundColor: theme.palette.grey[100]
  },
  iconButtonRoot: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1)
  },
  createdAt: {
    textTransform: 'capitalize'
  }
}));
