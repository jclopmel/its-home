import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import productsJSON from './products.json'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		appModules:[
			{"icon": "mdi-food-apple",
			"path": "/fridge"
			},
			{"icon": "mdi-water",
			"path": "/water"
			},
			{"icon": "mdi-flash",
			"path": "/electricity"
			},
			{"icon": "mdi-lock",
			"path": "/security"
			}
		],
		productsInStorage: [
{"id":"5e5574e97fbf5e2d14cb822d","name":"Milk","quantity":14,"icon":"mdi-food-apple"},
{"id":"5e58ea3f7983ba163039d872","name":"Pineapples","quantity":2,"icon":"mdi-fruit-pineapple"},
{"id":"5e58ead67983ba163039d874","name":"Coke","quantity":3,"icon":"mdi-cup-water"},
{"id":"5e58eae07983ba163039d875","name":"Frozen Pizza","quantity":2,"icon":"mdi-pizza"},
{"id":"5e58eaf47983ba163039d876","name":"White wine","quantity":2,"icon":"mdi-cup-water"},
{"id":"5e58eb057983ba163039d877","name":"Bananas","quantity":7,"icon":"mdi-food-apple"},
{"id":"5e58eb237983ba163039d878","name":"Turkey","quantity":1,"icon":"mdi-pizza"},
{"id":"5e58eb457983ba163039d879","name":"Cheese","quantity":6,"icon":"mdi-pizza"},
{"id":"5e58eb887983ba163039d87a","name":"Yogurt","quantity":14,"icon":"mdi-pizza"},
{"id":"5e58eba17983ba163039d87b","name":"Tomatoes","quantity":4,"icon":"mdi-pizza"},
{"id":"5e58ebbb7983ba163039d87c","name":"Hummus","quantity":1,"icon":"mdi-food-apple"},
{"id":"5e58ebc37983ba163039d87d","name":"Jam","quantity":3,"icon":"mdi-food-apple"},
{"id":"5e58ebca7983ba163039d87e","name":"Butter","quantity":2,"icon":"mdi-food-apple"},
{"id":"5e58ebd87983ba163039d87f","name":"Lettuce","quantity":6,"icon":"mdi-food-apple"},
{"id":"5e58ebf17983ba163039d880","name":"spaghetti","quantity":4,"icon":"mdi-noodles"},
{"id":"5e58ec0b7983ba163039d881","name":"Tuna can","quantity":16,"icon":"mdi-pizza"},
{"id":"5e58ec187983ba163039d882","name":"Beer","quantity":2,"icon":"mdi-cup-water"},
{"id":"5e58ec477983ba163039d883","name":"Juice","quantity":2,"icon":"mdi-cup-water"},
{"id":"5e58ec6f7983ba163039d884","name":"Carrots","quantity":9,"icon":"mdi-food-apple"},
{"id":"5e58ec867983ba163039d885","name":"Zucchini","quantity":3,"icon":"mdi-food-apple"},
{"id":"5e58ec8d7983ba163039d886","name":"Sushi","quantity":10,"icon":"mdi-food-apple"},
{"id":"5e58ec927983ba163039d887","name":"Watermelon","quantity":1,"icon":"mdi-food-apple"},
{"id":"5e58ec997983ba163039d888","name":"Strawberry","quantity":8,"icon":"mdi-food-apple"},
{"id":"5e58eca47983ba163039d889","name":"Lemon Juice","quantity":2,"icon":"mdi-cup-water"},
{"id":"5e58ecac7983ba163039d88a","name":"Lemon","quantity":5,"icon":"mdi-fruit-pineapple"},
{"id":"5e58ecb37983ba163039d88b","name":"Orange","quantity":7,"icon":"mdi-fruit-pineapple"},
{"id":"5e58ecd27983ba163039d88c","name":"Bread","quantity":6,"icon":"mdi-pizza"},
{"id":"5e58ecd87983ba163039d88d","name":"Broccoli","quantity":2,"icon":"mdi-pizza"},
{"id":"5e58ece27983ba163039d88e","name":"Frozen salmon","quantity":3,"icon":"mdi-food-apple"},
{"id":"5e58ecf97983ba163039d88f","name":"Kiwi","quantity":4,"icon":"mdi-food-apple"},
{"id":"5e58ed227983ba163039d890","name":"Guacamole","quantity":1,"icon":"mdi-food-apple"},
{"id":"5e58ed287983ba163039d891","name":"Chocolate","quantity":2,"icon":"mdi-food-apple"},
{"id":"5e58ed2e7983ba163039d892","name":"Eggs","quantity":9,"icon":"mdi-food-apple"},
{"id":"5e58ed357983ba163039d893","name":"Water","quantity":2,"icon":"mdi-cup-water"},
{"id":"5e58ed417983ba163039d894","name":"Chicken","quantity":4,"icon":"mdi-cup-water"},
{"id":"5e58ed4f7983ba163039d895","name":"Oil","quantity":3,"icon":"mdi-cup-water"},
{"id":"5e58ed677983ba163039d896","name":"Eggplant","quantity":3,"icon":"mdi-food-apple"},
{"id":"5e58ed797983ba163039d897","name":"Pepper","quantity":4,"icon":"mdi-food-apple"},
{"id":"5e58ed807983ba163039d898","name":"Garlic","quantity":5,"icon":"mdi-food-apple"},
{"id":"5e58ed927983ba163039d899","name":"Barbacue Sauce","quantity":0,"icon":"mdi-cup-water"},
{"id":"5e58ed9e7983ba163039d89a","name":"Soy Sauce","quantity":0,"icon":"mdi-cup-water"},
{"id":"5e58edb67983ba163039d89b","name":"Sausages","quantity":0,"icon":"mdi-pizza"},
{"id":"5e58edc27983ba163039d89c","name":"Hot god bread","quantity":0,"icon":"mdi-pizza"},
{"id":"5e58ede37983ba163039d89d","name":"Rice","quantity":4,"icon":"mdi-food-apple"},
{"id":"5e58edeb7983ba163039d89e","name":"Peanuts","quantity":1,"icon":"mdi-food-apple"},
{"id":"5e58edf17983ba163039d89f","name":"Nuts","quantity":3,"icon":"mdi-food-apple"},
{"id":"5e58ee017983ba163039d8a0","name":"Honey","quantity":1,"icon":"mdi-food-apple"},
{"id":"5e58ee0b7983ba163039d8a1","name":"Coffee","quantity":3,"icon":"mdi-cup-water"},
{"id":"5e58ee397983ba163039d8a2","name":"Vinegar","quantity":0,"icon":"mdi-cup-water"},
{"id":"5e594da314e00b04086b99ec","name":"Noodles","quantity":9,"icon":"mdi-noodles"},
{"id":"5e594eac8ffd6a240883c806","name":"Fruit","quantity":2,"icon":"mdi-fruit-pineapple"},
{"id":"5e594faea9540a061c095dc4","name":"Lasagna","quantity":1,"icon":"mdi-pizza"}
],
		onlineStatus: true,
		newName: "",
		newQuantity: 0,
		newIcon: "",
		Icons: [
		'mdi-food-apple',
		'mdi-fruit-pineapple',
		'mdi-cup-water',
		'mdi-pizza',
		'mdi-noodles'
		],
	},
	mutations:{
		addProduct(state, id){						// Adds one to product by ID
			let p = state.productsInStorage.findIndex((e)=>{return e.id == id})
			state.productsInStorage[p].quantity++;

		},
		takeOffProduct(state, id){					// takes Off one from product by ID
			let p = state.productsInStorage.findIndex((e)=>{return e.id == id})
			if(state.productsInStorage[p].quantity > 0){
				state.productsInStorage[p].quantity--;
			}
			
		},
		setProductsInStorage(state, data){
			state.productsInStorage = data;
		},
		setOnlineStatus(state, data){				// Commit for onlineStatus State
			state.onlineStatus = data;
		},
		setNewName(state, data){					// Commit for newName State
			state.newName = data;
		},
		setNewQuantity(state, data){				// Commit for newQuantity State
			state.newQuantity = data;
		},
		setNewIcon(state, data){					// Commit for newIcon State
			state.newIcon = data;
		},
		deleteProduct(state, data){
			state.productsInStorage = state.productsInStorage.filter(e => e.id != data);
		},
		newProduct(state, data){
			state.productsInStorage.push(data);
		}
	},
	actions:{
		getCollection(commit, collection){		// Collect data from DB by collection name
			this.commit('setProductsInStorage', productsJSON.products)
			// let _vue = this
			// axios({
			// 	method: 'get',
			// 	url: 'http://localhost:5000/api/posts',
			// 	params: {
			// 		collection: collection
			// 	}
			// })
			// .then((res) => {
			// 	_vue.commit('setProductsInStorage', res.data)
			// })
			// .catch((err) => {
			// 	console.log(err)
			// })			

		},
		addToCollection({state}, payload){					// Add data to DB by ID and collection
			if(!state.onlineStatus){
				console.log("Check Internet Connection")

			}else{
				this.commit('newProduct', payload.obj)
				// let _vue = this;
				// axios({
				// 	method: 'post',
				// 	url: 'http://localhost:5000/api/posts',
				// 	params: {
				// 		action: 'add',
				// 		collection: payload.collection,
				// 		val: payload.obj
				// 	}
				// })
				// .then((res) => {
				// 	console.log(res.data)
				// 	payload.obj['id'] = res.data.insertedId;
				// 	_vue.commit('newProduct', payload.obj)
				// })
				// .catch((err) => {
				// 	console.log(err)
				// })
			}
		},
		deleteFromCollection({state, commit}, payload){					// Delete data from DB by ID and collection
			if(!state.onlineStatus){
				console.log("Check Internet Connection")

			}else{
				this.commit('deleteProduct', payload.id)
				// let _vue = this;
				// axios({
				// 	method: 'delete',
				// 	url: 'http://localhost:5000/api/posts',
				// 	params: {
				// 		collection: payload.collection,
				// 		id: payload.id
				// 	}
				// })
				// .then((res) => {
				// 	_vue.commit('deleteProduct', payload.id)
				// })
				// .catch((err) => {
				// 	console.log(err)
				// })
			}
		},
		modifyFromCollection({state}, payload){				// Modify DB by ID and collection
			if(!state.onlineStatus){
				localStorage.setItem( payload.obj.id, JSON.stringify(payload.obj) )

			}else{
				// axios({
				// 	method: 'post',
				// 	url: 'http://localhost:5000/api/posts',
				// 	params: {
				// 		action: 'modify',
				// 		collection: payload.collection,
				// 		val: payload.obj
				// 	}
				// })
				// .then((res) => {
				// 	console.log(res.data)
				// })
				// .catch((err) => {
				// 	console.log(err)
				// })
			}
			
		},
		checkCorrectObject(payload){					// Chech if undefined values in object
			let t1 = Object.values(payload);
			let t2 = t1.findIndex((e) => {return e == undefined})
			return t2 < 0;
		},
		checkOfflineChanges({dispatch}, payload){		// If items in localStorage, set the changes in DB and clear them by ID
			let changes = [];

			if( Object.values(localStorage).length > 0 ){
				changes = Object.values(localStorage).map((e)=>{
					return JSON.parse(e);
				})

				changes.forEach((e)=>{
					let obj = {
						collection: payload,
						obj: e
					}
					dispatch("modifyFromCollection", obj)
					.then(()=>{
						localStorage.removeItem(e.id)
					})
				})
				
			}

		}
	}
});

export default store;