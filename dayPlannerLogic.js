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
var timeArray = [];
function makeRowsAndFill() {
    var makeRow;
    var hrCol; 
    var userEntry;  
    for (var i = 0; i < 9; i++) {
        // var hour = dayjs().hour(i +9).format("h mm A");
        var hour = dayjs().hour(i +9).format("h A");
        console.log(hour)
        // var hour = dayjs().format('dddd, MMMM DD YYYY');
        timeArray.push(hour);
        console.log(timeArray);
        // add rows, include the 2 given classes, add #id's to each of the generaated rows named rows1, 2, 3, etc...
        makeRow = $("<div>").addClass("row time-block").attr("id", "rows" + i)
        $(".container").append(makeRow);
        // add in each row the hour column at bootstrap col-1 placement
        // each row is styled with the given .hour class in style.css file 
        hrCol = $("<div>").addClass("hour col-1").text(timeArray[i])
        $("#rows"+i).append(hrCol);
        // add in each row a textarea for the user to enter an event in the dayPlanner
        // add the style class .description from the sytle.css file
        userEntry = $("<textarea>").addClass("description").attr("id", "text"+1);
        $("#rows"+i).append(userEntry);
        
        
        
        // pseudo code for this function
        //makeRow.append(hour, textarea, button)
        // $(".container").append(makeRow);
        //create div hour column here col-md-1
        //hrCol = $("<div").addClass("col-md-1 hour")
        //create textarea with description here col-md-1
        //create save button here col-md-1

    };
};

makeRowsAndFill();