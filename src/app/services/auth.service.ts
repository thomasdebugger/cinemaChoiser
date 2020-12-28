export class AuthService{
    isAuth = true;
    
    signIn(){
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

    signOut(){
        this.isAuth = false;
    }
}