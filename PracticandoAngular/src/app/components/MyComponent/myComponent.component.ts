import { Component } from '@angular/core';

@Component({
    selector: 'myComponent',
    template: `
        <h1> {{title}} <h1>
    `
})
export class MyComponent{

    public title:string;

    constructor(){
        console.log("MyComponenet created");
        this.title = "The title of my component";
    }
}