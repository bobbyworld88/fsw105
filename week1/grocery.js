var shopper = {
    //String//
    shopperName: "Robert",
    //Number//
    grocerylist: 6,
    //Boolean//
    isPaid: false,
    //Array//
    groceryCart: ["cheese", "chicken", "rice", "spinach"],
    //Function - customer name with cart items and total item count//
    checkout: function() {
        console.log(`${this.shopperName} has this following groceries in their basket: ${shopper.groceryCart}. Total items purchased: ${this.grocerylist}`);
    }

};

shopper.checkout();

//DRY don't repeat yourself - he will ask in week3 //
