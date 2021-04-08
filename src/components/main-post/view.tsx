import { memo, FunctionComponent, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';

import { MainPostProps } from './types';
import { mainPostUseStyles } from './styles';

const shouldReRender = (prev: MainPostProps, props: MainPostProps): boolean => {
  if (
    prev.title !== props.title &&
    prev.author !== props.author
  ) {
    return false;
  }

  const prevImgUrl = prev.preview?.images && prev.preview?.images.length ? prev.preview.images[0].source.url : null;
  const imgUrl = props.preview?.images && props.preview?.images.length ? props.preview.images[0].source.url : null;

  if (prevImgUrl !== imgUrl) {
    return false;
  }

  return true;
};

const MainPost: FunctionComponent<MainPostProps> = memo(({
  title,
  author,
  preview
}) => {
  const [isImgOpen, setIsImgOpen] = useState(false);
  const classes = mainPostUseStyles();
  const imgUrl = preview?.images && preview?.images.length ? preview.images[0].source.url.replace(/&amp;/g, '&') : null;

  return (
    <>
      <div>
        <Typography
          gutterBottom
          variant="h3"
          component="h1"
          align="center"
        >
          {author}
        </Typography>
        {imgUrl && (
          <Card
            classes={{
              root: classes.card
            }}
            onClick={() => setIsImgOpen(true)}
          >
            <CardMedia
              component="img"
              alt={title}
              image={imgUrl}
              title={title}
            />
          </Card>
        )}
        <Typography
          variant="h4"
          component="h2"
          align="center"
        >
          {title}
        </Typography>
      </div>
      <Dialog fullWidth maxWidth="md" onClose={() => setIsImgOpen(false)} aria-labelledby={`Image of ${title}`} open={isImgOpen}>
        {imgUrl && (
          <Card
            classes={{
              root: classes.modalCard
            }}
            onClick={() => setIsImgOpen(true)}
          >
            <CardMedia
              component="img"
              alt={title}
              image={imgUrl}
              title={title}
            />
          </Card>
        )}
      </Dialog>
    </>
  )
}, shouldReRender);



export default MainPost;
