import {createSlice} from '@reduxjs/toolkit';

var postState = createSlice(
    {
        name:"postState",
        initialState:{
            allPost:[]
        },
        reducers:{
            setAllPostFunc:(p1,data)=>
            {
                p1.allPost=data.payload
            }
        }
    }
)

export const {setAllPostFunc} = postState.actions;
export default postState.reducer;