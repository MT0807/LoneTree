#!/usr/bin/env python3
"""Build crawlable editorial HTML pages from reviewed local article data."""

from __future__ import annotations

import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARTICLES = json.loads((ROOT / "content/articles.json").read_text(encoding="utf-8"))


def esc(value: object) -> str:
    return html.escape(str(value), quote=True)


def header(current: str = "notes") -> str:
    items = [
        ("index.html", "Home", "首页", "home"),
        ("projects.html", "Projects", "项目", "projects"),
        ("services.html", "Services", "服务", "services"),
        ("journal.html", "Field Notes", "观察", "notes"),
        ("talents.html", "About", "关于", "about"),
        ("contact.html", "Contact", "联系", "contact"),
    ]
    links = "".join(
        f'<a href="{url}" {"aria-current=\"page\"" if key == current else ""}>'
        f'<span>{en}</span><small>{cn}</small></a>'
        for url, en, cn, key in items
    )
    return (
        '<header class="editorial-header">'
        '<a class="editorial-brand" href="index.html" aria-label="LoneTree 首页">'
        '<img src="assets/lonetree-logo-ui.png" alt="" loading="eager"><span>LoneTree / Lab</span></a>'
        f'<nav aria-label="网站主导航">{links}</nav></header>'
    )


def document(title: str, description: str, body: str, image: str = "", page_type: str = "article") -> str:
    image_meta = (
        '<meta property="og:image" content="https://raw.githubusercontent.com/'
        f'MT0807/LoneTree/main/{esc(image)}">' if image else ""
    )
    return f'''<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f4f2eb">
  <title>{esc(title)} | LoneTree Lab</title>
  <meta name="description" content="{esc(description)}">
  <meta property="og:type" content="{esc(page_type)}">
  <meta property="og:site_name" content="LoneTree Lab">
  <meta property="og:title" content="{esc(title)}">
  <meta property="og:description" content="{esc(description)}">
  {image_meta}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(title)}">
  <meta name="twitter:description" content="{esc(description)}">
  <link rel="icon" href="assets/paperclip-favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="journal.css">
  <script src="journal.js" defer></script>
</head>
<body class="editorial-body">
{header()}
{body}
<footer class="editorial-footer"><span>LONETREE / FIELD NOTES</span><span>Ideas grow when shared. · 扎根于策略，生长于创意</span><a href="contact.html">聊聊你的项目 ↗</a></footer>
</body>
</html>
'''


def article_card(article: dict, index: int) -> str:
    return (
        f'<a class="note-card note-card-{index}" href="article-{esc(article["slug"])}.html">'
        f'<div class="note-image"><img src="{esc(article["image"])}" alt="{esc(article["image_alt"])}" loading="lazy">'
        f'<span class="note-index">{index:02d} / {esc(article["category"])}</span></div>'
        f'<div class="note-card-text"><h2>{esc(article["title"])}</h2>'
        f'<p>{esc(article["summary"])}</p>'
        f'<span class="note-read">阅读笔记 <b aria-hidden="true">↗</b></span></div></a>'
    )


def build_hub() -> None:
    lead = ARTICLES[0]
    cards = "".join(article_card(item, idx) for idx, item in enumerate(ARTICLES, 1))
    body = f'''<main class="journal-main" id="main">
  <div class="journal-hero"><div><p class="eyebrow">LONETREE / THE GROWING FILES · 001</p>
    <h1>Field<br><em>Notes.</em></h1></div>
    <div class="journal-intro"><span class="root-symbol" aria-hidden="true">◎</span>
      <h2>创意的根，<br>从一次好奇开始。</h2>
      <p>关于 AI、设计与视觉文化的观察。这里不做未经核实的消息搬运：每篇注明来源与日期，把新工具放回真实的创作问题里。</p>
      <div class="journal-categories"><span>01 / AI 动态</span><span>02 / 设计观察</span><span>03 / 方法论</span></div>
    </div></div>
  <section class="featured-note" aria-label="本期推荐"><div class="featured-caption"><span>EDITOR'S PICK / 本期笔记</span>
    <h2>{esc(lead['title'])}</h2><p>{esc(lead['subtitle'])}</p>
    <a href="article-{esc(lead['slug'])}.html">读这篇文章 <span aria-hidden="true">↗</span></a></div>
    <img src="{esc(lead['image'])}" alt="{esc(lead['image_alt'])}" loading="eager"></section>
  <section class="note-index-section" aria-label="全部文章"><div class="section-heading"><p>INDEX / 01—{len(ARTICLES):02d}</p>
    <h2>New thinking,<br>growing practice.</h2><span>事实有来源，观点有立场。</span></div>
    <div class="note-grid">{cards}</div></section>
  <aside class="editorial-method"><span>EDITORIAL METHOD / 编辑方法</span><p>每一条资讯都链接一手来源；时效性结论附上日期。公众号稿件只是二次编辑起点，正式发布前请再核对事实、版权和图片授权。</p></aside>
</main>'''
    (ROOT / "journal.html").write_text(
        document("Field Notes｜AI、设计与创意观察", "LoneTree Lab 的 AI 资讯、设计观察与视觉创作方法，基于一手来源，连接品牌视觉实践。", body, lead["image"], "website"),
        encoding="utf-8",
    )


