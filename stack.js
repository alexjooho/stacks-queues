/** Node: node for a stack. */

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
    else {
    newNode.next = this.head;
    this.head = newNode;
    }
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

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;
  _ll = new LinkedList();

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    this._ll.unshift(val);
    this.top = this._ll.head;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const popped = this._ll.shift();
    
    this.top = this._ll.head;
    this.size--;
    return popped;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
