import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TermsModalComponent } from './terms-modal/terms-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,

    FormsModule,
    HttpClientModule
  ],
  providers :[
    RegistrationService
  ],
  exports: [],
  declarations: [RegisterComponent, TermsModalComponent]
})
export class RegisterModule { }
