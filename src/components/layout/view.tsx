import { useState, FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useTheme } from '@material-ui/core/styles';
import { LayoutProps } from './types';
import { layoutUseStyles } from './styles';
import { PAGE_SIZE } from './constants';
import './card-transition.css';

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  drawer = [],
  title,
  onDismissAll
}) => {
  const classes = layoutUseStyles();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageStart = (page * PAGE_SIZE) - PAGE_SIZE;
  const pageEnd = pageStart + PAGE_SIZE;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerEl = (
    <TransitionGroup>
      {
        drawer.slice(pageStart, pageEnd).map(d => (
          <CSSTransition key={d.props.id} timeout={500} classNames="item">
            {d}
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer.length > PAGE_SIZE && (
              <Pagination
                count={Math.ceil(drawer.length / PAGE_SIZE)}
                siblingCount={1}
                page={page}
                onChange={(e, v) => setPage(v)}
                classes={{
                  root: classes.paginationcontainer
                }}
              />
            )}
            <List>{drawerEl}</List>
            <div className={classes.dismissAllbuttonContainer}>
              <Button
                className={classes.dismissAllbutton}
                color="secondary"
                size="large"
                variant="contained"
                onClick={onDismissAll}
              >
                Dismiss All
              </Button>
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          {drawer.length > PAGE_SIZE && (
            <Pagination
              count={Math.ceil(drawer.length / PAGE_SIZE)}
              siblingCount={1}
              page={page}
              onChange={(e, v) => setPage(v)}
              classes={{
                root: classes.paginationcontainer
              }}
            />
          )}
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            <List>{drawerEl}</List>
          </Drawer>
          <div className={classes.dismissAllbuttonContainer}>
            <Button
              className={classes.dismissAllbutton}
              color="secondary"
              size="large"
              variant="contained"
              onClick={onDismissAll}
            >
              Dismiss All
            </Button>
          </div>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
