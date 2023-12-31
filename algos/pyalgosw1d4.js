/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */
{
  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  
      function isPalindrome(str) {
          for(var i = 0,j = str.length-1;i<j;i++,j--){
              if(str[i] !== str[j]){
                  return false
                }
            }
            return true
            
        }
        console.log(isPalindrome(str1), "should be", expected1);  
        console.log(isPalindrome(str2), "should be", expected2);
        console.log(isPalindrome(str3), "should be", expected3);
        console.log(isPalindrome(str4), "should be", expected4);
    }

/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/


const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    var longest = ""
    for(var i =0; i<str.length;i++){
        var j 
        var k
        for (j = i ,k = i ;j >= 0 && k < str.length;){
            if(str[j--] !== str[k]){
                break
            }
            if(str[j] !== str[k++]){
                break
            }
        }
        var substring = str.slice(j+1,k)
        if(substring.length > longest.length){
            longest = substring
        }
    }
    return longest

}

console.log(longestPalindromicSubstring(str1), "should be", expected1);  
console.log(longestPalindromicSubstring(str2), "should be", expected2);  
console.log(longestPalindromicSubstring(str3), "should be", expected3);  
console.log(longestPalindromicSubstring(str4), "should be", expected4);  
console.log(longestPalindromicSubstring(str5), "should be", expected5);



/*****************************************************************************/



  /*****************************************************************************/