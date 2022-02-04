import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { ArchwizardModule } from 'angular-archwizard'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArchwizardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
