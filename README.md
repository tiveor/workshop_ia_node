# Getting Started

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install openai
   ```

2. Set your OpenAI API key as an environment variable:
   ```bash
   export OPENAI_API_KEY=your_api_key_here
   ```

3. Create a file that imports and uses these functions:
   ```javascript
   const { askGPT } = require('./index.js');
   askGPT("Your prompt here").then(response => console.log(response));
   ```

4. Run your file:
   ```bash
   node run.js
   ```