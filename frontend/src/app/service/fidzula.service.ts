import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Bike } from '../models/bikes';
import { Food } from '../models/food';
import { Toy } from '../models/toy';
import { Book } from '../models/books';
import { Dvd } from '../models/dvd';
import { Laptop } from '../models/laptop';
import { Team } from '../models/teams';

@Injectable({
  providedIn: 'root',
})
export class FidzulaService {
  //class A (fun)
  private infoUrl = 'http://localhost:3021/fun/';
  private bikes = this.infoUrl + 'bikes/';
  private food = this.infoUrl + 'food/';
  private toys = this.infoUrl + 'toys/';

  //class B (media)
  private mediaUrl = 'http://localhost:3022/media/';
  private books = this.mediaUrl + 'books/';
  private dvds = this.mediaUrl + 'dvds/';
  private laptops = this.mediaUrl + 'laptops/';

  constructor(private http: HttpClient) {}

  public getTeam(type: string): Observable<Team> {
    switch (type) {
      case 'media':
        return this.http
          .get<Team>(this.mediaUrl + 'team')
          .pipe(catchError(this.handleError));
      case 'fun':
        return this.http
          .get<Team>(this.infoUrl + 'team')
          .pipe(catchError(this.handleError));
      case 'bikes':
        return this.http
          .get<Team>(this.bikes + 'team')
          .pipe(catchError(this.handleError));
      case 'food':
        return this.http
          .get<Team>(this.food + 'team')
          .pipe(catchError(this.handleError));
      case 'toys':
        return this.http
          .get<Team>(this.toys + 'team')
          .pipe(catchError(this.handleError));
      case 'books':
        return this.http
          .get<Team>(this.books + 'team')
          .pipe(catchError(this.handleError));
      case 'dvds':
        return this.http
          .get<Team>(this.dvds + 'team')
          .pipe(catchError(this.handleError));
      case 'laptops':
        return this.http
          .get<Team>(this.laptops + 'team')
          .pipe(catchError(this.handleError));
      default:
        throw new Error('Undefined team...');
    }
  }

  //class A part
  //bikes
  public getBikesWithLocation(location: string): Observable<Bike[]> {
    return this.http
      .get<Bike[]>(this.bikes + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addBike(bike: Bike): Observable<Bike> {
    return this.http
      .post<Bike>(this.bikes + 'add', bike)
      .pipe(catchError(this.handleError));
  }

  //food
  public getFoodsWithLocation(location: string): Observable<Food[]> {
    return this.http
      .get<Food[]>(this.food + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addFood(food: Food): Observable<Food> {
    return this.http
      .post<Food>(this.food + 'add', food)
      .pipe(catchError(this.handleError));
  }

  //toys
  public getToysWithLocation(location: string): Observable<Toy[]> {
    return this.http
      .get<Toy[]>(this.toys + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addToy(toy: Toy): Observable<Toy> {
    return this.http
      .post<Toy>(this.toys + 'add', toy)
      .pipe(catchError(this.handleError));
  }

  //class B part

  //books
  public getBooksWithLocation(location: string): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.books + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addBook(book: Book): Observable<Book> {
    return this.http
      .post<Book>(this.books + 'add', book)
      .pipe(catchError(this.handleError));
  }

  //dvds
  public getDvdsWithLocation(location: string): Observable<Dvd[]> {
    return this.http
      .get<Dvd[]>(this.dvds + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addDvd(dvd: Dvd): Observable<Dvd> {
    return this.http
      .post<Dvd>(this.dvds + 'add', dvd)
      .pipe(catchError(this.handleError));
  }

  //laptops
  public getLaptopsWithLocation(location: string): Observable<Laptop[]> {
    return this.http
      .get<Laptop[]>(this.laptops + 'all/' +location)
      .pipe(catchError(this.handleError));
  }
  public addLaptop(laptop: Laptop): Observable<Laptop> {
    return this.http
      .post<Laptop>(this.laptops + 'add', laptop)
      .pipe(catchError(this.handleError));
  }

  /**
   * Method used to handle error when they are caught
   */
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      () => 'Unable to contact service; please try again later.'
    );
  }
}
