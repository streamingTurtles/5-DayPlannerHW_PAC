// using dayjs API 
// link to dayjs api --> https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md
// console.log(dayjs());
// console.log(dayjs().format());
console.log(dayjs().format('dddd, MMMM D YYYY' +  'h mm A'));


// adding current day & time to top of page in p element
// test 1st Vanilla javascript way - not used
// document.getElementById('currentDay').innerText = formatDate;
// jQuery go get ID currentDay to put current date on top of the dayplaner page
var today = $("#currentDay")
var formatDate = dayjs().format('dddd, MMMM D YYYY'+','+' h'+':'+'mm A');
today.text(formatDate);  



