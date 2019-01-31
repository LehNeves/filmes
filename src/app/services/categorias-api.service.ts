import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Categoria } from '../shared/Categoria';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = "http://localhost:3000/categorias";
@Injectable({
	providedIn: 'root'
})
export class CategoriasApiService {

	constructor(private http: HttpClient) { }

	getCategorias(): Observable<Categoria[]> {
		return this.http.get<Categoria[]>(apiUrl).pipe(
			tap(filmes => console.log('fetched filmes')),
			catchError(this.handleError('getFilmes', []))
		);
	}

	addCategoria(categoria): Observable<Categoria> {
		return this.http.post<Categoria>(apiUrl, categoria, httpOptions).pipe(
			tap((categoria: Categoria) => console.log('Trouxe os filmes' + categoria)),
			catchError(this.handleError<Categoria>('addFilmes'))
		);
	}

	getCategoriaPorId(id : number) : Observable<Categoria>{
		const url = `${apiUrl}/${id}`;
		return this.http.get<Categoria>(url).pipe(
			tap(filme => console.log(`Busca Categoria pelo id=${id}`)),
			catchError(this.handleError<Categoria>(`Erro Busca Categoria por id=${id}`)
		));
	}

	updateCategoria(id : number, categoria : Categoria) : Observable<any>{
		const url = `${apiUrl}/${id}`;
		return this.http.put(url, categoria, httpOptions).pipe(
			tap(filme => console.log(`Update o id=${id}`)),
			catchError(this.handleError<Categoria>(`Erro no Update Categoria por id=${id}`)
		));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}




}
