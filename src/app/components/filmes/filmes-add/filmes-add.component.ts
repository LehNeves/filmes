import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/filmes-api.service';
import { Router } from '@angular/router';
import { Filme } from '../../../shared/Filme';

@Component({
	selector: 'app-filmes-add',
	templateUrl: './filmes-add.component.html',
	styleUrls: ['./filmes-add.component.sass']
})
export class FilmesAddComponent implements OnInit {
	filme = new Filme();
	constructor(private api: ApiService, private router: Router) { }

	addFilme() {
		this.api.addFilmes(this.filme).subscribe((resultado) => {
				this.router.navigate(['/filmes-details/' + this.filme.id]);
			}, (err) => {
				console.log(err);
			}
		);
	}

	ngOnInit() {
	}

}
