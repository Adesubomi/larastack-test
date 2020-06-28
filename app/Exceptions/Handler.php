<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        if ($this->shouldntReport($exception)) {
            return;
        }

        Handler::logAnException($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        return parent::render($request, $exception);
    }

    /**
     * Logs a simple message to log file
     * @param String $message
     */
    public static function simpleLog(String $message)
    {
        try {
            \Illuminate\Support\Facades\Log::info($message);
        } catch (\Exception $exception) {

        }
    }

    /**
     * Log the information of an exception to log file
     * @param \Throwable $exception
     */
    public static function logAnException(\Throwable $exception)
    {

        $exceptionFormat = "\n" . config('app.name') . "-EXCEPTION \nMESSAGE:: %s \nFILE:: %s \nLINE::%s \n\n";

        \Illuminate\Support\Facades\Log::info(sprintf($exceptionFormat,
            !empty(trim($exception->getMessage())) ? $exception->getMessage() : get_class($exception),
            $exception->getFile(),
            $exception->getLine()
        ));
    }
}
