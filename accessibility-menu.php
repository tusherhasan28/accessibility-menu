<?php 
/*
 * Plugin Name:       Accessibility Menu
 * Plugin URI:        https://github.com/habibnote/political-corruption
 * Description:       
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Md. Habib
 * Author URI:        https://me.habibnote.com
 * Text Domain:       accessibility
*/

namespace Habib\Accessibility;

use AppendIterator;

if( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Plugin Main Class
 */
final class Accessibility {
    static $instance = false;

    /**
     * Class Constructor
     */
    private function __construct() {

        $this->include();
        $this->define();
        $this->hooks();
    }

    /**
     * Include all needed files
     */
    private function include() {
        require_once( dirname( __FILE__ ) . '/inc/functions.php' );
        require_once( dirname( __FILE__ ) . '/vendor/autoload.php' );
    }

    /**
     * define all constant
     */
    private function define() {
        define( 'AS_FILE', __FILE__ );
        define( 'AS_DIR', dirname( AS_FILE ) );
        define( 'AS_ASSET', plugins_url( 'assets', AS_FILE ) );
    }

    /**
     * All hooks
     */
    private function hooks() {
        new App\Admin();
        new App\Front();
        new App\Shortcode();
    }

    /**
     * Singleton Instance
    */
    static function get_accessibility() {
        
        if( ! self::$instance ) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

/**
 * Cick off the plugins 
 */
Accessibility::get_accessibility();