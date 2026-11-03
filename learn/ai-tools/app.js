const companies = [
  {
    id: 'openai', region: 'overseas', name: 'OpenAI', mark: 'O', tint: 'sage', summary: '以 GPT 模型系列为基础，提供对话产品 ChatGPT 和编程 Agent Codex。',
    model: 'GPT 模型系列', tools: [
      { name: 'ChatGPT', type: 'AI 产品', job: '提问、写作、整理思路与分析资料。', use: '打开网页，在对话框说明目标与背景；可上传资料，再追问和修改结果。', url: 'https://chatgpt.com/', source: 'https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview' },
      { name: 'Codex', type: 'Agent', job: '在代码项目中查找、修改、运行和检查。', use: '打开 Codex 并连接项目，描述要完成的改动与验收标准，最后检查它给出的文件变化。', url: 'https://chatgpt.com/codex', source: 'https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan' }
    ]
  },
  {
    id: 'xai', region: 'overseas', name: 'xAI / Grok', mark: 'X', tint: 'lavender', summary: 'Grok 是面向用户的 AI 助手；Grok Bot 是可以持续处理多步骤任务的 Agent。',
    model: 'Grok 模型系列', tools: [
      { name: 'Grok', type: 'AI 产品', job: '对话、研究问题、分析文件与生成内容。', use: '进入 Grok，直接提问或上传文件；说明你要的输出格式，并核对关键事实。', url: 'https://grok.com/', source: 'https://docs.x.ai/grok/overview' },
      { name: 'Grok Bot', type: 'Agent', job: '在持续的工作环境中跨网站和应用执行任务。', use: '先阅读官方入门页，创建 Bot、指定任务与可用工具，再检查执行过程中的授权请求。', url: 'https://docs.x.ai/grok-bot/overview', source: 'https://docs.x.ai/grok-bot/overview' }
    ]
  },
  {
    id: 'manus', region: 'overseas', name: 'Manus', mark: 'M', tint: 'sand', summary: '以交付成果为目标的通用 Agent，适合资料研究、制作演示文稿和网页等任务。',
    model: '使用多种模型；产品重点是 Agent 工作流', tools: [
      { name: 'Manus', type: 'Agent', job: '规划并完成需要多个步骤的任务。', use: '写清目标、素材、完成标准和截止范围；选择 Agent 模式，跟进计划并检查交付物。', url: 'https://manus.im/', source: 'https://help.manus.im/en/articles/17768086-what-are-the-differences-between-chat-mode-and-agent-mode' }
    ]
  },
  {
    id: 'deepseek', region: 'china', name: 'DeepSeek 深度求索', mark: 'D', tint: 'blue', summary: '既提供 DeepSeek 模型和对话产品，也提供可处理文件、代码与研究任务的 DeepSeek Harness。',
    model: 'DeepSeek 模型系列', tools: [
      { name: 'DeepSeek', type: 'AI 产品', job: '对话、推理、写作与资料整理。', use: '打开网页版，输入具体问题和所需格式；复杂问题可补充背景并逐轮追问。', url: 'https://chat.deepseek.com/', source: 'https://www.deepseek.com/' },
      { name: 'DeepSeek Harness', type: 'Agent', job: '处理文件、代码、研究和后台任务，可通过插件扩展。', use: '从官网下载安装，给出任务目标与文件范围，确认工具权限后检查结果。', url: 'https://www.deepseek.com/harness/en/', source: 'https://www.deepseek.com/harness/en/' }
    ]
  },
  {
    id: 'minimax', region: 'china', name: 'MiniMax', mark: 'm', tint: 'peach', summary: '研发文本、视频、语音等模型，并提供面向用户的 AI 产品。',
    model: 'MiniMax 语言、视频与语音模型', tools: [
      { name: 'MiniMax', type: 'AI / 模型', job: '按任务选择文字、视频或语音生成能力。', use: '在官网查看模型和产品入口；先确定交付物，再进入对应产品尝试。', url: 'https://www.minimax.cn/', source: 'https://www.minimax.cn/' }
    ]
  },
  {
    id: 'tencent', region: 'china', name: '腾讯 · WorkBuddy', mark: 'W', tint: 'mint', summary: '腾讯的桌面 AI 办公工作台，可协助处理文档、数据、开发与设计等任务。',
    model: '可使用多种模型；WorkBuddy 是 Agent 产品', tools: [
      { name: 'WorkBuddy', type: 'Agent', job: '在桌面工作环境中完成多步骤办公任务。', use: '从官网下载并登录，选择工作范围，描述目标与预期文件，审核执行过程和成品。', url: 'https://www.workbuddy.cn/', source: 'https://cloud.tencent.com/product/workbuddy' }
    ]
  },
  {
    id: 'bytedance', region: 'china', name: '字节跳动 · 扣子', mark: 'C', tint: 'lilac', summary: '字节跳动旗下的 AI 办公协作与编程平台，可以使用或创建 Agent。',
    model: '支持选择不同模型；扣子是 Agent 平台', tools: [
      { name: '扣子 Coze', type: 'Agent', job: '安排 AI 助手处理创作、办公与编程任务。', use: '进入官网注册，选现成 Agent 或创建自己的 Agent，描述职责、工具和交付要求。', url: 'https://www.coze.cn/', source: 'https://docs.coze.cn/coze_sign_up' }
    ]
  }
];

function renderTool(tool) {
  return `<article class="tool-card">
    <div class="tool-card-top"><span class="type-tag">${tool.type}</span><span class="tool-arrow" aria-hidden="true">↗</span></div>
    <h4>${tool.name}</h4><p class="tool-job">${tool.job}</p>
    <div class="tool-use"><span>如何开始</span><p>${tool.use}</p></div>
    <div class="tool-actions"><a href="${tool.url}" target="_blank" rel="noopener noreferrer">打开官网 ↗</a><button type="button" class="preview-button" data-url="${tool.url}" data-name="${tool.name}">站内预览</button></div>
    <a class="source-link" href="${tool.source}" target="_blank" rel="noopener noreferrer">官方说明 ↗</a>
  </article>`;
}

function renderCompany(company, index) {
  return `<section class="company company-${company.tint}" id="${company.id}" aria-labelledby="${company.id}-title">
    <div class="company-intro"><div class="company-number">${String(index + 1).padStart(2, '0')} / COMPANY</div><div class="company-mark" aria-hidden="true">${company.mark}</div>
      <h3 id="${company.id}-title">${company.name}</h3><p>${company.summary}</p><div class="model-line"><span>模型 / 能力</span><strong>${company.model}</strong></div></div>
    <div class="tool-grid">${company.tools.map(renderTool).join('')}</div>
  </section>`;
}

document.querySelector('#overseas-list').innerHTML = companies.filter(c => c.region === 'overseas').map((c, i) => renderCompany(c, i)).join('');
document.querySelector('#china-list').innerHTML = companies.filter(c => c.region === 'china').map((c, i) => renderCompany(c, i + 3)).join('');

const dialog = document.querySelector('#site-preview');
const frame = document.querySelector('#preview-frame');
const previewLink = document.querySelector('#preview-link');
document.querySelectorAll('.preview-button').forEach(button => button.addEventListener('click', () => {
  const url = button.dataset.url;
  document.querySelector('#preview-title').textContent = `${button.dataset.name} · 官网预览`;
  frame.src = url;
  previewLink.href = url;
  dialog.showModal();
}));
document.querySelector('#close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { frame.src = 'about:blank'; });
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
