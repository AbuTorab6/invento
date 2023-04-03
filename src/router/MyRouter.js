import React,{Fragment} from 'react';



import {Routes,Route,BrowserRouter} from 'react-router-dom'
import PostListPage from '../pages/PostListPage';
import PostCreateUpdatePage from '../pages/PostCreateUpdatePage';

const MyRouter = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PostListPage/>}/>
                    <Route path='/postUpdate/:id' element={<PostCreateUpdatePage/>}/>
                    <Route path='/postUpdate' element={<PostCreateUpdatePage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;