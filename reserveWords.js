function reverseWords(str) {
  return str.split(" ").map((w) => {
    const wordToList = w.split("");
    w = wordToList.reverse().join("");
    return w;
  }).join(' ');
}
reverseWords("The quick");
