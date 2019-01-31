import { Component, OnInit } from '@angular/core';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Categoria } from '../../../shared/categoria';

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.sass']
})
export class CategoriasEditComponent implements OnInit {
	categoria = new Categoria();
  constructor(private api: CategoriasApiService,
		private router: Router,
		private route: ActivatedRoute) { }

  updateCategoria(){
    let id = this.route.snapshot.params['id'];
		this.api.updateCategoria(id, this.categoria).subscribe((categoria) => {
				this.router.navigate(['/categorias-details/' + categoria.id]);
			}, (err) =>{
				console.error(err);
			}
		)
  }

  ngOnInit() {
    this.api.getCategoriaPorId(this.route.snapshot.params['id']).subscribe(
			(categoria : Categoria) => {
				console.log(categoria);
				this.categoria = categoria;
			}
		)
  }

}
