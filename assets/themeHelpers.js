const themeHelpers = {
    truncate(text, limit, after) {
		let _c = text.trim();
		_c = _c.split(' ').slice(0, limit);
		_c = _c.join(' ') + (after ? after : '');
		return _c;
    },
    log(){
    	return 'log';
    }
}

export default themeHelpers