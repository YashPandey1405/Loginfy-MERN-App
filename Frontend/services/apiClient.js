class ApiClient {
  constructor() {
    this.baseURL = "http://localhost:8080";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "include",
      };
      console.log(`Fetching ${url}`);
      const response = await fetch(url, config);
      //check if response.ok === value

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error", error);
      throw error;
    }
  }

  //Auth endpoints

  async signup(name, email, password) {
    return this.customFetch("/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }
  async login(loginUserName, loginEmail, loginPassword) {
    return this.customFetch("/login", {
      method: "POST",
      body: JSON.stringify({ loginUserName, loginEmail, loginPassword }),
    });
  }

  async getLoginPage() {
    return this.customFetch("/login");
  }

  async getSignupPage() {
    return this.customFetch("/signup");
  }

  async getProfiles() {
    return this.customFetch("/me");
  }

  async logout() {
    return this.customFetch("/logout");
  }

  async isloggedIn() {
    return this.customFetch("/status");
  }
}

const apiClient = new ApiClient();

export default apiClient; // Single instance of ApiClient.....
