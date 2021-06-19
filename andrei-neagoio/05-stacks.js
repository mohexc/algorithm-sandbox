const print = console.log

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.bottom = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    }
    const holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer
    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    const holdingPointer = this.top
    this.top = this.top.next
    this.length--
    return holdingPointer
  }
}

const myStack = new Stack()
myStack.push('google')
print(myStack)
myStack.push('udemy')
print(myStack)
myStack.push('discord')
print(myStack)
myStack.peek()
print(myStack)
myStack.pop()
print(myStack)
myStack.pop()
print(myStack)