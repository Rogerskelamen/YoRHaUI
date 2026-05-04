# 开发日志

这个项目涉及的技术:

1. 框架：Vue3
2. 语言：Typescript
3. 打包：Vite + Rollup
4. 文档：VitePress

这是一个可能逐渐复杂到可怕的项目，需要一定的工具去约束：

1. husky：提交的约束
2. prettie：代码风格
3. eslint：规范检测

## husky

利用lint-stage可自动在提交前进行eslint --fix
利用commitlint可在提交前检测commit信息是否符合规范
