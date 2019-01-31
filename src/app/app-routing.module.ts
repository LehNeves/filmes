import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';

const routes: Routes = [
	{
		path: "filmes",
		component: FilmesComponent,
		data: { title: "Lista de Filmes" }
	}, {
		path: "filmes-add",
		component: FilmesAddComponent,
		data: { title: "Adicao de Filmes" }
	}, {
		path: "filmes-details/:id",
		component: FilmesDetailsComponent,
		data: { title: "Detalhes de Filmes" }
	}, {
		path: "filmes-edit/:id",
		component: FilmesEditComponent,
		data: { title: "Editar Filmes" }
	},{
		path: "categorias",
		component: CategoriasComponent,
		data: { title: "Categorias" }
	},{
		path: "categorias-add",
		component: CategoriasAddComponent,
		data: { title: "Adicao de Categorias" }
	}, {
		path: "categorias-details/:id",
		component: CategoriasDetailsComponent,
		data: { title: "Detalhes de Categorias" }
	}, {
		path: "categorias-edit/:id",
		component: CategoriasEditComponent,
		data: { title: "Editar Categorias" }
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
