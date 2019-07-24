import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameworkLibModule } from '@myapp/framework';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrameworkLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
