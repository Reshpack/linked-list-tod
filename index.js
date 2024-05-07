// Create Node Class
class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create list Class
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Append
   append(value) {
    const newNode = new listNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Prepend
   prepend(value) {
    const newNode = new listNode(value)
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++
  }

  // Gets size of list
  getSize() {
    return this.size;
  }

  // head - Returns first node of list 
  head() {
    return this.head;
  }

  // tail - Returns last node of list
  tail() {
    return this.tail;
  }

  // Return the node at the given (index)
  at(index) {
    if (index , 0 || index >= this.size) {
      throw new Error("Index is no bueno");
    }
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++
    }
    return current
  }

  // Pop - Removes last element from list
  pop() {
    if (this.size === 0) {
      throw new Error("List is empty");
    }

    if (this.size === 1) {
      const lastNode = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return lastNode;
    }

    // Find the second-to-last node
    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    //removes last node
    previous.next = null;
    this.tail = previous;
    this.size--; 

    return current;
  }

  // Contains - return boolean if passed in value is in the list
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.data = value) {
        return true;
      }
      current = current.next
    }
    return false;
  }

  // find - Returns the index of the node containing value, or null if not found
  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === value){
        return index;
      } 
      current = current.next;
      index++;
    }
    return null;
  }

  // toString - represents objects into strings and prints into console 
  // ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `( ${current.data}) -> `;
      current = current.next
    }
    return result + "null";
  }

  // insert a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new ListNode(value);
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    // Insert the new node
    newNode.next = current;
    previous.next = newNode;

    this.size++;
  }

  // removeAt - removes the node at the given (index)
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next; 
      if (this.size === 1) {
        this.tail = null; 
      }
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next; 

    if (index === this.size - 1) {
      this.tail = previous;
    }

    this.size--; 
  }
}

// Test
const list = new linkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.toString()); // Output: ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.prepend(5);

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

console.log(list.getSize()); // Output: 4

console.log(list.getHead().data); // Output: 5

console.log(list.getTail().data); // Output: 30

console.log(list.at(2).data); // Output: 20

list.pop(); // Removes the last node

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list.contains(20)); // Output: true

console.log(list.find(10)); // Output: 1

list.insertAt(15, 2); // Inserts at index 2

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

list.removeAt(1); // Removes at index 1

console.log(list.toString()); // Output: ( 5 ) -> ( 15 ) -> ( 20 ) -> null