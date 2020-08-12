import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/Services/posts.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  post: Post;
  constructor(public service: PostsService,
              private route: ActivatedRoute,
              private location: Location) {
                this.post = {
                  id: null,
                  title: '',
                  body: ''
                };
              }

  ngOnInit(): void {
    const prdId = this.route.snapshot.params['id'];
    this.service.getPostById(prdId).subscribe(
      (Response) => this.post = Response,
      (error) => console.log(error)
    );
  }

  GOBack(){
    this.location.back();
  }

  onDelete(id: number){
    if (confirm('Are you sure you want to delete this record?')){
    this.service.deletePost(id).subscribe(res => {
      this.service.refreshList();
      this.GOBack();
    });
  }
}
}
