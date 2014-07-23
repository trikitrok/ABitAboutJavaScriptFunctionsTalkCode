function(x) {
  return function(x, y) {
    return function(w, z) {
      return function(w) {
        return x + y + z + w;
      }
    }
  }
}(1000)(2, 3)(4000000000, 5)(6);