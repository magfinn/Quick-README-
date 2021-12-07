//Function to generate markdown for README
function generateMarkdown({username, email, title, descriptionWhat, descriptionWhy, link, usage, requirements, contribute, credits, attribution, license, fullName, tests}) {
  return `
<h1 align="center">✨${title}✨</h1>

<p>
<a href="https://opensource.org/licenses/${license}">
<img alt = "License ${license}" src="https://img.shields.io/badge/license-${license}-success.svg" target="_blank" /></a>
</p>

## 📜 Description
>${descriptionWhat}

${descriptionWhy}

🔗 <a href = '${link}'>Link<a/>

## ✅ Installing / Getting Started

> ### 🧰 Requirements

>

>${requirements}

## 🚀 Usage
>
>${usage}

## 🙌 Credits

>

>${credits}

>

>>${attribution}

## 🚥 Tests

${tests}

## 🤝 Contributing

${contribute}



## ❓ Questions?

>Have questions or need more information? Contact me by <a href='mailto:${email}'>e-mail</a>.

**${fullName}**

- Github: [@${username}](https://github.com/${username})

## 📝 License

This project is [${license}](https://opensource.org/licenses/${license}) licensed.

---

_This README was generated with ❤️ by [Quick, Read Me!](https://github.com/magfinn/Quick-README-)
`;
}

module.exports = generateMarkdown;
