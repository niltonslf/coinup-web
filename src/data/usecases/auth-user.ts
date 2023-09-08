import {useMutation} from '@tanstack/react-query';
import {HttpErrorResponse, httpClient} from '../http';
import {AuthLogin, AuthRegister} from '@/models';

export const useSignUp = () => {
  return useMutation<any, HttpErrorResponse, AuthRegister>({
    mutationFn: registerData => httpClient.post('signup', registerData),
  });
};

export const useSignIn = () => {
  return useMutation<any, HttpErrorResponse, AuthLogin>({
    mutationFn: loginData => httpClient.post('signin', loginData),
  });
};
