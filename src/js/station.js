/**
 * Radio stations handler
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
                      //   "largeimage": "/img/stations/3.jpg"
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
                      //   "largeimage": "/img/stations/4.jpg"
                      // },
                      {
                        "id": "-thebeat-radio-plus-bali",
                        "country_display": "Indonesia",
                        "city_display": "Denpasar, Bali",
                        "frequency": "98.5 FM",
                        "title": "The Beat Radio Plus",
                        "stream_uri": "https://streaming.radio.co/sf61c46912/listen",
                        "description": "Broadcasted from Bali with the finest electronic music and more.",
                        "genre": "pop",
                        "largeimage": "/img/stations/5.jpg"
                      },
                      {
                        "id": "brava-radio-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "103.8 FM",
                        "title": "Brava Radio",
                        "stream_uri": "https://stream.radiojar.com/5k7t0rq3bnzuv",
                        "description": "Business radio station for business people and decision makers.",
                        "genre": "pop",
                        "largeimage": "/img/stations/2.jpg"
                      },
                      {
                        "id": "cosmopolitan-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "90.4 FM",
                        "title": "Cosmopolitan FM",
                        "stream_uri": "https://stream.radiojar.com/u7d8heq3bnzuv",
                        "description": "Aimed at active, dynamic, expressive, and broad-minded women.",
                        "genre": "pop",
                        "largeimage": "/img/stations/2.png"
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
                      //   "largeimage": "/img/stations/3.png"
                      // },
                      {
                        "id": "hardrock-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "87.6 FM",
                        "title": "Hard Rock FM",
                        "stream_uri": "https://stream.radiojar.com/7csmg90fuqruv",
                        "description": "Plays music of all genres and provides information about lifestyle and entertainment.",
                        "genre": "pop",
                        "largeimage": "/img/stations/3.jpeg"
                      },
                      {
                        "id": "indika-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "91.6 FM",
                        "title": "Indika FM",
                        "stream_uri": "https://s2.radio.co/sf58a82d7d/listen",
                        "description": "Known as clubbing radio, their tagline is \"Sounds of Jakarta\".",
                        "genre": "pop|club",
                        "largeimage": "/img/stations/2.jpeg"
                      },
                      {
                        "id": "i-radio-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "89.6 FM",
                        "title": "I-Radio",
                        "stream_uri": "https://stream.radiojar.com/4ywdgup3bnzuv",
                        "description": "Only plays 100 percent of Indonesian music with entertaining and inspirational content.",
                        "genre": "pop",
                        "largeimage": "/img/stations/1.jpeg"
                      },
                      {
                        "id": "prambors-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "102.2 FM",
                        "title": "Prambors",
                        "stream_uri": "http://masima.rastream.com/masima-pramborsjakarta",
                        "description": "Indonesia No.1 Hit Music Station that play pop music for teenagers and young adults.",
                        "genre": "pop",
                        "largeimage": "/img/stations/1.png"
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
                      //   "largeimage": "/img/stations/4.jpeg"
                      // },
                      {
                        "id": "trax-fm-jakarta",
                        "country_display": "Indonesia",
                        "city_display": "Jakarta",
                        "frequency": "104.1 FM",
                        "title": "Trax FM",
                        "stream_uri": "https://stream.radiojar.com/rrqf78p3bnzuv",
                        "description": "Youth radio station that carries the campaign \"Hits What You Like\"",
                        "genre": "pop",
                        "largeimage": "/img/stations/1.jpg"
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