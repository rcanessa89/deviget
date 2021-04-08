import { FunctionComponent, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { fetchPosts } from 'store/slices/post';

import { Layout } from 'components/layout';

const HomeView: FunctionComponent<RouteProps> = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <Layout
            title="Reddit top 50"
        />
    )
};

export default HomeView;
