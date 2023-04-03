import React,{Fragment,useEffect,useState} from 'react';

import Table from 'react-bootstrap/Table';
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

import { postList,deletePost } from '../../APIServices/postAPIServices';
import { setAllPostFunc } from '../../redux/stateSlice/postState';

import {useDispatch,useSelector} from 'react-redux';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import cogoToast from 'cogo-toast';

const PostList = () => 
{

    var dispatch = useDispatch();


    useEffect(()=>{

        postList().then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(setAllPostFunc(res));
                    localStorage.setItem('posts',JSON.stringify(res));
                }
            }
        )

    },[])



    // for delete post
    var deletePostFunc = (p2)=>
    {
        Swal.fire
        (
            {
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }
        ).then
        (
            (result)=> 
            {
                if (result.isConfirmed) 
                {
                    deletePost(p2).then
                    (
                        (res)=>
                        {
                            if(res===true)
                            {
                                cogoToast.success("Post deleted successfully")
                                postList().then
                                (
                                    (res)=>
                                    {
                                        if(res!==false)
                                        {
                                            dispatch(setAllPostFunc(res));
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )
    }






    var allPost = useSelector((state)=>state.postState.allPost);
    if(allPost.length===0)
    {
        var allPostArr = <h1>Loading . . . </h1>
    }
    else
    {
        var allPostArr = allPost.map(
            function(p1,p2)
            {
                return(
                    <tr>
                        <td> {p2} </td>
                        <td>{p1.userId}</td>
                        <td>{p1.title}</td>
                        <td>{p1.body}</td>
                        <td>
                            <button  className='table-edit-btn me-2'><Link to={'/postUpdate/'+p1.id} className='table-edit-btn-link'  ><span ><AiOutlineEdit/></span></Link></button>
                            <button onClick={deletePostFunc.bind(this,p2)} className='table-delete-btn'><span ><AiOutlineDelete/></span></button>
                        </td>
                    </tr>
                )
            }
        )
    }




    return (
        <Fragment>
            <section className='product-list-section'>
                <div className='table-content'>
                    <div className='my-table'>
                        <Table  hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>userId</th>
                                    <th>Post Title</th>
                                    <th>Post Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allPostArr}
                            </tbody>
                        </Table>
                    </div>

                </div>
            </section>
        </Fragment>
    );
};

export default PostList;