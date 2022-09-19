/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length = this.length + 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) {
      throw new Error("empty list");
    }
    const poppedValue = this.tail;

    //if there is only one
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedValue.val;
    } else {
      let current = this.head;
      while (current !== this.tail) {
        if (current.next === this.tail) {
          this.tail = current;
          current.next = null;
          this.length--;
          return poppedValue.val;
        } else {
          current = current.next;
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("empty list");
    }
    const shiftValue = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftValue.val;
    } else {
      this.head = this.head.next;
      this.length--;
      return shiftValue.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("index does not exist");
    }
    let currIdx = 0;
    let current = this.head;
    while (currIdx <= idx) {
      if (currIdx === idx) {
        return current.val;
      } else {
        current = current.next;
        currIdx++;
      }
    }
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  
  _ll = new LinkedList();

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);
    this.last = this._ll.tail;
    if(this.first === null) {
      this.first = this.last;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const dequeued = this._ll.shift();
    this.first = this._ll.head;
    this.size--;
    return dequeued;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first === null;
  }
}

module.exports = Queue;
