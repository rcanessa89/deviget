import { FunctionComponent, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { fetchPosts } from 'store/slices/post';
import { postSlice } from 'store/slices/post';
import { Layout } from 'components/layout';
import { PostCard } from 'components/post-card';
import { MainPost } from 'components/main-post';
import { Loading } from 'components/loading';
import { HomeRouteParams } from './types';

const HomeView: FunctionComponent<RouteComponentProps<HomeRouteParams>> = (
  props
) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) =>
    Object.values(state.post.data.children)
  );
  const loadingIsOpen = useAppSelector(
    (state) => state.post.status === 'pending'
  );
  const currentPost = useAppSelector(
    (state) => state.post.data.children[props.match.params.postId]
  );
  const onDismissAll = useCallback(
    () => dispatch(postSlice.actions.dismissAll()),
    [dispatch]
  );
  const onDissmissPost = (id: string) => () =>
    dispatch(postSlice.actions.dismissPost(id));
  const drawer = posts.map((p) => (
    <PostCard
      key={p.key}
      {...p}
      onDissmissPost={onDissmissPost(p.id)}
    />
  ));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Layout title="Reddit top 50" drawer={drawer} onDismissAll={onDismissAll}>
        <MainPost {...currentPost} />
      </Layout>
      <Loading open={loadingIsOpen} />
    </>
  );
};

export default HomeView;
