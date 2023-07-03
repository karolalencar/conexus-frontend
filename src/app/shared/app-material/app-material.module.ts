import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
