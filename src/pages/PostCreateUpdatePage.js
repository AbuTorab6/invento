import React,{Fragment} from 'react';

import SideNavigation from '../components/MasterLayout/SideNavigation';
import PostCreateUpdate from '../components/posts/PostCreateUpdate';



const PostCreateUpdatePage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <PostCreateUpdate/>
            </SideNavigation>
        </Fragment>
    );
};

export default PostCreateUpdatePage;