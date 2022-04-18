describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  })

 //Class A Tests
 describe('Class A Service Tests', () => {
  //Get All Bikes
  it('click on getBikesWithLocation is Raleigh', () => {
    //Need to modfiy for two dropdowns

    //serviceD is a class name for select
    cy.get('.services').select('Bikes');
    cy.get('.locations').select('Raleigh');
    
    cy.get('tbody')
      .contains('TEST BIKE')
      .should('not.exist');
    
    //Bike name should Exist
    cy.get('tbody')
      .contains('DJ Fat Bike 500W');
    //Bike brand should Exist
    cy.get('tbody')
      .contains('Kobe');
    
    //BIke color should exist
    cy.get('tbody')
      .contains('Silver');
    
    //CHECK FOR CORRECT PRICE With Tax
    cy.get('tbody')
      .contains(237.96);

  })


 //Get All Foods
  it('click on getFoodWithLocation is Durham ', () => {
    cy.get('.services').select('Food');
    cy.get('.locations').select('Durham');
    
    cy.get('tbody')
      .contains('TEST Food')
      .should('not.exist');
    
    //Food name should Exist
    cy.get('tbody')
      .contains('The Original Sandwich');
    //Food brand should Exist
    cy.get('tbody')
      .contains('Chef Boyardee');
    
    //Food calories should exist
    cy.get('tbody')
      .contains(525);

    //Original price should not exist
    cy.get('tbody')
      .contains(5.87)
      .should('not.exist');
      //CHECK FOR CORRECT PRICE
  })

  //Get All Toys
  it('click on getToysWithLocation is Durham ', () => {
    cy.get('.services').select('Toys');
    cy.get('.locations').select('Durham');
    
    cy.get('tbody')
      .contains('TEST TOY')
      .should('not.exist');
    
    //Toy name should Exist
    cy.get('tbody')
      .contains('Medical Kit');
    //Toy brand should Exist
    cy.get('tbody')
      .contains('Fisher-Price');
    
    //Toy age range should exist
    cy.get('tbody')
      .contains('0 to 3');
    
    //Price should not exist
    cy.get('tbody')
      .contains(3.99)
      .should('not.exist');

    //CHECK FOR CORRECT PRICE
    cy.get('tbody')
      .contains(35.99);
  })
  
})


//Class A Tests
describe('Class B Service Tests', () => {
  //Get All Books
  it('click on getBooksWithLocation is Raleigh', () => {
    //Need to modfiy for two dropdowns
    cy.get('.services').select('Books');
    cy.get('.locations').select('Raleigh');
    
    cy.get('tbody')
      .contains('TEST Book')
      .should('not.exist');
    
    //Book publisher should Exist
    cy.get('tbody')
      .contains('HarperCollins');
    //Book isbn should Exist
    cy.get('tbody')
      .contains('0261102214');
    
    //Book author should exist
    cy.get('tbody')
      .contains('J.R.R Tolkien');
    
    //CHECK FOR CORRECT PRICE

    //Original price should not exist
    cy.get('tbody')
      .contains(9.88)
      .should('not.exist');
  })


 //Get All DVDS
  it('click on getDvdWithLocation is Durham ', () => {
    cy.get('.services').select('DVDs');
    cy.get('.locations').select('Durham');
    
    cy.get('tbody')
      .contains('TEST DVD')
      .should('not.exist');
    
    //Movie rating should Exist
    cy.get('tbody')
      .contains('PG');
    //DVD  studio should Exist
    cy.get('tbody')
      .contains('MARVEL');
    
    //DVD Title should exist
    cy.get('tbody')
      .contains('Captain America');

    //Original price should not exist
    cy.get('tbody')
      .contains(5.87)
      .should('not exist');

    //Original price should not exist
    cy.get('tbody')
      .contains(19.98)
      .should('not.exist');
  })

  //Get All Laptops
  it('click on getLaptopsWithLocation is Raleigh ', () => {
    cy.get('.services').select('Laptops');
    cy.get('.locations').select('Raleigh');
    
    cy.get('tbody')
      .contains('TEST Laptop')
      .should('not.exist');
    
    //Laptop name should Exist
    cy.get('tbody')
      .contains('Lenovo');
    //Laptop memory  should Exist
    cy.get('tbody')
      .contains('4GB');
    
    //Laptop cpu should exist
    cy.get('tbody')
      .contains('core i5 1.6GHz');
    

    cy.get('tbody')
      .contains(459.98)
      .should('not.exist');
  })
  
})

})
