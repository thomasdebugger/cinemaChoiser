import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm : FormGroup;
  errorMessage : string;

  constructor(private formBuilder : FormBuilder, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      email : ['',[Validators.email, Validators.email]],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signIn(email,password).then(
      ()=>{
        this.router.navigate(['/films']);
      },
      (error) =>{
        this.errorMessage = error;
      }
    );
  }
}
