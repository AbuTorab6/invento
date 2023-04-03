import React,{Fragment,useState,useEffect} from 'react';

import cogoToast from 'cogo-toast';


import {useDispatch,useSelector} from 'react-redux';

import { postDetailById,updatePost,createPost } from '../../APIServices/postAPIServices';
import {useNavigate,useParams} from 'react-router-dom'

const PostCreateUpdate = () => 
{

    var navigate = useNavigate();

    var idFromUrl = useParams().id;


    useEffect(()=>{

        if(idFromUrl!==undefined)
        {
            postDetailById(idFromUrl).then
            (
                (res)=>
                {
                    if(res!=false)
                    {
                        document.querySelector('.postTitle').value=res.title;
                        document.querySelector('.postBody').value=res.body;
                    }
                }
            )
        }
        
        
    },[])









    
    var createUpdatePostFunc = ()=>
    {
        var postTitle = document.querySelector('.postTitle').value
        var postBody = document.querySelector('.postBody').value
        if(postTitle.length===0)
        {
            cogoToast.error("Please Provide post title");
        }
        else if (postBody.length===0)
        {
            cogoToast.error("Please Provide post body");
        }
        else
        {
            if(idFromUrl===undefined)
            {
                createPost(postTitle,postBody).then
                (
                    (res)=>
                    {
                        if(res===true)
                        {
                            cogoToast.success("post saved");


                            document.querySelector('.postTitle').value="";
                            document.querySelector('.postBody').value="";

                            navigate('/')
                        }
                    }
                )
            }
            else
            {
                updatePost(postTitle,postBody,idFromUrl).then
                (
                    (res)=>
                    {
                        if(res===true)
                        {
                            cogoToast.success("post updated");

                            document.querySelector('.postTitle').value="";
                            document.querySelector('.postBody').value="";

                            navigate('/')
                        }
                    }
                )
            }
            
        }
    }





    return (
        <Fragment>
            <div className='post-create-update-section'>

            <div className='form'>
            <h4>Save Post</h4>
                <form>
                    <div className='post-form-grid'>
                        <div className='col'>
                            <label>Post Title</label>
                            <input className='postTitle' type="text" />
                        </div>
                    </div>
                    <div className='post-textarea'>
                        <label>Post Body</label>
                        <textarea className='postBody'/>
                    </div>
                </form>
                <button className='post-save-btn' onClick={createUpdatePostFunc} >Save Post</button>
            </div>
            </div>
        </Fragment>
    );
};

export default PostCreateUpdate;