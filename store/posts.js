export const state = () => ({
	posts: [],
	total: null,
	current: null,
	post: {},
});

export const mutations = {
	SET_POSTS(state, data) {
		state.posts = data.res.data,
		state.total = parseInt(data.res.headers['x-wp-totalpages']);
		state.current = parseInt(data.payload.page);
	},
	SET_POST_STATIC(state, data) {
		state.post = data.post;
	},
};

export const actions = {
	async getPosts({commit}, payload) {
		let params = '?_embed';
		params = payload.page ? `${params}&page=${payload.page}` : params;
		params = payload.cat_slug ? `${params}&categories=${payload.id}` : params;
		await this.$axios.get(`https://how2play.pl//wp-json/wp/v2/posts${params}`)
		.then((res) => {
			if (res.status === 200) {
				commit('SET_POSTS', {res, payload})
			}
		})
	},
	async getPost({commit}, payload) {
		if(payload.post){
			commit('SET_POST_STATIC', payload);
		}
		// await this.$axios.get(`https://how2play.pl//wp-json/wp/v2/posts${params}`)
		// .then((res) => {
		// 	if (res.status === 200) {
		// 		commit('SET_POSTS', {res, payload})
		// 	}
		// })
	},
};