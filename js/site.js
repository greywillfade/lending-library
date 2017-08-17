var gData;
/*
    Draw the toolbox with an array of spreadsheet data
    and cache the data in a global variable.
*/
function initialize(data) {
    gData = data
    drawToolBox(data)
}

function drawToolBox(data) {
  var tools = ich.tools({
    'rows': data
  })
  $('#tools').html(tools);
}

$(document).on( 'click', '.clear', function(e) {
  clearSearch(e);
})

$(document).on('keyup search', '#toolSearch', function(e) {
  var text = $(e.target).val().trim().toLowerCase();
  if (text === '') return clearSearch(e)
  filterTools(text)
})

/*
$(document).on( 'click', '.tool-box-tool', function(e) {
  var rowNumber = $(this).closest("div").attr("id")
  if ($(this).closest('div').hasClass('selected-tool')) {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'none')
    $(this).closest('div').removeClass('selected-tool')
  }
  else {
    $('.tool-box-bottom' + '.' + rowNumber).css('display', 'inherit')
    $(this).closest('div').addClass('selected-tool')
  }
})*/


function clearSearch(e) {
  console.log('clear')
  $('#toolSearch').val('')
  drawToolBox(gData)
}

function filterTools(text) {
    console.log(text);
    $('h3').each(function() {
        var tool = $(this).html().toLowerCase();
        if (tool.match(text)) {
            $(this).parent().removeClass('filtered');
        }
        else {
            $(this).parent().addClass('filtered');
        }
    });
}
