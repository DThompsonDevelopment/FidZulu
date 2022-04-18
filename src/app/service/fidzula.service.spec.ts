import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Bike } from '../models/bikes';
import { Book } from '../models/books';
import { Dvd } from '../models/dvd';
import { Food } from '../models/food';
import { Laptop } from '../models/laptop';
import { Toy } from '../models/toy';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { FidzulaService } from './fidzula.service';

const mockBikes: Bike[] = [
  {
    "name": "Mamba Sport 12\" Balance Bike",
    "brand": "Mamba Bikes",
    "color": "black",
    "price": 75.88
  },
  {
    "name": "DJ Fat Bike 500W",
    "brand": "DJ Bikes",
    "color": "grey",
    "price": 1599.86
  },
  {
    "name": "Kobe Aluminum Balance",
    "brand": "Kobe",
    "color": "blue",
    "price": 88.56
  },
  {
    "name": "Pomona Men's Cruiser Bike",
    "brand": "Northwoods",
    "color": "silver",
    "price": 221.36
  }
]

const mockFoods: Food[] = [
  {
    "name": "The Original Sandwich",
    "brand": "Oreo",
    "weight": "303g",
    "calories": 405,
    "price": 2.85
  },
  {
    "name": "Peanut Butter",
    "brand": "KRAFT",
    "weight": "2000g",
    "calories": 726,
    "price": 9.39
  },
  {
    "name": "Beef Ravioli",
    "brand": "Chef Boyardee",
    "weight": "425g",
    "calories": 250,
    "price": 2.45
  },
  {
    "name": "Medium Cheddar Cheese",
    "brand": "MOON CHEESE",
    "weight": "57g",
    "calories": 525,
    "price": 5.87
  }
]

const mockToys:Toy[] = [
  {
    "name": "Medical Kit",
    "brand": "Fisher-Price",
    "age_group": "3 to 9",
    "price": 20.41
  },
  {
    "name": "Ferry Boat",
    "brand": "Green Toys",
    "age_group": "3 to 6",
    "price": 13.26
  },
  {
    "name": "Rock-a-Stack",
    "brand": "Fisher-Price",
    "age_group": "1 to 5",
    "price": 5.99
  },
  {
    "name": "Stack Up Cups",
    "brand": "The First Years",
    "age_group": "0 to 3",
    "price": 3.99
  }
]

const mockBooks:Book[] = [
  {
    "title": "Lord of the Rings",
    "author": "J.R.R Tolkien",
    "price": 25.99,
    "isbn": "9780261102385",
    "publisher": "HarperCollins"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R Tolkien",
    "price": 9.88,
    "isbn": "0261102214",
    "publisher": "HarperCollins"
  },
  {
    "title": "Lord of Souls",
    "author": "Greg Keyes",
    "price": 12.98,
    "isbn": "0345508025",
    "publisher": "Del Rey"
  },
  {
    "title": "Chronicles of Narnia",
    "author": "C. S. Lewis",
    "price": 41.77,
    "isbn": "0064471195",
    "publisher": "HarperCollins"
  }
]

const mockDvds:Dvd[] = [
  {
    "title": "Avengers - Infinity War",
    "rating": "PG-13",
    "studio": "MARVEL",
    "time": 149,
    "price": 18.55
  },
  {
    "title": "Spider-Man Homecoming",
    "rating": "14 and over",
    "studio": "Sony Pictures Home Entertainment",
    "time": 133,
    "price": 7.23
  },
  {
    "title": "Ant-Man",
    "rating": "PG-13",
    "studio": "Walt Disney Video",
    "time": 117,
    "price": 19.98
  },
  {
    "title": "Captain America",
    "rating": "PG",
    "studio": "Walt Disney Video",
    "time": 123,
    "price": 24.88
  }
]

const mockLaptops:Laptop[] = [
  {
    "product": "ThinkPad T430s",
    "brand": "Lenovo",
    "cpu": "core i5-3320",
    "memory": "8GB",
    "price": 325.09
  },
  {
    "product": "MacBook Air",
    "brand": "Apple",
    "cpu": "core i5 1.6GHz",
    "memory": "4GB",
    "price": 621.78
  },
  {
    "product": "Ideapad 330",
    "brand": "Lenovo",
    "cpu": "core i3-8130U",
    "memory": "4GB",
    "price": 459.98
  },
  {
    "product": "MacBook Pro",
    "brand": "Apple",
    "cpu": "core i5 2.5GHz",
    "memory": "4GB",
    "price": 2999.99
  }
]


describe('FidzulaService', () => {

  let httpTestingController: HttpTestingController;
  let infoUrl =  "http://localhost:3021/";
  let mediaUrl = "http://localhost:3022/";

  let service: FidzulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //500, 404

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return bikes with location Raleigh', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let bikes: Bike[] = [];
    service.getBikesWithLocation("Raleigh").subscribe(data => bikes = data);
    const req = httpTestingController.expectOne(infoUrl + "bikes/Raleigh");
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockBikes);
    // Assert
    httpTestingController.verify();
    tick();
    expect(bikes).toBeTruthy();
    expect(bikes[0].brand).toBe('Mamba Bikes');
    expect(bikes[0].color).toBe('black');
    expect(bikes[0].price).toBe(81.57);//75.88 + 7.5%
  })));

  it('should handle a 404 error getBikes', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getBikesWithLocation("Raleigh")
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(infoUrl + "bikes/Raleigh");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with error
    req.flush('Forced 404', {
        status: 404,
        statusText: 'Not Found'
    });
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
    expect(errorReply).toBe('Unable to contact service; please try again later.');
    expect(errorHandlerSpy).toHaveBeenCalled();
    errorResp = errorHandlerSpy.calls.argsFor(0)[0];
    expect(errorResp.status).toBe(404);
})));

it('should handle network error getBikes', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getBikesWithLocation("Raleigh")
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(infoUrl + "bikes/Raleigh");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ProgressEvent('simulated network error');
    // Respond with mock error
    req.error(mockError);
    // Respond with error
    // Assert that there are no outstanding requests.
    httpTestingController.verify();
    // Cause all Observables to complete and check the results
    tick();
    expect(errorReply).toBe('Unable to contact service; please try again later.');
    expect(errorHandlerSpy).toHaveBeenCalled();
    errorResp = errorHandlerSpy.calls.argsFor(0)[0];
    expect(errorResp.error.type).toBe('simulated network error');
})));
});