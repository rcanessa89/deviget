import { FunctionComponent, memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { postCardCreated } from './utils';
import { PostCardProps } from './types';
import { postCardUseStyles } from './styles';
import { LS_UNREAD_DATA } from './constants';
import { LS, useLS } from 'utils/ls';

const ls = new LS(LS_UNREAD_DATA);

const shouldReRender = (prev: PostCardProps, props: PostCardProps): boolean => {
  if (
    prev.title !== props.title &&
    prev.thumbnail !== props.thumbnail &&
    prev.author !== props.author &&
    prev.num_comments !== props.num_comments &&
    prev.created_utc !== props.created_utc
  ) {
    return false;
  }

  return true;
};

const PostCard: FunctionComponent<PostCardProps> = memo(
  ({
    id,
    title,
    thumbnail,
    author,
    num_comments,
    created_utc,
    onDissmissPost
  }) => {
    const history = useHistory();
    const classes = postCardUseStyles();
    const [isReaded, setIsReaded] = useLS(ls, id);
    const onClickItem = () => {
      if (!isReaded) {
        setIsReaded('true');
      }

      history.push(`/${id}`);
    };

    return (
      <div className={classes.container}>
        <IconButton
          aria-label="delete"
          size="small"
          classes={{
            root: classes.iconButtonRoot
          }}
          onClick={onDissmissPost}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <ListItem
          divider
          button
          className={clsx({
            [classes.unread]: !!isReaded
          })}
          classes={{
            root: classes.root
          }}
          onClick={onClickItem}
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
  },
  shouldReRender
);

export default PostCard;
