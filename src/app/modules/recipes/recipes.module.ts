import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { NewButtonComponent } from './new-button/new-button.component';



@NgModule({
  declarations: [
    RecipesComponent,
    NewButtonComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    RecipesComponent,
    NewButtonComponent
  ]
})
export class RecipesModule { }
