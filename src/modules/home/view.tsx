import { FunctionComponent, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { fetchPosts } from 'store/slices/post';
import { Layout } from 'components/layout';
import { PostCard } from 'components/post-card';

const HomeView: FunctionComponent<RouteProps> = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) =>
    Object.values(state.post.data.children)
  );

  const drawer = posts.map((p) => <PostCard key={p.id} {...p} />);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <Layout title="Reddit top 50" drawer={drawer} />;
};

export default HomeView;
