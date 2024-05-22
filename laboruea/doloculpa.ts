class Counter {
  private static _count: number = 0;

  public static get count(): number {
    return this._count;
  }

  public static increment(): void {
    this._count++;
  }

  public static reset(): void {
    this._count = 0;
  }
}

// Usage
Counter.increment(); // Increments the count
console.log(Counter.count); // Outputs the current count
Counter.reset(); // Resets the count to 0
