# Hello World

> 第一篇文章，记录博客搭建过程。  
> 发布于 2026-06-24

---

## 为什么选择 VitePress？

[VitePress](https://vitepress.dev/) 是 Vue 团队推出的静态站点生成器，具有以下优点：

- ⚡ **极快的开发体验**：基于 Vite，热更新几乎是瞬间完成
- 📝 **Markdown 优先**：所有内容用 Markdown 编写，简洁高效
- 🎨 **默认主题美观**：开箱即用的文档风格，无需过多配置
- 🔍 **内置搜索**：本地全文搜索，无需第三方服务
- 🚀 **构建速度快**：生产环境构建基于 Rollup，性能优秀

## 部署流程

本博客通过 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 GitHub 仓库
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages

每次推送代码都会自动触发部署，无需手动操作。

## 开始写作

```bash
# 本地开发
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

---

*感谢你的阅读！*
