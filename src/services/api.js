class Api {
  //static host = process.env.GATSBY_URL_BACKEND_SEGUROS;

  static get(route, header) {
    return this.xhr(route, null, 'GET', header);
  }

  static put(route, params, header) {
    return this.xhr(route, params, 'PUT', header);
  }

  static post(route, params, header) {
    return this.xhr(route, params, 'POST',header);
  }

  static delete(route, params, header) {
    return this.xhr(route, params, 'DELETE', header);
  }

  static async xhr(route, params, verb, header = {}) {
    //const url = `${this.host}${route}`;
    const url = `http://localhost:3310${route}`

    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const options = {
      method: verb,
      headers: { ...defaultHeaders, ...header },
    };

    if (verb !== 'GET') {
      options.body = JSON.stringify(params);
    }

    const result = await fetch(url, options);

    if (result.ok) {
      const text = await result.text();
      try {
        return JSON.parse(text);
      } catch (err) {
        return text;
      }
    }

    if (result.status !== 500) {
      const text = await result.text();
      throw new Error(text);
    }

    throw new Error('Ocorreu um erro inesperado.');
  }
}

export default Api;
