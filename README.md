# JavaScript Date questions

### Question 1: Check the given date is between two given dates?
var date1 = new Date('2020-01-01'); // First given date
var date2 = new Date('2020-07-20'); // Second given date
var date3 = new Date('2020-04-02'); // To check whether date is beteen date 1 and date2
### Answer 
		```bash //date.getTime() will return  milliseconds since Jan 1, 1970, 00:00:00.000 GMT
		if (date3.getTime() > date1.getTime() && date3.getTime() < date2.getTime()) {
			console.log('Given date is in between');
		} else {
			console.log('Given date is not in between');
		} 
		```

### Question 2: How to check the input date is equal to today’s date or not using JavaScript ?

### Answer 
There are two ways to check whether given date is today's date
1. By sttng hours to 0 0 0 0

```bash var today = new Date();
var givenDate = new Date('2020-06-26');

if(today.setHours(0,0,0,0) === givenDate.setHours(0,0,0,0)) {
	console.log('Date is todays date');
} else {
	console.log('Date is not todays date');
} 
```

### Question 3: How to get seconds since epoch in JavaScript?

### Answer
EPOCH means time from 01 January 1970

```bash var date = new Date();
var ms = date.getTime() // It will return the number of milliseconds from 01 Jaunary 1970
var seconds = ms/1000; // It will convert milliseconds to seconds
```

### Question 4: Get the relative timestamp difference between dates in JavaScript
### Answer

```bash Please have a look at https://github.com/tbhatti/date-algo/blob/master/days-ago.js
```


### Question 5: How to check for two timestamp for the same day?
### Answer
There are two ways to do this
1. by comparing UTCDate, UTCMonth and UTCFullYear as follows
```bash var date1 = new Date('2020-06-27');
var date2 = new Date('2020-06-26');
if(date1.getUTCDate() === date2.getUTCDate() && date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCFullYear() === date2.getUTCFullYear()){
	console.log('Dates are same');
} else {
	console.log('Dates are not same');
}
```
2. Consult Question 2

### Question 6: How to convert UTC date time into local date time using JavaScript ?
### Answer
```bash 
var theDate = new Date(Date.parse('06/14/2020 4:41:48 PM UTC'))
theDate.toLocaleString()
```

### Question 7: How to check if the given date is weekend?
### Answer
```bash
Use .getDay() method on the Date object to get the day.
Check if it is 6 or not (6 denotes Saturday).
Mon: 1
Tue: 2
..
Sat: 6
Sun: 0
```

### Question 8: How to format current date in MM/DD/YYYY HH:MM:SS format using JavaScript ?
### Answer
```bash
   function gfg_Run() { 
            var Str = 
                ("00" + (date.getMonth() + 1)).slice(-2) // slice(-2) means if "hello" it will take last two
                + "/" + ("00" + date.getDate()).slice(-2) 
                + "/" + date.getFullYear() + " " 
                + ("00" + date.getHours()).slice(-2) + ":" 
                + ("00" + date.getMinutes()).slice(-2) 
                + ":" + ("00" + date.getSeconds()).slice(-2); 
                  
            console.log(Str);
        }
```

### Question 9: How to convert date to another timezone in JavaScript ?

### Answer
```bash
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)); 
console.log('Given IST datetime: ' + date); 
date.toLocaleString("en-US", {timeZone: "America/New_York"});
```			

### Question 10: How to check if date is less than 1 hour ago using JavaScript ?

### Answer
var date = new Date("2020-06-27 16:10:10");
var now = new Date();
var diffInMS = now - date;
var msInHour = 36*36*1000;
if (diffInMS/msInHour > 1) {
	console.log('Within hours');
} else {
	console.log('Not in the hour');
}
			
=========================================================================================================
Question 11: How to check a date is valid or not using JavaScript ?
=========================================================================================================		
Answer: If the date is valid then the getTime() will always be equal to itself.
var date = new Date('2019-12-12');
if(date.getTime() === date.getTime()) {
	console.log('Date is valid');
} else {
	console.log(''Date is invalid);
}
=========================================================================================================
Question 12: How to convert seconds to time string format hh:mm:ss using JavaScript ?
=========================================================================================================	
var dateObj = new Date(66666666 * 1000);
hours = dateObj.getUTCHours();
minutes = dateObj.getUTCMinutes();
seconds = dateObj.getSeconds();

timeString = hours.toString().slice(-2) + ':' + 
    minutes.toString().slice(-2) + ':' + 
    seconds.toString().slice(-2)
	
=========================================================================================================
Question 13: How do you display JavaScript datetime in 12 hour AM/PM format?
=========================================================================================================
Answer: In this approach, we will change the DateTime format by only using native methods. Simply put, 
we will apply modulo “%” operator to find the hour in 12-hour format and use conditional “?:” operator to apply “AM” or “PM”.

========================================================================================================
### Question 14: JavaScript | Get the start and end of the day in UTC
=========================================================================================================
### Anser
```bash var startDay = new Date();
startDay.setHours(0,0,0,0); // Sun Jun 28 2020 00:00:00 GMT+0800 (China Standard Time)
var endDay = new Date();
endDay.setHours(23,59,59,999); // Sun Jun 28 2020 23:59:59 GMT+0800 (China Standard Time)
```

### Question 15: How to get the first day of the year in JavaScript ?
### Answer
```bash var date = new Date();
var firstDayOfYear = new Date(date.getFullYear(), 0,1); //Wed Jan 01 2020 00:00:00 GMT+0800 (China Standard Time)
```
### Question 16: How to get the first and last date of current month using JavaScript ?
### Answer
```bash
var date = new Date();                   
var firstDay =  new Date(date.getFullYear(), date.getMonth(), 1); 	  
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // 0 means last day of the month
```
