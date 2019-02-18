export const state = () => ({
	pageName:null,
	sectionIndex:null,
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
	SET_IN_LAYOUT(state, name, value){
		state[name] = value;
	},
	SET_IN_CURRENT_PAGE(state, name, value){
		state.pages[state.pageName][name] = value;
	},
	SET_IN_CURRENT_SECTION(state, name, value){
		state.pages[state.pageName].
			sections[state.selectedSection][name] = value;
	},

	SET(state, data){
		let level = 0;
		data.p.reduce((a, b) => {
			level++;
			if (level === data.p.length){
				a[b] = data.v;
				return data.v;
			} else {
			 	return a[b];
			}
		}, state);
	},

    // --------------------------------

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
		console.log('add',state.pages[state.pageName]
			.sectionsProps.width);
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
	async set({commit}, payload) {
		commit('SET', payload);
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