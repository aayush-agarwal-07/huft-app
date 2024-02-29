// export default cartSlice.reducer;

    // When you create a createSlice it will create an object for cartSlice
    // 
    // ,
    // Actions are like Api to communicate with the Store.
    // in above code addItem is basically the action and the function besides it is the reducer function which modifies the Slice. 
    // You might ask how is it modified, but the above Params (state, action)
    // the state parameter gives access to the state. And it also gets access to the acton.


    import {createSlice} from '@reduxjs/toolkit';

    const cartSlice = createSlice({
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addProduct:(state,action)=>{
                state.items.push(action.payload);
            },
            removeItem:(state)=>{
                state.items.pop();
            },
            clearCart:(state)=>{
                state.items.length=0;
            }
        }
    })

    export const {addProduct,removeItem,clearCart} =cartSlice.actions;
    export default cartSlice.reducer;