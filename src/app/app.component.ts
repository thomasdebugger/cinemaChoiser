import { Component, OnInit} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAkd-Gva2v_kkrDSKZGcKF3Ab7L9jTF544",
      authDomain: "cinema-56d52.firebaseapp.com",
      databaseURL: "https://cinema-56d52-default-rtdb.firebaseio.com",
      projectId: "cinema-56d52",
      storageBucket: "cinema-56d52.appspot.com",
      messagingSenderId: "702179385355",
      appId: "1:702179385355:web:0b772f9706c123ee9ee70e",
      measurementId: "G-XSESWFMEJD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }


}
