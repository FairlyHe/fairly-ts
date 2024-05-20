import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "TypeScript 学习教程",
  description: "记录学习TypeScript的过程，并整理成文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]

  ],
  themeConfig: {
    // 主题级选项
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '前言', link: '/introduction/preface' },
          { text: '什么是 TypeScript', link: '/introduction/what-is-typescript' },
          { text: '安装 TypeScript', link: '/introduction/install-typeScript' },
          { text: 'Hello TypeScript', link: '/introduction/hello-typescript' }
        ]
      },
      {
        text: '手册',
        items: [
          { text: '原始数据类型', link: '/basics/primitive-data-types' },
          { text: '任意值', link: '/basics/any' },
          { text: '类型推论', link: '/basics/type-inference' },
          { text: '联合类型', link: '/basics/union-types' },
          { text: '对象的类型——接口', link: '/basics/type-of-object-interfaces' },
          { text: '数组的类型', link: '/basics/type-of-array' },
          { text: '函数的类型', link: '/basics/type-of-function' },
          { text: '类型断言', link: '/basics/type-assertion' },
          { text: '声明文件', link: '/basics/declaration-files' },
          { text: '内置对象', link: '/basics/built-in-objects' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '类型别名', link: '/advanced/type-aliases' },
          { text: '字符串字面量类型', link: '/advanced/string-literal-types' },
          { text: '元组', link: '/advanced/tuple' },
          { text: '枚举', link: '/advanced/enum' },
          { text: '类', link: '/advanced/class' },
          { text: '类与接口', link: '/advanced/class-and-interfaces' },
          { text: '泛型', link: '/advanced/generics' },
          { text: '声明合并', link: '/advanced/declaration-merging' },
          { text: '扩展阅读', link: '/advanced/further-reading' }
        ]
      },
      {
        text: '工程',
        items: [
          { text: '代码检查', link: '/engineering/lint' },
          { text: '编译选项', link: '/engineering/compiler-options' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FairlyHe/fairly-ts' }
    ]
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    lineNumbers: true, // 行号
    image: {
      lazyLoading: true, // 默认禁用图片懒加载
    }
  }
})
