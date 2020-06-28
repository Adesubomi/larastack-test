<?php
/**
 * Created by PhpStorm.
 * User: adesubomi
 * Date: 6/27/20
 * Time: 8:22 PM
 */

namespace App\Support;


class FileSupport
{
    public static function uploadDir($path = '')
    {
        if (empty($path)) {
            return storage_path('app/public');
        } else {
            $_path = rtrim($path, '/');
            $_path = ltrim($_path, '/');

            return storage_path('app/public/' . $_path);
        }
    }

    public static function pictureUploadDir($path = '')
    {
        $base_path = self::uploadDir('pictures');

        if (!empty($path)) {
            $_path = rtrim($path, '/');
            $_path = ltrim($_path, '/');

            return $base_path .'/'. $_path;
        }

        return $base_path;
    }

    public static function deleteDir($dirPath)
    {

        if (is_file($dirPath)) {
            @rmdir($dirPath);
            return;
        }

        $files = glob(rtrim($dirPath) . '/*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file)) {
                @FileSupport::deleteDir($file);
            } else {
                @unlink($file);
            }
        }
    }

}