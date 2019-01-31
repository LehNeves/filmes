import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FormsModule } from '@angular/forms';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';

@NgModule({
	declarations: [
		AppComponent,
		FilmesComponent,
		FilmesAddComponent,
		FilmesDetailsComponent,
		FilmesEditComponent,
		CategoriasComponent,
		CategoriasAddComponent,
		CategoriasEditComponent,
		CategoriasDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule, // Adicionar
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
