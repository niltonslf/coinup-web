import axios, {AxiosInstance, AxiosResponse} from 'axios';

import {HttpRequest, HttpResponse} from './types';

class AxiosHttpClient {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  private async request<T>(params: HttpRequest): Promise<HttpResponse<T>> {
    const token = '';

    try {
      const response = await this.instance.request({
        url: params.url,
        method: params.method,
        data: params.body,
        headers: {
          Authorization: `Bearer ${token}`,
          ...params?.headers,
        },
        params: params?.params,
      });

      return this.adapt(response);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        // do something
      }
      throw error.response;
    }
  }

  private adapt(response: AxiosResponse): HttpResponse {
    return {statusCode: response?.status, body: response?.data};
  }

  async get(url: string, headers?: any, params?: any): Promise<HttpResponse> {
    return await this.request({method: 'get', url, headers, params});
  }

  async post<T = any>(
    url: string,
    body?: any,
    headers?: any,
    params?: any,
  ): Promise<HttpResponse<T>> {
    return await this.request<T>({method: 'post', url, headers, params, body});
  }

  async put<T = any>(
    url: string,
    body?: any,
    headers?: any,
    params?: any,
  ): Promise<HttpResponse<T>> {
    return await this.request<T>({method: 'put', url, headers, params, body});
  }

  async patch<T = any>(
    url: string,
    body?: any,
    headers?: any,
    params?: any,
  ): Promise<HttpResponse<T>> {
    return await this.request<T>({method: 'patch', url, headers, params, body});
  }

  async delete<T = any>(
    url: string,
    headers?: any,
    params?: any,
  ): Promise<HttpResponse<T>> {
    return await this.request<T>({method: 'delete', url, headers, params});
  }

  axios(): AxiosInstance {
    return axios.create({});
  }
}

const httpClient = new AxiosHttpClient();
export {httpClient};
