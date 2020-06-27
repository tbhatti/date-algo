==============================================================================================
Question 1: Check the given date is between two given dates?
var date1 = new Date('2020-01-01'); // First given date
var date2 = new Date('2020-07-20'); // Second given date
var date3 = new Date('2020-04-02'); // To check whether date is beteen date 1 and date2
===============================================================================================
Answer: 
		//date.getTime() will return  milliseconds since Jan 1, 1970, 00:00:00.000 GMT
		if (date3.getTime() > date1.getTime() && date3.getTime() < date2.getTime()) {
			console.log('Given date is in between');
		} else {
			console.log('Given date is not in between');
		}
=================================================================================================
Question 2: How to check the input date is equal to today’s date or not using JavaScript ?
=================================================================================================
Answer: There are two ways to check whether given date is today's date
1. By sttng hours to 0 0 0 0

var today = new Date();
var givenDate = new Date('2020-06-26');

if(today.setHours(0,0,0,0) === givenDate.setHours(0,0,0,0)) {
	console.log('Date is todays date');
} else {
	console.log('Date is not todays date');
}
======================================================================================================
Question 3: How to get seconds since epoch in JavaScript?
=======================================================================================================
Answer: EPOCH means time from 01 January 1970

var date = new Date();
var ms = date.getTime() // It will return the number of milliseconds from 01 Jaunary 1970
var seconds = ms/1000; // It will convert milliseconds to seconds
=======================================================================================================
Question 4: 
=======================================================================================================
Answer: Please have a look at https://github.com/tbhatti/date-algo/blob/master/days-ago.js
