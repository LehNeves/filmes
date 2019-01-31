import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Filme } from '../shared/Filme';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = "http://localhost:3000/filmes";
@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { }

	getFilmes(): Observable<Filme[]> {
		return this.http.get<Filme[]>(apiUrl).pipe(
			tap(filmes => console.log('fetched filmes')),
			catchError(this.handleError('getFilmes', []))
		);
	}

	addFilmes(filme): Observable<Filme> {
		return this.http.post<Filme>(apiUrl, filme, httpOptions).pipe(
			tap((filme: Filme) => console.log('Trouxe os filmes' + filme)),
			catchError(this.handleError<Filme>('addFilmes'))
		);
	}

	getFilmePorId(id: number) : Observable<Filme>{
		const url = `${apiUrl}/${id}`;
		return this.http.get<Filme>(url).pipe(
			tap(filme => console.log(`Busca filme pelo id=${id}`)),
			catchError(this.handleError<Filme>(`Busca filmes por id=${id}`)
		));
	}

	updateFilme(id : number, filme : Filme) : Observable<any> {
		const url = `${apiUrl}/${id}`;
		return this.http.put(url, filme, httpOptions).pipe(
			tap(filme => console.log(`Alterção de filme pelo id=${id}`)),
			catchError(this.handleError<Filme>("updateFilme")
		));
	}

	deleteFilme(id: number) : Observable<Filme>{
		const url = `${apiUrl}/${id}`;
		return this.http.delete<Filme>(url).pipe(
		tap(filme => console.log(`deleta filme pelo id=${id}`)),
			catchError(this.handleError<Filme>(`deleta filmes por id=${id}`)
		));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}
