;(function($) {
    'use strict';
    //my query 
    //for background
    $("#uploadbgimage").on('click',UploadImage);
    $("#removebgimage").on('click',RemoveImage );

    //for card 
    $("#uploadcdimage").on('click',UploadImage);
    $("#removecdimage").on('click',RemoveImage );

    //for 44;
    $("#upload-image").on('click',UploadImage);
    $("#remove-image").on('click',RemoveImage );

    function UploadImage() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        var button = $(this);
        wp.media.editor.send.attachment = function something(props, attachment) {
            var elm = $(button).parent().parent().parent();
            var img = $("<img class='cardImages' src= '" + attachment.url + "' >")
            $(elm).prepend(img);
            wp.media.editor.send.attachment = send_attachment_bkp;
        }
        wp.media.editor.open();
        return false;
    }

    function RemoveImage() {
        var answer = confirm('Are you sure?');
        var button = $(this);
        if (answer == true) {
            var elm = $(button).parent().parent().parent().find("img");
            if(elm.length > 0){
                $(elm).remove();
            }else{
                alert("There don't have any image");
            }
        }
        return false;
    }
    



})(jQuery);