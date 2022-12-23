<?php

/**
 * Create Settings Menu
 */

function myplugin_settings_menu()
{

    $hook = add_menu_page(
        'Cards Settings',
        'Cards Settings',
        'manage_options',
        'card-settings-page',
        'card_callback',
        '',
        null
    );

    add_action('admin_head-' . $hook, 'myplugin_image_uplaoder_assets', 10, 1);
}
add_action('admin_menu', 'myplugin_settings_menu');

/**
 * Enqueue Image Uploader Assets
 */
function myplugin_image_uplaoder_assets()
{
    wp_enqueue_media();
    wp_enqueue_style('cards-admin-style');
    wp_enqueue_style('cards-image-uplaoder');
    wp_enqueue_script('cards-admin-script');
    wp_enqueue_script('cards-image-uploader');
}


//ajex update data;
// *************
wp_enqueue_script('npJs', MYPLUGIN_URL . 'admin/js/admin.js', array('jquery'));
wp_localize_script('npJs', 'MyAjax', array('ajaxurl' => admin_url('admin-ajax.php')));

//update & fetch Data;

$title = "Title";
$image = "Image url";
$description = "Description";
$switch = "off";

//TODO:: get Active Check fields
function getActiveSlider(){
    global $wpdb;
    $table_name = "wp_SliderActive";
    $getIDs = 0;
    $getIDs = $_POST['slideATV'];
    $fCheck = $wpdb->Query("SELECT * FROM $table_name");
    if (!$fCheck && is_bool($fCheck)) {
        $wpdb->Query("CREATE TABLE $table_name(id INT(20) AUTO_INCREMENT, activeSlider INT(20), PRIMARY KEY(id))");
        $wpdb->insert(
            $table_name,
            [
                "activeSlider" => 0,
            ]
        );
    } else if ($fCheck == 1) {
        $result = $wpdb->get_results("SELECT * FROM $table_name WHERE id = 1");
        foreach($result as $data){
            $activatedID = $data->activeSlider;
            if($activatedID == 99 && $getIDs == 0){
                echo $activatedID;
            }else{
                if($getIDs != 0){
                    if($activatedID != $getIDs){
                        echo $getIDs;
                       
                        $wpdb->update(
                            $table_name,
                            [
                                "activeSlider" => $getIDs,
                            ],
                            [
                                'id' => 1,
                            ]
                        );
                    }else{
                        echo $getIDs;
                    }
                }else{
                    echo $activatedID;
                }
            }
        }
    }
    die();
    return true;
}

add_action('wp_ajax_getActiveSlider', 'getActiveSlider');
add_action('wp_ajax_nopriv_getActiveSlider', 'getActiveSlider');

//check unic
function checkUnic(){
    global $wpdb;
    $dbMain = "wp_KimSliderStore";
    $checkMain = $wpdb -> Query("SELECT * FROM $dbMain");
    if(!$checkMain && is_bool($checkMain)){
        return false;
    }
    $unicSlides = [];
   
    $result = $wpdb->get_results("SELECT * FROM $dbMain");
    foreach($result as $data){
        $Uid  = $data->id;
        $sliderU  = $data->sliderUser;
        $sliderN  = $data->slider_Name;
        $arr = [$Uid,$sliderU, $sliderN];
        array_push($unicSlides, $arr);
    }
    echo json_encode($unicSlides);
    die();
    return true;

}
add_action('wp_ajax_checkUnic', 'checkUnic');
add_action('wp_ajax_nopriv_checkUnic', 'checkUnic');

//get Slider name

function getSlidersName(){
    global $wpdb;
    $getIDV = $_POST['ID'];
    $dbMain = "wp_KimSliderStore";
    $checkMain = $wpdb -> Query("SELECT * FROM $dbMain");
    $sliderNameList = [];
    if(!$checkMain && is_bool($checkMain)){
       return true;
    }else{
        $sliderName = $wpdb -> get_results("SELECT * FROM $dbMain WHERE id = $getIDV");
        foreach ($sliderName as $elData) {
            $sliederUN = $elData->sliderUser;
            $sliderMN = $elData->slider_Name;
            $arr = [$sliederUN,$sliderMN];
            array_push($sliderNameList, $arr);
        }
    }
    echo json_encode($sliderNameList);
    die();
    return true;
}

add_action('wp_ajax_getSlidersName', 'getSlidersName');
add_action('wp_ajax_nopriv_getSlidersName', 'getSlidersName');

