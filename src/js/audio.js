/**
 * Audio handler object
 */
export default {
  _audio: new Audio(),
  _context: null,
  _freq: new Uint8Array(),
  _source: null,
  _gain: null,
  _analyser: null,
  _error_status: 0,

  // setup audio routing
  setupAudio() {
    this._audio.addEventListener( 'canplaythrough', e => {
      // this._audio.play();
    });
    return this._audio;
  },

  // update and return analyser frequency data
  getFreqData() {
    return this._freq;
  },

  // set audio volume
  setVolume( volume ) {
    if ( !this._gain ) return;
    volume = parseFloat( volume ) || 0.0;
    volume = ( volume < 0 ) ? 0 : volume;
    volume = ( volume > 1 ) ? 1 : volume;
    this._gain.gain.value = volume;
  },

  // play audio source url
  playSource( source ) {
    this.stopAudio();
    // this._audio.src = String( source || '' ) + '?x=' + Date.now();
    this._audio.src = String( source || '' );
    // this._audio.src = 'http://bogor.nagaswarafm.com:8088/stream';
    // this._audio.load();
    this._audio.play();
  },

  // stop playing audio
  stopAudio() {
    try { this._audio.pause(); } catch ( e ) {}
    try { this._audio.stop(); } catch ( e ) {}
    try { this._audio.close(); } catch ( e ) {}
  },
}
