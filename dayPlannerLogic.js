
// using dayjs API 
// link to dayjs api --> https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md
// console.log(dayjs());
// console.log(dayjs().format());
console.log("Today is: ", dayjs().format('dddd, MMMM D YYYY' +  'h mm A'));


// adding current day & time to top of page in p element
// test 1st Vanilla javascript way - not used
// document.getElementById('currentDay').innerText = formatDate;
// jQuery go get ID currentDay in p tag in HTML - and adds current date & time on top of the dayplaner page
var today = $("#currentDay")
var formatDate = dayjs().format('dddd, MMMM D YYYY'+','+' h'+':'+'mm A');
today.text(formatDate);  
// build out the Timeblocks
// add the slotted times for 9am to 5pm dynamically generated by javascript and jQuery
// loop thru, format the dayjs time and render the html rows with a time coloum, text entry column area, and save button coloumn
// capture user input and return for localStorage function
var timeArray = [];


// var saveEntry=[];
var saveEntry = localStorage.getItem('getUsrInput') ? JSON.parse(localStorage.getItem('getUsrInput')) : [];
console.log("save entry before makeRowAndFill function call: ", saveEntry);
function makeRowsAndFill() {
    var makeRow;
    var hrCol; 
    var userEntry; 
    console.log('before LOOP - the current saveEntry[] is: ',saveEntry);
    for (var i = 0; i < 9; i++) {
        // var hour = dayjs().hour(i +9).format("h mm A");
        var hour = dayjs().hour(i+9 ).format("h A");
        // console.log('The Current Time is at: ', hour + ' This "Day" Planer always shows the AM TOD, ...from 9am to 5pm');
        // var hour = dayjs().format('dddd, MMMM DD YYYY');
        timeArray.push(hour);
        // console.log(timeArray);
        // add rows, include the 2 given classes, add #id's to each of the generaated rows named rows1, 2, 3, etc...
        makeRow = $("<div>").addClass("row time-block").attr("id", "rows" + i)
        $(".container").append(makeRow);
        // add in each row the hour column located at bootstrap col-1 placement
        // each row is styled with the given .hour class in style.css file 
        // hrCol = $("<div>").addClass("hour col-1").text(timeArray[i]);
        hrCol = $("<div>").addClass("hour col-1").text(hour);
        $("#rows"+i).append(hrCol);
        // add in each row a textarea for the user to enter an event in the dayPlanner 
        // use col-10 to span across the row for 10 coloumns, between the 2-10 columns
        // add the style class .description from the sytle.css file
        // userEntry = $("<textarea>").addClass("description col-10").attr("id", "text"+i).attr("data-hr", i).text(saveEntry[i] ? saveEntry[i] : "");
        userEntry = $("<textarea>").addClass("description col-10").attr("id", "text"+i).attr("data-hr", i).text(saveEntry[i]);
        $("#rows"+i).append(userEntry);
        console.log('INSIDE THE LOOP - the current saveEntry is: ',saveEntry);
        console.log('INSIDE THE LOOP - the current saveEntry[] is: ',saveEntry[i]);
        // add a coloum button to each row that when clicked the user event entry will be saved & persist in localStorage
        saveButn = $("<button>").addClass("saveBtn col-1").html("<i class=\"far fa-save\"></i>"); // use "\" to excape the font awesome class within <i> tag
        $("#rows"+i).append(saveButn);
        //
        // // saving
        // $(document).on("click", "button", function () {
        //     var foo = $(this).parent().find("textarea").attr("data-hr")
        //     console.log("foo the index and its position in the array is at: ", foo);
        //     // saveEntry[$(this).parent().find("textarea").attr("data-hr")] = JSON.parse(localStorage.getItem("getUsrInput")); // test herre 
        //     localStorage.setItem("getUsrInput", JSON.stringify(saveEntry)); 
        //     localStorage.setItem("getUsrInput", JSON.stringify($(this).parent().find("textarea").val() )); // removed for tesing
        //     saveEntry = JSON.parse(localStorage.getItem("getUsrInput"));
        //     console.log("saveEntry is: ", saveEntry);            
        // });
    };
            // saving
            $(document).on("click", "button", function () {
                var foo = $(this).parent().find("textarea").attr("data-hr")
                console.log("foo the index and its position in the array is at: ", foo);
                // saveEntry[$(this).parent().find("textarea").attr("data-hr")] = JSON.parse(localStorage.getItem("getUsrInput")); // test herre 
                localStorage.setItem("getUsrInput", JSON.stringify(saveEntry)); 
                localStorage.setItem("getUsrInput", JSON.stringify($(this).parent().find("textarea").val() )); // removed for tesing
                // saveEntry = JSON.parse(localStorage.getItem("getUsrInput"));
                saveEntry[foo] = JSON.parse(localStorage.getItem("getUsrInput"));
                console.log("saveEntry is: ", saveEntry);     
                localStorage.setItem("getUsrInput", JSON.stringify(saveEntry));       
            });
    // localStorage.setItem("getUsrInput", JSON.stringify(saveEntry));
};
makeRowsAndFill();






// function to style the text sections with color classes representing past, present & future time slots 
function timeCheckForColorShow (){
    var nowHour = dayjs().format('h'); // for testing 
    var amOrpm  = dayjs().format('a'); // for testing
        $.each(timeArray, function(i, arryId){ 
            // methods from dayjs API https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#hour-hour
            if (dayjs().isSame(dayjs().hour(i+9))) { $("#text"+i).addClass("present");}
                else if (dayjs().isBefore(dayjs().hour(i+9))) {$("#text"+i).addClass("future");}
                  else { if (dayjs().isAfter(dayjs().hour(i+9))) {$("#text"+i).addClass("past");}}                     
        });   
};
timeCheckForColorShow();


// bonus - to clear the local storage each day - not implemented yet 
function clear(){
    // clear local storage when the day changes
    saveEntry=[];   
}






