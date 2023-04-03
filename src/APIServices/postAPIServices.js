import axios from 'axios';
import cogoToast from 'cogo-toast';



var baseURL = "https://jsonplaceholder.typicode.com"

var postList = ()=>
{
    return axios.get(baseURL+'/posts').then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                cogoToast.warn("something is wrong.Can not display the post list.");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var deletePost = (id)=>
{
    return axios.delete(baseURL+'/posts/'+id).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return true
            }
            else
            {
                cogoToast.warn("can not delete post");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}





var postDetailById = (id)=>
{
    return axios.get(baseURL+'/posts/'+id).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                cogoToast.warn("can not show the post detail");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var updatePost = (postTitle,postBody,id)=>
{
    var data = {
        title:postTitle,
        body:postBody
    }

    return axios.put(baseURL+'/posts/'+id,data).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return true
            }
            else
            {
                cogoToast.warn("can not update post");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}




var createPost = (postTitle,postBody)=>
{

    var data = {
        title:postTitle,
        body:postBody
    }

    return axios.post(baseURL+'/posts',data).then
    (
        (res)=>
        {
            if(res.status===201)
            {
                return true
            }
            else
            {
                cogoToast.warn("can not create the post.");
                return false
            }

        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )

}




export {postList,deletePost,postDetailById,updatePost,createPost}