//add slider
function setUnic(){
    global $wpdb;
    $getUnicName = $_POST['uName'];
    $getSliderNames = $_POST['slNames'];
    $getUnicName = preg_replace("/\\\/","",$getUnicName);
    $getSliderNames = preg_replace("/\\\/","",$getSliderNames);
    $dbMain = "wp_KimSliderStore";
    $checkMain = $wpdb -> Query("SELECT * FROM $dbMain");
    if(!$checkMain && is_bool($checkMain)){
        $wpdb->Query("CREATE TABLE $dbMain(id INT(20) AUTO_INCREMENT, sliderUser TEXT, slider_Name TEXT, PRIMARY KEY(id))");
        $wpdb -> insert(
            $dbMain,
            [
               "sliderUser" =>  $getUnicName,
               "slider_Name" => $getSliderNames
            ]
        );
    }else{
        $wpdb->insert(
            $dbMain,
            [
               "sliderUser" =>  $getUnicName,
               "slider_Name" => $getSliderNames
            ]
        );
    }
    die();
    return true;
}
add_action('wp_ajax_setUnic', 'setUnic');
add_action('wp_ajax_nopriv_setUnic', 'setUnic');

//end

function sideOption()
{
    global $wpdb;
    $geTitle = $_POST['title'];
    $geSubTitle = $_POST['subTitle'];
    $gebgImg = $_POST['bgImg'];
    $gecdImg = $_POST['cdImg'];
    $guidbk = $_POST['guidbook'];

    $geTitle = preg_replace("/\\\/","",$geTitle);
    $geSubTitle = preg_replace("/\\\/","",$geSubTitle);
    $guidbk = preg_replace("/\\\/","",$guidbk);


    $prv = "wp_";
    $optional = $_POST['optional'];
    $nxt = "_option";
    $tble_name = $prv . $optional . $nxt;
    $sQCheck = $wpdb->Query("SELECT * FROM $tble_name");
    //for fetch
    if (!$sQCheck && is_bool($sQCheck)) {
        $wpdb->Query("CREATE TABLE $tble_name(id INT(20) AUTO_INCREMENT, title TEXT, subTitle TEXT,bgImg TEXT,cdImg TEXT,guidbook TEXT,  PRIMARY KEY(id))");
        $wpdb->insert(
            $tble_name,
            [
                "title" => $geTitle,
                "subTitle" => $geSubTitle,
                "bgImg" => $gebgImg,
                "cdImg" => $gecdImg,
                "guidbook" => $guidbk
            ]
        );
        die();
        return true;
    } else {
        $wpdb->update(
            $tble_name,
            [
                "title" => $geTitle,
                "subTitle" => $geSubTitle,
                "bgImg" => $gebgImg,
                "cdImg" => $gecdImg,
                "guidbook" => $guidbk
            ],
            [
                'id' => 1,
            ]
        );
    }

    die();
    return true;
}
add_action('wp_ajax_sideOption', 'sideOption');
add_action('wp_ajax_nopriv_sideOption', 'sideOption');

//delete 
function deleteUnic(){
    global $wpdb;
    $getDID = $_POST['IDD'];
    $dbMain = "wp_KimSliderStore";
    $checkMain = $wpdb -> Query("SELECT * FROM $dbMain");
    if(!$checkMain && is_bool($checkMain)){
       return true;
    }else{
        $sliderName = $wpdb -> get_results("SELECT * FROM $dbMain WHERE id = $getDID");
        foreach ($sliderName as $elData) {
            $sliederUN = $elData->sliderUser;
            $DID = $elData->id;
            if($sliederUN != null && $DID != null){
                $prv = "wp_";
                $nxt = "_option";
                $nxts = "_random";
                $table = $prv . $sliederUN;
                $table_O = $prv . $sliederUN . $nxt;
                $table_R = $prv . $sliederUN . $nxts;
                $wpdb->Query("DROP TABLE IF EXISTS $table");
                $wpdb->Query("DROP TABLE IF EXISTS $table_O");
                $wpdb->Query("DROP TABLE IF EXISTS $table_R");
                $wpdb -> delete(
                    $dbMain,
                    [
                        'id' => $DID
                    ]
                    );
                echo "success";
            }

        }
    }
    die();
    return true;

}
add_action('wp_ajax_deleteUnic', 'deleteUnic');
add_action('wp_ajax_nopriv_deleteUnic', 'deleteUnic');

