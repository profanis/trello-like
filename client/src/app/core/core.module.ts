import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    GraphQLModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    GraphQLModule,
    HttpClientModule,
    CommonModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class CoreModule { }
