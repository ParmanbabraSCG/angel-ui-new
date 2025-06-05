import { postData } from './api';
import { GetEsgAllResponse, GetEsgAllRequest } from '../types/vms';

export async function getEsgAll(getAll: boolean): Promise<GetEsgAllResponse> {
  try {
    const payload: GetEsgAllRequest = { getAll };
    const response = await postData<GetEsgAllResponse>('/VMS/getesgall', payload);
    return response;
  } catch (error) {
    console.error('Error fetching ESG data:', error);
    throw error;
  }
}