/**
 * Radio stations handler
 */
export default {

  // get channels data from api
  getChannels( callback ) {
    const apiurl = '/apis-radio/station.id.json';
    const error  = 'There was a problem fetching the latest list of radio stations from Dailymate Radio.';

    axios.get( apiurl ).then( res => {
      const list = this._parseChannels( res.data.channels );      
      if ( !list.length ) return callback( error, [] );
      return callback( null, list );
    })
    .catch( e => {
      return callback( error + String( e.message || '' ), [] );
    });
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
        c.route = '/channel/' + c.country + '/' + c.id;
        output.push( c );
      }
    }
    return output;
  }
}
