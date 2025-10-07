import { SignupPayload } from "@/app/entities/signup";
import { axiosHttp } from "@/services/axios";

export const postSignup = async (payload: Partial<SignupPayload>) => {
  const response = await axiosHttp.post('/auth/signup', payload);
  return response.data;
};