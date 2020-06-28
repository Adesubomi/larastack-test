<?php
/**
 * Created by PhpStorm.
 * User: adesubomi
 * Date: 6/28/20
 * Time: 4:46 AM
 */
namespace App\Support;


use App\Exceptions\Handler;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;

class ApiSupport
{
    private static $responder = [
        'status' => false,
        'message' => '',
        'payload' => [],
        'meta' => [],
    ];

    /**
     * Returns a success [200] response
     * @param string $msg
     * @param array $data
     * @param array $meta
     * @return \Illuminate\Http\JsonResponse
     */
    public static function success(string $msg, $data = [], array $meta = [])
    {
        [$payload, $pagination] = self::apiPaginationFactory($data);

        $nativeMeta = [];

        $responder = self::$responder;
        $responder['status'] = true;
        $responder['message'] = $msg;
        $responder['payload'] = $payload;

        if (!empty($pagination)) {
            $responder['pagination'] = $pagination;
        }

        $responder['meta'] = array_merge($meta, $nativeMeta);

        return Response::json($responder);
    }

    /**
     * Returns a failure [4xx,5xx] response
     * @param null $exception
     * @param string $msg
     * @param array $errors
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    public
    static function failure($exception = null, string $msg, $errors = [], $statusCode = 500)
    {
        $responder = config('app.apiResponse');
        $responder['status'] = false;
        $responder['message'] = $msg;
        $responder['errors'] = $errors;

        if (!is_null($exception)) {
            Handler::logAnException($exception);
        }

        return Response::json($responder, $statusCode);
    }

    public static function validation($message, $errors)
    {
        return self::failure(
            ValidationException::withMessages($errors),
            $message, $errors, 422
        );
    }

    /**
     * Separates eloquent paginated results
     * into a data and pagination data
     * @param $data
     * @return array
     */
    private
    static function apiPaginationFactory($data)
    {
        $payload = [];
        $pagination = [];

        // to cater for pagination data
        if (is_object($data)) {
            switch (get_class($data)) {
                case LengthAwarePaginator::class:
                    $pagination = $data->toArray();
                    $payload = $pagination['data'];
                    unset($pagination['data']);
                    break;

                default:
                    $payload = $data;
                    break;
            }
        } else {
            $payload = $data;
        }

        return [$payload, $pagination];
    }

    public static function user()
    {
        return Auth::user();
    }

    /**
     * Aborts a request
     * @param int $code
     * @param null $message
     * @throws \Exception
     */
    public
    static function abort(int $code, $message = null)
    {
        $msg = $message ?: 'Unauthorized access';
        self::failure(null, $msg, [], 403)->send();
    }
}