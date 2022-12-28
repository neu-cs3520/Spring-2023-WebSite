/*Retrieve Today */
var now = new Date();
var utcGet = new Date(
	now.getUTCFullYear(),
	now.getUTCMonth(),
	now.getUTCDate()
);

/*Converts the UTC into a straight YYYY-MM-DD Format*/
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
    	month = '0' + month;
    }
    if (day.length < 2) {
    	day = '0' + day;
    }
    return [year, month, day].join('-');
}

/*Function to translate a string to
millisecond difference to 01/01/1970*/
var parseDate = function(changeDateStr) {
	return Date.parse(changeDateStr);
};

/*Converts UTC to
millisecond difference to 01/01/1970 */
var currentDate = parseDate(formatDate(utcGet));

/* Returns a boolean to trigger some JS when a future date arrives */
var futureDate = function(userDate) {
	var userDateParsed = parseDate(userDate);
	if (userDateParsed > currentDate) {
		return false;
	}
	else {
		return true;
	}
};

$.fn.timeMachine = function() {

  /*Define HTML attributes to be used*/

	var hideUntilAttr   = 'data-hide-until';
	var removeUntilAttr = 'data-remove-until';
	var showUntilAttr   = 'data-show-until';

	/* After Attributes */
	var hideAfterAttr   = 'data-hide-after';
	var removeAfterAttr = 'data-remove-after';
	var showAfterAttr   = 'data-show-after';

  /*Select elements from DOM and assign them to variables*/
	var hideUntilElem   = $('['+hideUntilAttr+']');
	var removeUntilElem = $('['+removeUntilAttr+']');
	var showUntilElem   = $('['+showUntilAttr+']');

	var hideAfterElem   = $('['+hideAfterAttr+']');
	var removeAfterElem = $('['+removeAfterAttr+']');
	var showAfterElem   = $('['+showAfterAttr+']');



  /* Hide Until Loop */
  	$.each(hideUntilElem, function(i,v) {
  		var changeDateStr = $(this).attr(hideUntilAttr);
  		var userDate = parseDate(changeDateStr);
		var diff = currentDate - userDate;
  		if (userDate >= currentDate) {
  			$(this).hide();
  		}
		else {
			$(this).show();
		}
  	});

  /*Remove Until Loop*/
  	$.each(removeUntilElem, function(i,v) {
  		var changeDateStr = $(this).attr(removeUntilAttr);
  		var userDate = parseDate(changeDateStr);
  		if (userDate >= currentDate) {
  			$(this).remove();
  		}
  		else {
  			$(this).show();
  		}
  	});

  /* Show Until Loop*/
  	$.each(showUntilElem, function(i,v) {
  		var changeDateStr = $(this).attr(showUntilAttr);
  		var userDate = parseDate(changeDateStr);
		var diff = currentDate - userDate;
  		if (userDate >= currentDate) {
  			$(this).show();
  		}
		else {
			$(this).hide();
		}
  	});

  /*Hide After Loop*/
  	$.each(hideAfterElem, function(i,v) {
  		var changeDateStr = $(this).attr(hideAfterAttr);
  		var userDate = parseDate(changeDateStr);
  		if (userDate <= currentDate) {
  			$(this).hide();
  		}
		else {
			$(this).show();
		}
  	});

  /*Remove After Loop*/
  	$.each(removeAfterElem, function(i,v) {
  		var changeDateStr = $(this).attr(removeAfterAttr);
  		var userDate = parseDate(changeDateStr);
  		if (userDate <= currentDate) {
  			$(this).remove();
  		}
  		else {
  			$(this).show();
  		}
  	});

  /*Show After Loop*/
  	$.each(showAfterElem, function(i,v) {
  		var changeDateStr = $(this).attr(showAfterAttr);
  		var userDate = parseDate(changeDateStr);
  		if (userDate <= currentDate) {
  			$(this).show();
  		}
		else {
			$(this).hide();
		} 
  	});
};
