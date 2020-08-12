import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/Services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

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

  onSubmit(form: NgForm){
   
      this.updateRecord(form);
  }

  updateRecord(form: NgForm){
    this.service.PutPost(form.value).subscribe(res => {
    this.resetForm(form);
    this.service.refreshList();
    this.GOBack();
    });
  }

  resetForm(form?: NgForm){
    if (form != null){
      form.resetForm();
    }
  }

  GOBack(){
    this.location.back();
  }
}
