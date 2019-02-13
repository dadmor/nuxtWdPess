export const state = () => ({
	pages:{
		news:{
			header:false,
			sectionsProps:{
				width: 3,
			},
			sections:[
				{
					id: 'primary',
					rest: '/posts',
					pagination: false,
					component: 'card-standard',
					width:2,
					height:1,
					items:{
						item1:{
							width:1,
							height:1,
							component: 'card-standard'
						},
						item2:{
							width:1,
							height:1,
							component: 'card-standard'
						}
					},
					
				},
			],
			footer:false
		},
		category:{
			header:false,
			sections:[],
			footer:false
		},
		tag:{
			header:false,
			sections:[],
			footer:false
		},
		post:{
			header:false,
			sections:[],
			footer:false
		}
	},
	header:{},
	footer:{},
	builder:'stand-by',
	// ['stand-by', 'layout-builder', 'section-options']
});

export const mutations = {
	SET_BUILDER(state, data) {
		state.builder = data;
	},
	ADD_SECTION(state, data) {
		state.pages[data.name.split('-')[0]]
			.sections.push({
				width:1
			});
	},
	REMOVE_SECTION(state, data) {
		state.pages[data.name.split('-')[0]]
			.sections.splice(-1,1);
	},
	ADD_SECTION_ROW(state, data) {
		state.pages[data.name.split('-')[0]]
			.sectionsProps.width++;
	},
	REMOVE_SECTION_ROW(state, data) {
		state.pages[data.name.split('-')[0]].
			sectionsProps.width--;
	},
	ADD_SECTION_SPAN(state, data) {
		state.pages[data.route.name.split('-')[0]].
			sections[data.me.index].width++;
	},
	REMOVE_SECTION_SPAN(state, data) {
		state.pages[data.route.name.split('-')[0]].
			sections[data.me.index].width--;
	},
};

export const actions = {
	async setBuilder({commit}, payload) {
		commit('SET_BUILDER', payload);
	},
	async addSection({commit}, payload) {
		commit('ADD_SECTION', payload);
	},
	async removeSection({commit}, payload) {
		commit('REMOVE_SECTION', payload);
	},
	async addSectionRow({commit}, payload) {
		commit('ADD_SECTION_ROW', payload);
	},
	async removeSectionRow({commit}, payload) {
		commit('REMOVE_SECTION_ROW', payload);
	},
	async addSectionSpan({commit}, payload) {
		commit('ADD_SECTION_SPAN', payload);
	},
	async removeSectionSpan({commit}, payload) {
		commit('REMOVE_SECTION_SPAN', payload);
	},

	
};