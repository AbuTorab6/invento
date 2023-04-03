import {configureStore} from '@reduxjs/toolkit'

import postState from '../stateSlice/postState'

export default configureStore(
    {
        reducer:{
            postState
        }
    }
)