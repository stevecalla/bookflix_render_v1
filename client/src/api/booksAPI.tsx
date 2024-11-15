import {ApiMessage} from '../interfaces/ApiMessage';

const url = '/api/books';

export const getBooks = async (): Promise<ApiMessage> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return {message: 'Error fetching books'};
  }
};