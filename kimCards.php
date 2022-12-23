<?php
	/**
	* plugin name: Kim Cards
	* Description: Half of Deg rotate card.
	* Version: 1.0
	* Author: Poritosh David
	* Author URI: https://www.fiverr.com/poritoshdavid ;
	*/

	if( !defined('ABSPATH')) : exit(); endif;

	/**
	 * Define plugin constants
	 */
	define( 'MYPLUGIN_PATH', trailingslashit( plugin_dir_path(__FILE__) ) );
	define( 'MYPLUGIN_URL', trailingslashit( plugins_url('/', __FILE__) ) );

	/**
	 * Include admin.php
	 */
	if( is_admin() ) {
	    require_once MYPLUGIN_PATH . '/admin/admin.php';
	    require_once MYPLUGIN_PATH . '/inc/settings/settings.php';
	}
	function insert_jquery(){
		wp_enqueue_script('jquery');
	 }
	 add_filter('wp_enqueue_scripts','insert_jquery',1);

	 $pluginPath = plugin_dir_url(__FILE__);
	 wp_enqueue_style('cardsStylesheet',$pluginPath.'css/style.css','','3.2.1');
	 wp_enqueue_style('cardsStylesheetSample'   ,   $pluginPath.'css/sample.css','','3.2.1');
	 wp_enqueue_script('Scripts_slider'     ,   $pluginPath.'js/script_slider.js',array('jquery'),"1.0.3",false);
	  
	/**
	 * Do shortcode
	 */

	function cards_callback($atts){
	$sliderName = shortcode_atts(array('name'=> ''), $atts, "kimCards");
       ob_start();
	    include('include.php');
	    return ob_get_clean();
	}
	add_shortcode('kimCards', 'cards_callback');
