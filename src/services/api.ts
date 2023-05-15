import axios from "axios";
import { detailEnpoint, searchEndpoint } from './endpoints';

export const searchProduct = async (querySearch: string) => {
  const response = await axios.get(searchEndpoint + querySearch);
  return response.data;
};

export const details = async (productId: string) => {
  const response = await axios.get(detailEnpoint + productId);
  return response.data;
};

export const descriptions = async (productId: string) => {
  const response = await axios.get(detailEnpoint + productId + "/description");
  return response.data;
};