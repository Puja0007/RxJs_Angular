import { createReducer, on } from "@ngrx/store";
import { GalaryModel } from "../Galary/galary.model";
import { retrievedGalary } from "./galary.actions";

export const initialState: GalaryModel[]=[];

const _gallaryReducer = createReducer(
    initialState, // taking the initial state
    on(retrievedGalary,(state, {AllGalary})=>{   // listening to the retrievedGalary action the props of actions
        return [...AllGalary];   // returning the new state
                                // reducer function updates the store with new store data
                                // reducer function updates the store with new store data.it doesn't do anything with the
                                // exsting store data. that's why we it's called pure function
    })
)


export function galaryReducer(state:any, action:any) {
   return _gallaryReducer(state, action);
}