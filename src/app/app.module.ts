import { CommentComponent } from './components/comment/comment.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './components/review/review.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { FooComponent } from './components/foo/foo.component';
import { DooComponent } from './components/doo/doo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    ReviewComponent,
    CommentComponent,
    BindingComponent,
    FooComponent,
    DooComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
