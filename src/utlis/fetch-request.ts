const request = (url: string, config: any) => {
    return fetch(url, config)
        .then((res: any) => {
            if(!res.ok) {
                throw Error('error');
            }
            return res.json();
        })
        .catch((error: any) => {
            return Promise.reject(error);
        });
};

export const get = (url: string) => {
    return request(url,{ method: 'GET' });
};

export const post = (url: string, data: any) => {
    return request(url, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST'
    });
};