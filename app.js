let quote = document.querySelector('.quote');
let authors = document.querySelector('.author');
let button = document.querySelector('.btn');

const quotes =[
    {
    quote:'"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."',
    author:'Madeleine L`Engle'
    },{
    quote:'"If you don`t have time to read, you don`t have the time (or the tools) to write. Simple as that."',
    author:'Stephen King'
    },{
    quote:'"We write to taste life twice, in the moment and in retrospect."',
    author:'Anaïs Nin'
    },{
    quote:'"Substitute `damn` every time you`re inclined to write `very;` your editor will delete it and the writing will be just as it should be."',
    author:'Mark Twain'
    },{
    quote:'"If there`s a book that you want to read, but it hasn`t been written yet, then you must write it."',
    author:'Toni Morrison'
    },{
    quote:'"One day I will find the right words, and they will be simple."',
    author:'Jack Kerouac'
    },{
    quote:'"Either write something worth reading or do something worth writing."',
    author:'Benjamin Franklin'
    },{
    quote:'"You never have to change anything you got up in the middle of the night to write."',
    author:'Saul Bellow'
    },{
    quote:'"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."',
    author:'Robert Frost'
    },{
    quote:'"You must stay drunk on writing so reality cannot destroy you."',
    author:'Ray Bradbury'
    } ];


    button.addEventListener("click",function(){

        let x = Math.floor(Math.random() * quotes.length);

         quote.innerText = quotes[x].quote;
         authors.innerText = quotes[x].author;
      
    })