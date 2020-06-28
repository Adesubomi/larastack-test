<?php

namespace App\Http\Controllers;

use Adesubomi\Larastack\Larastack;
use App\Mocks\TestMock;
use App\Support\ApiSupport;

class PaystackController extends Controller
{
    /**
     * @param Larastack $larastack
     * @return \Illuminate\Http\JsonResponse
     */
    public function initializeTransaction(Larastack $larastack)
    {
        try {
            $amount = 10e3;
            $init = $larastack->initializeTransaction(TestMock::$customer['email'], $amount);

            return ApiSupport::success('Initialized transaction', $init);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    /**
     * @param Larastack $larastack
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyTransaction(Larastack $larastack)
    {
        try {
            $reference = request()->input('reference');
            $response = $larastack->verifyTransaction($reference);
            return ApiSupport::success('Transaction checked', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    /**
     * @param Larastack $larastack
     * @return \Illuminate\Http\JsonResponse
     */
    public function listBanks(Larastack $larastack)
    {
        try {
            $response = $larastack->listBanks();
            return ApiSupport::success('List of banks', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    /**
     * @param Larastack $larastack
     * @return \Illuminate\Http\JsonResponse
     */
    public function listCustomers(Larastack $larastack)
    {
        try {
            $response = $larastack->listCustomers();
            return ApiSupport::success('List of customers', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    public function resolveAccountNumber(Larastack $larastack)
    {
        try {
            $response = $larastack->resolveAccountNumber(
                TestMock::$customer['account_number'],
                TestMock::$customer['bank_code']
            );
            return ApiSupport::success('Account number resolution', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    public function resolveBvn(Larastack $larastack)
    {
        try {

            $response = $larastack->resolveBvn(
                TestMock::$customer['bvn']
            );
            return ApiSupport::success('Bvn resolution', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }

    public function getBalance(Larastack $larastack)
    {
        try {

            $response = $larastack->getBalance();
            return ApiSupport::success('Account balance', $response);
        }
        catch (\Exception $e) {
            return ApiSupport::failure($e, $e->getMessage());
        }
    }
}
