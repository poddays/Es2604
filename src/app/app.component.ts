import { Component } from '@angular/core';
import { IPost } from './models/post-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es2604';
  show: boolean = false;
  showComponent(){
    this.show = !this.show
  }

}

