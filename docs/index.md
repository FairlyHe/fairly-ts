---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TypeScript 学习教程"
  text: "记录学习TypeScript的过程"
  image: /1000.webp
#  tagline: My great project tagline
  actions:
    - theme: brand
      text: 开始阅读
      link: /introduction/preface

features:
  - title: 始于JavaScript，归于JavaScript
    details: "TypeScript 向 JavaScript 添加了额外的语法，以支持与编辑器更紧密的集成。在编辑器中尽早发现错误。"
  - title: 您可以信赖的结果
    details: "TypeScript 代码转换为 JavaScript，它可以在 JavaScript 运行的任何地方运行：在浏览器中、Node.js 或 Deno 上以及您的应用程序中。"
  - title: 大规模安全
    details: "TypeScript 理解 JavaScript 并使用类型推断为您提供出色的工具，而无需额外的代码。"
---

## 安装
```bash
npm install -g typescript
```

## 编译文件
```bash
tsc index.ts
```

