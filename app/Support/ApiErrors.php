<?php
/**
 * Created by PhpStorm.
 * User: spark
 * Date: 6/11/19
 * Time: 2:47 PM
 */

namespace App\Support;


class ApiErrors
{
    private $errors = [];


    public function add(string $error, string $name = null): self
    {
        $key = ($name == null) ? 'all' : $name;

        if ( array_key_exists($key, $this->errors) ) {
            array_push( $this->errors[$key], $error);
        }
        else {
            $this->errors[$key] = [];
            $this->errors[$key][] = $error;
        }

        return $this;
    }

    public function remove(string $name): self
    {
        if (array_key_exists($name, $this->errors)) {
            unset($this->errors[$name]);
        }
        return $this;
    }

    public function removeAll()
    {
        $this->errors = [];
        return $this;
    }

    public function getErrors()
    {
        return $this->errors;
    }
}