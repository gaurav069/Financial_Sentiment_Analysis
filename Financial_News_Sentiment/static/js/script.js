document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const newsUrlInput = document.getElementById('newsUrl');
    const resultDiv = document.getElementById('result');

    analyzeBtn.addEventListener('click', function() {
        const url = newsUrlInput.value.trim();
        
        // Clear previous results
        resultDiv.className = '';
        resultDiv.classList.remove('visible');
        
        if (!url) {
            showResult('Please enter a valid URL', 'error');
            return;
        }
        
        // Show loading state
        showResult('Analyzing...', 'loading');
        
        // Simulate API call with timeout
        setTimeout(() => {
            analyzeSentiment(url);
        }, 1500);
    });

    function analyzeSentiment(url) {
        // In a real application, this would be an API call
        // For demo purposes, we'll randomize the result
        const isPositive = Math.random() > 0.5;
        const sentiment = isPositive ? 'positive' : 'negative';
        const message = isPositive ? 'Positive Sentiment 🚀' : 'Negative Sentiment ⚠️';
        
        showResult(message, sentiment);
    }

    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = type;
        resultDiv.classList.add('visible');
        
        // Special handling for error state
        if (type === 'error') {
            resultDiv.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
            resultDiv.style.color = '#c0392b';
        } else if (type === 'loading') {
            resultDiv.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            resultDiv.style.color = '#2980b9';
        }
    }

    // Optional: Add input validation for URLs
    newsUrlInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = '#e0e0e0';
        }
    });
});