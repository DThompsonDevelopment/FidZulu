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
import { Team } from '../models/teams';

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

const mockTeams:Team[] =[
  {
    "name": "food",
    "memberNames": ["Dakota", "Dillon", "Jon"]
  },
  {
    "name": "bikes",
    "memberNames": ["Jimmy", "Joseph"]
  },
  {
    "name": "toys",
    "memberNames": ["Zack", "Thaddeus"]
  },
  {
    "name": "books",
    "memberNames": ["Eric", "Swapnil"]
  },
  {
    "name": "dvds",
    "memberNames": ["Bigyan", "Pawan"]
  },
  {
    "name": "laptops",
    "memberNames": ["Barry", "Nayaab"]
  },
  {
    "name": "media",
    "memberNames": ["Pranav", "Dev", "Ty"]
  },
  {
    "name": "fun",
    "memberNames": ["Mike", "Peter", "Vahe"]
  }
]


describe('FidzulaService', () => {

  let httpTestingController: HttpTestingController;

  let raleigh = "Raleigh";
  let durham = "Durham";
  //class A (fun)
  let infoUrl = 'http://localhost:3021/fun/';

  let bikes = infoUrl + 'bikes/all/';
  let bikesRaleigh = bikes + raleigh;
  let bikesDurham = bikes + durham;
  let bikesTeam = infoUrl + 'bikes/team';
  
  let food = infoUrl + 'food/all/';
  let foodDurham = food + durham;
  let foodTeam = infoUrl + 'food/team';
  
  let toys = infoUrl + 'toys/all/';
  let toysDurham = toys + durham;
  let toysTeam = infoUrl + 'toys/team';

  let funTeam = infoUrl + 'team';

  //post
  let bikesAdd = infoUrl + 'bikes/add';
  let foodAdd = infoUrl + 'food/add';
  let toysAdd = infoUrl + 'toys/add';

  //class B (media)
  let mediaUrl = 'http://localhost:3022/media/';

  let books = mediaUrl + 'books/all/';
  let booksRaleigh = books + raleigh;
  let booksDurham = books + durham;
  let booksTeam = mediaUrl + 'books/team';
  
  let dvds = mediaUrl + 'dvds/all/';
  let dvdsDurham = dvds + durham;
  let dvdsTeam = mediaUrl + 'dvds/team';
  
  let laptops = mediaUrl + 'laptops/all/';
  let laptopsDurham = laptops + durham;
  let laptopsTeam = mediaUrl + 'laptops/team';

  let mediaTeam = mediaUrl + 'team';

  //post
  let booksAdd = mediaUrl + 'books/add';
  let dvdsAdd = mediaUrl + 'dvds/add';
  let laptopsAdd = mediaUrl + 'laptops/add';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: FidzulaService = TestBed.inject(FidzulaService);
    expect(service).toBeTruthy();
  });

  it('should return bikes with location Raleigh', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let bikes: Bike[] = [];
    service.getBikesWithLocation(raleigh).subscribe(data => bikes = data);
    const req = httpTestingController.expectOne(bikesRaleigh);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockBikes);
    // Assert
    httpTestingController.verify();
    tick();
    expect(bikes).toBeTruthy();
    expect(bikes[0].name).toBe("Mamba Sport 12\" Balance Bike");
    expect(bikes[0].brand).toBe('Mamba Bikes');
    expect(bikes[0].color).toBe('black');
    expect(bikes[0].price).toBe(75.88);
  })));

  it('should return bikes with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let bikes: Bike[] = [];
    service.getBikesWithLocation(durham).subscribe(data => bikes = data);
    const req = httpTestingController.expectOne(bikesDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockBikes);
    // Assert
    httpTestingController.verify();
    tick();
    expect(bikes).toBeTruthy();
    expect(bikes[0].name).toBe('Mamba Sport 12\" Balance Bike');
    expect(bikes[0].brand).toBe('Mamba Bikes');
    expect(bikes[0].color).toBe('black');
    expect(bikes[0].price).toBe(75.88);
  })));

  it('should return foods with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let food: Food[] = [];
    service.getFoodsWithLocation(durham).subscribe(data => food = data);
    const req = httpTestingController.expectOne(foodDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockFoods);
    // Assert
    httpTestingController.verify();
    tick();
    expect(food).toBeTruthy();
    expect(food[0].name).toBe('The Original Sandwich');
    expect(food[0].brand).toBe('Oreo');
    expect(food[0].weight).toBe('303g');
    expect(food[0].calories).toBe(405);
    expect(food[0].price).toBe(2.85);
  })));

  it('should return toys with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let toys: Toy[] = [];
    service.getToysWithLocation(durham).subscribe(data => toys = data);
    const req = httpTestingController.expectOne(toysDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockToys);
    // Assert
    httpTestingController.verify();
    tick();
    expect(toys).toBeTruthy();
    expect(toys[0].name).toBe('Medical Kit');
    expect(toys[0].brand).toBe('Fisher-Price');
    expect(toys[0].age_group).toBe('3 to 9');
    expect(toys[0].price).toBe(20.41);
  })));

  it('should return books with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let books: Book[] = [];
    service.getBooksWithLocation(durham).subscribe(data => books = data);
    const req = httpTestingController.expectOne(booksDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockBooks);
    // Assert
    httpTestingController.verify();
    tick();
    expect(books).toBeTruthy();
    expect(books[0].title).toBe('Lord of the Rings');
    expect(books[0].author).toBe('J.R.R Tolkien');
    expect(books[0].price).toBe(25.99);
    expect(books[0].isbn).toBe('9780261102385');
    expect(books[0].publisher).toBe('HarperCollins');
  })));

  it('should return dvds with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let dvds: Dvd[] = [];
    service.getDvdsWithLocation(durham).subscribe(data => dvds = data);
    const req = httpTestingController.expectOne(dvdsDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockDvds);
    // Assert
    httpTestingController.verify();
    tick();
    expect(dvds).toBeTruthy();
    expect(dvds[0].title).toBe('Avengers - Infinity War');
    expect(dvds[0].rating).toBe('PG-13');
    expect(dvds[0].studio).toBe('MARVEL');
    expect(dvds[0].time).toBe(149);
    expect(dvds[0].price).toBe(18.55);
  })));

  it('should return laptops with location Durham', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let laptops: Laptop[] = [];
    service.getLaptopsWithLocation(durham).subscribe(data => laptops = data);
    const req = httpTestingController.expectOne(laptopsDurham);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockLaptops);
    // Assert
    httpTestingController.verify();
    tick();
    expect(laptops).toBeTruthy();
    expect(laptops[0].product).toBe('ThinkPad T430s');
    expect(laptops[0].brand).toBe('Lenovo');
    expect(laptops[0].cpu).toBe('core i5-3320');
    expect(laptops[0].memory).toBe('8GB');
    expect(laptops[0].price).toBe(325.09);
  })));

  //team
  it('should return team name for media', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("media").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(mediaTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[6]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('media');
    expect(team[0].memberNames).toEqual([  'Pranav', 'Dev', 'Ty' ]);
  })));

  it('should return team name for fun', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("fun").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(funTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[7]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('fun');
    expect(team[0].memberNames).toEqual([  'Mike', 'Peter', 'Vahe' ]);
  })));

  it('should return team name for food', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("food").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(foodTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('food');
    expect(team[0].memberNames).toEqual([  'Dakota', 'Dillon', 'Jon' ]);
  })));

  it('should return team name for bikes', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("bikes").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(bikesTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[1]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('bikes');
    expect(team[0].memberNames).toEqual(["Jimmy", "Joseph"]);
  })));

  it('should return team name for toys', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("toys").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(toysTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[2]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('toys');
    expect(team[0].memberNames).toEqual(["Zack", "Thaddeus"]);
  })));

  it('should return team name for books', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("books").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(booksTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[3]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('books');
    expect(team[0].memberNames).toEqual(["Eric", "Swapnil"]);
  })));

  it('should return team name for dvds', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("dvds").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(dvdsTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[4]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('dvds');
    expect(team[0].memberNames).toEqual(["Bigyan", "Pawan"]);
  })));

  it('should return team name for laptops', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let team: Team[] = [];
    service.getTeam("laptops").subscribe(data => team[0] = data);
    const req = httpTestingController.expectOne(laptopsTeam);
    // Request is GET
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockTeams[5]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(team[0]).toBeTruthy();
    expect(team[0].name).toBe('laptops');
    expect(team[0].memberNames).toEqual(["Barry", "Nayaab"]);
  })));

  it('should throw an error for an unexisting team name', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    try {
      let team: Team[] = [];
      service.getTeam("test").subscribe(data => team[0] = data);
      const req = httpTestingController.expectOne(laptopsTeam);
      // Request is GET
      expect(req.request.method).toEqual('GET');
      // Respond with mock data
      req.flush(mockTeams[5]);
      // Assert
      httpTestingController.verify();
      tick();
    }catch(e) {
      let err:string = String(e);
      expect(err).toBe('Error: Undefined team...');
    }
    
  })));

  //post
  it('should add a bike', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let bike: Bike[] = [];
    service.addBike(mockBikes[0]).subscribe(data => bike[0] = data);
    const req = httpTestingController.expectOne(bikesAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockBikes[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(bike[0].name).toBe("Mamba Sport 12\" Balance Bike");
    expect(bike[0].brand).toBe('Mamba Bikes');
    expect(bike[0].color).toBe('black');
    expect(bike[0].price).toBe(75.88);
  })));

  it('should add food', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let food: Food[] = [];
    service.addFood(mockFoods[0]).subscribe(data => food[0] = data);
    const req = httpTestingController.expectOne(foodAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockFoods[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(food[0].name).toBe('The Original Sandwich');
    expect(food[0].brand).toBe('Oreo');
    expect(food[0].weight).toBe('303g');
    expect(food[0].calories).toBe(405);
    expect(food[0].price).toBe(2.85);
  })));

  it('should add toys', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let toy: Toy[] = [];
    service.addToy(mockToys[0]).subscribe(data => toy[0] = data);
    const req = httpTestingController.expectOne(toysAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockToys[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(toy[0].name).toBe('Medical Kit');
    expect(toy[0].brand).toBe('Fisher-Price');
    expect(toy[0].age_group).toBe('3 to 9');
    expect(toy[0].price).toBe(20.41);
  })));

  it('should add book', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let book: Book[] = [];
    service.addBook(mockBooks[0]).subscribe(data => book[0] = data);
    const req = httpTestingController.expectOne(booksAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockBooks[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(book).toBeTruthy();
    expect(book[0].title).toBe('Lord of the Rings');
    expect(book[0].author).toBe('J.R.R Tolkien');
    expect(book[0].price).toBe(25.99);
    expect(book[0].isbn).toBe('9780261102385');
    expect(book[0].publisher).toBe('HarperCollins');
  })));

  it('should add dvd', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let dvd: Dvd[] = [];
    service.addDvd(mockDvds[0]).subscribe(data => dvd[0] = data);
    const req = httpTestingController.expectOne(dvdsAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockDvds[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(dvd).toBeTruthy();
    expect(dvd[0].title).toBe('Avengers - Infinity War');
    expect(dvd[0].rating).toBe('PG-13');
    expect(dvd[0].studio).toBe('MARVEL');
    expect(dvd[0].time).toBe(149);
    expect(dvd[0].price).toBe(18.55);
  })));

  it('should add laptop', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let laptop: Laptop[] = [];
    service.addLaptop(mockLaptops[0]).subscribe(data => laptop[0] = data);
    const req = httpTestingController.expectOne(laptopsAdd);
    // Request is GET
    expect(req.request.method).toEqual('POST');
    // Respond with mock data
    req.flush(mockLaptops[0]);
    // Assert
    httpTestingController.verify();
    tick();
    expect(laptop).toBeTruthy();
    expect(laptop[0].product).toBe('ThinkPad T430s');
    expect(laptop[0].brand).toBe('Lenovo');
    expect(laptop[0].cpu).toBe('core i5-3320');
    expect(laptop[0].memory).toBe('8GB');
    expect(laptop[0].price).toBe(325.09);
  })));

  //404
  it('should handle a 404 error getBikes', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getBikesWithLocation(raleigh)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(bikesRaleigh);
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

  it('should handle a 404 error getFood', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getFoodsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(foodDurham);
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

  it('should handle a 404 error getToys', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getToysWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(toysDurham);
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

  it('should handle a 404 error getBooks', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getBooksWithLocation(raleigh)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(booksRaleigh);
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

  it('should handle a 404 error getDvds', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getDvdsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(dvdsDurham);
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

  it('should handle a 404 error getLaptops', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getLaptopsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(laptopsDurham);
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

  //500
  it('should handle network error getBikes', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
      let errorResp: HttpErrorResponse;
      let errorReply: string = "";
      const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
      service.getBikesWithLocation(raleigh)
          .subscribe({
              next: () => fail('Should not succeed'),
              error: (e) => errorReply = e
          });
      const req = httpTestingController.expectOne(bikesRaleigh);
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

  it('should handle network error getFood', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getFoodsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(foodDurham);
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

  it('should handle network error getToys', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getToysWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(toysDurham);
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

  it('should handle network error getBooks', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getBooksWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(booksDurham);
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

  it('should handle network error getLaptops', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getLaptopsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(laptopsDurham);
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

  it('should handle network error getDvds', inject([FidzulaService], fakeAsync((service: FidzulaService) => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = "";
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    service.getDvdsWithLocation(durham)
        .subscribe({
            next: () => fail('Should not succeed'),
            error: (e) => errorReply = e
        });
    const req = httpTestingController.expectOne(dvdsDurham);
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
