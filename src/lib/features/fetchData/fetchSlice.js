import { createSlice } from "@reduxjs/toolkit"

const initialState = []
// {
//     items: [],
// }

export const fetchSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        add: (state, action) =>{
            // console.log(state, "thsi is fetch data")
            state.push(action.payload);
            
        }
    }
})
export const {add} = fetchSlice.actions;
export default fetchSlice.reducer;