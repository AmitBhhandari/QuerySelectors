/*var items=document.querySelector('.list-group-item');
items.style.color='red';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var ThirdItem=document.querySelector('.list-group-item:nth-child(3)');
ThirdItem.style.display='none'*/


var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='red';
    even[i].style.backgroundColor='pink';
}