import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first angular application';
  author = 'Mateo Castaño';
  count = 0;
  imgSource = './../favicon.ico';
  boolean = true;

}
