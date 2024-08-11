const BASE_URL = 'https://api.example.com';

export const uploadShape = async (file) => {
    const formData = new FormData();
    formData.append('shape', file);

    const response = await fetch(`${BASE_URL}/regularize`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload shape');
    }

    return response.json();
};

export const identifySymmetry = async (file) => {
    const formData = new FormData();
    formData.append('shape', file);

    const response = await fetch(`${BASE_URL}/symmetry`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to identify symmetry');
    }

    return response.json();
};
