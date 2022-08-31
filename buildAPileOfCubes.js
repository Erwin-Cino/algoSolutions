
function findNb(m) {
    var sum = 0
    var n = 1
    while (sum <= m) {
      sum += n * n * n
      if (sum == m) return n
      n++
    }
    return -1
}