// get Active Id on Slider;
function getSliderValues()
{
    global $wpdb;
    $prv = "wp_";
    $optional = $_POST['optional'];
    $nxt = "_option";
    $tble_name = $prv . $optional . $nxt;
    $sQCheck = $wpdb->Query("SELECT * FROM $tble_name");
    //for fetch
    if (!$sQCheck && is_bool($sQCheck)) {
        return false;
    }
    $collCount = $wpdb->get_results("SELECT * FROM $tble_name WHERE id = 1");
    foreach ($collCount as $elData) {
        $datas  = $elData->title;
        $datas  .= '**';
        $datas  .= $elData->subTitle;
        $datas  .= '**';
        $datas  .= $elData->bgImg;
        $datas  .= '**';
        $datas  .= $elData->cdImg;
        $datas  .= '**';
        $datas  .= $elData->guidbook;

        echo $datas;
    }
    die();
    return true;
}
add_action('wp_ajax_getSliderValues', 'getSliderValues');
add_action('wp_ajax_nopriv_getSliderValues', 'getSliderValues');


//sidebar click & update with fetch

function updateAndFetch()
{
    global $wpdb;
    $val = $_POST['value'];
    //tables
    
    $prv = "wp_";
    $nxt = "_random";
    $optional = $_POST['optional'];
    $tbl_name = $prv . $optional;
    $table_name = $prv . $optional . $nxt;
    //database check
    $fCheck = $wpdb->Query("SELECT * FROM $table_name");
    $tCheck = $wpdb->Query("SELECT * FROM $tbl_name");
    //for fetch
    if (!$tCheck && is_bool($tCheck)) {
        echo "Database Error";
    } else {
        $fetch = $wpdb->get_results("SELECT * FROM $tbl_name WHERE id = $val");
        foreach ($fetch as $data) {
            $image = $data->image;
            $switch = $data->dSwitch;
            $description = $data->description;
        }
    }
    //for update
    if (!$fCheck && is_bool($fCheck)) {
        $wpdb->Query("CREATE TABLE $table_name(id INT(20) AUTO_INCREMENT, val INT(20),  PRIMARY KEY(id))");
    }
    if ($fCheck < 1) {
        $wpdb->insert(
            $table_name,
            [
                "val" => $val,
            ]
        );
    } else if ($fCheck == 1) {
        $wpdb->update(
            $table_name,
            [
                "val" => $val,
            ],
            [
                'id' => 1,
            ]
        );
    }
    die();
    return true;
}
add_action('wp_ajax_updateAndFetch', 'updateAndFetch');
add_action('wp_ajax_nopriv_updateAndFetch', 'updateAndFetch');

// get Active Id on Slider;
function getActiveID()
{
    global $wpdb;
    $prv = "wp_";
    $nxt = "_random";
    $optional = $_POST['optional'];
    $table_name = $prv . $optional . $nxt;
    $fCheck = $wpdb->Query("SELECT * FROM $table_name");
    if (!$fCheck && is_bool($fCheck)) {
        $wpdb->Query("CREATE TABLE $table_name(id INT(20) AUTO_INCREMENT, val INT(20),  PRIMARY KEY(id))");
        $wpdb->insert(
            $table_name,
            [
                "val" => 99,
            ]
        );
    }
    $collCount = $wpdb->get_results("SELECT * FROM $table_name WHERE id = 1");
    foreach ($collCount as $page) {
        echo $page->val;
    }
    die();
    return true;
}
add_action('wp_ajax_getActiveID', 'getActiveID');
add_action('wp_ajax_nopriv_getActiveID', 'getActiveID');

// fetch Data From Database;
function fetchData()
{
    $iDs = $_POST['iDs'];
    global $wpdb;
    $prv = "wp_";
    $optional = $_POST['optional'];
    $tbl_name = $prv . $optional;
    $elmRsl = $wpdb->get_results("SELECT * FROM $tbl_name WHERE id = $iDs");
    foreach ($elmRsl as $elData) {
        $datas  = $elData->images;
        $datas  .= '**';
        $datas  .= $elData->switch;
        $datas  .= '**';
        $datas  .= $elData->content;
        echo $datas;
    }

    die();
    return true;
}
add_action('wp_ajax_fetchData', 'fetchData');
add_action('wp_ajax_nopriv_fetchData', 'fetchData');


//
//all cards upload detail in database.


