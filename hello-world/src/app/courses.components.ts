import {Component} from '@angular/core';


@Component({
    selector:"courses",
    template:`<h4> {{someString | summary:15}}</h4>`
})
export class CoursesComponent{

    someString = "Je ne suis pas vraiment idiot avec ce qui se passe";
    title="Cours title";

    courses = ['Maths', 'Physics', 'History'];

}