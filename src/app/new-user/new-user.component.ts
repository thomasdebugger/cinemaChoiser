import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group(
      {
        firstName : ['', Validators.required],
        lastName : ['', Validators.required],
        pseudo : ['', Validators.required],
        email : ['', [Validators.required,Validators.email]],
        filmCategoryPreference : this.formBuilder.array([]),
        filmPreference : this.formBuilder.array([]),
        actorPreference : this.formBuilder.array([])
      }
    )
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const user = new User(
      formValue['lastName'],
      formValue['firstName'],
      formValue['pseudo'],
      formValue['email'],
      formValue['filmCategoryPreference'] ? formValue['filmCategoryPreference'] : [],
      formValue['filmPreference'] ? formValue['filmPreference'] : [],
      formValue['actorPreference'] ? formValue['actorPreference'] : []
    );
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }

  getFilmCategoryPreference(){
    return this.userForm.get('filmCategoryPreference') as FormArray;
  }

  onAddFilmCategoryPreference(){
    const newFilmCategoryPreferenceControl = this.formBuilder.control('', Validators.required);
    this.getFilmCategoryPreference().push(newFilmCategoryPreferenceControl);
  }

  
  getFilmPreference(){
    return this.userForm.get('filmPreference') as FormArray;
  }

  onAddFilmPreference(){
    const newFilmPreferenceControl = this.formBuilder.control('', Validators.required);
    this.getFilmPreference().push(newFilmPreferenceControl);
  }


  getActorPreference(){
    return this.userForm.get('actorPreference') as FormArray;
  }

  onAddActorPreference(){
    const newActorPreferenceControl = this.formBuilder.control('', Validators.required);
    this.getActorPreference().push(newActorPreferenceControl);
  }

}
