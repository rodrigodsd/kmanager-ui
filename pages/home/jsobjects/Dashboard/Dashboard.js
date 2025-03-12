export default {
	distribution: [],
	async init () {

		this.distribution = portfolio.data.map( position => ({"x": position.code,      "y":position.quantity }))

		console.log(this.distribution)

		return this.distribution
	}
}