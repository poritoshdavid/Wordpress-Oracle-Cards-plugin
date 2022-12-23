(function ($) {
    $.fn.sliderR = function () {
        var sliderR = {
            init: function (el) {
                var slider = $(el);
                // var parentOfThree = slider.parent().parent().parent();
                var sliderbody = slider.find(".sliderR-body");
                var sliderbls = sliderbody.find(".sliderls");
                var sliderbrs = sliderbody.find(".sliderrs");
                var sliderSlides = sliderbls.find(".mSlider");
                var readingMainElm = sliderbrs.find(".reading-buttons");
                var controllerBTN = sliderbls.find(".mSlider > .cntlr");
                var prevButton = controllerBTN.find(".sCardPrev");
                var nextButton = controllerBTN.find(".sCardNext");
                var sliderInner = sliderbls.find(".mSlider > .slides > .inner");
                var guidBTN = sliderbls.find(".guidBook");
                var guidebookBTN = guidBTN.find(".buttonG");
                var cardMainD = sliderbrs.find(".CardsDShow");
                var arrowSlider = cardMainD.find(".arrowSlider");
                var leftArrow = arrowSlider.find(".leftArrow");
                var rightArrow = arrowSlider.find(".rightArrow");
                var dShowCardDeck = cardMainD.find(".DShowCard");
                var dshowCardText = cardMainD.find(".DShowText");
                var cardButtonMain = cardMainD.find(".DShowButtons");
                var dCardBack = cardButtonMain.find(".dShowButtonBack");
                var dCardRead = cardButtonMain.find(".dShowButtonRead");

                //static documents
                var threeCardTitle = ['Past', 'Now', 'future'];
                var fourCardTitle = ["Energy or Pattern carried into this life from past life incarnations.", "Energy Patterns created in this life that are not associated with past lives.", "Gifts brought forth into this life from past incarnations.", "The Greatest Challenge to overcome in this life.", "Karma that needs undoing from past lives.", "Lessons to review from this life carried forward from other incarnations.", "What to focus on in order to overcome the main lesson caused from past lives.", "Next steps or what to work on in order to see results about that main lesson.", "What to focus on in order to see growth and learn from these old patterns.",
                ];
                var sixCardTitle = ["MENTAL", "PHYSICAL", "SPIRITUAL", "EMOTIONAL"];


                //speadCards
                //oneDeck
                var oneSpreadCards = sliderbrs.find(".oneSpread");
                var oneCardDeck = oneSpreadCards.find(".oneCardD");
                //twoDeck
                var twoSpreadCards = sliderbrs.find(".twoSpread");
                var twoCardDeck = twoSpreadCards.find(".twoCardD");
                //threeDeck
                var threeSpreadCards = sliderbrs.find(".threeSpread");
                var threeCardDeck = threeSpreadCards.find(".threeCardD");
                //fourDeck
                var fourSpreadCards = sliderbrs.find(".fourSpread");
                var fourCardDeck = fourSpreadCards.find(".fourCardD");
                //fiveDeck
                var fiveSpreadCards = sliderbrs.find(".fiveSpread");
                var fiveCardDeck = fiveSpreadCards.find(".fiveCardD");
                //sixDeck
                var sixSpreadCards = sliderbrs.find(".sixSpread");
                var sixCardDeck = sixSpreadCards.find(".sixCardD");
                //get ID
                //oneDeck
                var oneSpreadCardsID = sliderbrs.find("#oneSpread");
                //twoDeck
                var twoSpreadCardsID = sliderbrs.find("#twoSpread");
                //threeDeck
                var threeSpreadCardsID = sliderbrs.find("#threeSpread");
                //fourDeck
                var fourSpreadCardsID = sliderbrs.find("#fourSpread");
                //fiveDeck
                var fiveSpreadCardsID = sliderbrs.find("#fiveSpread");
                //sixDeck
                var sixSpreadCardsID = sliderbrs.find("#sixSpread");

                //rotations
                var cardRotateSize = 90;
                var rotateRang = 40;
                var rotateDeg = rotateRang / sliderInner.length;
                var firstInitVal = "default";
                var hoverVisiableEnable = false;
                var cardShowForLimit = 0;
                var innerBackgroundImage = sliderInner.css('background-image');
                var getCardImage = innerBackgroundImage.substring(5, innerBackgroundImage.length - 2);
                var hoverInit = true;
                var slideLth = sliderInner.length;
                var bottomVal = null;
                var getElement = null;
                var afterBottomValue = 0;
                var hoverChk = true;
                var mouseEnter = true;
                var holdFunc = true;
                var stopClickNextPrev = true;
                // variables for spread cards showing
                var oneSpread = false;
                var twoSpread = false;
                var threeSpread = false;
                var fourSpread = false;
                var fiveSpread = false;
                var sixSpread = false;
                var clickOutSideElm = false;
                var readButtonText = false;
                var openCards = false;
                var getCardDetails = sendData();
                var valueOfCards = [];

                //main window Sizing
                var widthParent = slider.width();
                var screenWidth = $(window).width();
                var mobile = 'ontouchstart' in window; //'has touchscreen' : 'doesn\'t have touchscreen'
                var mCl = true;
                //static use override theme
                if (screenWidth != widthParent) {
                    $(".container").css({ "width": "auto", "max-width": "initial" });
                    $(".container-fluid").css({ "width": "auto", "max-width": "initial" });
                    $(".logo_container").css("width", "auto");
                    $(".site-content").css("padding", "0px");
                    $(".one-container").css("padding","0px");
                    $("#main-footer").find(".container").css("width", "80%");
                    $(".entry-title").css("padding", "0 20px");
                    slider.css({ "width": screenWidth + "px", "max-width": screenWidth + "px" });
                    widthParent = slider.width();
                    widthPrntPElm = slider.parent();
                    widthPrntPElm.css({ "width": screenWidth + "px", "max-width": screenWidth + "px", "padding": "0px", "margin": "0 auto", "border": "none" });
                    widthPrntPElm.find("p").css({ 'font-family': "'Oswald', sans-serif", "font-weight": "500" });
                }                
                if (1401 <= widthParent && widthParent <= 2101) {

                    slider.css({"height": "800px","padding":"25px 0","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "830px", "left": "calc(50% - 415px )", "margin-left": "initial !important", "margin-top": "7em", "list-style-type": "none", "position": "relative" });
                } else if (993 <= widthParent && widthParent <= 1400) {
                    slider.css({"height": "550px","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "600px", "left": "calc(50% - 300px )", "margin-left": "initial !important", "margin-top": "100px", "list-style-type": "none", "position": "relative" });
                } else if (768 <= widthParent && widthParent <= 992) {
                    slider.css({"height": "455px","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "396px", "left": "calc(50% - 198px)", "margin-left": "0", "background-size": "cover", "background-position": "center", "list-style-type": "none", "position": "relative" });
                    sliderbody.css({ "flex-direction": "row", "align-items": "center" });
                    sliderbrs.css("margin-top", "15px");
                } else if (601 <= widthParent && widthParent <= 767) {
                    slider.css({"height": "435px","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "223px", "left": "calc(50% - 113px )", "margin-left": "0", "list-style-type": "none", "position": "relative" });
                    sliderbody.css({ "flex-direction": "column", "align-items": "center" });
                } else if (widthParent <= 600) {
                    if(mobile){
                        sliderbody.css({ "flex-direction": "column"});
                    }
                    slider.css({"height": "405px","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "223px", "left": "calc(50% - 113px )", "margin-left": "0", "list-style-type": "none", "position": "relative" });  
                }else{
                    slider.css({"height": "800px","padding":"25px 0","background-repeat": "no-repeat","background-size": "cover","background-position": "unset"});
                    sliderSlides.css({ "height": "100px", "width": "830px", "left": "calc(50% - 415px )", "margin-left": "initial !important", "margin-top": "7em", "list-style-type": "none", "position": "relative" });
                }
                //end static
                //initial functions
                initCards(slideLth, sliderInner);
                //guidbook
                guidebookBTN.on("click", function () {
                    var getHomeV = $(this).addClass("buttomH");
                    var backGuidV = guidBTN.find(".backG");
                    var shuffin = guidBTN.find(".clearShuffle");
                    if (shuffin.length != 0) {
                        guidBTN.find(".activeEl").removeClass("activeEl");
                        $(this).removeClass("clearShuffle");
                        $(this).find("p").text("GuideBook");
                        sliderbrs.find(".DShowText").css("display", "none");
                        sliderbrs.find(".DShowButtons").css("display", "none");
                        sliderbrs.find(".DShowCard").removeAttr("style");
                        sliderbrs.find(".CardsDShow").css("display", "none");
                        sliderbrs.css("margin", "auto");
                        valueOfCards = [];
                        openCards = false;
                        if (oneSpread) {
                            var selfCard = oneCardDeck;
                            blockElement(selfCard, selfCard.parent());
                            oneSpread = false;
                        } else if (twoSpread) {
                            var selfCard = twoCardDeck;
                            blockElement(selfCard, selfCard.parent());
                            twoSpread = false;
                        } else if (threeSpread) {
                            var selfCard = threeCardDeck;
                            blockElement(selfCard, selfCard.parent());
                            threeSpread = false;
                        } else if (fourSpread) {
                            var selfCard = fourCardDeck;
                            blockElement(selfCard, selfCard.parent().parent());
                            fourSpread = false;
                        } else if (fiveSpread) {
                            var selfCard = fiveCardDeck;
                            blockElement(selfCard, selfCard.parent().parent());
                            fiveSpread = false;
                        } else if (sixSpread) {
                            var selfCard = sixCardDeck;
                            blockElement(selfCard, selfCard.parent().parent());
                            sixSpread = false;
                        }
                        cardShowForLimit = 0;
                        var resetElemnts = sliderInner;
                        resetElemnts.attr({ "class": "inner", "style": "background-image:url('" + getCardImage + "'" });
                        initCards(slideLth, sliderInner);
                    } else {
                        valueOfCards = [];
                        if (getHomeV.length != 0 && backGuidV.length == 0) {
                            sliderbrs.css("display", "none");
                            $(this).find("p").text("Home");
                            $(this).addClass("backG");
                            sliderSlides.css("display", "none");
                            sliderbls.css({ "margin-top": "5px", });
                            sliderbls.find(".readGuidBook").css({ "display": "block", "overflow-y": "scroll", "background-color": "#ffffff", "margin": "0 8%", "padding": "5px 10px", "text-align": "justify" });
                            $(this).css({ "margin-left": "0", });
                            $(this).parent().css({ "margin-top": "20px", "text-align": "center" });
                        } else if (backGuidV.length != 0 && getHomeV.length != 0) {
                            sliderbrs.css("display", "block");
                            $(this).find("p").text("GuideBook");
                            $(this).removeClass("buttomH backG");
                            sliderSlides.css("display", "block");
                            sliderbls.find(".readGuidBook").css("display", "none");
                            sliderbls.removeAttr("style");
                            $(this).removeAttr("style");
                            $(this).parent().removeAttr("style");
                        }
                    }
                }); //guidbook button
                function blockElement(self, parent) {
                    readingMainElm.css("display", "block");
                    self.removeAttr("style");
                    parent.css("display", "none");
                }

                //Card Show button
                dShowCardDeck.on("click", function () {
                    var getAttrChk = $(this).css('background-image');
                    $(this).parent().find(".arrowSlider").css("display", "block");
                    if (getAttrChk != "none") {
                        var getHoverImage = getAttrChk.substring(5, getAttrChk.length - 2);
                        $('<div class="hoverImageShow"><div class="imagesShow"><div class="closeButton"></div><img src=""></div></div>').prependTo('body');
                        $(".hoverImageShow > .imagesShow > img").attr({ "src": getHoverImage }).fadeIn("slow");
                        setTimeout(function () {
                            clickOutSideElm = true;
                        }, 700);
                    }
                });//card show button
                //hover Icon
                dShowCardDeck.hover(function(i){
                    var getID = $(this);
                    if(!mobile){
                        if(i.type == "mouseenter"){
                            $(getID).append('<div style="cursor:pointer;padding-top:50%;text-align:center;font-size:50px;color:#000000;" class="HoverIcon">⌕</div>');
                        }else if(i.type == "mouseleave"){
                             $(".HoverIcon").remove();
                        }
                    }
                });


                //Read Button on Card
                dCardRead.on("click", function () {
                    var mainElWTBTn = $(this).parent().parent().find(".DShowText");
                    var textGet = $(mainElWTBTn).html();
                    $('<div class="hoverTextShow" style="font-family: \'Open Sans\', sans-serif !important;position: fixed;top: 20%;left: 5%;width: 90%;bottom: 20%;background-color: #ffffff;opacity: 1;overflow: hidden;z-index: 999999999;overflow-y: scroll;padding: 10px;"><div class="closeButton"></div><div  style="font-family: \'Open Sans\', sans-serif !important;" class="readTextT"></div>').prependTo('body');
                    $(".readTextT").html(textGet);

                });
                //zoom images
                //check finally;
                $(document).click(function (event) {
                    var getAttrValonClick = String($(event.target).attr("class"));
                    if (clickOutSideElm) {
                        if ($(event.target).is(".hoverImageShow")) {
                            removeHoverImageTage();
                        }
                    }
                    if (getAttrValonClick == "closeButton") {
                        removeHoverImageTage();
                    }
                });

                function removeHoverImageTage() {
                    $(".hoverImageShow").fadeOut(500, function () {
                        $(this).remove();
                    });
                    $(".hoverTextShow").fadeOut(500, function () {
                        $(this).remove();
                    });
                }

                oneSpreadCardsID.on("click", function () {

                    oneSpread = true;
                    buttonChanger();
                    oneSpreadCards.css("display", "block");
                });
                twoSpreadCardsID.on("click", function () {
                    twoSpread = true;
                    buttonChanger();
                    twoSpreadCards.css("display", "flex");

                });
                threeSpreadCardsID.on("click", function () {
                    threeSpread = true;
                    buttonChanger();
                    threeSpreadCards.css("display", "flex");
                });
                fourSpreadCardsID.on("click", function () {
                    fourSpread = true;
                    buttonChanger();
                    fourSpreadCards.css("display", "block");
                });
                fiveSpreadCardsID.on("click", function () {
                    fiveSpread = true;
                    buttonChanger();
                    fiveSpreadCards.css("display", "block");
                });
                sixSpreadCardsID.on("click", function () {
                    sixSpread = true;
                    buttonChanger();
                    sixSpreadCards.css("display", "block");
                });
                function buttonChanger() {
                    guidebookBTN.addClass("clearShuffle").find("p").text("Shuffle");
                    sliderbrs.css("margin", "auto");
                    readingMainElm.css("display", "none");

                }

                // separate desktop vs mobile
                sliderInner.on("click", function (v) {
                    // for mobile browser
                    if (mobile && mCl) {
                        mCl = false;
                        var mE = $(this);
                        var meB = mE.css("bottom");
                        var mebV = parseFloat(meB);
                        var mebvR = mebV + 20;
                        mE.animate({ bottom: mebvR + 'px' }, 300);
                        setTimeout(() => {
                            mCl = true;
                            mE.animate({ bottom: mebV + 'px' }, 300);
                        }, 600);

                    }


                    getCardDetails = sendData();
                    if (oneSpread) {
                        if (valueOfCards.length < 1) {
                            //maxLimit
                            var max = 43;
                            var min = 1;
                            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                            valueOfCards.push(randomNumber);
                        }
                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];


                        oneCardDeck.css({ "background-image": "url(" + getCardDetails[getRmdValOfInd][0] + ")", "background-size": "100% 100%", "background-repeat": "no-repeat", "border": "1px solid #c1c1c1" });
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            dshowCardText.html(getCardDetails[getRmdValOfInd][2]);
                        } else {
                            dCardRead.css("display", "none");
                            dCardBack.css("width", "99%");
                        }
                        openCards = true;
                    } else if (twoSpread) {
                        var lthElm = twoCardDeck.length;
                        var indexOfArrayInCards = valueOfCards.length;
                        var loopVal = 0;
                        for (var b = 0; loopVal < (indexOfArrayInCards + 1); b++) {
                            if (valueOfCards.length != 0 && valueOfCards.length < lthElm) {
                                insertRandomValueInArray();
                            } else if (valueOfCards.length == 0) {
                                //maxLimit
                                var max = 43;
                                var min = 1;
                                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                valueOfCards.push(randomNumber);
                            } else {
                                return true;
                            }
                            loopVal = valueOfCards.length;

                        }

                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];
                        var indexRandomVal = valueOfCards.length;
                        if (indexRandomVal == 1) {
                            valueAddedInElement(twoCardDeck, indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 2) {
                            valueAddedInElement(twoCardDeck, indexRandomVal, getRmdValOfInd);
                            openCards = true;
                        }
                    } else if (threeSpread) {
                        var lthElm = threeCardDeck.length;
                        var indexOfArrayInCards = valueOfCards.length;
                        var loopVal = 0;

                        for (var b = 0; loopVal < (indexOfArrayInCards + 1); b++) {
                            if (valueOfCards.length != 0 && valueOfCards.length < lthElm) {
                                insertRandomValueInArray();
                            } else if (valueOfCards.length == 0) {
                                //maxLimit
                                var max = 43;
                                var min = 1;
                                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                valueOfCards.push(randomNumber);
                            } else {
                                return true;
                            }
                            loopVal = valueOfCards.length;
                        }
                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];
                        var indexRandomVal = valueOfCards.length;

                        if (indexRandomVal == 1) {
                            valueAddedInElement(threeCardDeck, indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 2) {
                            valueAddedInElement(threeCardDeck, indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 3) {
                            valueAddedInElement(threeCardDeck, indexRandomVal, getRmdValOfInd);
                            openCards = true;
                        }
                    } else if (fourSpread) {
                        var lthElm = fourCardDeck.length;
                        var indexOfArrayInCards = valueOfCards.length;
                        var loopVal = 0;

                        for (var b = 0; loopVal < (indexOfArrayInCards + 1); b++) {
                            if (valueOfCards.length != 0 && valueOfCards.length < lthElm) {
                                insertRandomValueInArray();
                            } else if (valueOfCards.length == 0) {
                                //maxLimit
                                var max = 43;
                                var min = 1;
                                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                valueOfCards.push(randomNumber);
                            } else {
                                return true;
                            }
                            loopVal = valueOfCards.length;

                        }
                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];
                        var indexRandomVal = valueOfCards.length;

                        if (indexRandomVal == 1) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 2) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 3) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 4) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 5) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 6) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 7) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 8) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 9) {
                            valueAddedInElementWithMulti(fourCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                            openCards = true;
                        }
                    } else if (fiveSpread) {
                        var lthElm = fiveCardDeck.length;
                        var indexOfArrayInCards = valueOfCards.length;
                        var loopVal = 0;
                        for (var b = 0; loopVal < (indexOfArrayInCards + 1); b++) {
                            if (valueOfCards.length != 0 && valueOfCards.length < lthElm) {
                                insertRandomValueInArray();
                            } else if (valueOfCards.length == 0) {
                                //maxLimit
                                var max = 43;
                                var min = 1;
                                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                valueOfCards.push(randomNumber);
                            } else {
                                return true;
                            }
                            loopVal = valueOfCards.length;

                        }
                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];
                        var indexRandomVal = valueOfCards.length;

                        if (indexRandomVal == 1) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 2) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 3) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 4) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 5) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 6) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 7) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 8) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 9) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 10) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 11) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 12) {
                            valueAddedInElementWithMulti(fiveCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                            openCards = true;
                        }
                    } else if (sixSpread) {
                        var lthElm = sixCardDeck.length;
                        var indexOfArrayInCards = valueOfCards.length;
                        var loopVal = 0;

                        for (var b = 0; loopVal < (indexOfArrayInCards + 1); b++) {
                            if (valueOfCards.length != 0 && valueOfCards.length < lthElm) {
                                insertRandomValueInArray();
                            } else if (valueOfCards.length == 0) {
                                //maxLimit
                                var max = 43;
                                var min = 1;
                                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                valueOfCards.push(randomNumber);
                            } else {
                                return true;
                            }
                            loopVal = valueOfCards.length;

                        }
                        var getRmdValOfInd = valueOfCards[valueOfCards.length - 1];
                        var indexRandomVal = valueOfCards.length;

                        if (indexRandomVal == 1) {
                            valueAddedInElementWithMulti(sixCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 2) {
                            valueAddedInElementWithMulti(sixCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 3) {
                            valueAddedInElementWithMulti(sixCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                        } else if (indexRandomVal == 4) {
                            valueAddedInElementWithMulti(sixCardDeck[indexRandomVal - 1], indexRandomVal, getRmdValOfInd);
                            openCards = true;

                        }
                    }
                });

                //value Add Elements
                function valueAddedInElement(cls, nm, rmd) {
                    cls = $(cls);
                    $(cls[nm - 1]).css({ "background-image": "url('" + getCardDetails[rmd][0] + "')", "background-size": "100% 100%", "background-repeat": "no-repeat", "border": "1px solid #c1c1c1" });
                    if (getCardDetails[rmd][1] == "on") {
                        dshowCardText.html(getCardDetails[rmd][2]);
                    } else {
                        dCardBack.css("display", "none");
                        dCardRead.css("width", "99%");
                     
                    }
                }
                function valueAddedInElementWithMulti(cls, nm, rmd) {
                    $(cls).css({ "background-image": "url('" + getCardDetails[rmd][0] + "')", "background-size": "cover", "background-repeat": "no-repeat", "border": "1px solid #c1c1c1" });
                    if (getCardDetails[rmd][1] == "on") {
                        dshowCardText.html(getCardDetails[rmd][2]);
                    } else {
                        dCardRead.css("display", "none");
                        dCardBack.css("width", "99%");
                    }
                }
                //Start Card Click to open | cards
                oneCardDeck.on("click", function () {
                    if (openCards) {
                        $(this).addClass("activeEl");
                        arrowSlider.css("display", "none");
                        cardOpenFun($(this));
                    }
                });
                twoCardDeck.on("click", function () {
                    if (openCards) {
                        arrowSlider.css("display", "block");
                        twoCardDeck.css("display", "none").removeClass("activeEl");
                        $(this).addClass("activeEl");
                        $(this).parent().css("display", "block");
                        cardOpenFun($(this));
                    }

                });
                threeCardDeck.on("click", function () {
                    if (openCards) {
                        arrowSlider.css("display", "block");
                        var indexClk = $(this).index();
                        threeCardDeck.css("display", "none").removeClass("activeEl");
                        $(this).addClass("activeEl");
                        $(this).parent().css("display", "block");
                        $(this).parent().find(".DShowTitle").css("display", "block").find("p").text(threeCardTitle[indexClk]).css({ "color": "white", "font-width": "bold", });
                        cardOpenFun($(this));
                    }
                });
                fourCardDeck.on("click", function () {
                    if (openCards) {
                        arrowSlider.css("display", "block");
                        fourCardDeck.css("display", "none").removeClass("activeEl");
                        $(this).addClass("activeEl");
                        var parentElm = $(this).parent().parent();
                        parentElm.css("display", "block");
                        var indexN = parentElm.find(".imgsUrl").index($(this));
                        parentElm.find(".DShowTitle").css("display", "block").find("p").text(fourCardTitle[indexN]).css({ "color": "white", "font-width": "bold", });
                        cardOpenFunBig($(this));
                    }

                });
                fiveCardDeck.on("click", function () {
                    if (openCards) {
                        arrowSlider.css("display", "block");
                        fiveCardDeck.css("display", "none").removeClass("activeEl");
                        $(this).addClass("activeEl");
                        $(this).parent().parent().css("display", "block");
                        cardOpenFunBig($(this));
                    }
                });
                sixCardDeck.on("click", function () {
                    var parentElm = $(this).parent().parent();
                    if (openCards) {
                        arrowSlider.css("display", "block");
                        sixCardDeck.css("display", "none").removeClass("activeEl");
                        $(this).addClass("activeEl");
                        parentElm.css("display", "block");
                        var indexN = parentElm.find(".imgsUrl").index($(this));
                        parentElm.find(".DShowTitle").css("display", "block").find("p").text(sixCardTitle[indexN]).css({ "color": "white", "font-width": "bold", });
                        cardOpenFunBig($(this));
                    }
                });

                //left & Right Slide Card Details;
                leftArrow.on("click", function () {
                    var rightParent = $(this).parent().parent().parent();
                    var parentElement = $(this).parent().parent();
                    var fndActive = rightParent.find(".activeEl");
                    var currentElmChild = rightParent.find(".imgsUrl").index($(fndActive));
                    var getCard = rightParent.find(".imgsUrl");
                    var cardsLength = getCard.length;

                    if (0 < currentElmChild && currentElmChild < cardsLength) {
                        getCard.removeClass("activeEl");
                        var changeElmActive = getCard.get(currentElmChild - 1);

                        var getRmdValOfInd = valueOfCards[currentElmChild - 1];
                        var currentElmImgAdd = parentElement.find('.DShowCard');
                        var currentElmTextAdd = parentElement.find('.DShowText');
                        $(changeElmActive).addClass("activeEl");
                        currentElmImgAdd.css({ "background-image": "url('" + getCardDetails[getRmdValOfInd][0] + "')", "background-size": "contain", "background-repeat": "no-repeat", "border": "none" });
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            currentElmTextAdd.html(getCardDetails[getRmdValOfInd][2]);
                            var getBackVal = parentElement.find(".dShowButtonBack").text();
                            dCardBack.css("width", "49%");
                            if (getBackVal != "show card") {
                                dCardRead.css("display", "block");
                            } else {
                                dCardRead.css("display", "none");
                                dCardBack.css("width", "99%");
                            }
                        } else {
                            readButtonText = false;
                            dshowCardText.css("display", "none");
                            dShowCardDeck.css("display", "block");
                            parentElement.find(".dShowButtonRead").css("display", "none");
                            parentElement.find(".dShowButtonBack").css("width", "99%").text('Go Back');
                            cardButtonMain.css("width", "190px");
                            // $(this).text('Go Back').css("margin-right","1%");
                        }
                        if (threeSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(threeCardTitle[currentElmChild - 1]).css({ "color": "white", "font-width": "bold", });;
                        } else if (fourSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(fourCardTitle[currentElmChild - 1]).css({ "color": "white", "font-width": "bold", });;
                        } else if (sixSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(sixCardTitle[currentElmChild - 1]).css({ "color": "white", "font-width": "bold", });;
                        }
                    }
                });
                rightArrow.on("click", function () {
                    var rightParent = $(this).parent().parent().parent()
                    var parentElement = $(this).parent().parent();
                    var fndActive = rightParent.find(".activeEl");
                    var currentElmChild = rightParent.find(".imgsUrl").index($(fndActive));
                    var getCard = rightParent.find(".imgsUrl");
                    var cardsLength = getCard.length;
                    if (0 <= currentElmChild && currentElmChild < cardsLength - 1) {
                        getCard.removeClass("activeEl");
                        var changeElmActive = getCard.get(currentElmChild + 1);
                        var getRmdValOfInd = valueOfCards[currentElmChild + 1];
                        var currentElmImgAdd = parentElement.find('.DShowCard');
                        var currentElmTextAdd = parentElement.find('.DShowText');
                        $(changeElmActive).addClass("activeEl");
                        currentElmImgAdd.css({ "background-image": "url('" + getCardDetails[getRmdValOfInd][0] + "')", "background-size": "contain", "background-repeat": "no-repeat", "border": "none" });
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            currentElmTextAdd.html(getCardDetails[getRmdValOfInd][2]);
                            var getBackVal = parentElement.find(".dShowButtonBack").text();
                            dCardBack.css("width", "49%");
                            if (getBackVal != "show card") {
                                dCardRead.css("display", "block");
                            } else {
                                dCardRead.css("display", "none");
                                dCardBack.css("width", "99%");
                            }

                        } else {
                            readButtonText = false;
                            dshowCardText.css("display", "none")
                            dShowCardDeck.css("display", "block");
                            parentElement.find(".dShowButtonRead").css("display", "none");
                            parentElement.find(".dShowButtonBack").css("width", "99%").text('Go Back');
                            cardButtonMain.css("width", "190px");
                        }
                        if (threeSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(threeCardTitle[currentElmChild + 1]).css({ "color": "white", "font-width": "bold", });;
                        } else if (fourSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(fourCardTitle[currentElmChild + 1]).css({ "color": "white", "font-width": "bold", });;
                        } else if (sixSpread) {
                            $(this).parent().parent().find(".DShowTitle").css("display", "block").find("p").text(sixCardTitle[currentElmChild + 1]).css({ "color": "white", "font-width": "bold", });;
                        }
                    }
                });
                //openCard
                function cardOpenFun(ownVal) {
                    var parentEl = ownVal.parent();
                    var currentElmChild = parentEl.find(".imgsUrl").index(ownVal);
                    var getRmdValOfInd = valueOfCards[currentElmChild];
                    if (getCardDetails[getRmdValOfInd][0] != false) {
                        sliderbrs.css("margin", "auto");
                        cardMainD.css("display", "none");
                        parentEl.find(".CardsDShow").css({ "display": "block" }).find(".DShowCard").css({ "background-image": "url(" + getCardDetails[getRmdValOfInd][0] + ")", "background-size": "contain", "background-repeat": "no-repeat", "border": "none" });//1px solid #c1c1c1
                        ownVal.css("display", "none");
                        parentEl.find(".DShowButtons").css({ "display": "flex", "width": "190px" });
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            parentEl.find(".DShowText").html(getCardDetails[getRmdValOfInd][2]);
                            parentEl.find(".dShowButtonRead").css("display", "block");
                            parentEl.find(".dShowButtonBack").css({"display":"block","width":"49%"});
                        } else {
                            parentEl.find(".dShowButtonRead").css("display", "none");
                            parentEl.find(".dShowButtonBack").css({"display":"block","width":"99%"});
                        }
                        var textIs = parentEl.find(".DShowTitle").css("display");
                        if (widthParent <= 767 && textIs != "block") {
                            parentEl.css("margin-top", "22%");
                        } else {
                            parentEl.css("margin-top", "3px");
                        }
                    }
                }
                function cardOpenFunBig(ownVal) {
                    var parentEl = ownVal.parent().parent();
                    var currentElmChild = parentEl.find(".imgsUrl").index(ownVal);
                    var getRmdValOfInd = valueOfCards[currentElmChild];
                    if (getCardDetails[getRmdValOfInd][0] != false) {
                        cardMainD.css("display", "none");
                        parentEl.find(".CardsDShow").css({ "display": "block" }).find(".DShowCard").css({ "background-image": "url(" + getCardDetails[getRmdValOfInd][0] + ")", "background-size": "contain", "background-repeat": "no-repeat", "border": "none" });//1px solid #c1c1c1
                        ownVal.css("display", "none");
                        parentEl.find(".DShowButtons").css({ "display": "flex", "width": "190px" });
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            parentEl.find(".DShowText").html(getCardDetails[getRmdValOfInd][2]);
                            parentEl.find(".dShowButtonRead").css("display", "block");
                            parentEl.find(".dShowButtonBack").css({"display":"block","width":"49%"});
                        } else {
                            parentEl.find(".dShowButtonRead").css("display", "none");
                            parentEl.find(".dShowButtonBack").css({"display":"block","width":"99%"});
                        }
                        var textIs = parentEl.find(".DShowTitle").css("display");
                        if (widthParent <= 767 && textIs != "block") {
                            parentEl.css("margin-top", "22%");
                        } else {
                            parentEl.css("margin-top", "3px");
                        }
                        if (992 <= widthParent && widthParent <= 1400) {
                            //TODO::Add something
                        } else {
                            parentEl.parent().css("margin", "auto");
                        }
                    }


                }
                //read button
                dCardBack.on("click", function () {
                    var parentElement = $(this).parent().parent();
                    var rightParent = parentElement.parent();
                    var fndActive = rightParent.find(".activeEl");
                    var currentElmChild = rightParent.find(".imgsUrl").index($(fndActive));
                    var getRmdValOfInd = valueOfCards[currentElmChild];
                    if (readButtonText) {
                        readButtonText = false;
                        dshowCardText.css("display", "none")
                        dShowCardDeck.css("display", "block");
                        if (getCardDetails[getRmdValOfInd][1] == "on") {
                            parentElement.find(".DShowText").html(getCardDetails[getRmdValOfInd][2]);
                            parentElement.find(".dShowButtonRead").css("display", "block");
                            parentElement.find(".dShowButtonBack").css("width", "49%");
                        } else {
                            parentElement.find(".dShowButtonRead").css("display", "none");
                            parentElement.find(".dShowButtonBack").css("width", "99%");
                        }
                        cardButtonMain.css("width", "190px");
                        // $(".dShowButtonRead").css("display","block");
                        // $(this).css("width","49%");
                        $(this).text('Go Back').css("margin-right", "1%");
                    } else {
                        $(this).parent().parent().css("display", "none");
                        $(this).parent().parent().find(".DShowCard").removeAttr("style");
                        //$(this).parent().parent().parent().find(".imgsUrl").css("display","block");
                        var chklatter = $(this).parent().parent().parent();
                        var getChk = chklatter.find(".firstRow");

                        if (getChk.length != 0) {
                            chklatter.find(".imgsUrl").css("display", "inline-block");
                            chklatter.css("display", "block");
                        } else {
                            chklatter.find(".imgsUrl").css("display", "block");
                            chklatter.css("display", "flex");
                        }
                        if (widthParent <= 767) {
                            $(this).parent().parent().parent().css("margin-top", "22%");
                        }
                    }
                });
                //run function for reading spread;
                function insertRandomValueInArray() {
                    //maxLimit
                    var max = 43;
                    var min = 1;
                    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                    var chkArrVal = valueOfCards.some(function (value) {
                        return value === randomNumber;
                    });
                    if (!chkArrVal) {
                        valueOfCards.push(randomNumber);
                        return randomNumber;
                    }


                }
                // next Click for Slider
                nextButton.click(function () {
                    var anima = sliderInner
                    if (!anima.is(':animated')) {
                        stopClickNextPrev = true;
                    }
                    if (stopClickNextPrev) {
                        stopClickNextPrev = false;
                        var resetElemnts = sliderInner;
                        if (cardShowForLimit <= 0) {
                            cardShowForLimit++;
                            resetElemnts.attr({ "class": "inner", "style": "background-image:url('" + getCardImage + "'" });
                            initCards(slideLth, sliderInner);
                        } else if (cardShowForLimit == 1) {
                            cardShowForLimit++;
                            resetElemnts.last().remove();
                            resetElemnts.attr({ "class": "inner", "style": "background-image:url('" + getCardImage + "'" });
                            initCards(slideLth, sliderInner);
                        }
                    }

                });
                prevButton.click(function () {
                    var anima = sliderInner;
                    if (!anima.is(':animated')) {
                        stopClickNextPrev = true;
                    }
                    if (stopClickNextPrev) {
                        stopClickNextPrev = false;
                        var forPrevElm = sliderInner;
                        var addNewElmS = sliderSlides.find(".slides");
                        if (cardShowForLimit != 0 && cardShowForLimit <= 1) {
                            cardShowForLimit--;
                            forPrevElm.attr({ "class": "inner", "style": "background-image:url('" + getCardImage + "'" });

                            firstInitVal = "default"
                            initCards(slideLth, sliderInner);
                        } else if (cardShowForLimit == 2) {
                            cardShowForLimit--;
                            forPrevElm.attr({ "class": "inner", "style": "" });
                            addNewElmS.append('<div class ="inner piv"></div>');
                            var getPiv = sliderSlides.find(".slides > .piv");
                            getPiv.css({ "background-image": "url('" + getCardImage + "')" })
                            var chkPiv = getPiv.attr("class");
                            if (chkPiv !== undefined) {
                                forPrevElm.attr({ "class": "inner", "style": "background-image:url('" + getCardImage + "'" });
                                firstInitVal = "default"
                                sliderInner = sliderbls.find(".mSlider > .slides > .inner");
                                initCards(slideLth, sliderInner);
                            }
                        }
                    }
                });
                // Hover animation Start
                //for Web Browser
                sliderInner.hover(function (i) {
                    if (!mobile) {
                        var newElement = $(this);
                        var indexOfElm = newElement.index();
                        var n = (slideLth / 2);
                        var sortIndex = parseInt(Math.ceil(indexOfElm - n));
                        var reverseIndex = (n - sortIndex);
                        var newBottomVal;

                        var newValueOfBtn;
                        if (n <= indexOfElm) {
                            newBottomVal = (reverseIndex * (9 - (reverseIndex - (reverseIndex / 2))));
                        } else if (indexOfElm < n) {
                            newBottomVal = ((indexOfElm + 1) * (9 - ((indexOfElm + 1) - ((indexOfElm + 1) / 2))));
                        }
                        // var newBottomVal = 
                        if (hoverVisiableEnable) {
                            if (i.type == "mouseenter") {
                                getElement = getElement == null ? newElement : getElement;
                                bottomVal = bottomVal == null && hoverInit ? newElement.css("bottom") : bottomVal;
                                hoverInit = false;
                                if (newBottomVal == bottomVal && holdFunc && hoverChk) {
                                    runSlider(newElement, getElement, i, holdFunc = false);
                                } else if (hoverChk && holdFunc) {
                                    bottomVal = newBottomVal;
                                    runSlider(newElement, getElement, i)
                                }
                                holdFunc ? hoverChk ? runSlider(newElement, getElement, i, holdFunc = false) : {} : hoverChk && holdFunc ? runSlider(newElement, getElement, i) : {};
                            } else if (i.type == "mouseleave") {
                                runSlider(newElement, getElement, i,);
                            }
                        }
                    }
                });
                // for mobile Browser
                function runSlider(newElement, getElm, i,) {
                    getElement = getElm;
                    if (getElement != null) {

                        if (newElement[0] != getElement[0]) {
                            typeInit(i, getElement, bottomVal);
                        } else {

                            typeInit(i, getElement, bottomVal);
                        }
                    } else {
                        typeInit(i, newElement, bottomVal);
                    }
                };
                function typeInit(i, getEl, bVal) {
                    if (i.type == "mouseenter") {
                        if (getEl.is(':animated')) {
                            getEl.stop(false, true);
                            mouseEnter ? animatedHoverMouseEnter(getEl, bVal) : {};
                            mouseEnter = false;
                        } else {
                            mouseEnter ? animatedHoverMouseEnter(getEl, bVal) : {};
                            mouseEnter = false;
                        }

                    } else if (i.type == "mouseleave") {
                        hoverChk = false;
                        holdFunc = true;

                        if (getEl.is(':animated')) {
                            getEl.stop();
                            animatedHoverMouseLeave(getEl, bVal);
                        } else {
                            animatedHoverMouseLeave(getEl, bVal);
                        }

                    }
                };
                function animatedHoverMouseEnter(getEl, bValue) {
                    holdFunc = true;
                    var fv = parseFloat(bValue);
                    getEl.animate({ bottom: "" + (fv + 20) + "px", }, {
                        duration: 400,
                        step: function (promise) {
                            afterBottomValue = promise;
                        },
                    });

                };
                function animatedHoverMouseLeave(getEl, bValue) {
                    var fv = parseFloat(bottomVal);
                    var refoundValue = 0;
                    if (fv < afterBottomValue) {
                        refoundValue = afterBottomValue - fv;
                    } else if (fv == afterBottomValue) {
                        refoundValue = 0;
                    } else {
                        refoundValue = fv - afterBottomValue;
                    }
                    if (refoundValue < afterBottomValue) {
                        refoundValue = afterBottomValue - refoundValue;
                    } else if (refoundValue == afterBottomValue) {
                        refoundValue = 0
                    } else {
                        refoundValue = refoundValue - afterBottomValue;
                    }
                    //why after value is null please find it;

                    getEl.animate({ bottom: "" + refoundValue + "px", }, 100);
                    bottomVal = null;
                    getElement = null;
                    refoundValue = 0;
                    afterBottomValue = 0;
                    hoverInit = true;
                    hoverChk = true;
                    mouseEnter = true;
                };
                // Card Rotate & left to right function Start

                function initCards(length, element) {
                    if (firstInitVal == "default") {
                        firstInit(length, element);
                        firstInitVal = "system";
                    }
                    var v = 0;
                    for (let i = length; 0 < i; i--) {
                        $(sliderInner[(i - 1)]).addClass("section" + i).css("z-index", i);
                        v++;
                        visiableCard(i, length, v);
                    }
                }
                function firstInit(length, element) {
                    element.css("transform", "rotate(" + ((cardRotateSize - (rotateDeg * (length / 2))) + (1 * rotateDeg)) + "deg)");
                }
                function visiableCard(i, length, v) {
                    var n = Math.ceil(length / 2);
                    if (n < i) {
                        var firstSecRotate = $(sliderbls.find(".mSlider > .slides > .section" + i));
                        $(sliderInner[(n + v)]).addClass("animation");


                        if (1401 <= widthParent && widthParent <= 2101) {
                            firstSecRotate.animate(
                                {
                                    bottom: "" + (n * (9 - (n - (n / 2)))) + "px",
                                    left: "" + (n * (20 * 2)) + "px",
                                    degrees: cardRotateSize,
                                    duration: cardRotateSize,
                                },
                                {
                                    duration: 1000,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;
                                        for (var i = 0; i < pLength; i++) {
                                            var getAr = chkPromise[i];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));

                                            }
                                        }
                                    },
                                    step: function (deg) {
                                        firstSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                }

                            );
                        }
                        else if (767 <= widthParent && widthParent <= 992) {
                            firstSecRotate.animate(
                                {
                                    bottom: "" + (n * (9 - (n - (n / 2)))) + "px",
                                    left: "" + (n * (10 * 2)) + "px",
                                    degrees: cardRotateSize,
                                    duration: cardRotateSize,
                                },
                                {
                                    duration: 1000,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;
                                        for (var i = 0; i < pLength; i++) {
                                            var getAr = chkPromise[i];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));
                                            }
                                        }
                                    },
                                    step: function (deg) {
                                        firstSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                }
                            );
                        } else if (widthParent <= 767) {
                            firstSecRotate.animate(
                                {
                                    bottom: "" + (n + (9 - (n - (n / 2)))) + "px",
                                    left: "" + (n * (4.5 * 2)) + "px",
                                    degrees: cardRotateSize,
                                    duration: cardRotateSize,
                                },
                                {
                                    duration: 1000,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;
                                        for (var i = 0; i < pLength; i++) {
                                            var getAr = chkPromise[i];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));
                                            }
                                        }
                                    },
                                    step: function (deg) {
                                        firstSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                }
                            );
                        } else {
                            //not editable
                            firstSecRotate.animate(
                                {
                                    bottom: "" + (n * (9 - (n - (n / 2)))) + "px",
                                    left: "" + (n * (15 * 2)) + "px",
                                    degrees: cardRotateSize,
                                    duration: cardRotateSize,
                                },
                                {
                                    duration: 1000,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;
                                        for (var i = 0; i < pLength; i++) {
                                            var getAr = chkPromise[i];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));

                                            }
                                        }
                                    },
                                    step: function (deg) {
                                        firstSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                }

                            );
                        }

                    } else {
                        var sectionSec = sliderbls.find(".mSlider > .slides");
                        var sectionSecV = sectionSec.find(".section" + v);
                        var sectionSecI = sectionSec.find(".section" + i);
                        var firstsSecRotate = $(sectionSecV);
                        var firstSecondSecRotate = $(sectionSecI);
                        // first sections
                        RotateAnimationBefore(firstSecondSecRotate, n, i, length, v);
                        //second sections
                        RotateAnimationAfter(firstsSecRotate, n, i, length, v);
                    }

                }
                function RotateAnimationBefore(firstSecondSecRotate, n, i, length, v) {
                    if (1401 <= widthParent && widthParent <= 2101) {
                        firstSecondSecRotate.animate(
                            {
                                bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                left: "" + (((n + 1) - ((n + 1) - (i - 1))) * (20 * 2)) + "px",
                                degrees: ((cardRotateSize - (rotateDeg * (length / 2))) + (((n + 1) - ((n + 1) - i)) * rotateDeg)),
                                duration: ((cardRotateSize - (rotateDeg * (length / 2))) + (((n + 1) - ((n + 1) - i)) * rotateDeg)),
                            },
                            {
                                duration: 1000,
                                start: function (promise) {
                                    var pLength = promise.tweens.length;
                                    var chkPromise = promise.tweens;
                                    for (let i = 0; i < pLength; i++) {
                                        var getAr = chkPromise[i];
                                        var getStart = getAr.prop;
                                        if (getStart === "duration") {
                                            getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));

                                        }
                                    }
                                },
                                step: function (deg) {
                                    firstSecondSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });
                                },
                            }
                        );
                    }
                    else if (768 <= widthParent && widthParent <= 992) {
                        firstSecondSecRotate.animate(
                            {
                                bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                left: "" + (((n + 1) - ((n + 1) - (i - 1))) * (10 * 2)) + "px",
                                degrees: (cardRotateSize - (4 * (length / 2))) + (((n + 1) - ((n + 1) - i)) * 4),
                                duration: (cardRotateSize - (4 * (length / 2))) + (((n + 1) - ((n + 1) - i)) * 4),
                            },
                            {
                                duration: 1000,
                                start: function (promise) {
                                    var pLength = promise.tweens.length;
                                    var chkPromise = promise.tweens;
                                    for (let i = 0; i < pLength; i++) {
                                        var getAr = chkPromise[i];
                                        var getStart = getAr.prop;
                                        if (getStart === "duration") {
                                            getAr.start = (cardRotateSize - (4 * (length / 2)));

                                        }
                                    }
                                },
                                step: function (deg) {
                                    firstSecondSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });
                                },
                            }
                        );
                    } else if (widthParent <= 767) {
                        firstSecondSecRotate.animate(
                            {
                                bottom: "" + (((length / 2) - 1) + (i - 1)) + "px",
                                left: "" + (((n + 1) - ((n + 1) - (i - 1))) * (4.5 * 2)) + "px",
                                degrees: (cardRotateSize - (4 * (length / 2))) + (((n + 1) - ((n + 1) - i)) * 4),
                                duration: (cardRotateSize - (4 * (length / 2))) + (((n + 1) - ((n + 1) - i)) * 4),
                            },
                            {
                                duration: 1000,
                                start: function (promise) {
                                    var pLength = promise.tweens.length;
                                    var chkPromise = promise.tweens;
                                    for (let i = 0; i < pLength; i++) {
                                        var getAr = chkPromise[i];
                                        var getStart = getAr.prop;
                                        if (getStart === "duration") {
                                            getAr.start = (cardRotateSize - (4 * (length / 2)));

                                        }
                                    }
                                },
                                step: function (deg) {
                                    firstSecondSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });
                                },
                            }
                        );
                    } else {
                        //not editable
                        firstSecondSecRotate.animate(
                            {
                                bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                left: "" + (((n + 1) - ((n + 1) - (i - 1))) * (15 * 2)) + "px",
                                degrees: ((cardRotateSize - (rotateDeg * (length / 2))) + (((n + 1) - ((n + 1) - i)) * rotateDeg)),
                                duration: ((cardRotateSize - (rotateDeg * (length / 2))) + (((n + 1) - ((n + 1) - i)) * rotateDeg)),
                            },
                            {
                                duration: 1000,
                                start: function (promise) {
                                    var pLength = promise.tweens.length;
                                    var chkPromise = promise.tweens;
                                    for (let i = 0; i < pLength; i++) {
                                        var getAr = chkPromise[i];
                                        var getStart = getAr.prop;
                                        if (getStart === "duration") {
                                            getAr.start = ((cardRotateSize - (rotateDeg * (length / 2))));

                                        }
                                    }
                                },
                                step: function (deg) {
                                    firstSecondSecRotate.css({ transform: 'rotate(' + deg + 'deg)' });
                                },
                            }
                        );
                    }
                }
                function RotateAnimationAfter(firstsSecRotate, n, i, length, v) {

                    var sliderInit = sliderbls.find(".mSlider > .slides");
                    var animateValues = $(sliderInit.find(".animation"));
                    if (firstsSecRotate.length > 0) {

                        if (1401 <= widthParent && widthParent <= 2101) {
                            animateValues.animate(
                                {
                                    bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                    left: "" + ((v - 1) * (20 * 2)) + "px",
                                    degrees: (cardRotateSize + (rotateDeg * ((n + 1) - i))),
                                    duration: (cardRotateSize + (rotateDeg * ((n + 1) - i))),
                                },

                                {
                                    duration: 200,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;

                                        for (let j = 0; j < pLength; j++) {
                                            var getAr = chkPromise[j];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = getAr.start;
                                            }
                                        }
                                    },
                                    step: function (deg) {

                                        animateValues.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                    done: function (promise) {
                                        stopClickNextPrev = true;
                                        if (v == (length - 1)) {
                                            hoverVisiableEnable = true;
                                        }
                                    },

                                },
                            );
                            firstsSecRotate.removeClass("animation");
                        } else if (768 <= widthParent && widthParent <= 992) {
                            animateValues.animate(
                                {
                                    bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                    left: "" + ((v - 1) * (10 * 2)) + "px",
                                    degrees: (cardRotateSize + (4 * ((n + 1) - (i + 1)))),
                                    duration: (cardRotateSize + (4 * ((n + 1) - (i + 1)))),
                                },

                                {
                                    duration: 200,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;

                                        for (let j = 0; j < pLength; j++) {
                                            var getAr = chkPromise[j];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = getAr.start;
                                            }
                                        }
                                    },
                                    step: function (deg) {

                                        animateValues.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                    done: function (promise) {
                                        stopClickNextPrev = true;
                                        if (v == (length - 1)) {
                                            hoverVisiableEnable = true;
                                        }
                                    },

                                },
                            );
                            firstsSecRotate.removeClass("animation");

                        } else if (widthParent <= 767) {

                            animateValues.animate(
                                {
                                    bottom: "" + ((length / 2) + (i - (v - n))) + "px",
                                    left: "" + ((v - 1) * (4.5 * 2)) + "px",
                                    degrees: (cardRotateSize + (4 * ((n + 1) - (i + 1)))),
                                    duration: (cardRotateSize + (4 * ((n + 1) - (i + 1)))),
                                },

                                {
                                    duration: 200,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;

                                        for (let j = 0; j < pLength; j++) {
                                            var getAr = chkPromise[j];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = getAr.start;
                                            }
                                        }
                                    },
                                    step: function (deg) {

                                        animateValues.css({ transform: 'rotate(' + deg + 'deg)' });

                                    },
                                    done: function (promise) {
                                        stopClickNextPrev = true;
                                        if (v == (length - 1)) {
                                            hoverVisiableEnable = true;
                                        }
                                    },

                                },
                            );
                            firstsSecRotate.removeClass("animation");
                        } else {
                            //not editable
                            animateValues.animate(
                                {
                                    bottom: "" + ((((length / 2) + 1) - ((n + 1) - i)) * (9 - ((((length / 2) + 1) - ((n + 1) - i)) - ((((length / 2) + 1) - ((n + 1) - i)) / 2)))) + "px",
                                    left: "" + ((v - 1) * (15 * 2)) + "px",
                                    degrees: (cardRotateSize + (rotateDeg * ((n + 1) - i))),
                                    duration: (cardRotateSize + (rotateDeg * ((n + 1) - i))),
                                },
                                {
                                    duration: 200,
                                    start: function (promise) {
                                        var pLength = promise.tweens.length;
                                        var chkPromise = promise.tweens;

                                        for (let j = 0; j < pLength; j++) {
                                            var getAr = chkPromise[j];
                                            var getStart = getAr.prop;
                                            if (getStart === "duration") {
                                                getAr.start = getAr.start;
                                            }
                                        }
                                    },
                                    step: function (deg) {
                                        animateValues.css({ transform: 'rotate(' + deg + 'deg)' });
                                    },
                                    done: function (promise) {
                                        stopClickNextPrev = true;
                                        if (v == (length - 1)) {
                                            hoverVisiableEnable = true;
                                        }
                                    },

                                },
                            );
                            firstsSecRotate.removeClass("animation");
                        }
                    }
                }
            }//init
        }
        return this.each(function () {
            sliderR.init(this);
        });
    }
}(jQuery));