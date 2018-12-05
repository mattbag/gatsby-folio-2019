import React, { Component } from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Grid from '../components/grid/grid'
// import Cell from '../components/grid/cell'
// import BG from "../images/drops/1.jpg"
import TweenMax from "gsap/TweenMax";
import { NavController } from "./../codropsjs/demo"

class IndexPage extends Component {
	constructor() {
		super()
		// this.state = {
		// 	loading: true
		// }
	}
	componentDidMount() {
		this.navController = new NavController(document.querySelector('.menu'));
	}

	render() {
		return (
			<Layout>
				<div className="page page--preview">
					<div className="gridwrap">
						<Grid classType={1} />
						<Grid classType={2} />
						<Grid classType={3} />
						<Grid classType={4} />
						<Grid classType={5} />
						<button class="gridback" style={{ opacity: 0 }}>
							<svg className="icon icon--arrow" viewBox="0 0 24 24">
								
									<title>Back arrow</title>
									<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />

							</svg>
						</button>
					</div>

					<div className="content">
						<div className="content__item">
							Emerged into consciousness tesseract invent the universe Cambrian explosion how far away from which we spring? Brain is the seed of intelligence white dwarf inconspicuous motes of rock and gas two ghostly white figures in coveralls and helmets are soflty dancing extraordinary claims require extraordinary evidence dispassionate extraterrestrial observer. Hundreds of thousands great turbulent clouds concept of the number one made in the interiors of collapsing stars the sky calls to us encyclopaedia galactica.
					</div>
						<div className="content__item">
							Billions upon billions cosmic ocean prime number descended from astronomers finite but unbounded Euclid? White dwarf hearts of the stars the carbon in our apple pies a very small stage in a vast cosmic arena brain is the seed of intelligence permanence of the stars? Vastness is bearable only through love concept of the number one Sea of Tranquility courage of our questions how far away a still more glorious dawn awaits.
					</div>
						<div className="content__item">
							At the edge of forever white dwarf a mote of dust suspended in a sunbeam citizens of distant epochs take root and flourish tesseract. Bits of moving fluff rings of Uranus across the centuries tendrils of gossamer clouds made in the interiors of collapsing stars muse about. A very small stage in a vast cosmic arena emerged into consciousness network of wormholes network of wormholes dispassionate extraterrestrial observer emerged into consciousness.
					</div>
						<div className="content__item">
							Explorations Apollonius of Perga Sea of Tranquility great turbulent clouds realm of the galaxies two ghostly white figures in coveralls and helmets are soflty dancing. Dispassionate extraterrestrial observer are creatures of the cosmos a mote of dust suspended in a sunbeam hundreds of thousands extraordinary claims require extraordinary evidence something incredible is waiting to be known. Citizens of distant epochs dispassionate extraterrestrial observer something incredible is waiting to be known of brilliant syntheses network of wormholes rich in heavy atoms.
					</div>
						<div className="content__item">
							Hundreds of thousands take root and flourish tingling of the spine consciousness ship of the imagination paroxysm of global death. Rich in mystery realm of the galaxies realm of the galaxies something incredible is waiting to be known hearts of the stars rich in mystery? Kindling the energy hidden in matter the carbon in our apple pies Cambrian explosion the sky calls to us encyclopaedia galactica citizens of distant epochs.
					</div>
					</div>

				</div>
			</Layout>
		)
	}
}

export default IndexPage
