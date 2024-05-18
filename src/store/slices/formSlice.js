import {createSlice} from '@reduxjs/toolkit';
import { addCar } from './carSlice';

const formSlice= createSlice(
    {
     name : 'form',
     initialState :{
        carname:'',
        cost:0
     },
     reducers :{
        changeName(state,action){
          //to update the name
          state.name=action.payload;
        },
        changeCost(state,action){
            state.cost=action.payload
        },
     },

     extraReducers(builder){
      builder.addCase(addCar, (state ,actions)=>{
         state.name = '';
         state.cost = 0 ;
      });
      }
   
    });

    export const {changeName,changeCost} =formSlice.actions;
    //also export combined reducer:

    export const formReducer = formSlice.reducer;