def build_article(article: dict) -> None:
    bullets = "".join(f"<li>{esc(point)}</li>" for point in article["highlights"])
    sections = "".join(
        f'<section class="article-section"><h2>{esc(section["heading"])}</h2>'
        + "".join(f"<p>{esc(p)}</p>" for p in section["paragraphs"])
        + (f'<blockquote>{esc(section["quote"])}</blockquote>' if section.get("quote") else "")
        + "</section>"
        for section in article["sections"]
    )
    sources = "".join(
        f'<li><a href="{esc(source["url"])}" target="_blank" rel="noopener noreferrer">{esc(source["name"])} ↗</a>'
        f'<small>{esc(source["note"])}</small></li>' for source in article["sources"]
    )
    wechat = article["wechat"]
    wechat_copy = (
        "\n".join(wechat["titles"]) + "\n\n导语\n" + wechat["lead"] + "\n\n"
        + "\n\n".join(s["heading"] + "\n" + s["text"] for s in wechat["sections"])
        + "\n\n重点摘要\n" + wechat["summary"] + "\n\n配图提示\n"
        + "\n".join(wechat["image_prompts"])
        + "\n\n来源\n" + "\n".join(s["name"] + "：" + s["url"] for s in article["sources"])
    )
    other = next(item for item in ARTICLES if item["slug"] != article["slug"])
    body = f'''<main class="article-main" id="main">
  <nav class="breadcrumb" aria-label="面包屑"><a href="journal.html">← 返回 Field Notes</a><span>{esc(article['category'])}</span></nav>
  <header class="article-hero"><div><p class="eyebrow">{esc(article['category'])} <span class="article-date">{esc(article['date'])} · {esc(article['reading'])}</span></p>
    <h1>{esc(article['title'])}</h1><p class="article-subtitle">{esc(article['subtitle'])}</p>
    <p class="article-summary">{esc(article['summary'])}</p></div>
    <span class="article-orbit" aria-hidden="true">LONE<br>TREE<br>LAB /</span></header>
  <figure class="article-cover"><img src="{esc(article['image'])}" alt="{esc(article['image_alt'])}">
    <figcaption>FIG. 01 / {esc(article['image_note'])}</figcaption></figure>
  <div class="article-layout"><aside class="article-sidebar"><span>FIELD NOTES / {esc(article['date'])}</span><p>把工具放回问题里，<br>让判断继续生长。</p>
    <a href="#wechat">↓ 公众号素材</a></aside>
    <div class="article-content"><section class="article-keypoints" aria-label="本文要点"><h2>先记住这三点</h2><ol>{bullets}</ol></section>
    {sections}
    <section class="article-sources"><h2>来源与阅读</h2><p>工具信息引自官方页面；文章中的工作流建议为 LoneTree 编辑判断。</p><ul>{sources}</ul></section>
    </div></div>
  <section class="wechat-box" id="wechat"><div><span>REWRITE KIT / 公众号素材</span><h2>从网站笔记，<br>到你的下一篇推文。</h2><p>以下是一份可复制的编辑底稿。发布前请复核时间、来源、内容授权，加入自己的项目经验与配图。</p></div>
    <div class="wechat-pack"><div class="wechat-head"><strong>标题备选 · 导语 · 分段正文 · 要点 · 配图</strong>
      <button type="button" data-copy="wechat-copy" aria-label="复制公众号编辑素材">复制整份素材 ↗</button></div>
      <pre id="wechat-copy">{esc(wechat_copy)}</pre></div></section>
  <section class="next-note"><span>NEXT / 延伸阅读</span><a href="article-{esc(other['slug'])}.html">{esc(other['title'])} <b aria-hidden="true">↗</b></a></section>
</main>'''
    target = ROOT / f'article-{article["slug"]}.html'
    target.write_text(document(article["title"], article["summary"], body, article["image"]), encoding="utf-8")


if __name__ == "__main__":
    slugs = [article["slug"] for article in ARTICLES]
    if len(slugs) != len(set(slugs)):
        raise ValueError("Article slugs must be unique")
    build_hub()
    for entry in ARTICLES:
        build_article(entry)
    print("Generated journal.html and", len(ARTICLES), "article pages")
