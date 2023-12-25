var NodeElem = /** @class */ (function () {
    function NodeElem(value, next) {
        this.value = value;
        if (next) {
            this.next = next;
        }
    }
    return NodeElem;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        this.head = new NodeElem(value, this.head);
        this.length + 1;
        return this;
    };
    LinkedList.prototype.getNode = function (index) {
        if (index >= 0 && index <= this.length) {
            var item = this.head;
            for (var i = 0; i < index; i++) {
                item = item.next;
            }
            return item;
        }
    };
    LinkedList.prototype.get = function (value, index) {
        if (index === 0) {
            this.add(value);
        }
        else {
            var prevItem = this.getNode(--index);
            if (prevItem) {
                var newItem = new NodeElem(value, prevItem.next);
                prevItem.next = newItem;
                this.length++;
            }
        }
        return this;
    };
    LinkedList.prototype.update = function (value, index) {
        var item = this.getNode(index);
        if (item) {
            item.value = value;
        }
        return this;
    };
    LinkedList.prototype.remove = function (index) {
        if (index === 0) {
            this.head = undefined;
            this.length = 0;
        }
        else {
            var prevItem = this.getNode(--index);
            if (prevItem) {
                prevItem.next = prevItem.next ? prevItem.next.next : undefined;
                this.length -= 1;
            }
        }
        return this;
    };
    LinkedList.prototype.clear = function () {
        return this.remove(0);
    };
    LinkedList.prototype.printItems = function (item) {
        if (item) {
            console.log(item.value);
            return this.printItems(item.next);
        }
        return undefined;
    };
    LinkedList.prototype.print = function () {
        this.printItems(this.head);
    };
    return LinkedList;
}());
var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();
list.update(2, 4);
list.print();
