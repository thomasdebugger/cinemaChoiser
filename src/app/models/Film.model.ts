export class Film {
    constructor(
                public id:string,
                public filmName: string, 
                public realisator:string, 
                public release:string, 
                public actorList:string[], 
                public filmCategory:string[],
                public srcImg:string
                ){

    }
}

/*
export interface Film {
    id:string,
    filmName: string, 
    realisator:string, 
    release:string, 
    actorList:string[], 
    filmCategory:string[],
    srcImg:string
}*/