function fortifour()
{
    global $wpdb;
    $image = $_POST['images'];
    $swch = $_POST['swt'];
    $conte = $_POST['content'];
    $ID = $_POST['ID'];
    $prv = "wp_";
    $optional = $_POST['optional'];
    $tbl_name = $prv . $optional;
    $qCheck = true;
    $fieldCheck;
    try {
        $qCheck = $wpdb->Query("SELECT * FROM $tbl_name");
        $fieldCheck = $wpdb->Query("SELECT * FROM $tbl_name WHERE id = $ID");
    } catch (Exception $e) {
        echo "Database Connection Problem";
    }

    if ($qCheck == false && is_bool($qCheck)) {
        $wpdb->Query("CREATE TABLE $tbl_name(id INT(20) AUTO_INCREMENT, images TEXT,switch TEXT,content TEXT,  PRIMARY KEY(id))");
        $wpdb->insert(
            $tbl_name,
            [
                "images" => $image,
                "switch" => $swch,
                "content" => $conte
            ]
        );
        die();
        return true;
    }
    if ($fieldCheck > 0 && is_int($fieldCheck)) {
        $wpdb->update(
            $tbl_name,
            [
                "images" => $image,
                "switch" => $swch,
                "content" => $conte
            ],
            [
                'id' => $ID,
            ]
        );
    } else {
        $wpdb->insert(
            $tbl_name,
            [
                "images" => $image,
                "switch" => $swch,
                "content" => $conte
            ]
        );
    }

    die();
    return true;
}
add_action('wp_ajax_fortifour', 'fortifour');
add_action('wp_ajax_nopriv_fortifour', 'fortifour');



/**
 * Settings Template Page
 * design sidebar
 */

