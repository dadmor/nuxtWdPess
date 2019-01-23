export const state = () => ({
	posts: [],
	total: null,
	current: null,
	post: {},
});

export const mutations = {
	SET(state, data) {
		state.posts = data.res.data,
		state.total = parseInt(data.res.headers['x-wp-totalpages']);
		state.current = parseInt(data.payload.page);
	},
};

export const actions = {
	async get({commit}, payload) {
		let params = '?_embed';
		params = payload.page ? `${params}&page=${payload.page}` : params;
		params = payload.cat_slug ? `${params}&categories=${payload.id}` : params;
		await this.$axios.get(`https://www.portalyogi.pl/blog/wp-json/wp/v2/posts${params}`)
		.then((res) => {
			if (res.status === 200) {
				commit('SET', {res, payload})
			}
		})
	},
};