import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/filmes-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../../../shared/Filme';

@Component({
  selector: 'app-filmes-details',
  templateUrl: './filmes-details.component.html',
  styleUrls: ['./filmes-details.component.sass']
})
export class FilmesDetailsComponent implements OnInit {
  filme = new Filme();
  constructor(private api: ApiService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getFilmePorId(id).subscribe((filme: Filme)=> {
      console.log(filme);
      this.filme = filme;
    });
  }

}
