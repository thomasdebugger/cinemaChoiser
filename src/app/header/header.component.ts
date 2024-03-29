import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth : boolean;

  constructor(private authService : AuthService) { }

  ngOnInit(){
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth=true;
        }else{
          this.isAuth=false;
        }
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
  }

}
