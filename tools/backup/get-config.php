<?php
    require_once __DIR__ . '/../../../../bootstrap/autoload.php';

    // Looing for .env at the root directory
    $app = require_once __DIR__ . '/../../../../bootstrap/app.php';
    $env = $app->loadEnvironmentFrom(__DIR__ . '/../../../../.env');

    function base_path($file) {
        return dirname(__FILE__) . '/../../../../' . $file;
    }

    // function env($envVarName, $defaultVal) {
    //     if (getenv($envVarName)) {
    //         return getenv($envVarName);
    //     }
    //     return $defaultVal;
    // }

    $database = include '../../../../config/database.php';
    $app = include '../../../../config/app.php';
    $cms = include '../../../../config/cms.php';

    $config = [
        'database' => $database,
        'app' => $app,
        'cms' => $cms,
    ];

    $configJsonStr = json_encode($config);
    echo $configJsonStr;
?>