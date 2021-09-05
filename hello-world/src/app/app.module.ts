import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BoostrapPanelComponent } from './boostrap-panel/boostrap-panel.component';
import { CustomComponent } from './custom/custom.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { NouveauCoursFormComponent } from './nouveau-cours-form/nouveau-cours-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    BoostrapPanelComponent,
    CustomComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SingupFormComponent,
    NouveauCoursFormComponent,
    ResetPasswordComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
