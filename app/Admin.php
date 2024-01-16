<?php 

namespace Habib\Accessibility\App;

class Admin {

    /**
     * Class Constructor
     */
    public function __construct() {
        add_action( 'admin_menu', [$this, 'admin_menu'] );
        add_action( 'admin_enqueue_scripts', [$this, 'enqueue_script'] );
    }

    /**
     * Load all admin assets
     */
    public function enqueue_script() {
        wp_enqueue_style( 'admin', AS_ASSET . '/admin/css/admin.css', '', time(), 'all' );

        wp_enqueue_script( 'admin', AS_ASSET . '/admin/js/admin.js', ['jquery'], time(), true );
    }

    /**
     * Register admin menu
     */
    public function admin_menu() {
        add_menu_page(
            __( 'Accessibility Menu' ),
            __( 'Accessibility Menu' ),
            'manage_options', 
            'accessibility-menu',
            [$this, 'admin_page_content'],
            'dashicons-universal-access-alt',
            20
        );
    }

    /**
     * Accessibility Menu callback function 
    */
    public function admin_page_content() {
        include_once( AS_DIR . "/views/setting/accessibility-setting.php" );
    }

}