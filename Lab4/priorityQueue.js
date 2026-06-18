export class PriorityQueue {
    constructor() {
        this.items = [];
        this.counter = 0;
    }

enqueue(item, priority) {
    this.items.push({ item, priority, seq: this.counter });
    this.counter++;
}

findIndex(mode) {
    if (this.items.length === 0) return -1;

    if (mode === "oldest") return 0;
    if (mode === "newest") return this.items.length -1;

    let bestIndex = 0 
    for (let i = 1; i < this.items.length; i++) {
        const current = this.items[i].priority;
        const best = this.items[bestIndex].priority;

        if (mode === "highest" && current > best) bestIndex = i;
        if (mode === "lowest" && current < best) bestIndex = i;
    }
    return bestIndex;
}

peek(mode = "highest") {
    const index = this.findIndex(mode);
    if (index === -1) return undefined;
    return this.items[index].item;
}

dequeue(mode = "highest") {
    const index = this.findIndex(mode);
    if (index === -1) return undefined;

    const removed = this.items[index];

    if (index === 0) {
        this.items.shift();
    } else if (index === this.items.length -1) {
        this.items.pop();
    } else {
        this.items.splice(index, 1);
    }

    return removed.item;
   }
}