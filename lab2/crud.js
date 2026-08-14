import readline from "readline/promises";
import{stdin, stdout} from "process";

const main = async ()=>{
    let choice;
    const cin = readline.createInterface({input: stdin, output: stdout});
    do{
    console.log("Welcome to Flipkart 🛒🤷‍♂️😁");
    console.log("1.................Show Cart");
    console.log("2.................Add to Product");
    console.log("3.................Remove Product");
    console.log("4.................Update Quantity");
    console.log("5.................Checkout");
    choice= await cin.question("Enter your choice: ");
    switch (Number(choice)){
        case 1:
            console.log("Show products");
            break;
        case 2:
            console.log("Product added");
            break;
        case 3:
            console.log("remove product");
            break;
        case 4:
            console.log("Update product quantity");
            break;
        case 5:
            console.log("See you later");
            break;
        default:
            console.log("Invalid choice! try again😒");
            break;
    }
    }while(choice!=5);
    cin.close();
};

main();