
const { createApp } = Vue





createApp({
	data() {
		return {
			images: [
				'./IMG/1065466.png',
				'./IMG/1124739.jpg',
				'./IMG/885371.jpg',
				'./IMG/885991.jpg',
				'./IMG/ellie-the-last-of-us-part-2-uhdpaper.com-hd-5.2478.jpg',
				'./IMG/the_last_of_us_ps3_game-wide.jpg',
			],
			currentIndex: 0,
			

		}
	},


	methods: {
		

		nextSlide() {
			const lastIndex = this.images.length - 1
			if (this.currentIndex < lastIndex) {
				this.currentIndex++
			}else{
				this.currentIndex = 0
			}
			// console.log
		},

		prevSlide(){
			const lastIndex = this.images.length - 1
			if (this.currentIndex > 0) {
				this.currentIndex--
			}else{
				this.currentIndex = lastIndex
			}
			
		}





	}

}).mount('#app')



























// let images = [
// 	'./IMG/1065466.png',
// 	'./IMG/1124739.jpg',
// 	'./IMG/885371.jpg',
// 	'./IMG/885991.jpg',
// 	'./IMG/ellie-the-last-of-us-part-2-uhdpaper.com-hd-5.2478.jpg',
// 	'./IMG/the_last_of_us_ps3_game-wide.jpg',
// ]


// slides: [
// 	{
// 		image: './IMG/1065466.png',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	}, {
// 		image: './IMG/1124739.jpg',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	}, {
// 		image: './IMG/885371.jpg',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	}, {
// 		image: './IMG/885991.jpg',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	}, {
// 		image: './IMG/ellie-the-last-of-us-part-2-uhdpaper.com-hd-5.2478.jpg',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	}, {
// 		image: './IMG/the_last_of_us_ps3_game-wide.jpg',
// 		titolo: 'The Last Of Us',
// 		descrizione: 'Zombie ovunque. Briganti pronti ad ucciderti ad ogni angolo. Poco cibo. Poche munizioni. Una storia di speranza e di vendetta. Che dire!! La vacanza che ognuno vorrebbe :D'
// 	},
// ]
