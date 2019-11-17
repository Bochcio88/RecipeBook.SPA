export class Recipe {
    public name: string;
    public description: string;
    public pathImage: string;

    constructor(name:string, description:string, pathImage:string) {
        this.name = name;
        this.description = description;
        this.pathImage = pathImage;
    }
}