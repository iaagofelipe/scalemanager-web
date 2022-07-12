import { EmployeeService } from 'src/app/services/employee.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EmployeeModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    EmployeeService,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
