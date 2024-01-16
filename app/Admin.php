<?php 

namespace Habib\Accessibility\App;

class Admin {

    /**
     * Class Constructor
     */
    public function __construct() {
        add_action( 'admin_menu', [$this, 'admin_menu'] );
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
        ?>
            
        <?php
    }

}