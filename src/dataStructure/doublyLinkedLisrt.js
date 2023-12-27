class Node {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }

  toString() {
    return `${this.value}`
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  prepend(value) {
    const newNode = new Node(value, this.head)

    if (this.head) {
      this.head.previous = newNode
    }

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value) {
    const newNode = new Node(value)

    if (this.tail) {
      this.tail.next = newNode
    }

    newNode.previous = this.tail
    this.tail = newNode

    if (!this.head) {
      this.head = newNode
    }

    return this
  }

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

          if (currentNode?.next) {
            currentNode.next.previous = currentNode
          }
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = this.tail.previous
      if (this.tail?.previous?.previous) {
        this.tail.previous = this.tail.previous.previous
      } else {
        this.tail?.previous = null
      }
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null
    }

    let deletedNode = this.tail

    if (this.tail.prepend) {
      this.tail = this.tail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }

    return deletedNode
  }

  deleteHead() {
    if (!this.head) {
      return null
    }

    let deletedNode = this.head

    if (this.head.next) {
      this.head = this.head.next
      this.head.prepend = null
    } else {
      this.head = null
      this.tail = null
    }

    return deletedNode
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  fromArray(values) {
    values.forEach(value => this.append(value))

    return this
  }

  toArray() {
    const nodes = []

    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }
  
  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString()
  }

  reverse() {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      nextNode = currNode.next
      prevNode = currNode.previous

      currNode.next = prevNode
      currNode.previous = nextNode

      prevNode = currNode
      currNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}
