/** product: calculate the product of an array of numbers. */

function product(nums) {
  const current = nums.pop()
  if(current === undefined) return 1
  return current * product(nums)
} 

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 1) return words[0].length

  const current = words.pop()
  const next = words.pop()

  current.length > next.length ? words.push(current) : words.push(next)

  return longest(words)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  console.log(str)
  if(str.length === 1) return str
  if(str.length === 2) return str[0]
  return str[0] + everyOther(str.substring(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 1) return true
  if(str.length === 2){
    if(str[0] === str[1]){
      return true
    }
    return false
  }
  let first = str[0]
  let last = str[str.length-1]
  console.log(first, last, str)
  if(first === last) return isPalindrome(str.substring(1, str.length-1))
  return false
} 

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  
  function recursiveFI(arr, val){
    const [current, ...rest] = arr
    if(rest === val || current === val) return 0
    if(rest.length === 1 && val !== rest[0] && val !== current){
      return 2
    }
    
    return 1 + recursiveFI(rest, val);
  }

  const result = recursiveFI(arr, val)
  return result === arr.length ? -1 : result

}
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length ===1) return str
  const last = str[str.length-1]
  return last + revString(str.slice(0, str.length-1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  if(!obj) return
  let result = []

  const keys = Object.keys(obj)
  for(let current of keys){
    switch(typeof obj[current]){
      case 'string':
        result.push(obj[current])
        break
      case 'number':
        continue
      case 'object':
        result.push(gatherStrings(obj[current]))
    }
  }
  return result.flat()
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let lp = 0
  let rp = arr.length-1

  function binSRCH(arr, val){
    if(rp===lp) return -1
    if(rp-lp == 1){
      if(arr[rp] == val){
        return rp
      }
      if(arr[lp] == val){
        return lp
      }
      return -1
    }
    let mid = Math.floor((rp+lp) / 2) 
    if(arr[mid] === val){
      return mid
    }
    if(arr[mid] < val){
      lp = mid
      return binSRCH(arr, val)
    }
    if(arr[mid] > val){
      rp = mid
      return binSRCH(arr, val)
    }
  }

  return binSRCH(arr, val)
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
