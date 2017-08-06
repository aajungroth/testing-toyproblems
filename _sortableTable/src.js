/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

var sortByWord = function() {
  var rows = $('tbody').children();

  $('tbody').empty();
  rows.sort(function(a,b) {
    var aValue = a.children[0].innerText;
    var bValue = b.children[0].innerText;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    } else {
      return 0;
    }
  });
  $('tbody').append(rows);
};

var sortByInteger = function() {
  var rows = $('tbody').children();

  $('tbody').empty();
  rows.sort(function(a,b) {
    var aValue = parseInt(a.children[1].innerText, 10);
    var bValue = parseInt(b.children[1].innerText, 10);

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    } else {
      return 0;
    }
  });
  $('tbody').append(rows);
};

var sortByFloat = function() {
  var rows = $('tbody').children();

  $('tbody').empty();
  rows.sort(function(a,b) {
    var aValue = parseFloat(a.children[2].innerText);
    var bValue = parseFloat(b.children[2].innerText);

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    } else {
      return 0;
    }
  });
  $('tbody').append(rows);
};

var sortByDate = function() {
  var rows = $('tbody').children();

  $('tbody').empty();
  rows.sort(function(a,b) {
    var aValue = new Date(a.children[3].innerText);
    var bValue = new Date(b.children[3].innerText);

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    } else {
      return 0;
    }
  });
  $('tbody').append(rows);
};

$(function() {
  // TODO: your code here!
  $('th').on('click', function(e) {
    var column = e.target.innerText;

    if (column === 'Item Name') {
      sortByWord();
    } else if (column === 'Number of Pounds') {
      sortByInteger();
    } else if (column === 'Price Per Pound') {
      sortByFloat();
    } else if (column === 'Expiration Date') {
      sortByDate();
    }
  });
});

