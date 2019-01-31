import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../../services/filmes-api.service';
import { Filme } from '../../../shared/Filme';

@Component({
	selector: 'app-filmes',
	templateUrl: './filmes.component.html',
	styleUrls: ['./filmes.component.sass']
})
export class FilmesComponent implements OnInit {
	titulo = 'Lista de Filmes';
	filmes: Filme[] = [];
	constructor(private api: ApiService, private router: Router) { }

	add() {
		this.router.navigate(["filmes-add"]);
	}

	getFilmes() {
		this.api.getFilmes().subscribe(filmes => {
			this.filmes = filmes;
			console.log(this.filmes);
		}, err => {
			console.log(err);
		});
	}

	deleteFilme(id) {
		this.api.deleteFilme(id).subscribe(res => {
			this.getFilmes()
		},
			(err) => {
				console.log(this.filmes);
			}
		);
	}

	ngOnInit() {
		console.log('');
		this.getFilmes();
	}

}
