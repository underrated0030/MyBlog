import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Blog',
  description: '个人博客',
  lang: 'zh-CN',
  base: '/MyBlog/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#f5f5f7' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
  ],

  themeConfig: {
    nav: [
      { text: '文章', link: '/posts/hello-world' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '全部文章',
          items: [
            { text: 'Hello World', link: '/posts/hello-world' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Think different.',
      copyright: '© 2026'
    },

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    // 关闭不需要的元素
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },

  markdown: {
    lineNumbers: false,
    image: {
      lazyLoading: true
    }
  }
})
