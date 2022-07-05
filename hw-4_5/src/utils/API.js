class productsAPI {
  _storeAPI = "https://api.escuelajs.co/api/v1/products";
  _initialValue = 0;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cold not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getProducts = (offset = this._initialValue) => {
    return this.getResource(`${this._storeAPI}?offset=${offset}&limit=16`);
  };

  getProduct = (id) => {
    return this.getResource(`${this._storeAPI}/${id}`);
  };
}

class usersAPI {
  _usersAPI = "https://api.escuelajs.co/api/v1/users";
  _loginAPI = "https://api.escuelajs.co/api/v1/auth/login";
  _profileAPI = "https://api.escuelajs.co/api/v1/auth/profile";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Cold not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getUsers = () => {
    return this.getResource(`${this._usersAPI}`);
  };

  login = async (data = {}, url = this._loginAPI) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  getUserWithSession = async (token, url = this._profileAPI) => {
    const response = await fetch(url, {
      method: "GET",
      contentType: "application/json",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  };
}

export { productsAPI, usersAPI };
