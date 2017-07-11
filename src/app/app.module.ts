import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { requestOptionsProvider }   from './default-request-options.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinController } from './controller/controller.component';
import { PinComponent } from './controller/pin/pin.component';
import { OrderByPipe } from './pipes/orderByPipe'

@NgModule({
  declarations: [
    AppComponent,
    PinController,
    PinComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
