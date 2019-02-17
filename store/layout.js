export const state = () => ({
	pageName:null,
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
	selectedSection: null,
	
});

export const mutations = {
	SET_PAGE_NAME(state, data) {
		state.pageName = data;
	},
	SET_BUILDER(state, data) {
		state.builder = data;
	},
	SET_SECTION(state, data) {
		state.selectedSection = data;
	},
	ADD_SECTION(state, data) {
		state.pages[state.pageName]
			.sections.push({
				width:1
			});
	},
	REMOVE_SECTION(state, data) {
		state.pages[state.pageName]
			.sections.splice(-1,1);
	},
	ADD_SECTION_ROW(state, data) {
		state.pages[state.pageName]
			.sectionsProps.width++;
	},
	REMOVE_SECTION_ROW(state, data) {
		state.pages[state.pageName].
			sectionsProps.width--;
	},
	ADD_SECTION_SPAN(state) {
		state.pages[state.pageName].
			sections[state.selectedSection].width++;
	},
	REMOVE_SECTION_SPAN(state) {
		state.pages[state.pageName].
			sections[state.selectedSection].width--;
	},
};

export const actions = {
	async setPageName({commit}, payload) {
		commit('SET_PAGE_NAME', payload);
	},
	/* 
		set (load) builder layout component 
	*/
	async setBuilder({commit}, payload) {
		commit('SET_BUILDER', payload);
	},
	/* 
		set acctual section index 
	*/
	async setSection({commit}, payload) {
		commit('SET_SECTION', payload);
	},
	/* 
		create new section in builder 
	*/
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
	async addSectionSpan({commit}) {
		commit('ADD_SECTION_SPAN');
	},
	async removeSectionSpan({commit}) {
		commit('REMOVE_SECTION_SPAN');
	},

	
};