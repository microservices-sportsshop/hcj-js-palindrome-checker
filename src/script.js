document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const result = document.querySelector(".result");

    const isPalindrome = (str) => {
        const len = str.length;
        const start = str.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = str.substring(len - Math.floor(len / 2)).toLowerCase();
        const reverseEnd = [...end].reverse().join("");
        return start === reverseEnd;
    };

    const checkPalindrome = () => {
        const word = document.querySelector(".input-text").value;

        if (word.trim() === "") {
            result.innerHTML = "Please enter a word.";
            return;
        }

        const message = `${word.toUpperCase()} is ${isPalindrome(word) ? '' : 'NOT '}a palindrome`;
        result.innerHTML = message;

    };

    btn.addEventListener("click", checkPalindrome);
});
