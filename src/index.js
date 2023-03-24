const axios = require('axios')
const {convertToUrl} = require('./utils.js')
const streamers = require('./streamers-list.js')


class TwitchRank {
    
    constructor({clientId,appAccessToken}){
        try {
            this.clientId = clientId
            this.appAccessToken = appAccessToken
            this.TwitchCredentials = axios.create({
                headers: {
                    'Authorization': `Bearer ${this.appAccessToken}`,
                    'Client-Id': `${this.clientId}`
                }
            })
        }catch(err) {
            throw new Error('missing or invalid required arguments')
        }
    }


    rank = async({country="",language="",categoryId="",top=0} = {}) => {

        if (country && language){
            throw new Error("no se permite la declaracion de ambos a la vez")
        }

        let props = [];
        let url = "";

        if (country){
            if (!streamers[country]){
                throw new Error('Pais no disponible')
            }

            const streamersId = convertToUrl(streamers[country]);
            props.push(streamersId)
        }

        if (language){
            props.push(`language=${language}`)
        }

        if (categoryId){
            //!if (!streamers[categoryId]){
            //!    throw new Error('Categoria no encontrada')
            //!}
            //! const category = convertToId(streamers[categoryId]);

            props.push(`game_id=${categoryId}`);
        }

        if (top !== 0){
            if (top > 100 || top < 1){
                throw new Error('Solo se permite listar desde 1 hasta 100 streams')
            }

            if(!country) props.push(`first=${top}`)
        
        }else{
            if(!country) props.push(`first=10`)
        }

        
        props.forEach(prop => url += `${prop}&`);
        url = url.slice(0,-1);

        let {data} = await this.TwitchCredentials.get(`https://api.twitch.tv/helix/streams?${url}`);

        if (country){
            if (top !== 0) data = data.data.slice(0,top);
            else data = data.data.slice(0,10);
            return data;
        }
        
        return data.data;

    }

}



module.exports = TwitchRank;