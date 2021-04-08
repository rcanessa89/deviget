import { FunctionComponent, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import { useAppDispatch, useAppSelector } from 'store';
import { fetchPosts } from 'store/slices/post';
import { postSlice } from 'store/slices/post';
import { Layout } from 'components/layout';
import { PostCard } from 'components/post-card';
import { MainPost } from 'components/main-post';
import { HomeRouteParams } from './types';
import './post-card-transition.css';

const HomeView: FunctionComponent<RouteComponentProps<HomeRouteParams>> = (props) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state =>
    Object.values(state.post.data.children)
  );
  const currentPost = useAppSelector(state => state.post.data.children[props.match.params.postId]);
  const onDismissAll = useCallback(() => dispatch(postSlice.actions.dismissAll()), [dispatch]);
  const onDissmissPost = (id: string) => () => dispatch(postSlice.actions.dismissPost(id));
  const drawer = (
    <TransitionGroup>
      {
        posts.map((p) => (
          <CSSTransition
            key={p.id}
            timeout={500}
            classNames="item"
          >
            <PostCard
              {...p}
              onDissmissPost={onDissmissPost(p.id)}
            />
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Layout
      title="Reddit top 50"
      drawer={drawer}
      onDismissAll={onDismissAll}
    >
      <MainPost {...currentPost} />
    </Layout>
  );
};

export default HomeView;
