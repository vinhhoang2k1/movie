const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e5052334875e031f5dc6022e03554de8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;