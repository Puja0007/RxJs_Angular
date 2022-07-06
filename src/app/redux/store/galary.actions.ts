import { createAction, props } from '@ngrx/store';
import { GalaryModel } from '../Galary/galary.model';

export const retrievedGalary = createAction(
    '[Galary Api] API Success',
   props<{AllGalary:GalaryModel[]}>()   //this action is invoked by the COMPONENT when the API is successful and pushes the api response into the galary means the property of action
);