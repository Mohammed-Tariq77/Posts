import { Injectable } from '@angular/core';
import { Post } from 'src/app/post';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  formData: Post;
  list: Post[];
  constructor(private http: HttpClient) { }


  getAllPost(): any{
    return this.http.get(environment.ApiUrl + 'posts');
  }

  PutPost(formData: Post){
    return this.http.put(environment.ApiUrl + 'posts/' + formData.id, formData);
  }

  deletePost(id: number){
    return this.http.delete(environment.ApiUrl + 'posts/' + id );
  }

  getPostById(id: number): any{
    return this.http.get(environment.ApiUrl + 'posts/' + id );
  }

  refreshList(){
    this.http.get(environment.ApiUrl + 'posts').toPromise().then(
      res => this.list = res as Post []
    );
  }
}
