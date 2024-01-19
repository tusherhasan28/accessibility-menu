<?php 

namespace Habib\Accessibility\App;

class Front {

    /**
     * Class Constructor
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', [$this, 'enque_scripts'] );
    }

    /**
     * load all fornt assets
     */
    public function enque_scripts() {
        $contrast       = esc_url( AS_ASSET . '/img/download.svg' );
        $dark_contrast  = esc_url( AS_ASSET . '/img/dark_contrast.svg');
        $light_contrast = esc_url( AS_ASSET . '/img/light_contrast.svg');

        $icon_path = [
            "contrast"       => $contrast, 
            "dark_contrast"  => $dark_contrast,
            "light_contrast" => $light_contrast,
        ];

        if( ! is_admin() ) {

            wp_enqueue_style( 'front', AS_ASSET . '/front/css/front.css', '', time(), 'all' );
            wp_enqueue_script( 'front', AS_ASSET . '/front/js/front.js', ['jquery'], time(), true );
            wp_localize_script( 'front', 'LOCALIZED_ARR', array( 'iconSrc' => $icon_path ) );

        }
    } 

}