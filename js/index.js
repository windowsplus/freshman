$(document).ready(function() {

  var jobCount = $('#list .in').length;
  $('.list-count').text(jobCount + ' items');
  $('#list').css('display','none');
  $('.co').css('display','none');
  
  $("#search-text").keyup(function (e) {
     //$(this).addClass('hidden');
  
  if(e.keyCode != 8 && e.keyCode != 13){
    
    
    $('#list').css('display','block');
    var searchTerm = $("#search-text").val();
    var listItem = $('#list').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#list li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('in');
      setTimeout(function() {
          $('.in').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');
    
    //shows empty state text when no jobs found
    if(jobCount == '0') {
      $('#list').addClass('empty');
    }
    else {
      $('#list').removeClass('empty');
    }
    
      }
    
  });

	
                    
});







