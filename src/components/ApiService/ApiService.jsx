import axios from "axios";

const API_KEY = '34734183-f822af85241d99cf90dda111a';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImg(searchQuery, page){
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
return response
};
