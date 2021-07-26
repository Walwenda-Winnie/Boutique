import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import {FormControl, FormGroup, NgForm,FormBuilder,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  user=new User();
  msg='';
  public userFile:any=File;

  constructor(private _service: RegistrationService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
  this._service.registerUserFromRemote(this.user).subscribe(
    data=>{
      console.log("response received");
      this._router.navigate(['/login'])
},
    
    error =>{
      console.log("exception occured");
      this.msg=error.error;
    }
    
  )
}
gotologin(){
  this._router.navigate(['/login'])
  
}
onSelectFile(event) {
  const file=event.target.files[0];
  this.userFile=file;

}
saveForm(submitForm:FormGroup){
  if (submitForm.valid){
    const user=submitForm.value;
    const formData =new FormData();
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    this._service.saveUserProfile(formData).subscribe((response)=>{

      console.log(response);
    });

  }
    else{
      this.validateFormFields(submitForm);
    }
  }
  validateFormFields(submitForm: FormGroup){
    Object.keys(submitForm.controls).forEach(field=>{
      const control=submitForm.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }
      else if (control instanceof FormGroup){

      }
    })
  }
}



  
