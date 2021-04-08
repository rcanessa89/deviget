import { FunctionComponent, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import { useHistory } from 'react-router-dom';

import { postCardCreated } from './utils';
import { PostCardProps } from './types';
import { postCardUseStyles } from './styles';
import { LS_UNREAD_DATA } from './constants';
import { useAppDispatch } from 'store';
import { postSlice } from 'store/slices/post';

const useLSUnreaded = createLocalStorageStateHook<{ [key: string]: string }>(
  LS_UNREAD_DATA,
  {}
);

const PostCard: FunctionComponent<PostCardProps> = memo(
  ({ id, title, thumbnail, author, num_comments, created_utc }) => {
    const dispatch = useAppDispatch();
    const [unreaded, setUnreaded] = useLSUnreaded();
    const history = useHistory();
    const classes = postCardUseStyles();
    const handleClick = () => {
      if (!unreaded[id]) {
        setUnreaded({
          ...unreaded,
          [id]: 'dfs'
        });
      }

      history.push(`/${id}`);
    };
    const onDelete = () => {
      dispatch(postSlice.actions.removePost(id));
    };

    return (
      <div className={classes.container}>
        <IconButton
          aria-label="delete"
          size="small"
          classes={{
            root: classes.iconButtonRoot
          }}
          onClick={onDelete}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <ListItem
          divider
          button
          className={clsx({
            [classes.unread]: !!unreaded[id]
          })}
          classes={{
            root: classes.root
          }}
          onClick={handleClick}
        >
          <ListItemAvatar>
            <Avatar alt={`${author} - ${title}`} src={thumbnail} />
          </ListItemAvatar>
          <ListItemText
            primary={author}
            secondary={
              <>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  {title}
                </Typography>
                <Typography component="span" variant="caption" display="block">
                  {num_comments} Comments
                </Typography>
                <Typography
                  component="span"
                  className={classes.createdAt}
                  variant="caption"
                  display="block"
                >
                  {postCardCreated(created_utc)}
                </Typography>
              </>
            }
          />
        </ListItem>
      </div>
    );
  }
);

export default PostCard;
