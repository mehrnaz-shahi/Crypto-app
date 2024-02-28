const BaseUrl = 'https://api.coingecko.com/api/v3/coins'

const getUrl = (per_page=50, page=1, order='desc') : string => {
    return `${BaseUrl}/markets?vs_currency=usd&order=market_cap_${order}&per_page=${per_page}&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=CG-PVQzhchzRCWYT4Hs7QP7MkDB`
}

export {getUrl, BaseUrl};