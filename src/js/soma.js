/**
 * Soma-FM API handler
 */
export default {

  // get channels data from api
  getChannels( callback ) {
    // const apiurl = 'https://somafm.com/channels.json';
    // const error  = 'There was a problem fetching the latest list of music channels from SomaFM.';

    const channels = {"channels": [
                      // {
                      //   "id": "ardan-radio-bandung",
                      //   "country_display": "Indonesia",
                      //   "city_display": "Bandung",
                      //   "frequency": "105.9 FM",
                      //   "title": "Ardan Radio",
                      //   "stream_uri": "http://listento.ardanradio.com:1059/stream/1/",
                      //   "description": "Ardan is a favorite radio for young people in Bandung.",
                      //   "genre": "pop",
                      //   "largeimage": "https://pbs.twimg.com/profile_images/1083204660796649472/KgOcrOqo_400x400.jpg"
                      // },
                      // {
                      //   "id": "bens-radio-jakarta",
                      //   "country_display": "Indonesia",
                      //   "city_display": "Jakarta",
                      //   "frequency": "106.2 FM",
                      //   "title": "Bens Radio",
                      //   "stream_uri": "http://175.103.58.72:8000/;stream.mp3",
                      //   "description": "The radio which has the tagline 'Betawi Punye Gaye Sele Aje Aje' was created by the ideals of its founder to continue preserving the cultural traditions of the ancestors.",
                      //   "genre": "dangdut",
                      //   "largeimage": "https://pbs.twimg.com/profile_images/1057826868798283776/w_tVuaWT_400x400.jpg"
                      // },
                      {
                        "id": "brava-radio-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "103.8 FM",
                        "title": "Brava Radio",
                        "stream_uri": "https://stream.radiojar.com/5k7t0rq3bnzuv",
                        "description": "Brava Radio is a business radio station for business people and decision makers who only play songs that are comfortable to their ears.",
                        "genre": "pop",
                        "largeimage": "https://static-media.streema.com/media/cache/69/a7/69a77dee472feaea1993964adf3d8261.jpg"
                      },
                      {
                        "id": "cosmopolitan-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "90.4 FM",
                        "title": "Cosmopolitan FM",
                        "stream_uri": "https://stream.radiojar.com/u7d8heq3bnzuv",
                        "description": "Radio for modern women in Jakarta, they are aimed at active, dynamic, expressive, and broad-minded women.",
                        "genre": "pop",
                        "largeimage": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpihpVs6hRMWE0QbNVUToSe0ojJzIMlqp6x5_btQy4WS0u18PP"
                      },
                      // {
                      //   "id": "delta-fm-jakarta",
                      //   "country_display": "Indonesia",
                      //   "city_display": "Jakarta",
                      //   "frequency": "99.1 FM",
                      //   "title": "Delta FM",
                      //   "stream_uri": "http://live.deltafm.net:9002/stream",
                      //   "description": "Delta FM is a radio station for young adults with a contemporary hot adult music format that plays the most delicious songs.",
                      //   "genre": "pop",
                      //   "largeimage": "https://cdn-profiles.tunein.com/s8162/images/logog.png?t=157130"
                      // },
                      {
                        "id": "hardrock-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "87.6 FM",
                        "title": "Hard Rock FM",
                        "stream_uri": "https://stream.radiojar.com/7csmg90fuqruv",
                        "description": "Hard Rock FM is the coolest young adult radio in Jakarta that plays music of all genres and provides information about lifestyle and entertainment.",
                        "genre": "pop",
                        "largeimage": "data:image/jpeg;base64,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"
                      },
                      {
                        "id": "indika-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "91.6 FM",
                        "title": "Indika FM",
                        "stream_uri": "https://s2.radio.co/sf58a82d7d/listen",
                        "description": "Indika FM is known as radio clubbing in Jakarta, now positioning itself as the Jakarta lifestyle radio and carrying the new tagline \"Sounds of Jakarta\".",
                        "genre": "pop|club",
                        "largeimage": "https://mytuner.global.ssl.fastly.net/media/tvos_radios/gzRWMFPxw5.jpeg"
                      },
                      {
                        "id": "i-radio-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "89.6 FM",
                        "title": "I-Radio",
                        "stream_uri": "https://stream.radiojar.com/4ywdgup3bnzuv",
                        "description": "Only plays 100 percent of Indonesian music with informative, educative, entertaining and inspirational content.",
                        "genre": "pop",
                        "largeimage": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXCFxbf1RJNA33kPPYgyOrQaPs8I2TrlyoeyIGbqPFt_xD1Ic_"
                      },
                      {
                        "id": "prambors-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "102.2 FM",
                        "title": "Prambors",
                        "stream_uri": "http://masima.rastream.com/masima-pramborsjakarta",
                        "description": "Indonesia No.1 Hit Music Station. They play pop music with their target audience being teenagers and young adults.",
                        "genre": "pop",
                        "largeimage": "https://mytuner.global.ssl.fastly.net/media/tvos_radios/UqGjK62g3S.png"
                      },
                      // {
                      //   "id": "suarasurabaya-surabaya",
                      //   "country_display": "Indonesia",
                      //   "city_display": "Surabaya",
                      //   "frequency": "100 FM",
                      //   "title": "Suara Surabaya",
                      //   "stream_uri": "http://s9.viastreaming.net:7020/stream/1/",
                      //   "description": "Suara Surabaya FM is a radio that provides news about Surabaya and national news.",
                      //   "genre": "pop",
                      //   "largeimage": "data:image/jpeg;base64,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"
                      // },
                      {
                        "id": "trax-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "104.1 FM",
                        "title": "Trax FM",
                        "stream_uri": "https://stream.radiojar.com/rrqf78p3bnzuv",
                        "description": "Trax FM is a youth radio station that carries the campaign \"Hits What You Like\"",
                        "genre": "pop",
                        "largeimage": "https://static-media.streema.com/media/cache/e2/16/e2167cb5eed62c9dda8eda4fcb29f3aa.jpg"
                      }                      
                    ]};

    const list = this._parseChannels( channels.channels );
    if ( !list.length ) return callback( error, [] );
    return callback( null, list );

    // axios.get( apiurl ).then( res => {
    //   const list = this._parseChannels( res.data.channels );      
    //   if ( !list.length ) return callback( error, [] );
    //   return callback( null, list );
    // })
    // .catch( e => {
    //   return callback( error + String( e.message || '' ), [] );
    // });
  },

  // fetch songs for a channel
  getSongs( channel, callback ) {
    // const apiurl = '';
    // const title  = channel.title || '...';
    // const error  = 'There was a problem loading the list of songs for channel '+ title +' from SomaFM.';

    // axios.get( apiurl ).then( res => {
    //   if ( !res.data.songs ) return callback( error, [] );
    //   return callback( null, res.data.songs );
    // })
    // .catch( e => {
    //   return callback( error + String( e.message || '' ), [] );
    // });
  },

  // parse channels list from api response
  _parseChannels( channels ) {
    let output = [];
    if ( Array.isArray( channels ) ) {
      for ( let c of channels ) {
        // if ( !Array.isArray( c.playlists ) ) continue;
        c.stream_uri = c.stream_uri;
        c.plsfile   = '';
        c.mp3file   = '';
        c.songsurl  = '';
        c.infourl   = '';
        c.twitter   = '';
        c.route     = '/channel/'+ c.id;
        c.listeners = 0;
        c.updated   = 0;
        c.favorite  = false;
        c.active    = false;
        output.push( c );
      }
    }
    return output;
  }
}
