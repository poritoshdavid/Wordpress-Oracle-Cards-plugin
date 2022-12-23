<?php

$pluginPath = plugin_dir_url(__FILE__);
$cardsSwitch = [];
$myplugin_image_id = "";
$myPlugin_card_image_url = "";
$myPlugin_Slider_Title = "";
$myPlugin_Slider_Description = "";
$myPlugin_Slider_Guidbook = "";
global $wpdb;
$prv = "wp_";
$nxt = "_option";
$optional = $sliderName["name"];
$table_name = $prv . $optional;
$tble_name = $prv . $optional . $nxt;
$fetchAllSliderOption = $wpdb->get_results("SELECT * FROM $tble_name");
foreach ($fetchAllSliderOption as $datas) {
    $myPlugin_Slider_Title  = $datas->title;
    $myPlugin_Slider_Description = $datas->subTitle;
    $myplugin_image_id = $datas->bgImg;
    $myPlugin_card_image_url = $datas->cdImg;
    $myPlugin_Slider_Guidbook = $datas->guidbook;
}
$fetchAllFromDB = $wpdb->get_results("SELECT * FROM $table_name");
foreach ($fetchAllFromDB as $data) {
    $getFImgLnk = $data->images;
    $getRadioFieldOption = $data->switch;
    $getTextFieldOption = $data->content;

    $gettingSectionDatas = [$getFImgLnk, $getRadioFieldOption, $getTextFieldOption];
    array_push($cardsSwitch, $gettingSectionDatas);
}
?>
<script>
    function sendData() {
        var cardDetailsPass = <?php echo json_encode($cardsSwitch); ?>;
        return cardDetailsPass;
    }
    sendData();
    jQuery(document).ready(function(){
        jQuery(".<?php echo $sliderName["name"];?>").sliderR();   
	});
</script>


<!-- //testing  -->

<div class="<?php echo $sliderName["name"];?>" style="background-image: url(<?php echo $myplugin_image_id; ?>);">
    <div class="d-slider">
        <div class="slider-title">
            <h2><?php echo $myPlugin_Slider_Title; ?></h2>
        </div>
        <div class="slider-desc">
            <p><?php echo $myPlugin_Slider_Description; ?></p>
        </div>
    </div>
    <div class="sliderR-body">
        <div class="sliderls">
            <div class="mSlider">
                <div class="slides">
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                    <div style="background-image: url(<?php echo $myPlugin_card_image_url; ?>);" class="inner"></div>
                </div>
                <div class="cntlr">
                    <div class="sCardPrev">«</div>
                    <div class="sCardNext">»</div>
                </div>
            </div>
            <div class="readGuidBook" style="display: none;">
                <?php
                echo $myPlugin_Slider_Guidbook;
                ?>

            </div>
            <div class="guidBook">
                <div class="buttonG">
                    <p>GuidEBook</p>
                </div>
            </div>
        </div>
        <div class="sliderrs">
            <div class="reading-buttons">
                <div class="buttons pad mrgBtm">
                    <div id="oneSpread" class="oneCardSpread mrgRth">
                        <p>One Card Spread</p>
                    </div>
                    <div id="twoSpread" class="loveCardSpread mrgLft">
                        <p>Love Spread</p>
                    </div>
                </div>
                <div class="buttons pad mrgTp mrgBtm">
                    <div id="threeSpread" class="threeCardSpread mrgRth">
                        <div class="heading">
                            <p>Three Card Spread</p>
                        </div>
                        <div class="subhead">
                            <p>(Past, Now, Future)</p>
                        </div>
                    </div>
                    <div id="fourSpread" class="pastLifeSpread mrgLft">
                        <p>Past Life Spread</p>
                    </div>
                </div>
                <div class="buttons pad mrgTp">
                    <div id="fiveSpread" class="oneYearSpread mrgRth">
                        <p>One Year Spread</p>
                    </div>
                    <div id="sixSpread" class="mentalSpread mrgLft">
                        <div class="heading">
                            <p>Mental, Physical</p>
                        </div>
                        <div class="subhead">
                            <p>Spiritual, Emotional</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneSpread">
                <div class="imgsUrl oneCardD"></div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>

            </div>
            <div class="twoSpread">
                <div class="imgsUrl twoCardD mrgRth"></div>
                <div class="imgsUrl twoCardD mrgLft"></div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>
            </div>
            <div class="threeSpread">
                <div class="imgsUrl threeCardD mrgRth"></div>
                <div class="imgsUrl threeCardD"></div>
                <div class="imgsUrl threeCardD mrgLft"></div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>
            </div>


            <!-- // for fourSpread need to be newCol-2 ->margin top 4vw; -->
            <div class="fourSpread">
                <div class="firstRow">
                    <div class="imgsUrl fourCardD mrgRth"></div>
                    <div class="imgsUrl fourCardD"></div>
                    <div class="imgsUrl fourCardD mrgLft"></div>
                </div>
                <div class="secondRow">
                    <div class="imgsUrl fourCardD mrgRth"></div>
                    <div class="imgsUrl fourCardD"></div>
                    <div class="imgsUrl fourCardD mrgLft"></div>
                </div>
                <div class="thirdRow">
                    <div class="imgsUrl fourCardD mrgRth"></div>
                    <div class="imgsUrl fourCardD"></div>
                    <div class="imgsUrl fourCardD mrgLft"></div>
                </div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>
            </div>
            <!--  // for fiveSpread need to be newCol-2 ->margin top 4vw; -->
            <div class="fiveSpread">
                <div class="firstRow">
                    <div class="imgsUrl fiveCardD mrgRth"></div>
                    <div class="imgsUrl fiveCardD"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                </div>
                <div class="secondRow">
                    <div class="imgsUrl fiveCardD mrgRth"></div>
                    <div class="imgsUrl fiveCardD"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                </div>
                <div class="thirdRow">
                    <div class="imgsUrl fiveCardD mrgRth"></div>
                    <div class="imgsUrl fiveCardD"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                    <div class="imgsUrl fiveCardD mrgLft"></div>
                </div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>
            </div>
            <div class="sixSpread">
                <div class="firstRow">
                    <div class="imgsUrl sixCardD mrgRth"></div>
                    <div class="imgsUrl sixCardD mrgLft"></div>
                </div>
                <div class="secondRow">
                    <div class="imgsUrl sixCardD mrgRth"></div>
                    <div class="imgsUrl sixCardD mrgLft"></div>
                </div>
                <div class="CardsDShow">
                    <div class="DShowTitle">
                        <p></p>
                    </div>
                    <div class="DShowCard"></div>
                    <div class="DShowText">
                        <p></p>
                    </div>
                    <div class="arrowSlider">
                        <div class="leftArrow">«</div>
                        <div class="rightArrow">»</div>
                    </div>
                    <div class="DShowButtons">
                        <div class="dShowButtonBack">Go Back</div>
                        <div class="dShowButtonRead">Read More</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
<?php 