







const bookPrice = [567.50,345.40,767.45,567.60,600,400,230,450,350.50,560.40,800.56,890.9];
// 1. Find all prices less than 500
const priceLesser500 = bookPrice.filter(price => price<600);
console.log(priceLesser500);

// 2. Find the first price greater than 600
const firstPriceGt500 = bookPrice.find(price => price>600);
console.log(firstPriceGt500);

// 3. Find all prices between 500 and 600
const betweenPrice = bookPrice.filter(price => price>500 && price <600);
console.log(betweenPrice);

// 4. Display sum of all prices
const sumPrices = bookPrice.reduce((sum,price)=> sum+price,0 );
console.log(sumPrices);

// 5. Display sum of all prices but initial value of sum should be 100
const sumIntial100 = bookPrice.reduce((sum,price)=> sum+price,100);
console.log(sumIntial100);


// 6. Double every price from array and display new prices
const doublePrice = bookPrice.map(price => price*2);
console.log(doublePrice);

// 7. Display sum of prices which are less than 500

const sumPricesLesser500 = bookPrice.filter(price => price<500).reduce((sum,price) => sum+price,0);
console.log(sumPricesLesser500);

// Consider following Book Names Array
 const bookNames = ['Learn Java','Basics of Python','Advanced java Concepts','Web Basics', 'Easy learnng Python', 'Web Fundamentals', 'JAVA fundamentals'];



// 1. Find all books starting with 'Web'  : ['Web Basics','Web Fundamentals']
const allBooksWeb = bookNames.filter(book =>book.startsWith('Web'));
console.log(allBooksWeb);

// 2. Find all books which are related to Java :['Learn Java', 'Advanced java Concepts','JAVA fundamentals']
const javaBooks = bookNames.filter(book => book.toLowerCase().includes('java'));
console.log(javaBooks);


// 3. Prepend 'Neo-' to every Book Name and Display new book name
const prePendNeo = bookNames.map(books => 'Neo-'+books);
console.log(prePendNeo);


// 4. Display sum of length of every bookname
const sumLengthBookName = bookNames.reduce((sum,book)=> sum+book.length,0);
console.log(sumLengthBookName);




