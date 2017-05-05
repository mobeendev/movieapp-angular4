export class Movie{

    public name: string;
    public director: string;
    public year: string;
    public imagePath: string;

    constructor(name: string, director: string, year: string, imagePath: string){

        this.name = name;
        this.director = director;
        this.year = year;
        this.imagePath = imagePath;

    }

}