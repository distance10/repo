# ZorixPDF 官网（Support / Privacy / Terms）

结构与你上一个 App 的站点保持一致：纯静态 HTML + 一个 `common.css` + 一个 `common.js`，无需构建、无依赖，直接放到 GitHub Pages 即可。

## 文件

| 文件 | 作用 | App Store Connect 对应字段 |
|---|---|---|
| `index.html` | 技术支持页：欢迎语、联系邮箱、10 条常见问题 | **Support URL** |
| `privacy.html` | 隐私政策（全文） | **Privacy Policy URL**（必填） |
| `terms.html` | 用户协议（含 Apple 标准条款） | 可选，一般放页脚链接 |
| `common.css` | 全站样式（暗色主题，配色已换成本 App 的品牌蓝） | — |
| `common.js` | 语言切换：`en` / `zh` / `es` / `hi` / `fr`，记住上次选择，首次按浏览器语言自动判断 | — |

## 本地预览

```bash
cd website
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

> 建议用 http 方式预览而不是双击打开文件：`file://` 协议下部分浏览器会禁用 `localStorage`，语言记忆功能会失效（最坏情况只是每次回到浏览器语言，不影响页面显示）。

## 发布到 GitHub Pages

和你上一款 App 的站点同样做法：把 `website/` 整个目录放进你的 Pages 仓库（例如 `repo/website/`），然后：

- 支持页：`https://<你的用户名>.github.io/repo/website/index.html`
- 隐私政策：`https://<你的用户名>.github.io/repo/website/privacy.html`
- 用户协议：`https://<你的用户名>.github.io/repo/website/terms.html`

把前两个填进 App Store Connect；隐私政策 URL 是**必填项**，否则无法提交审核。

## 需要你确认/修改的地方

1. **联系邮箱**：目前用的是你上一款 App 的 `distaner@icloud.com`（`index.html`、`privacy.html`、`terms.html` 中各 5 处，搜索替换即可）。如果 ZorixPDF 想用单独的支持邮箱，全局替换这个地址。
2. **版权年份/主体**：页脚为 `© 2026 ZorixPDF`，如需个人或公司主体署名请自行调整。
3. **生效日期**：隐私政策与用户协议里写的是 2026 年 9 月 17 日，按实际发布日修改。
4. **多语言**：内容用 5 种语言（与 App 的界面语言一致）。若要加语言，复制任意一个 `<div data-lang="xx">` 块改写文案，并在 `common.js` 的 `LANGS` 数组与各页 `lang-switch` 里补上按钮即可。

## 文案要点（与 App 实际行为一致）

隐私政策的核心是「什么都不收集」，且这几条都能在源码层面被验证，不用担心审核质疑：

- App 内无任何网络请求代码（无 `URLSession`、无第三方网络库），因此政策里明确写了 "contains no networking code"。
- 文件存放在 App 私有沙盒，批注写回 PDF 文件本身；App 不申请任何权限（文件通过系统文档选择器由用户主动选取）。
- OCR 使用 Apple Vision 在设备本地完成，图片与文档不上传。
- 无账号、无统计、无广告、无第三方 SDK，不使用 iCloud 同步（设备备份属系统行为，已在政策中说明）。
