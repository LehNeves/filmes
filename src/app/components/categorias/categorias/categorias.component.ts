import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../shared/categoria';
import { Router } from '../../../../../node_modules/@angular/router';
import { CategoriasApiService } from '../../../services/categorias-api.service';

@Component({
	selector: 'app-categorias',
	templateUrl: './categorias.component.html',
	styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {
	titulo = 'Categorias';
	categorias: Categoria[] = [];
	constructor(private api: CategoriasApiService, private router: Router) { }

	getCategorias() {
		this.api.getCategorias().subscribe(categorias => {
			this.categorias = categorias;
			console.log(this.categorias);
		}, err => {
			console.log(err);
		});
	}

	add(){
		this.router.navigate(["categorias-add"]);
	}

	ngOnInit() {
		console.log('');
		this.getCategorias();
	}

}
