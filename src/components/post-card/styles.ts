import { makeStyles } from '@material-ui/core/styles';

export const postCardUseStyles = makeStyles((theme) => ({
  container: {
    position: 'relative'
  },
  root: {
    height: 140,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  unread: {
    backgroundColor: theme.palette.grey[100]
  },
  iconButtonRoot: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1
  },
  createdAt: {
    textTransform: 'capitalize'
  }
}));
