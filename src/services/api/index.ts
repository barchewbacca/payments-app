import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class Api {
  /**
   * Performs a GET request on the provided API endpoint and returns the promise with a response from the server.
   * Shows preloader while fetching data.
   * @param url An endpoint which the GET request is targeting.
   */
  get(url: string): Promise<Response> {
    NProgress.start();
    return fetch(url).finally(() => NProgress.done());
  }
}

export default new Api();
