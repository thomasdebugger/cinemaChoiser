import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    isAuth = true;
    
    signIn__(){
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut__(){
        this.isAuth = false;
    }

    createNewUser(email : string , passWord : string) {
        return new Promise(
            (resolve,reject)=> {
                firebase.auth().createUserWithEmailAndPassword(email, passWord).then(
                    () => {
                        resolve('ok');
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signIn(email: string , passWord: string){
        return new Promise(
            (resolve,reject)=> {
                firebase.auth().signInWithEmailAndPassword(email, passWord).then(
                    () => {
                        resolve('ok');
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signOut(){
        firebase.auth().signOut();
    }
}