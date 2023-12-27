class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString() {
    return `${this.value}`
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // O(1)
  append(value) {
    const newNode = new Node(value)

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value, this.head)

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  // O(n)
  insertAfter(value, prevNode) {
    if (prevNode === null) {
      return this
    }

    const newNode = new Node(value)

    newNode.next = prevNode.next
    prevNode.next = newNode

    if (newNode.next === null) {
      this.tail = newNode
    }

    return this
  }

  // O(n)
  toArray() {
    const nodes = []

    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }

    return nodes
  }

  // O(n)
  toString() {
    return this.toArray()
      .map(node => node.toString())
      .toString()
  }

  // O(n)
  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }

  // O(n)
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head?.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next

          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }
}
