const convertToUrl = (streamers) => {
    let url = "";
    Object.values(streamers).forEach(streamer => url += `user_id=${streamer}&`);
    return url.slice(0,-1);
}



module.exports = {
    convertToUrl
}