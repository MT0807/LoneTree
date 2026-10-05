# LoneTree 网站诊断与内容更新指南

检查日期：2026-10-05。本文区分**已经在预览中完成**与**正式域名仍需处理**的事项。改造基于 [现有公开网站](http://lonetreelab.com/) 和用户仓库的静态页面，不替换原有作品档案、团队资料或 Grove 内容。

## 1. 网站现在能打开吗？

**HTTP 可以打开，HTTPS 目前不正常。** 检查时 `http://lonetreelab.com/` 返回 200，GitHub Pages 正常提供页面；但 `https://lonetreelab.com/` 的服务器证书仅覆盖 GitHub 域名，未包含 `lonetreelab.com`，常规浏览器会提示证书名称不匹配。这不等同于“网站完全打不开”，但会影响安全访问、分享和搜索表现。GitHub Pages API 显示当前 `https_enforced: false`。

站点目前由 GitHub Pages 托管，根域名的 A 记录解析到 GitHub Pages IP，`www` 指向 `mt0807.github.io`。因此需要在 **GitHub 仓库 Settings → Pages** 核实自定义域的 DNS check、证书签发状态与 Enforce HTTPS，而不是在页面 CSS 中“修证书”。GitHub [官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https) 说明证书签发有等待和 DNS 检查环节；如果一直未生成，应先排查多余或冲突的 A/AAAA/ALIAS/CNAME 记录，再考虑按官方步骤重新触发配置。不要在未核对 DNS 提供商和现有记录前盲目删除设置。证书恢复后，应将 `sitemap.xml`、`robots.txt` 中的 `http://` 更新为 `https://` 并补上 HTTPS canonical 和完整分享元数据。

同时发现原首页描述写着另一家“Detroit”及巴黎 AI 制作公司，与 LoneTree 定位不符；首页“近期书籍”卡片实际上指向 Model book，容易误导；原站 `/robots.txt` 与 `/sitemap.xml` 均为 404。上述页面层面的问题已在本次预览中处理。原首页移动菜单的 Instagram/LinkedIn 链接指向平台首页，现已改为实际可达的本站内容与联系入口；品牌确认真实社交账号后可再加入。密码形式的 Grove 仍是前端页面入口，不应把前端密码视为真正的私密内容防护。

## 2. 新旧布局变化

| 区域 | 原有表现 | 本次预览 |
| --- | --- | --- |
| 首页 | 大字标和右侧自动滚动画廊有辨识度，但图片较小且文案容易与作品争夺视觉中心 | 改为展览式选集：第一屏直接展示大幅真实静物作品，少量说明置侧边；以下错列展示时尚与餐饮视觉，普通页面滚动，无自动轮播 |
| 导航 | Model book 与 Grove 清楚，但缺少开放的观点栏目；首页桌面导航贴近底部 | 首页以 Works、Studio、Notes、Contact 四个轻量入口为主，手机使用原生折叠菜单；旧图册与 Grove 保留在页脚及原站页面 |
| 项目 | 类别图像与档案浏览丰富，但缺少可直接阅读、转发的单项目故事 | 新增 Objects in Focus 与 Wearable Worlds 两个独立详情，项目总档案仍可访问；原有档案交互不删 |
| 内容 | `insights.html` 实际是 Model book，并非科普文章 | 独立 `journal.html`，不混淆模特图册；上线一篇新闻解读和一篇长期观察 |
| 移动阅读 | 作品浏览以视觉为主，长文模板缺位 | 新文章使用窄正文、重点卡片、来源和可复制公众号编辑底稿 |

用户进一步明确希望官网「像艺术作品网站一样，强化作品本身，很克制、简约」。据其本人 Pinterest 收藏中可见的印刷编排与静物/时尚摄影偏好，首页采用**艺术作品目录**而非营销首屏：树标识、纸白、细小编号作为展墙，色彩交由原有作品图像承担；AI 科普保留为二级入口。Pinterest 仅作为视觉参考，不把他人 Pin 图搬到网站或公开其账号资料。

## 3. 内容栏目怎么持续更新

**三条线：**「AI 动态」只选会实际改变设计流程的产品发布；「设计观察」讨论 AI 对方向探索、职位技能、视觉伦理与协作的影响；「方法论」结合 LoneTree 自己的实践解释如何做品牌一致性、参考图与人审。新闻不做实时自动抓取，也不假装“今日最新”：每篇标注发布时间、访问日期和官方来源，官网文章与公众号素材由人审核后发布。

**发布流程：**

1. 在官方公告或帮助文档找到一手来源；记录发布／更新日、功能状态（正式版或 Beta）及适用范围，避免将效果测试写成事实。
2. 编辑 `content/articles.json`，保留摘要、三条重点、分段正文、引文、图像说明、来源列表，以及 `wechat` 下的两个备选标题、导语、分段、摘要和配图提示。
3. 运行 `python3 scripts/build_editorial.py`，生成 `journal.html` 与每篇独立 HTML；新增稿件需要同步 `manus-routes.json` 和 `sitemap.xml`。
4. 人工检查图片是否为自有或获授权素材，确认文字没有暗示与外部工具或品牌合作；在浏览器核对手机排版及复制按钮。再由编辑改写公众号版本，并在公众号后台单独排版发布。**网站里的复制按钮不会替用户发布公众号。**

首发事实来源：[Figma AI 官方介绍](https://www.figma.com/ai/)、[Adobe Firefly 更新记录](https://helpx.adobe.com/firefly/web/whats-new/new-features/whats-new.html)、[Adobe 视频去背景帮助页](https://helpx.adobe.com/firefly/web/firefly-video-editor/add-and-organize-media/remove-background-from-video-clips-in-timeline.html)。对 Firefly 的品牌工作流影响属于编辑判断，不是 Adobe 官方承诺。新增文章适合形成每月 2 篇深度观察 + 遇重要发布时 1 篇快速解读的节奏；频率是建议，不是已设置的自动任务。

## 4. 正式上线前的边界

本次提交是**独立预览与待审阅代码变更**，并未直接把用户网站主分支替换。需要网站负责人审阅视觉、文案和图片授权后合并 PR；域名证书是 GitHub Pages 配置事项，单靠合并页面代码不能修复。上线前还建议确认真实社交账号、每个作品的授权／项目背景、是否公开团队邮箱，以及 Grove 是否需要真正的服务端访问控制。
