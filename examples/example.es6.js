import EventDispatcher from '../src/EventDispatcher.es6.js'

class Car extends EventDispatcher {
	start() {
		this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
	}
}

var car = new Car();

car.addEventListener('start', function (event) {
	console.log(event.message);
});
car.start();
