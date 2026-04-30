document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.code-block');
  
  function highlightCode(code, lang) {
    if (lang.includes('HTML')) {
      return code
        .replace(/&lt;!--[\s\S]*?--&gt;/g, m => `<span class="token comment">${m}</span>`)
        .replace(/(&lt;\/?[a-z1-6]+)/gi, m => `<span class="token tag">${m}</span>`)
        .replace(/([a-z-]+)(?==&quot;|=')/gi, m => `<span class="token attr">${m}</span>`)
        .replace(/(&quot;[\s\S]*?&quot;|'[\s\S]*?')/g, m => `<span class="token string">${m}</span>`);
    }
    return code;
  }

  codeBlocks.forEach(block => {
    const header = block.querySelector('.code-header');
    const label = header.querySelector('.code-label');
    const body = block.querySelector('.code-body pre code');
    
    if (header && label && body) {
      // Apply Syntax Highlighting
      const originalHTML = body.innerHTML;
      const lang = label.innerText.trim();
      body.innerHTML = highlightCode(originalHTML, lang);

      // Wrap label in actions div
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'code-actions';
      
      header.replaceChild(actionsDiv, label);
      actionsDiv.appendChild(label);
      
      // Create copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.title = 'Copy to clipboard';
      copyBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      `;
      
      actionsDiv.appendChild(copyBtn);
      
      // Copy logic
      copyBtn.addEventListener('click', async () => {
        try {
          // Get clean text for clipboard (innertext handles stripping the <span> tags we added for highlighting)
          await navigator.clipboard.writeText(body.innerText || body.textContent);
          
          // Show checkmark
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          `;
          
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            `;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      });
    }
  });
});
