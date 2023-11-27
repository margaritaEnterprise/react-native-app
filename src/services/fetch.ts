const API_URL = 'https://restcountries.com/v3.1';

const getAll = async (fields?: string) => {
    try {
        const response = await fetch(
            `${API_URL}/all?fields=${
                typeof fields !== 'undefined' && fields?.length > 0 ? fields : ''}`
            );
        const data = await response.json();

        return Promise.resolve(data);

    } catch(error) {
        return Promise.reject(error);
    }
};

export default getAll;
