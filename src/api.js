import axios from "axios";

const baseUrl = 'https://pixabay.com/api/?';
const KEY = '23763400-56e03b3c97aa031975e4c0255';
const perPage = '12';
const filterUrl = '&image_type=photo&orientation=horizontal&safesearch=true';


export const fetchImages = async (search, page) => {
    const response = await axios.get(`${baseUrl}&key=${KEY}&q=${search}${filterUrl}&page=${page}&per_page=${perPage}`)

    if (response.status >= 200 && response.status < 300) {
        return response.data.hits;
    }
    // if (data.status === 404) {
    //     return Notiflix.Notify.info("Oops, there is no country with that name.")
    // };
    throw new Error(response.status);
};
