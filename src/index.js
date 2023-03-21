const axios = require('axios')
const {convertToUrl} = require('./utils.js')
const streamers = require('./streamers-list.js')


const getRankCountry = async (country) => {
    
    const idList = convertToUrl(streamers[country]);
    const {data} = await axios.get(`https://api.twitch.tv/helix/streams?${idList}`,{
        headers:{
            'Authorization': 'Bearer ',
            'Client-Id': ''
        }
    })
    
    console.log(data)
    return data;
}


getRankCountry('peru')


module.exports = {
    getRankCountry
}