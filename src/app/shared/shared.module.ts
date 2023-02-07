import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterNamesPipe } from './pipes/filter-names.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
  declarations: [
    FilterNamesPipe,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FilterNamesPipe, // Se exporta la pipe personalizada
    PaginationPipe,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
