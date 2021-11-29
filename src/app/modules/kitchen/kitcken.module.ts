import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenListComponent } from './kitchen-list/kitchen-list.component';
import { KitchenFilterComponent } from './kitchen-filter/kitchen-filter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KitchenListComponent,
    KitchenFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    KitchenListComponent,
    KitchenFilterComponent

  ]
})
export class KitckenModule { }
