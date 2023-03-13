var WooCommerceAPI = require('woocommerce-api');
 
const api = new WooCommerceAPI({
  url: 'https://recycledj.com/',
  consumerKey: 'ck_00b2f37c17aa393706939ecb185e4c88d0c16773',
  consumerSecret: 'cs_f7c56d656d32ebcd3cf787492189eae8f44a3f91',
  wpAPI: true,
  version: 'wc/v1'
});

export default async function handler(req,res){
    const responseData = {
        success: false,
        products: []
    }

    try {
        const {data} = await api.get(
            'products', 
            {
                per_page: 50
            }
        )
        responseData.success = true
        responseData.products = data

        res.json(responseData)
        
    } catch (err) {
        responseData.error = err.message
        res.status(500).json(responseData)
    }

}