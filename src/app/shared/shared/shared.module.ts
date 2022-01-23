import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaferPipe } from 'src/app/pipes/safer.pipe';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SaferPipe],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [SaferPipe]
})
export class SharedModule { }
