class Api {
  get(url: string, options: {}): Promise<Response> {
    /*
     * Implement your fetch logic here.
     *
     * There are 4 API endpoints:
     * - Payments index: http://localhost:4000/api/payments
     * - Payment details: http://localhost:4000/api/payments/:payment_id
     * - Payment refunds (not every payment has refunds): http://localhost:4000/api/payments/:payment_id/refunds
     * - Customer details: http://localhost:4000/api/customers/:customer_id
     */
    return fetch(url);
  }
}

export default new Api();
