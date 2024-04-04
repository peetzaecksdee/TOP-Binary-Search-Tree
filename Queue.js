export default class Queue {
	constructor() {
		this.queue = [];
		this.head = 0;
		this.tail = 0;
	}

	enqueue(val) {
		this.queue[this.tail] = val;
		this.tail++;
	}

	dequeue() {
		const val = this.queue[this.head];
		delete this.queue[this.head];
		this.head++;
		return val;
	}

	isEmpty() {
		return this.tail - this.head === 0;
	}
}
