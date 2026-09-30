# workspace-panel（DSH 教学面板插件）

ai-teacher-helper 的可选宿主增强：在 DSH 侧栏增加一个「教学面板」，只读展示当前会话工作区里 teacher-init 的初始化产物。

**核心平台（`rules/`、`skills/`）不依赖本插件** —— 没有面板，技能照常工作；这只是纯增强层，绑定 DSH 宿主。

## 功能（v0.1.0）

面板跟随当前会话的工作区，展示六个区块：

| 区块 | 数据来源 |
| --- | --- |
| 初始化状态 | `AGENTS.md` 是否存在、标记块是否完整（缺失/重复/未闭合会提示） |
| 教师档案 | `<!-- teacher-init:profile:begin -->` 标记块的字段 |
| 待定项 | 各标记块中含「待定」的字段与行，汇总计数 |
| 教学目录 | 两位数编号目录（00–99）+ `.agents`，展开两层 |
| 规则索引 | `.agents/rules/README.md` 原文渲染 |
| 文件预览 | 点目录树里的文件名进入，`.md` 渲染显示，`← 返回` 退出 |

只读承诺：面板只调用 list/read，不写、不改、不删任何工作区文件。

## 安装

在 DSH 会话里执行（目标用绝对路径）：

```text
plugin_manager install_bundle E:\github\ai-teacher-helper\integrations\dsh\workspace-panel
```

然后在插件页启用 workspace-panel，刷新窗口。打开一个会话，侧栏出现「教学面板」图标。

> install_bundle 以链接方式接入（pnpm link:），换机器或换 profile 需要重新执行一次。

## 更新

改完代码后：插件页把 workspace-panel **停用 → 再启用** → 刷新窗口。

## 两个已知坑

1. **崩溃恢复会重置插件列表**：宿主崩溃恢复后，配置里的 bundle 列表可能回到 base+web-app，需要回插件页重新启用 workspace-panel。
2. **面板跟随当前会话**：读的是当前会话的工作区（会话 cwd）；切换会话后如未自动刷新，点「↻ 刷新」。

## 兼容性

- 需要 DSH 宿主提供 `workspaceFiles` 服务；宿主过旧时面板显示升级提示，不影响应用其他功能。
- 工作区未初始化（没有 `AGENTS.md`）时显示引导文案，提示在会话里运行 teacher-init。
- 插件初始化采取"绝不拖垮应用"策略：任何注册失败只打日志，跳过面板。

## 开发自检

```text
node .dsh-debug/test-workspace-panel.mjs
```

vm 加载 bundle、桩掉 React，以 `E:\测试老师项目demo` 为真实数据端到端跑渲染断言（23 项：解析器、目录深度、路径契约、待定项识别）。
