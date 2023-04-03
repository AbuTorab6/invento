import React,{Fragment} from 'react';

import PostList from '../components/posts/PostList';
import SideNavigation from '../components/MasterLayout/SideNavigation';

const PostListPage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <PostList/>
            </SideNavigation>
        </Fragment>
    );
};

export default PostListPage;