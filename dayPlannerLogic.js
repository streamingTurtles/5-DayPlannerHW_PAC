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


// add the slotted times for 9am to 5pm
// loop thru, format the dayjs time and render the html rows
timeArray = [];
function makeRowsAndFill() {
    var makeRow;
    for (var i = 0; i < 9; i++) {
        var hour = dayjs().hour(i +9).format("h mm A");
        console.log(hour)
        // var hour = dayjs().format('dddd, MMMM DD YYYY');
        timeArray.push(hour);
        console.log(timeArray);
        makeRow = $("<div>").addClass("row time-block")
        $(".container").append(makeRow);
    };
    // using bootstrap & jquerty to generate the rows
    // function fillRows(){
    //     makeRow = $("<div>").addClass("row time-block")
    //     $(".container").append(makeRow);
    // }
    // fillRows()
};

makeRowsAndFill();