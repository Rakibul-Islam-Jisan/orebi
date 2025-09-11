import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      
      let mydata = state.value.find(item=>item.title === action.payload.title)
      if(mydata){
        mydata.quantity+=1
      }
      else{
        state.value.push({...action.payload,quantity : 1})
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart} = addToCartSlice.actions

export default addToCartSlice.reducer