; (function ($) {
     $(document).ready(function () {
          
          getActiveSlider(0);
          checkUnic();
          $(document).on("click",".btnNames",function(){
               var getIDV = $(this).parent().attr("id");
               getActiveSlider(getIDV);
            });

            $(document).on("click",".optionDelete",function(){
               var getIDV = $(this).parent().attr("id");
               var conf = confirm("Are you sure to delete this deck!!");
               if(conf == true){
                    deletUnic(getIDV);
               }
           
          });
     //end ready function;
     var nms;


     $(".homeBack").on("click",function(){
          getActiveSlider(99);
     });
     //get Active Slider
     function getActiveSlider(IDs){
          $.ajax(
               {
                    type: 'POST',
                    url : MyAjax.ajaxurl,
                    data: {
                         action: "getActiveSlider",
                         'slideATV': IDs
                    },
                    success: function(v){ 
                         if(v == 99){
                              $(".sliderNam").html("<h2>Home</h2>");
                              $(".sliderCircus").css("display",'flex');
                              $(".David-Slider-Cards").css({"display":"none"});
                         }else{
                              if(v != 0){
                                   getSpacificData(v);
                              }
                         }    
                    },
                    error:function(e){
                         console.log(e);
                    }
               }
          );
     }
     //fetch unic
     function checkUnic(){
          $.ajax(
               {
                    type: 'GET',
                    url : MyAjax.ajaxurl,
                    // dataType: 'json',
                    data: {
                         action: "checkUnic",
                    },
                    success: function(v){
                         var value = $.parseJSON(v);
                         htmlDeshboradMaker(value)

                    },
                    error:function(e){
                         console.log(e);
                    }
               }
          );
     }
     function htmlDeshboradMaker(value){
          var finderIntem = $(".sliderCircus").find(".circusItems");
          for(var i = 0; i< value.length; i++){
               var findEl = finderIntem.find("#"+value[i][0]);
               if(findEl.length > 0){
                    findEl.find("h2").text(value[i][2]);
               }else{
                    finderIntem.prepend('<div class="circusNames" id ="'+ value[i][0] +'" ><div class="btnNames"><h2>'+ value[i][2]+'</h2><p>'+ value[i][1]+'</p></div><div class="optionDelete"><span>&#8861;</span></div></div>');
               }
          }
     }
     //add html
     function getSpacificData(ID){
          $.ajax(
               {
                    type: 'POST',
                    url : MyAjax.ajaxurl,
                    data: {
                         action: "getSlidersName",
                         'ID': ID
                    },
                    success:function(v){
                         var sliderList = $.parseJSON(v);
                         nms = sliderList[0][0];
                         $(".sliderNam").html("<h2>"+sliderList[0][1]+"</h2>");
                         $(".sliderCircus").css("display",'none');
                         $(".David-Slider-Cards").css({"display":"flex"});
                         getOptionalData();
                    }
               }
          );
     }
     //get value
     function getOptionalData(){
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "getActiveID",
                         'optional':nms
                    },
                    success: function (v) {
                         if (v == 99) {
                              $(".SidebarMainForm").css("display", "block");
                              $(".Main-Cards-Form").css("display", "none");
                              fetchDataSlideOption();
                         } else if (v > 0) {
                              fetchData(v);
                              $(".Main-Cards-Form").css("display", "block");
                              $(".SidebarMainForm").css("display", "none");
                              $(".button_Sidebar").removeClass("active");
                              var c = $(".button_Sidebar[val=" + v + "]");
                              $(".headerTitle").text(c.text());
                              $(".button_Sidebar").css("background-color", "#bdbdbd38");
                              c.addClass("active").css("background-color", "#fff");
                         } else {
                              $(".SidebarMainForm").css("display", "block");
                              $(".Main-Cards-Form").css("display", "none");
                         }
                    }
               }
          );
     }
     //add new deck
     $(".addNewButtonC > button").on("click",function(){
          $(".circusBody").css("display","block");
     });
     //add slider
     $(".submit").on("click",function(){
          var finder = $(this).parent().parent();
          var unicName = finder.find('input[name="deckUserName"]').val();
          var sliderNames = finder.find('input[name="deckName"]').val();
          if(unicName.length > 1 && sliderNames.length > 1){
               setUnic(unicName,sliderNames);
          }else{
              alert("Please Enter your slieder name");
          }
          
     });
     function setUnic(unicName,sliderNames){
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "setUnic",
                         'uName': unicName,
                         'slNames': sliderNames
                    },
                    success: function (v) {
                         
                         $(".circusBody").css("display","none");
                          location.reload();
                    }
               }
          );
     }  
     //TODO :: Add Delete section
     function deletUnic(ID) {
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "deleteUnic",
                         'IDD': ID,
                    },
                    success:function(v){
                        if(v == "success"){
                             location.reload();
                        }
                    }
               }
          )
     }


     function fetchDataSlideOption() {
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "getSliderValues",
                         'optional':nms

                    },
                    success: function (v) {
                        if(v != 0){
                              var arra = v.split("**");
                              htmlMakerOption(arra);
                        }
                         
                    }
               }
          );
     }
     //44
     function fetchData(iD) {
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "fetchData",
                         'iDs': iD,
                         'optional':nms
                    },
                    success: function (v) {
                         var arra = v.split("**");
                         htmlMaker(arra);
                    }
               }
          );
     }

     function htmlMakerOption(array) {
          var getForm = $(".SideBarForm");
          var getInputT = getForm.find('input[name="title"]');
          var getInputST = getForm.find('input[name="subtitle"]');
          var getBgIMg = getForm.find(".backgroudImgSlider");
          var getCdIMg = getForm.find(".cardImgSlider");
          var getFBGimg = $(getBgIMg).find(".cardImages");
          var getFCDimg = $(getCdIMg).find(".cardImages");
          getInputT.val(array[0]);
          getInputST.val(array[1]);
          if (getFBGimg.length == 0 && array[2].length > 5) {
               var img = $("<img class='cardImages' src= " + array[2] + " >");
               $(".backgroudImgSlider > .bbl").prepend(img);
          }
          if (getFCDimg.length == 0 && array[3].length > 5) {
               var img = $("<img class='cardImages' src= " + array[3] + " >");
               $(".cardImgSlider > .bbl").prepend(img);
          }
          $(".pell-content").html(array[4]);
     }

     function htmlMaker(array) {
          var arr = array;
          var imgElm = $(".bbl");
          var elmLG = $(imgElm).find("img");
          if (elmLG.length == 0 && arr[0].length > 5) {
               var img = $("<img class='cardImages' src= " + arr[0] + " >");
               $(imgElm).prepend(img);
          }
          if (arr[1] == 'on') {
               $(".switchOn").attr("checked", "checked");
               $(".main-cards-body-description").css("display", "block");
          } else {
               $(".switchOFF").attr("checked", "checked");
               $(".main-cards-body-description").css("display", "none");
          }
          $(".pell-content").html(arr[2]);
     }


     //for Description Switch;

     $('.switch > input[name="switch"]:radio').on("click", function () {
          $(this).attr("checked", "checked");
          var chkSwt = $(this).attr("value");
          if (chkSwt == "on") {
               $(".main-cards-body-description").css("display", "block");
          } else if (chkSwt == "off") {
               $(".main-cards-body-description").css("display", "none");
          }
     });

     //for Slide Option
     $(".save_Slider_Settings").on("click", function () {
          var getFrom = $(this).parent().parent();
          var ttlIn = $(getFrom).find('input[name="title"]');
          var sttlIn = $(getFrom).find('input[name="subtitle"]');
          var imgBGChkValid = $(getFrom).find(".backgroudImgSlider > .bbl > .cardImages");
          var imgCDChkValid = $(getFrom).find(".cardImgSlider > .bbl > .cardImages");
          var guidBChkVal = $(getFrom).find(".pell-content");
          var bgSrcImg;
          var cdSrcImg;
          var titleValue;
          var subTitleValue;
          var guidbook;
          if (imgBGChkValid.length > 0) {
               bgSrcImg = $(imgBGChkValid).attr("src");
          }
          if (imgCDChkValid.length > 0) {
               cdSrcImg = $(imgCDChkValid).attr("src");
          }
          titleValue = $(ttlIn).val();
          subTitleValue = $(sttlIn).val();
          guidbook = $(guidBChkVal).html();

          sendINValue(titleValue, subTitleValue, bgSrcImg, cdSrcImg, guidbook);
     });

     function sendINValue(ttl, sttl, bgIMG, cdIMG, gIDb) {
          var title = ttl;
          var subTitle = sttl;
          var bgImg = bgIMG;
          var cdImg = cdIMG;
          var guidbk = gIDb;
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "sideOption",
                         'title': title,
                         'subTitle': subTitle,
                         'bgImg': bgImg,
                         'cdImg': cdImg,
                         'guidbook': guidbk,
                         'optional':nms
                    },
                    success: function (v) {

                    }
               }
          )
     }
     //for all 44 cards

     $(".save_Settings").on("click", function () {
         
          var getFrom = $(this).parent().parent();
          var imgChkValid = $(getFrom).find(".cardImages");
          var switchValid = getFrom.find('.switch > input[name="switch"]:radio:checked');
          var getContent = $(getFrom).find(".pell-content");
          var getID = $(".Card-Sidebar").find(".active");
          var getIDVal = $(getID).attr("val");
          var getSrc;
          var getSwitch = switchValid.attr("value");
          var getHtml;
          if (imgChkValid.length > 0) {
               getSrc = $(imgChkValid).attr("src");
          }
          if (getContent.length > 0) {
               getHtml = $(getContent).html();
          }
          uploadDatabase(getSrc, getSwitch, getHtml, getIDVal);

     });
     function uploadDatabase(img, swch, ctn, ID) {
          var imgUrLink = img;
          var switchVal = swch;
          var contentHtml = ctn;
          var ID = ID;
          $.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "fortifour",
                         'images': imgUrLink,
                         'swt': switchVal,
                         'content': contentHtml,
                         'ID': ID,
                         'optional':nms
                    },
                    success: function (v) {

                    }
               }
          )
     }
     //sidebar value upload
     $(".button_Sidebar").on('click', function () {
          $(".button_Sidebar_Option").css("background-color", "#bdbdbd38");
          $(".button_Sidebar").css("background-color", "#bdbdbd38");
          $(this).css("background-color", "#fff");
          var val = $(this).attr("val");
          jQuery.ajax(
               {
                    type: 'POST',
                    url: MyAjax.ajaxurl,
                    data: {
                         action: "updateAndFetch",
                         'value': val,
                         'optional':nms,
                    },
                    success: function (v) {
                         location.reload();
                    }

               }
          );
     });

     $(".button_Sidebar_Option").on("click", function () {
          $(".button_Sidebar").css("background-color", "#bdbdbd38");
          $(this).css("background-color", "#fff");
          location.reload();
     });
});
})(jQuery);