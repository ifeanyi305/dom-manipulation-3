let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: ' "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them."',
    person: 'ifeanyi oti'
},{
    quote: '"We know what we are, but know not what we may be."',
    person: 'joseph oti'
},
{
    quote: '"Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head"',
    person: 'ifeanyi oti'
},{
    quote: '"Our doubts are traitors and make us lose the good we oft might win by fearing to attempt."',
    person: 'joseph oti'
},{
    quote: '"Give every man thy ear, but few thy voice."',
    person: 'ifeanyi oti'
},{
    quote: '"Uneasy lies the head that wears the crown."',
    person: 'joseph oti'
},{
    quote: '"How poor are they that have not patience! What wound did ever heal but by degrees?"',
    person: 'ifeanyi oti'
},{
    quote: 'Nothing can come of nothing."',
    person: 'joseph oti'
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})



