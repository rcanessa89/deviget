import { makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 300;
const DISMISS_ALL_BUTTON_HEIGHT = 42;

export const layoutUseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    paddingBottom: DISMISS_ALL_BUTTON_HEIGHT
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  dismissAllbuttonContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH - 1,
    height: DISMISS_ALL_BUTTON_HEIGHT,
    zIndex: 1200,
    backgroundColor: theme.palette.background.paper
  },
  dismissAllbutton: {
    width: '100%',
    borderRadius: 0
  }
}));
