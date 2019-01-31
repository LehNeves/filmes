import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../shared/categoria';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
	selector: 'app-categorias-details',
	templateUrl: './categorias-details.component.html',
	styleUrls: ['./categorias-details.component.sass']
})
export class CategoriasDetailsComponent implements OnInit {
	categoria = new Categoria();
	constructor(private api: CategoriasApiService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.api.getCategoriaPorId(id).subscribe((categoria: Categoria) => {
			console.log(categoria);
			this.categoria = categoria;
		});
	}

}