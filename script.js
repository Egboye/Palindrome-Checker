document.getElementById('check-btn').addEventListener('click', () => {
  const input = document.getElementById('text-input').value;
  const resultDiv = document.getElementById('result');

  if (!input.trim()) {
    alert('Please input a value');
    return;
  }

  const originalText = input;
  const cleanedText = input
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '');

  const reversedText = cleanedText.split('').reverse().join('');

  if (cleanedText === reversedText) {
    resultDiv.textContent = `${originalText} is a palindrome.`;
  } else {
    resultDiv.textContent = `${originalText} is not a palindrome.`;
  }
});