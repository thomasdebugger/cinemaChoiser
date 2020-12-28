import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    private users : User[] = [
        {
            lastName :'Tapis',
            firstName : 'Bernard',
            pseudo : 'Berber',
            email :'bernard.tapis@om.com',
            filmCategoryPreference :[
                'James Bond',
                'seigneur des anneaux',
            ],
        }
    ];
    userSubject = new Subject<User[]>();

    emitUser(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user : User){
        this.users.push(user);
        this.emitUser();
    }
}