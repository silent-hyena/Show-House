// Trie Node
class Node {
  constructor() {
    this.children = new Map();
    this.eow = false;
  }
}

// Trie Tree
class Tree {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new Node());
      }
      curr = curr.children.get(ch);
    }
    curr.eow = true;
  }

  find(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!curr.children.has(ch)) return false;
      curr = curr.children.get(ch);
    }
    return curr.eow;
  }

  giveTree(node, res, tmp) {
    if (node.eow) res.push(tmp);

    for (let [ch, child] of node.children) {
      this.giveTree(child, res, tmp + ch);
    }
  }

  getPrefix(prefix) {
    let res = [];
    let curr = this.root;

    for (let ch of prefix) {
      if (!curr.children.has(ch)) return [];
      curr = curr.children.get(ch);
    }

    this.giveTree(curr, res, "");

    // attach prefix back
    return res.map((word) => prefix + word);
  }
}

// Split string into unique tokens
function splitString(sentence, delimiter) {
  return new Set(sentence.split(delimiter));
}

// Edit Distance
function editDis(s1, p1, s2, p2, dp) {
  if (p1 >= s1.length) return s2.length - p2;
  if (p2 >= s2.length) return s1.length - p1;
  if (dp[p1][p2] != -1) return dp[p1][p2];
  if (s1[p1] === s2[p2]) {
    return (dp[p1][p2] = editDis(s1, p1 + 1, s2, p2 + 1, dp));
  }

  let insertc = editDis(s1, p1, s2, p2 + 1, dp);
  let deletec = editDis(s1, p1 + 1, s2, p2, dp);
  let updatec = editDis(s1, p1 + 1, s2, p2 + 1, dp);

  return (dp[p1][p2] = 1 + Math.min(insertc, deletec, updatec));
}

function WordFilter(wordToMatch, wordsList) {
  const op = [];

  for (const w of wordsList) {
    const dp = Array.from({ length: wordToMatch.length + 1 }, () =>
      Array(w.length + 1).fill(-1),
    );
    const dist = editDis(wordToMatch, 0, w, 0, dp);
    if (dist <= 2) {
      op.push(w);
    }
  }

  return op;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(arr) {
    // arr = [score, value]
    this.heap.push(arr);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[this.parent(index)][0] < this.heap[index][0]
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  //   get top element
  top() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return max;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let largest = index;
      let left = this.left(index);
      let right = this.right(index);

      if (left < length && this.heap[left][0] > this.heap[largest][0]) {
        largest = left;
      }

      if (right < length && this.heap[right][0] > this.heap[largest][0]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

// const fs = require("fs");
// import fs from "fs";

// const data = fs.readFileSync("MovieIDS2.json", "utf8");

import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "components", "MovieIDS2.json");
const data = fs.readFileSync(filePath, "utf8");


const movieList = JSON.parse(data);


// class to return word: first search prefix words, then select top 10 words with highest freqency of occurance with maxheap, also 
// filter based on edit distance if word.length >=5, then return all the movie title containg the top frequrt words using invert index search:

class SearchWord {
  constructor() {
    this.ptree = new Tree();

    // this.pheap = new MaxHeap();

    this.tokenToIdx = new Map();
    // splitting each movie word and insert to prefix tree:
    for (let i = 0; i < movieList.length; i++) {
      let tokens = splitString(movieList[i].title, " ");
      for (let token of tokens) {
        token = token.toLowerCase();
        if (!this.tokenToIdx.has(token)) {
          this.tokenToIdx.set(token, []);
        }
        this.tokenToIdx.get(token).push(i);
      }
    }
    for (let token of this.tokenToIdx.keys()) {
      this.ptree.insert(token);
    }
  }

  PredictWord(word) {
    // Prefix search
    word = word.toLowerCase();
    let matchingWords = this.ptree.getPrefix(word);

    
    //   if len(word) <=5 return simple else apply filter:
    if (word.length >= 5) {
      matchingWords = WordFilter(word, matchingWords);
      matchingWords.forEach((w) => console.log(w));
    }
    // only consider top 10 words with mamximum frquencey of index in tokenToIdx map:
    const pheap = new MaxHeap();
    matchingWords.forEach((w) => pheap.insert([this.tokenToIdx.get(w).length, w]));

    let newWordList = [];

    while (pheap.size() > 0 && newWordList.length < 10) {
      const topw = pheap.top();
      newWordList.push(topw[1]);
    }
    matchingWords = newWordList;

    let uniqueSentences = new Set();

    for (let word of matchingWords) {
      let indices = this.tokenToIdx.get(word) || [];
      indices.forEach((idx) => uniqueSentences.add(idx));
    }

    let finalList = []
    uniqueSentences.forEach((moviei)=>finalList.push(movieList[moviei]))
    return finalList;
  }
}

export default SearchWord;

