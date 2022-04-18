import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Bike } from '../models/bikes';
import { Food } from '../models/food';
import { Toy } from '../models/toy';
import { Book } from '../models/books';
import { Dvd } from '../models/dvd';
import { Laptop } from '../models/laptop';

@Injectable({
  providedIn: 'root'
})
export class FidzulaService {

  //class A
  private infoUrl =  "http://localhost:3021/";
  private bikes = this.infoUrl + "bikes/";
  private food = this.infoUrl + "food/";
  private toys = this.infoUrl + "toys/";
  
  //class B
  private mediaUrl = "http://localhost:3022/";
  private books = this.mediaUrl + "books/";
  private dvds = this.mediaUrl + "dvds/";
  private laptops = this.mediaUrl + "laptops/";

  constructor(private http: HttpClient) { }


  //class A part

  //bikes
  public getBikesWithLocation(location:string) : Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikes + location).pipe(catchError(this.handleError));
  }
  public getBikesWithTeam() : Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikes + "team").pipe(catchError(this.handleError));
  }
  public addBike(bike:Bike) : Observable<Bike> {
    return this.http.post<Bike>(this.bikes + "add", bike).pipe(catchError(this.handleError));
  }

  //food
  public getFoodsWithLocation(location:string) : Observable<Food[]> {
    return this.http.get<Food[]>(this.food + location).pipe(catchError(this.handleError));
  }
  public getFoodWithTeam() : Observable<Food[]> {
    return this.http.get<Food[]>(this.food + "team").pipe(catchError(this.handleError));
  }
  public addFood(food:Food) : Observable<Food> {
    return this.http.post<Food>(this.food + "add", food).pipe(catchError(this.handleError));
  }

  //toys
  public getToysWithLocation(location:string) : Observable<Toy[]> {
    return this.http.get<Toy[]>(this.toys + location).pipe(catchError(this.handleError));
  }
  public getToyWithTeam() : Observable<Toy[]> {
    return this.http.get<Toy[]>(this.toys + "team").pipe(catchError(this.handleError));
  }
  public addToy(toy:Toy) : Observable<Toy> {
    return this.http.post<Toy>(this.toys + "add", toy).pipe(catchError(this.handleError));
  }

  //class B part

  //books
  public getBooksWithLocation(location:string) : Observable<Book[]> {
    return this.http.get<Book[]>(this.books + location).pipe(catchError(this.handleError));
  }
  public getBookWithTeam() : Observable<Book[]> {
    return this.http.get<Book[]>(this.books + "team").pipe(catchError(this.handleError));
  }
  public addBook(book:Book) : Observable<Book> {
    return this.http.post<Book>(this.books + "add", book).pipe(catchError(this.handleError));
  }

  //dvds
  public getDvdsWithLocation(location:string) : Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.dvds + location).pipe(catchError(this.handleError));
  }
  public getDvdWithTeam() : Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.dvds + "team").pipe(catchError(this.handleError));
  }
  public addDvd(dvd:Dvd) : Observable<Dvd> {
    return this.http.post<Dvd>(this.dvds + "add", dvd).pipe(catchError(this.handleError));
  }

  //laptops
  public getLaptopsWithLocation(location:string) : Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.laptops + location).pipe(catchError(this.handleError));
  }
  public getLaptopWithTeam() : Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.laptops + "team").pipe(catchError(this.handleError));
  }
  public addLaptop(laptop:Laptop) : Observable<Laptop> {
    return this.http.post<Laptop>(this.laptops + "add", laptop).pipe(catchError(this.handleError));
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
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(() => 'Unable to contact service; please try again later.');
  };
}
