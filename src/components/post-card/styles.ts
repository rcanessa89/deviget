import { makeStyles } from '@material-ui/core/styles';

export const postCardUseStyles = makeStyles((theme) => ({
  container: {
    position: 'relative'
  },
  root: {
    height: 130,
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
  },
  title: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  }
}));
