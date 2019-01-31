import { Component, OnInit } from '@angular/core';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Categoria } from '../../../shared/categoria';

@Component({
	selector: 'app-categorias-add',
	templateUrl: './categorias-add.component.html',
	styleUrls: ['./categorias-add.component.sass']
})
export class CategoriasAddComponent implements OnInit {
	categoria = new Categoria();
	constructor(private api: CategoriasApiService, private router: Router) { }

	ngOnInit() {
	}

	addCategoria() {
		this.api.addCategoria(this.categoria).subscribe((resultado) => {
			this.router.navigate(['/categorias-details/' + this.categoria.id]);
		}, (err) => {
			console.log(err);
		}
		);
	}
}
