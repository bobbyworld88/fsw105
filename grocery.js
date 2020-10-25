var shopper = {
    shopperName: "Robert",
    grocerylist: 6,
    isPaid: false,
    groceryCart: ["cheese", "chicken", "rice", "spinach"],

    checkout: function() {
        console.log(`${this.shopperName} has this following groceries in their basket: ${shopper.groceryCart}. Total items purchased: ${this.grocerylist}`);
    }


};

shopper.checkout();
//DRY don't repeat yourself - he will ask in week3 //

