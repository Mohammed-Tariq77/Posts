import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  startIndex=0;
  endIndex=10;
  Posts:Post[];
  constructor(private service:PostsService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.service.getAllPost().subscribe(
      (Response) => this.Posts = Response,
      (error) => console.log(error)
    );
  }


  getArrayFromNumber(length){

    return new Array(length/10);
  }

  updateIndex(pageIndex){
    this.startIndex=pageIndex*10;
    this.endIndex=this.startIndex+10;
  }
}
