import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http Module Import
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// Service
import { HelloService } from './service/hello.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
