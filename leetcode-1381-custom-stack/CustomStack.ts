class CustomStack {
  stack: number[] = []
  constructor(private readonly maxSize: number) { }

  push(x: number): void {
    if (this.stack.length < this.maxSize) this.stack.push(x)
  }

  pop(): number {
    return this.stack.pop() ?? -1
  }

  increment(k: number, val: number): void {
    const maxReps = Math.min(this.stack.length, k)
    for (let i = 0; i < maxReps; i++) {
      this.stack[i] += val
    }
  }
}

const obj = new CustomStack(3)
obj.push(2)
const param_2 = obj.pop()
obj.increment(3, 1000)
console.log('obj', obj)