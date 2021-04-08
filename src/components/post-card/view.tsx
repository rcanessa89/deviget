import { FunctionComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

import { postCardCreated } from './utils';
import { PostCardProps } from './types';
import { postCardUseStyles } from './styles';

const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  thumbnail,
  author,
  num_comments,
  created_utc
}) => {
  const classes = postCardUseStyles();

  return (
    <ListItem
      divider
      button
      className={clsx({
        [classes.unread]: false
      })}
      classes={{
        root: classes.root
      }}
    >
      <IconButton
        aria-label="delete"
        size="small"
        classes={{
          root: classes.iconButtonRoot
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <ListItemAvatar>
        <Avatar alt={`${author} - ${title}`} src={thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={author}
        secondary={
          <>
            <Typography
              gutterBottom
              component="p"
              variant="body2"
              color="textPrimary"
            >
              {title}
            </Typography>
            <Typography variant="caption" display="block">
              {num_comments} Comments
            </Typography>
            <Typography className={classes.createdAt} variant="caption" display="block">
              {postCardCreated(created_utc)}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default PostCard;
