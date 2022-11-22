import { useState } from "react";
import backend from "../api/backend";

export const IDLE = "IDLE";
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const useApi = () => {
  const [state, setState] = useState(IDLE);

  const request = async ({ url, data }) => {
    setState(LOADING);
    try {
      await backend.post(url, data);
      setState(SUCCESS);
    } catch {
      setState(ERROR);
    }
  }

  return { request, state }
}

export default useApi;