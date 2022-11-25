// my solution

function repetition(txt, n) {
  return n < 1 ? '' : txt + repetition(txt, n - 1)
}

// same solution, but slightly shorter

function repetition(txt, n) {
  return n ? txt + repetition(txt, n - 1) : ''
}
