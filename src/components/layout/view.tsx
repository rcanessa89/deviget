import { FunctionComponent, useEffect } from 'react';

import { useAppDispatch } from 'store';
import { fetchPosts } from 'store/slices/post';

const Layout: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <div>Layout</div>
    );
};

export default Layout;
