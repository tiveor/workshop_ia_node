const { askGPT } = require("./index.js");

async function main() {
  try {
    const prompt = "HELLO CHATGPT";

    console.log(`HUMAN 🙋‍♂️: ${prompt}`);
    
    const answer = await askGPT(prompt);
    const lines = answer.split("\n");

    console.log(`CHATGPT 🤖: `);
    lines.forEach((line) => {
      console.log(line);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
