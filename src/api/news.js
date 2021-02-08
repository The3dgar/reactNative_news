import { API_HOST } from "../utils/constnts";

export const getNewsApi = async () => {
  const url = `${API_HOST}/news?_sort=created_at:DESC&_limit=100`
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
