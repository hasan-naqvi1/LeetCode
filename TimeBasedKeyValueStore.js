class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    const value = this.keyStore.get(key) || [];
    let left = 0;
    let right = value.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (value[mid][0] <= timestamp) {
        result = value[mid][1];
        left = mid + 1;
      } else right = mid - 1;
    }
    return result;
  }
}
