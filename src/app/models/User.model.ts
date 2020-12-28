export class User {
    constructor(public lastName: string, 
                public firstName:string, 
                public pseudo:string, 
                public email : string, 
                public filmCategoryPreference? : string[], 
                public filmPreference? : string[],
                public actorPreference?: string[]  ){

    }
}