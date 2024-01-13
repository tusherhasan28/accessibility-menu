<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0869eccab1465bfb67e06960c8aad328
{
    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Habib\\Accessibility\\App\\' => 24,
            'Habib\\Accessibility\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Habib\\Accessibility\\App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
        'Habib\\Accessibility\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0869eccab1465bfb67e06960c8aad328::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0869eccab1465bfb67e06960c8aad328::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit0869eccab1465bfb67e06960c8aad328::$classMap;

        }, null, ClassLoader::class);
    }
}