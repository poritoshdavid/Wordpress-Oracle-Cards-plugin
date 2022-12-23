<?php 
/**
 * Init Styles & scripts
 *
 * @return void
 */
function myplugin_admin_styles_scripts() {

    wp_register_style( 'cards-image-uplaoder', MYPLUGIN_URL . 'admin/css/image-uploader.css', '', '1.0.2' );
    wp_enqueue_style( 'cards-admin-style', MYPLUGIN_URL . 'admin/css/admin.css', '', '1.0.2');
    wp_enqueue_style( 'cards-admin-editor-style', MYPLUGIN_URL . 'admin/css/editor.css', '', '1.0.2');
    wp_enqueue_style( 'circus', MYPLUGIN_URL . 'admin/css/sliderCircus.css', '', '1.0.0');

    wp_register_script( 'cards-image-uploader', MYPLUGIN_URL . 'admin/js/image-uploader.js', array('jquery'), '1.0.2', true );
    // wp_enqueue_script( 'cards-admin-script', MYPLUGIN_URL . 'admin/js/admin.js', array('jquery'), '1.0.2', true );
  //  wp_enqueue_script( 'cards-adminMain-script', MYPLUGIN_URL . 'admin/js/slideMain.js', array('jquery'), '1.0.2', true );
    wp_enqueue_script( 'cards-admin-editor', MYPLUGIN_URL . 'admin/js/editor.js', array('jquery'), '1.0.2', false );
}
add_action( 'admin_enqueue_scripts', 'myplugin_admin_styles_scripts' );
