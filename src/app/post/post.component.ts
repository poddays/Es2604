import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../models/post-interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: IPost[] = []

  
  constructor() {
    
    this.posts =[
      {
        id: 0, 
        title: "FIRST POST",
        description: "Welcome to your first angular Exercise",
        date: new Date(),

      },
      {
        id: 1, 
        title: "SECOND POST",
        description: "this is your first post",
        date: new Date(),
      },
    ]


   }

 
 

  ngOnInit(): void {
  }

}
