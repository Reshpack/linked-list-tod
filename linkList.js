class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Adds a new node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        // If the list is empty, the new node becomes the head
        this.head = newNode;
      } else {
        // Traverse the list to find the last node
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
          currentNode = currentNode.nextNode;
        }
        // The last node's nextNode points to the new node
        currentNode.nextNode = newNode;
      }
    }
  
    // Adds a new node to the start of the list
    prepend(value) {
      const newNode = new Node(value);
      // Make the current head the new node's nextNode
      newNode.nextNode = this.head;
      // The new node becomes the head
      this.head = newNode;
    }
  
    // Returns the total number of nodes in the list
    size() {
      let count = 0;
      let currentNode = this.head;
      while (currentNode !== null) {
        count += 1;
        currentNode = currentNode.nextNode;
      }
      return count;
    }
  
    // Returns the first node in the list
    head() {
      return this.head;
    }
  
    // Returns the last node in the list
    tail() {
      let currentNode = this.head;
      if (currentNode === null) {
        return null;
      }
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    // Returns the node at the given index
    at(index) {
      let count = 0;
      let currentNode = this.head;
      while (currentNode !== null && count < index) {
        count += 1;
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    // Removes the last node from the list
    pop() {
      if (this.head === null) {
        return;
      }
      if (this.head.nextNode === null) {
        // If there's only one node in the list, remove it
        this.head = null;
        return;
      }
      let currentNode = this.head;
      // Traverse to the second-to-last node
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      // Set its nextNode to null to remove the last node
      currentNode.nextNode = null;
    }
  
    // Returns true if the list contains the given value
    contains(value) {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    // Returns the index of the node containing the given value, or null if not found
    find(value) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index += 1;
      }
      return null;
    }
  
    // Represents the linked list as a string
    toString() {
      let result = "";
      let currentNode = this.head;
      while (currentNode !== null) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      result += "null";
      return result;
    }
  
    // Extra credit: Insert a node at a specific index
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
  
      const newNode = new Node(value);
      let currentNode = this.head;
      let count = 0;
  
      while (count < index - 1 && currentNode !== null) {
        count += 1;
        currentNode = currentNode.nextNode;
      }
  
      if (currentNode === null) {
        return; // Index out of range
      }
  
      // Insert the new node at the given index
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    }
  
    // Extra credit: Remove the node at a specific index
    removeAt(index) {
      if (index === 0) {
        if (this.head !== null) {
          this.head = this.head.nextNode;
        }
        return;
      }
  
      let currentNode = this.head;
      let count = 0;
  
      while (count < index - 1 && currentNode !== null) {
        count += 1;
        currentNode = currentNode.nextNode;
      }
  
      if (currentNode === null || currentNode.nextNode === null) {
        return; // Index out of range
      }
  
      // Remove the node at the given index
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
  }

  const list = new LinkedList();

// Append values
list.append(1);
list.append(2);
list.append(3);

console.log("List after append:", list.toString()); // Expected: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Prepend a value
list.prepend(0);

console.log("List after prepend:", list.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Get the size of the list
console.log("Size:", list.size()); // Expected: 4

// Get the head and tail
console.log("Head:", list.head().value); // Expected: 0
console.log("Tail:", list.tail().value); // Expected: 3

// Get the node at a specific index
console.log("Node at index 2:", list.at(2).value); // Expected: 2

// Check if the list contains a specific value
console.log("Contains 2?", list.contains(2)); // Expected: true
console.log("Contains 4?", list.contains(4)); // Expected: false

// Find the index of a value
console.log("Find index of 3:", list.find(3)); // Expected: 3

// Pop the last element
list.pop();

console.log("List after pop:", list.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 2 ) -> null

// Insert a value at a specific index
list.insertAt(5, 2);

console.log("List after insertAt:", list.toString()); // Expected: ( 0 ) -> ( 1 ) -> ( 5 ) -> ( 2 ) -> null

// Remove a value at a specific index
list.removeAt(1);

console.log("List after removeAt:", list.toString()); // Expected: ( 0 ) -> ( 5 ) -> ( 2 ) -> null
