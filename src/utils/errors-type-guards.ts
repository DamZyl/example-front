import axios from 'axios';

type ApiError = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};

function isApiErrorResponse(res: any): res is ApiError {
  return (
    res &&
    'type' in res &&
    'title' in res &&
    'status' in res &&
    'detail' in res &&
    'instance' in res
  );
}

export const handleErrorMessage = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    return 'Unknown error';
  }

  if (!error.response) {
    return error.message;
  }

  if (!isApiErrorResponse(error.response.data)) {
    return error.response;
  }

  return error.response.data.detail;
};
