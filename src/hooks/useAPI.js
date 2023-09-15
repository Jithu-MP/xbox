import axios from "axios";

export const URLMap = {
  LOGIN: "/login",
};

export const APIMethods = {
  GET: "GET",
  POST: "POST",
};

const useAPI = (url, method) => {
  const call = async (params, data, headers = null) => {
    try {
      const req = headers
        ? {
            url,
            method,
            params,
            data,
            headers,
          }
        : {
            url,
            method,
            params,
            data,
          };
      const apiResp = await axios.request({ ...req });
      return [apiResp, null];
    } catch (err) {
      return [null, err.response.data.error || err.response.data.message];
    }
  };
  return { call };
};

export default useAPI;
