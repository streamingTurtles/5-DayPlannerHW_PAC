
// using dayjs API 
// link to dayjs api --> https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md
// console.log(dayjs());
// console.log(dayjs().format());
console.log(dayjs().format('dddd, MMMM D YYYY' +  'h mm A'));


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
function makeRowsAndFill() {
    var makeRow;
    var hrCol; 
    var userEntry; 
    // var captureUserEntry=[];
    // var locationCaptured; 
    var getUsrInput;
    var saveEntry = JSON.parse(localStorage.getItem("getUsrInput"));
    console.log(saveEntry);
    for (var i = 0; i < 9; i++) {
        // var hour = dayjs().hour(i +9).format("h mm A");
        var hour = dayjs().hour(i+9 ).format("h A");
        console.log('The Current Time is at: ', hour + ' This "Day" Planer always shows the AM TOD, ...from 9am to 5pm');
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
        userEntry = $("<textarea>").addClass("description col-10").attr("id", "text"+i).attr("data-hr", i).text(saveEntry[i]);
        $("#rows"+i).append(userEntry);
        // add a coloum button to each row that when clicked the user event entry will be saved & persist in localStorage
        saveButn = $("<button>").addClass("saveBtn col-1").html("<i class=\"far fa-save\"></i>"); // use "\" to excape the font awesome class within <i> tag
        $("#rows"+i).append(saveButn);

    };
        // saving
        // use jQuery on method to find users input in the textarea, save in array and save in local storage
        $(document).on("click", "button", function () {
             var foo = $(this).parent().find("textarea").attr("data-hr")
             console.log("this is foo at index: ", foo);

            saveEntry[foo] = $(this).parent().find("textarea").val();
            console.log(saveEntry);
            // locationCaptured = $(this).parent().find("textarea").attr("data-hr")
            // console.log("captured at: ", locationCaptured + " user input is: " + captureUserEntry[foo]);
            // getUsrInput = JSON.parse(localStorage.getItem("getUsrInput"));


            
            // console.log(getUsrInput);
            localStorage.setItem("getUsrInput", JSON.stringify(saveEntry));
            // localStorage.setItem(captureUserEntry[foo], $(this).val() )        

        
            
        });

       

//    return saveToLocalStorage(userEntry);
};
makeRowsAndFill();



// bonus - to clear the local storage each day - not implemented yet 
function clear(){
    // clear local storage when the day changes
    saveEntry=[];   
}









// function to style the text sections with color classes representing past, present & future time slots 
function timeCheckForColorShow (){
    var nowHour = dayjs().format('h'); // for testing 
    var amOrpm  = dayjs().format('a'); // for testing
    console.log('current Hour is: ', nowHour + ' AM or PM? ', amOrpm); // testing for if else condition for style coloring
        $.each(timeArray, function(i, arryId){ 
            console.log(i + ' ' + arryId + " dayjs().format('h') is: ", nowHour); // testing each index in array  
            // don't need this since +9 to i forces to always be between 9am - 5pm ??? 
            if (amOrpm == "am" && (nowHour < 9 || nowHour == 12) ) { console.log('gray')
                // to finish this part after day planner hours - stop checking conditions below  
                $("#text"+i).addClass("rowGray");
            }
            // methods from dayjs API https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#hour-hour
            if (dayjs().isSame(dayjs().hour(i+9))) { $("#text"+i).addClass("present");}
                else if (dayjs().isBefore(dayjs().hour(i+9))) {$("#text"+i).addClass("future");}
                  else { if (dayjs().isAfter(dayjs().hour(i+9))) {$("#text"+i).addClass("past");}}                     
        });   
        //  nowHour=10; if (nowHour == '10') {$("#text"+8).addClass("present");} // testing code, fudge nowHour to each of the times to test
};
timeCheckForColorShow();






