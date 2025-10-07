import { axiosHttp } from "@/services/axios";

export const postLogo = async (file: File) => {
  const formData = new FormData();
  formData.append('attachment', file);

  const response = await axiosHttp.post('/attachment', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
