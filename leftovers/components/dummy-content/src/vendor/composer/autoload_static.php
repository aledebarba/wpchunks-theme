<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1917f83f3287ae67e7becfa42c0c917d
{
    public static $prefixLengthsPsr4 = array (
        'j' => 
        array (
            'joshtronic\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'joshtronic\\' => 
        array (
            0 => __DIR__ . '/..' . '/joshtronic/php-loremipsum/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1917f83f3287ae67e7becfa42c0c917d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1917f83f3287ae67e7becfa42c0c917d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1917f83f3287ae67e7becfa42c0c917d::$classMap;

        }, null, ClassLoader::class);
    }
}
