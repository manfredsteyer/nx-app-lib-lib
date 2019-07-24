import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreLibModule {}
