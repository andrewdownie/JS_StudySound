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

    ///
    ///             modify the html recieved here
    ///
}
