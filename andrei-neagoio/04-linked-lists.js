class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class DoublyNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedLists {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
    //  O(1)
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
    //  O(1)
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return console.log(array)
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    //  O(n)
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }
}

// const myLinkedList = new LinkedLists(10)
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
// myLinkedList.printList()
// myLinkedList.remove(2)

class DoublyLinkedLists {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
    //  O(1)
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
    //  O(1)
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return console.log(array)
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    //  O(n)
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }
}

const myLinkedList = new DoublyLinkedLists(10)
