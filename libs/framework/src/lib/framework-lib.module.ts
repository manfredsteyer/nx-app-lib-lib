import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLibModule } from '@myapp/core';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  imports: [CommonModule, CoreLibModule],
  declarations: [FrameworkComponent],
  exports: [FrameworkComponent]
})
export class FrameworkLibModule {}
