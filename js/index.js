var backStack = []

/////
///// Document Ready
/////
$(document).ready(function(){
    LoadNavBar()
    RequestTextFile(FillDocumentElement, CONSTANTS.TARGET_DATA_FILE, CONSTANTS.API_KEY)
});



/////
///// FillDocumentElement
/////
function FillDocumentElement(contents, file_id){
///DESCRIPTION
///     - callback from RequestTextFile, see that function for details
///         (in GoogleDrive.js)

    //alert("#" + file_id + " .contents-body")
    $("#document-insertion").html(contents)

    newContents = ""
    $("table tr td p").each(function(index){
        console.log( index + ": " + $( this ).text() );
        newContents += '<div class="row">'
        newContents += '<input class="col-xs-2" onclick=\'responsiveVoice.speak("' + $(this).text() + '", "US English Female");\' type="button" value="Play" />'
        newContents += '<div class="col-xs-10">' + $(this).text() + '</div>'
        newContents += '</div>'
    });

    $("#document-insertion").html(newContents)
}
