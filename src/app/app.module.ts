import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmSevice } from './services/film.service';
import { AuthComponent } from './auth/auth.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleFilmComponent } from './single-film/single-film.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RandomChoiserMovieComponent } from './random-choiser-movie/random-choiser-movie.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './auth/signup/signup.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';

const appRoutes : Routes = [
  {path : 'films', component: FilmViewComponent},
  {path : 'signUp', component: SignupComponent},
  {path : 'films/:id',canActivate: [AuthGuard], component: SingleFilmComponent},
  {path : 'randomizer',canActivate: [AuthGuard], component: RandomChoiserMovieComponent },
  {path : 'users',canActivate: [AuthGuard], component: UserListComponent},
  {path : 'new-user',canActivate: [AuthGuard], component: NewUserComponent},
  {path : 'edit',canActivate: [AuthGuard], component: EditFilmComponent},
  {path : 'signIn', component: SignInComponent},
  {path : 'not-found', component: FourOhFourComponent},
  {path : '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    AuthComponent,
    FilmViewComponent,
    FourOhFourComponent,
    EditFilmComponent,
    SingleFilmComponent,
    UserListComponent,
    NewUserComponent,
    RandomChoiserMovieComponent,
    SignupComponent,
    SignInComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  // exports: [RouterModule],
  providers: [
    FilmSevice,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
