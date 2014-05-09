<?php

  $app = new \Phalcon\Mvc\Micro();

  //define the routes here
//This is the start route
$app->get('/', function () {
    echo "<h1>Welcome!</h1>";
});
$app->get('/test', function () {
    echo "<h1>Test url's!</h1>";
});
  $app->get('/say/hello/{name}', function ($name) {
    echo "<h1>Hello! $name</h1>";
 });

  $app->handle();