function card_callback()
{
?>
    <!-- // add everythin inside this function -->
    <div class="David-Slider-Header">
        <div class="homeBack">
            <span>&#9204;</span>
        </div>
        <div class="titleSlider">
            <h2>Slider</h2>
        </div>
        <div class="sliderNam">
        </div>
    </div>
    <div class="sliderCircus">
        <div class="circusMenu">
            <div class="circusItems"></div>
            <div class="addNewButtonC">
                <button>Add New Deck</button>
            </div>
        </div>
        <div class="circusBody">
            <div class="circusAddingItems">
                <div class="circusItem">
                    <div class="label">
                        <label  for="deckUserInput">Input deck username</label>
                    </div>
                    <div class="input">
                        <input  id="deckUserInput" type="text" name="deckUserName">
                    </div>
                </div>
                <div class="circusItem">
                    <div class="label">
                        <label  for="deckNameInput">Input deck name</label>
                    </div>
                    <div class="input">
                        <input  id="deckNameInput" type="text" name="deckName">
                    </div>
                </div>
                <div class="submit_circus">
                        <button class="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <div class="David-Slider-Cards">
        <div class="Card-Sidebar">
            <div class="button_Sidebar" val="99">Slider Option</div>
            <div class="button_Sidebar" val="1">One Card</div>
            <div class="button_Sidebar" val="2">Two Card</div>
            <div class="button_Sidebar" val="3">Three Card</div>
            <div class="button_Sidebar" val="4">Four Card</div>
            <div class="button_Sidebar" val="5">Five Card</div>
            <div class="button_Sidebar" val="6">Six Card</div>
            <div class="button_Sidebar" val="7">Seven Card</div>
            <div class="button_Sidebar" val="8">Eight Card</div>
            <div class="button_Sidebar" val="9">Nine Card</div>
            <div class="button_Sidebar" val="10">Ten Card</div>
            <div class="button_Sidebar" val="11">Eleven Card</div>
            <div class="button_Sidebar" val="12">Twelve Card</div>
            <div class="button_Sidebar" val="13">Thirteen Card</div>
            <div class="button_Sidebar" val="14">Fourteen Card</div>
            <div class="button_Sidebar" val="15">Fifteen Card</div>
            <div class="button_Sidebar" val="16">Sixteen Card</div>
            <div class="button_Sidebar" val="17">Seventeen Card</div>
            <div class="button_Sidebar" val="18">Eighteen Card</div>
            <div class="button_Sidebar" val="19">Nineteen Card</div>
            <div class="button_Sidebar" val="20">Twenty Card</div>
            <div class="button_Sidebar" val="21">Twenty One Card</div>
            <div class="button_Sidebar" val="22">Twenty Two Card</div>
            <div class="button_Sidebar" val="23">Twenty Three Card</div>
            <div class="button_Sidebar" val="24">Twenty Four Card</div>
            <div class="button_Sidebar" val="25">Twenty Five Card</div>
            <div class="button_Sidebar" val="26">Twenty Six Card</div>
            <div class="button_Sidebar" val="27">Twenty Seven Card</div>
            <div class="button_Sidebar" val="28">Twenty Eight Card</div>
            <div class="button_Sidebar" val="29">Twenty Nine Card</div>
            <div class="button_Sidebar" val="30">Thirty Card</div>
            <div class="button_Sidebar" val="31">Thirty One Card</div>
            <div class="button_Sidebar" val="32">Thirty Two Card</div>
            <div class="button_Sidebar" val="33">Thirty Three Card</div>
            <div class="button_Sidebar" val="34">Thirty Four Card</div>
            <div class="button_Sidebar" val="35">Thirty Five Card</div>
            <div class="button_Sidebar" val="36">Thirty Six Card</div>
            <div class="button_Sidebar" val="37">Thirty Seven Card</div>
            <div class="button_Sidebar" val="38">Thirty Eight Card</div>
            <div class="button_Sidebar" val="39">Thirty Nine Card</div>
            <div class="button_Sidebar" val="40">Forty Card</div>
            <div class="button_Sidebar" val="41">Forty One Card</div>
            <div class="button_Sidebar" val="42">Forty Two Card</div>
            <div class="button_Sidebar" val="43">Forty Three Card</div>
            <div class="button_Sidebar" val="44">Forty Four Card</div>
        </div>
        <div class="Card-Main">
            <div class="SidebarMainForm">
                <form class="SideBarForm" action="" method="post">
                    <div class="titleSlider">
                        <div class="btl">
                            <div>Title</div>
                        </div>
                        <div class="bbl">
                            <input type="text" name="title">
                        </div>
                    </div>
                    <div class="SubTitleSlider">
                        <div class="btl">
                            <div>Sub Title</div>
                        </div>
                        <div class="bbl">
                            <input type="text" name="subtitle">
                        </div>
                    </div>
                    <div class="backgroudImgSlider">
                        <div class="btl">
                            <div>Background Image</div>
                        </div>
                        <div class="bbl">
                            <div class="Buttons">
                                <div>
                                    <button type="button" id="uploadbgimage">Upload</button>
                                </div>
                                <div>
                                    <button type="button" id="removebgimage">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cardImgSlider">
                        <div class="btl">
                            <div>Card Image</div>
                        </div>
                        <div class="bbl">
                            <div class="Buttons">
                                <div>
                                    <button type="button" id="uploadcdimage">Upload</button>
                                </div>
                                <div>
                                    <button type="button" id="removecdimage">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="guidbookSlider">
                        <div class="btl">
                            <div>Guid Book</div>
                        </div>
                        <div class="guidbook">
                            <div id="visual-editor">
                                <div id="Geditor" class="pell"></div>
                                <div style="visibility: hidden; display:inline;" id="editorValue"></div>
                            </div>
                        </div>
                    </div>
                    <div class="submitSliderBtn">
                        <button type="button" class="save_Slider_Settings">Save Settings</button>
                    </div>
                </form>
                <script type="text/javascript">
                    var mainValue = "";
                    var editor = window.pell.init({
                        element: document.getElementById('Geditor'),
                        actions: ['bold', 'italic', 'underline', 'heading1', 'heading2', 'olist', 'ulist', 'link', 'image', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull'],
                        defaultParagraphSeparator: 'p',
                        onChange: function(htmlValue) {
                            mainValue = htmlValue;
                        }
                    });
                </script>
            </div>
            <div class="Main-Cards-Form sliderActionForm">
                <form class="formData" action="" method="post">
                    <div class="slideActionForm">
                        <div class="headerTitle"></div>
                    </div>
                    <div class="main-cards-body-image">
                        <div class="btl">
                            <div>Image</div>
                        </div>
                        <div class="bbl">
                            <div class="Buttons">
                                <div>
                                    <button type="button" id="upload-image">Upload</button>
                                </div>
                                <div>
                                    <button type="button" id="remove-image">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-cards-body-switch">
                        <div class="btl">
                            <div>Description Switch</div>
                        </div>
                        <div class="switch">
                            <input class="switchOn" type="radio" name="switch" value="on">On
                            <input class="switchOFF" type="radio" name="switch" value="off">Off
                        </div>
                    </div>
                    <div class="main-cards-body-description">
                        <div class="btl">
                            <div>Description</div>
                        </div>
                        <div class="description">
                            <div id="visual-editor">
                                <div id="editor" class="pell"></div>
                                <div style="visibility: hidden; display:inline;" id="editorValue"></div>
                            </div>
                        </div>
                    </div>
                    <div class="main-cards-submit">
                        <button type="button" class="save_Settings">Save Settings</button>
                    </div>
                </form>
            </div>
            <script type="text/javascript">
                var mainValue = "";
                var editor = window.pell.init({
                    element: document.getElementById('editor'),
                    actions: ['bold', 'italic', 'underline', 'heading1', 'heading2', 'olist', 'ulist', 'link', 'image', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull'],
                    defaultParagraphSeparator: 'div',
                    onChange: function(htmlValue) {
                        mainValue = htmlValue;
                    }
                });
            </script>
            <!-- ============== -->
        </div>
    </div>
<?php
}
