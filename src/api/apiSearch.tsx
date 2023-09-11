import api from "./index";

export const searchDocs = async (query: string, limit: number) => {
  try {
    const response = await api.get(`?search=${query}&limit=${limit}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
