import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';


const routes: Routes = [
  {path: 'AllPosts', component: AllPostComponent },
  {path: 'PostDetails/:id', component: PostComponent },
  {path: 'EditPost/:id', component: EditPostComponent },
  {path: '', redirectTo: 'AllPosts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
