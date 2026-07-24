/* ============================================================
   AIGC 作品集 — 主脚本
   架构：数据驱动渲染
   编辑说明：
     1. 所有内容在下方 DATA 对象中定义
     2. 替换图片路径即可显示你的作品
     3. 替换视频路径即可播放你的视频
     4. 占位图在未提供 src 或 src 文件不存在时自动显示
   ============================================================ */

/* ============================================================
   ⬇⬇⬇  在这里编辑你的所有内容  ⬇⬇⬇
   ============================================================ */

const DATA = {

  /* ---- 个人信息（替换为你的信息） ---- */
  profile: {
    name: 'AIGC作品集',
    personName: '田旭',
    title: 'AIGC视觉创作者',
    heroTag: 'AIGC创作',
    tagline: '用AI构建商业视觉与数字创意资产，让想象力成为可见的价值。',
    bio: '一名专注于 AIGC 商业视觉创作的创作者，致力于将 AI 生成能力与品牌视觉需求结合，在电商产品图、品牌 IP 设定、TVC 广告、数字人口播与动态漫剧等方向持续探索。\n能独立完成从概念生成、细节优化到后期整合的全流程创作。善于整理常用 AI 提示词、风格参考、分镜结构、镜头语言模板、产品展示逻辑与素材生成规范，结合多种AI工具提升内容生产效率，增强项目画面稳定性、风格一致性与交付可控性。',
    skills: [
      'ChatGPT', 'Midjourney', 'Stable Diffusion', 'ComfyUI',
      'Seedance', 'Photoshop', 'Premiere', 'Illustrator',
      '即梦', '剪映'
    ],
    contact: {
      phone: '18716135576',
      email: 'kinglo0214@gmail.com',
      location: '广州'
    }
  },

  /* ---- 01. 电商产品图（5套） ----
     每套包含: 主图(1:1) + 详情页长图 + Banner海报 + 宣传海报
     数量不限，子标题会自动显示实际数量
     替换 src 路径为你图片的实际路径 */
  ecommerce: [
    {
      id: 'eco-1',
      title: '水杯',
      subtitle: 'AIGC电商视觉 · 保温杯产品图',
      mainImages: [
        { src: 'assets/ecommerce/set1/main-1.webp', label: '主图 1' },
        { src: 'assets/ecommerce/set1/main-2.webp', label: '主图 2' },
        { src: 'assets/ecommerce/set1/main-3.webp', label: '主图 3' },
        { src: 'assets/ecommerce/set1/main-4.webp', label: '主图 4' },
        { src: 'assets/ecommerce/set1/main-5.webp', label: '主图 5' },
      ],
      detailImage: { src: 'assets/ecommerce/set1/detail.jpg', label: '详情页长图' },
      banners: [
        { src: 'assets/ecommerce/set1/banner-1.webp', label: 'Banner 海报 1' },
        { src: 'assets/ecommerce/set1/banner-2.webp', label: 'Banner 海报 2' },
      ],
      posters: [
        { src: 'assets/ecommerce/set1/poster-1.webp', label: '宣传海报 1' },
        { src: 'assets/ecommerce/set1/poster-2.webp', label: '宣传海报 2' },
      ]
    },
    {
      id: 'eco-2',
      title: '电煮锅',
      subtitle: 'AIGC电商视觉 · 电煮锅产品图',
      mainImages: [
        { src: 'assets/ecommerce/set2/main-1.webp', label: '主图 1' },
        { src: 'assets/ecommerce/set2/main-2.webp', label: '主图 2' },
        { src: 'assets/ecommerce/set2/main-3.webp', label: '主图 3' },
        { src: 'assets/ecommerce/set2/main-4.webp', label: '主图 4' },
        { src: 'assets/ecommerce/set2/main-5.webp', label: '主图 5' },
      ],
      detailImage: { src: 'assets/ecommerce/set2/detail.webp', label: '详情页长图' },
      banners: [
        { src: 'assets/ecommerce/set2/banner-1.webp', label: 'Banner 海报 1' },
        { src: 'assets/ecommerce/set2/banner-2.webp', label: 'Banner 海报 2' },
      ],
      posters: [
        { src: 'assets/ecommerce/set2/poster-1.webp', label: '宣传海报 1' },
        { src: 'assets/ecommerce/set2/poster-2.webp', label: '宣传海报 2' },
      ]
    },
    {
      id: 'eco-3',
      title: '口红',
      subtitle: 'AIGC电商视觉 · 口红产品图',
      mainImages: [
        { src: 'assets/ecommerce/set3/main-1.webp', label: '主图 1' },
        { src: 'assets/ecommerce/set3/main-2.webp', label: '主图 2' },
        { src: 'assets/ecommerce/set3/main-3.webp', label: '主图 3' },
        { src: 'assets/ecommerce/set3/main-4.webp', label: '主图 4' },
        { src: 'assets/ecommerce/set3/main-5.webp', label: '主图 5' },
      ],
      detailImage: [
        { src: 'assets/ecommerce/set3/detail-1.webp', label: '详情页 1' },
        { src: 'assets/ecommerce/set3/detail-2.webp', label: '详情页 2' },
        { src: 'assets/ecommerce/set3/detail-3.webp', label: '详情页 3' },
        { src: 'assets/ecommerce/set3/detail-4.webp', label: '详情页 4' },
        { src: 'assets/ecommerce/set3/detail-5.webp', label: '详情页 5' },
      ],
      banners: [
        { src: 'assets/ecommerce/set3/banner-1.webp', label: 'Banner 海报 1' },
        { src: 'assets/ecommerce/set3/banner-2.webp', label: 'Banner 海报 2' },
      ],
      posters: [
        { src: 'assets/ecommerce/set3/poster-1.webp', label: '宣传海报 1' },
        { src: 'assets/ecommerce/set3/poster-2.webp', label: '宣传海报 2' },
      ]
    },
    {
      id: 'eco-4',
      title: '酥饼',
      subtitle: 'AIGC电商视觉 · 酥饼产品图',
      mainImages: [
        { src: 'assets/ecommerce/set5/main-1.webp', label: '主图 1' },
        { src: 'assets/ecommerce/set5/main-2.webp', label: '主图 2' },
        { src: 'assets/ecommerce/set5/main-3.webp', label: '主图 3' },
        { src: 'assets/ecommerce/set5/main-4.webp', label: '主图 4' },
        { src: 'assets/ecommerce/set5/main-5.webp', label: '主图 5' },
      ],
      detailImage: { src: 'assets/ecommerce/set5/detail.jpg', label: '详情页长图' },
      banners: [
        { src: 'assets/ecommerce/set5/banner-1.webp', label: 'Banner 海报 1' },
        { src: 'assets/ecommerce/set5/banner-2.webp', label: 'Banner 海报 2' },
      ],
      posters: [
        { src: 'assets/ecommerce/set5/poster-1.webp', label: '宣传海报 1' },
        { src: 'assets/ecommerce/set5/poster-2.webp', label: '宣传海报 2' },
      ]
    },
    {
      id: 'eco-5',
      title: '跨境电商产品',
      subtitle: 'AIGC电商视觉 · 扫地机器人产品图',
      hideScrollHint: true,
      mainImages: [
        { src: 'assets/ecommerce/set4/main-1.webp', label: '主图 1' },
        { src: 'assets/ecommerce/set4/main-2.webp', label: '主图 2' },
        { src: 'assets/ecommerce/set4/main-3.webp', label: '主图 3' },
        { src: 'assets/ecommerce/set4/main-4.webp', label: '主图 4' },
        { src: 'assets/ecommerce/set4/main-5.webp', label: '主图 5' },
        { src: 'assets/ecommerce/set4/main-6.webp', label: '主图 6' },
      ],
      detailImage: { src: 'assets/ecommerce/set4/detail.jpg', label: '详情页长图' },
      banners: [
        { src: 'assets/ecommerce/set4/banner-1.webp', label: 'Banner 海报 1' },
        { src: 'assets/ecommerce/set4/banner-2.webp', label: 'Banner 海报 2' },
        { src: 'assets/ecommerce/set4/banner-3.webp', label: 'Banner 海报 3' },
        { src: 'assets/ecommerce/set4/banner-4.webp', label: 'Banner 海报 4' },
        { src: 'assets/ecommerce/set4/banner-5.webp', label: 'Banner 海报 5' },
      ],
      posters: []
    }
  ],

  /* ---- 02. 品牌IP设定（2套） ----
     每套可包含多张IP设定图；也可只放一张完整设定板 */
  brandIP: [
    {
      id: 'ip-1',
      title: '巧克狐 Choco Fox',
      subtitle: '巧克力品牌IP全案设计',
      images: [
        { src: 'assets/brand-ip/ip-1.jpg', label: '巧克狐 IP设定集' },
      ]
    },
    {
      id: 'ip-2',
      title: '果小浣 Guo Xiao Huan',
      subtitle: '坚果品牌IP形象设计',
      images: [
        { src: 'assets/brand-ip/ip-2.jpg', label: '果小浣 IP设定集' },
      ]
    }
  ],

  /* ---- 03. TVC广告（8条） ----
     ratio: "16:9" 或 "9:16"
     src 替换为视频文件路径，poster 替换为封面图路径 */
  tvc: [
    { id: 'tvc-1', title: '口红 TVC', desc: 'AI生成口红产品广告 · 9:16 竖版', ratio: '9:16', src: 'assets/tvc/tvc-1.mp4', poster: 'assets/tvc/poster-1.webp' },
    { id: 'tvc-2', title: '香薰 TVC', desc: 'AI生成香薰产品广告 · 9:16 竖版', ratio: '9:16', src: 'assets/tvc/tvc-2.mp4', poster: 'assets/tvc/poster-2.webp' },
    { id: 'tvc-3', title: '电煮锅 TVC', desc: 'AI生成电煮锅产品广告 · 9:16 竖版', ratio: '9:16', src: 'assets/tvc/tvc-3.mp4', poster: 'assets/tvc/poster-3.webp' },
    { id: 'tvc-4', title: '无线耳机 TVC', desc: 'AI生成无线耳机产品广告 · 9:16 竖版', ratio: '9:16', src: 'assets/tvc/tvc-4.mp4', poster: 'assets/tvc/poster-4.webp' },
    { id: 'tvc-5', title: '游戏手柄 TVC', desc: 'AI生成游戏手柄产品广告 · 16:9 横版', ratio: '16:9', src: 'assets/tvc/tvc-5.mp4', poster: 'assets/tvc/poster-5.webp' },
    { id: 'tvc-6', title: '冰红茶 TVC', desc: 'AI生成冰红茶产品广告 · 16:9 横版', ratio: '16:9', src: 'assets/tvc/tvc-6.mp4', poster: 'assets/tvc/poster-6.webp' },
    { id: 'tvc-7', title: '苹果 TVC', desc: 'AI生成苹果产品广告 · 16:9 横版', ratio: '16:9', src: 'assets/tvc/tvc-7.mp4', poster: 'assets/tvc/poster-7.webp' },
    { id: 'tvc-8', title: '曲奇 TVC', desc: 'AI生成曲奇产品广告 · 16:9 横版', ratio: '16:9', src: 'assets/tvc/tvc-8.mp4', poster: 'assets/tvc/poster-8.webp' },
  ],

  /* ---- 04. 数字人口播广告（2条） ---- */
  digitalHuman: [
    { id: 'dh-1', title: '口红种草口播', desc: 'AI数字人口播广告 · 9:16 竖版', ratio: '9:16', src: 'assets/digital-human/dh-1.mp4', poster: 'assets/digital-human/poster-dh-1.jpg' },
    { id: 'dh-2', title: '冲锋衣种草口播', desc: 'AI数字人口播广告 · 9:16 竖版', ratio: '9:16', src: 'assets/digital-human/dh-2.mp4', poster: 'assets/digital-human/poster-dh-2.jpg' },
  ],

  /* ---- 05. 漫剧（2组） ----
     使用小标签切换：漫剧1 / 漫剧2 */
  comic: [
    {
      id: 'group-comic-1',
      title: '漫剧1',
      videos: [
        { id: 'comic-1', title: '漫剧1', desc: '个人作品 · AI分镜生成动态漫', ratio: '16:9', src: 'assets/comic/comic-1.mp4', poster: 'assets/comic/poster-comic-1.jpg' },
      ]
    },
    {
      id: 'group-comic-team',
      title: '漫剧2',
      videos: [
        { id: 'comic-3', title: '漫剧2 · 第1集', desc: 'AI分镜生成动态漫 · 团队协作', ratio: '16:9', src: 'assets/comic/comic-3.mp4', poster: 'assets/comic/poster-comic-3.jpg' },
        { id: 'comic-4', title: '漫剧2 · 第2集', desc: 'AI分镜生成动态漫 · 团队协作', ratio: '16:9', src: 'assets/comic/comic-4.mp4', poster: 'assets/comic/poster-team-2.jpg' },
        { id: 'comic-5', title: '漫剧2 · 第3集', desc: 'AI分镜生成动态漫 · 团队协作', ratio: '16:9', src: 'assets/comic/comic-5.mp4', poster: 'assets/comic/poster-comic-5.jpg' },
        { id: 'comic-6', title: '漫剧2 · 第4集', desc: 'AI分镜生成动态漫 · 团队协作', ratio: '16:9', src: 'assets/comic/comic-6.mp4', poster: 'assets/comic/poster-comic-6.jpg' },
      ]
    }
  ]
};

/* ============================================================
   ⬆⬆⬆  内容编辑区结束  ⬆⬆⬆
   ============================================================ */



/* ============================================================
   以下为渲染与交互逻辑（一般无需修改）
   ============================================================ */

/* ---- SVG 占位图生成器 ---- */
function placeholder(label, w, h, ratio) {
  const bg = '#F1F3F5';
  const fg = '#9CA3AF';
  const accent = '#E5E7EB';
  const displayLabel = label || '占位图';
  const displayRatio = ratio || `${w}:${h}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${bg}"/>
    <rect x="1" y="1" width="${w-2}" height="${h-2}" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="6,4"/>
    <text x="${w/2}" y="${h/2 - 8}" text-anchor="middle" fill="${fg}" font-family="Inter, sans-serif" font-size="14" font-weight="600">${escapeXml(displayLabel)}</text>
    <text x="${w/2}" y="${h/2 + 14}" text-anchor="middle" fill="${fg}" font-family="Inter, sans-serif" font-size="11" opacity="0.7">${displayRatio}</text>
    <g transform="translate(${w/2 - 12}, ${h/2 - 42})">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="${fg}" stroke-width="1.5" opacity="0.4"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="${fg}" stroke-width="1.5" opacity="0.4"/>
    </g>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* 获取图片 src，如果为空则返回占位图 */
function imgSrc(item, ratio) {
  if (item.src && item.src.trim() !== '') return item.src;
  // 根据比例生成合适尺寸的占位图
  let w = 400, h = 400;
  if (ratio === '9:16') { w = 270; h = 480; }
  else if (ratio === '1920:600') { w = 480; h = 150; }
  else if (ratio === '3:4') { w = 300; h = 400; }
  else if (ratio === 'auto') { w = 400; h = 533; }
  return placeholder(item.label, w, h, ratio || '1:1');
}

/* 获取视频封面，如果为空则返回占位图 */
function posterSrc(video, ratio) {
  if (video.poster && video.poster.trim() !== '') return video.poster;
  const [w, h] = ratio === '9:16' ? [270, 480] : [480, 270];
  return placeholder(video.title, w, h, ratio);
}

/* 生成视频缩略图HTML：有poster用img，有src用video首帧，都没有用占位图 */
function videoThumbHtml(video, ratio) {
  if (video.poster && video.poster.trim() !== '') {
    return `<img src="${escapeXml(video.poster)}" alt="${escapeXml(video.title)}" loading="lazy">`;
  }
  if (video.src && video.src.trim() !== '') {
    return `<video src="${escapeXml(video.src)}" preload="metadata" muted playsinline aria-label="${escapeXml(video.title)}"></video>`;
  }
  const [w, h] = ratio === '9:16' ? [270, 480] : [480, 270];
  return `<img src="${placeholder(video.title, w, h, ratio)}" alt="${escapeXml(video.title)}" loading="lazy">`;
}

/* ---- 渲染：个人资料 ---- */
function renderProfile() {
  const p = DATA.profile;
  document.getElementById('heroTitle').textContent = p.name;
  document.getElementById('heroTag').textContent = p.heroTag;
  document.getElementById('heroSubtitle').textContent = p.tagline;
  document.getElementById('aboutName').textContent = p.personName;
  document.getElementById('aboutRole').textContent = p.title;
  document.getElementById('aboutBio').textContent = p.bio;
  document.getElementById('footerPhone').textContent = p.contact.phone;
  document.getElementById('footerEmail').textContent = p.contact.email;
  document.getElementById('footerLocation').textContent = p.contact.location;
  document.getElementById('footerCopy').textContent = `\u00A9 ${new Date().getFullYear()} ${p.personName}. All rights reserved.`;

  // 技能标签
  const tagsEl = document.getElementById('skillTags');
  tagsEl.innerHTML = p.skills.map(s =>
    `<span class="skill-tag">${escapeXml(s)}</span>`
  ).join('');
}

/* ---- 渲染：电商产品图 Tab + 内容 ---- */
function renderEcommerce() {
  const container = document.getElementById('ecommerceAccordion');

  container.innerHTML = DATA.ecommerce.map((set, i) => {
    const mainCount = set.mainImages.length;
    const detailImages = Array.isArray(set.detailImage) ? set.detailImage : [set.detailImage];
    const bannerCount = set.banners.length;
    const posterCount = set.posters.length;

    // 副标题：主图×N + 详情页长图 + Banner海报×N + 宣传海报×N
    let sub = '\u4e3b\u56fe\u00d7' + mainCount + ' + \u8be6\u60c5\u9875\u957f\u56fe';
    if (bannerCount > 0) sub += ' + Banner\u6d77\u62a5\u00d7' + bannerCount;
    if (posterCount > 0) sub += ' + \u5ba3\u4f20\u6d77\u62a5\u00d7' + posterCount;

    // 主图
    const mainImgs = set.mainImages.map(img =>
      `<div class="main-image-item" data-gallery="eco-main-${set.id}" data-src="${imgSrc(img, '1:1')}" data-label="${escapeXml(img.label)}">
        <img data-src="${imgSrc(img, '1:1')}" alt="${escapeXml(img.label)}" loading="lazy" class="lazy-img">
      </div>`
    ).join('');

    // Banner
    const bannerImgs = set.banners.map(banner =>
      `<div class="banner-item" data-gallery="eco-banner-${set.id}" data-src="${imgSrc(banner, '1920:600')}" data-label="${escapeXml(banner.label)}">
        <img data-src="${imgSrc(banner, '1920:600')}" alt="${escapeXml(banner.label)}" loading="lazy" class="lazy-img">
      </div>`
    ).join('');

    // 宣传海报
    const posterImgs = set.posters.map(poster =>
      `<div class="poster-item" data-gallery="eco-poster-${set.id}" data-src="${imgSrc(poster, '9:16')}" data-label="${escapeXml(poster.label)}">
        <img data-src="${imgSrc(poster, '9:16')}" alt="${escapeXml(poster.label)}" loading="lazy" class="lazy-img">
      </div>`
    ).join('');

    // 详情页图片数据（传给查看器）
    const detailDataAttr = escapeXml(JSON.stringify(detailImages.map(img => ({ src: imgSrc(img, 'auto'), label: img.label }))));

    return `
      <div class="eco-acc-item" data-set-id="${set.id}">
        <div class="eco-acc-header">
          <div class="eco-acc-header-left">
            <div class="eco-acc-dot"></div>
            <div>
              <div class="eco-acc-title">${escapeXml(set.title)}</div>
              <div class="eco-acc-sub">${sub}</div>
            </div>
          </div>
          <span class="eco-acc-arrow">&rsaquo;</span>
        </div>
        <div class="eco-acc-body">
          <div class="eco-acc-body-inner">
            <div class="sub-label">
              <span class="sub-label-text">\u4e3b\u56fe</span>
              <span class="sub-label-line"></span>
            </div>
            <div class="main-image-grid">${mainImgs}</div>

            <div class="sub-label">
              <span class="sub-label-text">\u8be6\u60c5\u9875\u957f\u56fe</span>
              <span class="sub-label-line"></span>
            </div>
            <button class="eco-detail-btn" data-detail-images="${detailDataAttr}" data-detail-label="${escapeXml(set.title)} \u00b7 \u8be6\u60c5\u9875\u957f\u56fe">
              \u67e5\u770b\u957f\u56fe <span class="eco-detail-arrow">\u2192</span>
            </button>

            <div class="sub-label">
              <span class="sub-label-text">Banner\u6d77\u62a5</span>
              <span class="sub-label-line"></span>
            </div>
            <div class="banner-grid">${bannerImgs}</div>

            ${posterCount > 0 ? `
            <div class="sub-label">
              <span class="sub-label-text">\u5ba3\u4f20\u6d77\u62a5</span>
              <span class="sub-label-line"></span>
            </div>
            <div class="poster-grid">${posterImgs}</div>
            ` : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  // 绑定横幅点击：展开/收拢，互斥
  container.querySelectorAll('.eco-acc-header').forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.eco-acc-item');
      const wasActive = item.classList.contains('active');
      container.querySelectorAll('.eco-acc-item').forEach(el => el.classList.remove('active'));
      if (!wasActive) {
        item.classList.add('active');
        // 按需加载：展开时才设置 img src
        item.querySelectorAll('img.lazy-img[data-src]').forEach(img => {
          if (!img.src) img.src = img.dataset.src;
        });
      }
    });
  });

  // 绑定灯箱（主图、Banner、宣传海报）
  bindLightbox();

  // 绑定详情页查看长图按钮
  container.querySelectorAll('.eco-detail-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const images = JSON.parse(this.dataset.detailImages);
      const label = this.dataset.detailLabel;
      showDetailViewer(images, label);
    });
  });
}

/* ---- 详情页长图查看器（竖直滚动式） ---- */
function showDetailViewer(images, label) {
  const viewer = document.getElementById('detailViewer');
  const content = document.getElementById('detailViewerContent');

  // 所有图片竖向无缝拼接，模拟一张完整长图
  content.innerHTML = images.map(img =>
    `<img src="${escapeXml(img.src)}" alt="${escapeXml(img.label || '')}" loading="eager">`
  ).join('') + `<p class="detail-viewer-caption">${escapeXml(label || '')}</p>`;

  viewer.classList.add('active');
  document.body.style.overflow = 'hidden';
  content.scrollTop = 0;
}

function closeDetailViewer() {
  document.getElementById('detailViewer').classList.remove('active');
  document.body.style.overflow = '';
}

/* ---- 轮播定时器存储 ---- */
const carouselTimers = {};

/* ---- 渲染：品牌IP设定 Tab + 自动轮播 ---- */
function renderBrandIP() {
  const tabsEl = document.getElementById('brandIPTabs');
  const contentEl = document.getElementById('brandIPContent');

  tabsEl.innerHTML = DATA.brandIP.map((set, i) =>
    `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${set.id}">${escapeXml(set.title)}</button>`
  ).join('');

  function showSet(setId) {
    // 停止之前的轮播定时器
    Object.keys(carouselTimers).forEach(key => {
      clearInterval(carouselTimers[key].interval);
      clearInterval(carouselTimers[key].progress);
      delete carouselTimers[key];
    });

    const set = DATA.brandIP.find(s => s.id === setId);
    if (!set) return;

    const slides = set.images.map((img, i) =>
      `<div class="ip-carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}" data-gallery="ip-${set.id}" data-src="${imgSrc(img, '3:4')}" data-label="${escapeXml(img.label)}">
        <img src="${imgSrc(img, '3:4')}" alt="${escapeXml(img.label)}" loading="lazy">
      </div>`
    ).join('');

    const dots = set.images.map((_, i) =>
      `<span class="ip-carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');

    contentEl.innerHTML = `
      <div class="ip-set">
        <h3 class="eco-set-title">${escapeXml(set.title)}</h3>
        <p class="eco-set-desc">${escapeXml(set.subtitle)}</p>
        <div class="ip-carousel" id="ipCarousel-${set.id}">
          <div class="ip-carousel-track">${slides}</div>
          <div class="ip-carousel-dots">${dots}</div>
          <div class="ip-carousel-page" id="ipPage-${set.id}">1 / ${set.images.length}</div>
          <div class="ip-carousel-progress" id="ipProgress-${set.id}"></div>
        </div>
      </div>`;

    // 绑定灯箱
    bindLightbox();

    // 启动自动轮播
    startCarousel(set.id, set.images.length);
  }

  // Tab 切换
  tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showSet(btn.dataset.tab);
    });
  });

  showSet(DATA.brandIP[0].id);
}

/* 轮播逻辑：自动翻页 + 页码更新 + 进度条 + 悬停暂停 */
function startCarousel(setId, total) {
  if (total <= 1) return;

  const carousel = document.getElementById(`ipCarousel-${setId}`);
  const pageEl = document.getElementById(`ipPage-${setId}`);
  const progressEl = document.getElementById(`ipProgress-${setId}`);
  const slides = carousel.querySelectorAll('.ip-carousel-slide');
  const dots = carousel.querySelectorAll('.ip-carousel-dot');

  let current = 0;
  const duration = 3500;
  let progressWidth = 0;
  let isPaused = false;
  let slideTimer = null;
  let progressTimer = null;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    pageEl.textContent = `${current + 1} / ${total}`;
    progressWidth = 0;
    progressEl.style.width = '0%';
  }

  function startTimers() {
    stopTimers();
    progressTimer = setInterval(() => {
      if (isPaused) return;
      progressWidth += 100 / (duration / 50);
      if (progressWidth >= 100) progressWidth = 100;
      progressEl.style.width = progressWidth + '%';
    }, 50);
    slideTimer = setInterval(() => {
      if (isPaused) return;
      goTo(current + 1);
    }, duration);
    carouselTimers[setId] = { interval: slideTimer, progress: progressTimer };
  }

  function stopTimers() {
    if (slideTimer) clearInterval(slideTimer);
    if (progressTimer) clearInterval(progressTimer);
    slideTimer = null;
    progressTimer = null;
  }

  // 点击导航点切换
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(parseInt(dot.dataset.index));
    });
  });

  // 鼠标悬停暂停 / 离开恢复
  carousel.addEventListener('mouseenter', () => { isPaused = true; });
  carousel.addEventListener('mouseleave', () => { isPaused = false; });

  startTimers();
}

/* ---- 渲染：TVC广告 ---- */
function renderTVC() {
  const gridEl = document.getElementById('tvcGrid');

  gridEl.innerHTML = DATA.tvc.map(video => {
    const ratioClass = video.ratio === '9:16' ? 'vertical' : 'horizontal';
    return `
      <div class="video-card" data-ratio="${video.ratio}" data-filter="${video.ratio}" data-video-id="${video.id}">
        <div class="video-thumb">
          ${videoThumbHtml(video, video.ratio)}
          <div class="play-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span class="ratio-badge">${video.ratio}</span>
        </div>
        <div class="video-info">
          <h3 class="video-title">${escapeXml(video.title)}</h3>
          <p class="video-desc">${escapeXml(video.desc)}</p>
        </div>
      </div>`;
  }).join('');

  // 筛选
  const filterEl = document.getElementById('tvcFilter');
  filterEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      gridEl.querySelectorAll('.video-card').forEach(card => {
        if (filter === 'all' || card.dataset.filter === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  bindVideoModal();
}

/* ---- 渲染：数字人口播 ---- */
function renderDigitalHuman() {
  const gridEl = document.getElementById('digitalHumanGrid');

  gridEl.innerHTML = DATA.digitalHuman.map(video => `
    <div class="video-card" data-ratio="${video.ratio}" data-video-id="${video.id}">
      <div class="video-thumb">
        ${videoThumbHtml(video, video.ratio)}
        <div class="play-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <span class="ratio-badge">${video.ratio}</span>
      </div>
      <div class="video-info">
        <h3 class="video-title">${escapeXml(video.title)}</h3>
        <p class="video-desc">${escapeXml(video.desc)}</p>
      </div>
    </div>`).join('');

  bindVideoModal();
}

/* ---- 渲染：漫剧 Tab + 内容 ---- */
function renderComic() {
  const container = document.getElementById('comicAccordion');

  function renderGrid(videos) {
    return `<div class="video-grid video-grid-comic">
      ${videos.map(video => `
        <div class="video-card" data-ratio="${video.ratio}" data-video-id="${video.id}">
          <div class="video-thumb">
            ${videoThumbHtml(video, video.ratio)}
            <div class="play-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span class="ratio-badge">${video.ratio}</span>
          </div>
          <div class="video-info">
            <h3 class="video-title">${escapeXml(video.title)}</h3>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  container.innerHTML = DATA.comic.map(group => `
      <div class="eco-acc-item" data-set-id="${group.id}">
        <div class="eco-acc-header">
          <div class="eco-acc-header-left">
            <div class="eco-acc-dot"></div>
            <div class="eco-acc-title">${escapeXml(group.title)}</div>
          </div>
          <span class="eco-acc-arrow">&rsaquo;</span>
        </div>
        <div class="eco-acc-body">
          <div class="eco-acc-body-inner">
            ${renderGrid(group.videos)}
          </div>
        </div>
      </div>`).join('');

  // 按需加载：将漫剧视频封面 img src 转为 data-src，展开时才加载
  container.querySelectorAll('img[src]').forEach(img => {
    img.dataset.src = img.getAttribute('src');
    img.removeAttribute('src');
    img.classList.add('lazy-img');
  });

  // 绑定横幅点击：展开/收拢，互斥
  container.querySelectorAll('.eco-acc-header').forEach(header => {
    header.addEventListener('click', function() {
      const item = this.closest('.eco-acc-item');
      const wasActive = item.classList.contains('active');
      container.querySelectorAll('.eco-acc-item').forEach(el => el.classList.remove('active'));
      if (!wasActive) {
        item.classList.add('active');
        // 按需加载：展开时才设置 img/video src
        item.querySelectorAll('img[data-src]').forEach(img => {
          if (!img.src) img.src = img.dataset.src;
        });
      }
    });
  });

  // 绑定视频弹窗
  bindVideoModal();
}

/* ============================================================
   图片灯箱
   ============================================================ */
let lightboxState = {
  gallery: [],
  index: 0
};

function bindLightbox() {
  document.querySelectorAll('[data-gallery]').forEach(item => {
    if (item._lightboxBound) return;
    item._lightboxBound = true;

    item.addEventListener('click', function() {
      const galleryName = this.dataset.gallery;
      const items = Array.from(document.querySelectorAll(`[data-gallery="${galleryName}"]`));
      lightboxState.gallery = items;
      lightboxState.index = items.indexOf(this);
      showLightbox();
    });
  });
}

function showLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const item = lightboxState.gallery[lightboxState.index];

  if (!item) return;

  img.src = item.dataset.src;
  caption.textContent = item.dataset.label || '';
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  const len = lightboxState.gallery.length;
  if (len === 0) return;
  lightboxState.index = (lightboxState.index + dir + len) % len;
  showLightbox();
}

function initLightbox() {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); lightboxNav(-1); });
  document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); lightboxNav(1); });
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  // 详情页长图查看器
  document.getElementById('detailViewerClose').addEventListener('click', closeDetailViewer);
  document.getElementById('detailViewer').addEventListener('click', function(e) {
    if (e.target === this) closeDetailViewer();
  });
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('detailViewer').classList.contains('active')) return;
    if (e.key === 'Escape') closeDetailViewer();
  });
}

/* ============================================================
   视频弹窗
   ============================================================ */
function bindVideoModal() {
  document.querySelectorAll('.video-card[data-video-id]').forEach(card => {
    if (card._videoBound) return;
    card._videoBound = true;

    card.addEventListener('click', function() {
      const videoId = this.dataset.videoId;
      // 跳转到独立播放页，保持原视频画质
      window.open('player.html?v=' + encodeURIComponent(videoId), '_blank');
    });
  });
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  modal.classList.remove('active');
  player.pause();
  player.removeAttribute('src');
  document.body.style.overflow = '';
}

function initVideoModal() {
  document.getElementById('videoModalClose').addEventListener('click', closeVideoModal);
  document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) closeVideoModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('videoModal').classList.contains('active')) {
      closeVideoModal();
    }
  });
}

/* ============================================================
   导航栏交互
   ============================================================ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // 滚动添加阴影
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 移动端菜单
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // 点击导航链接关闭移动端菜单
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // 滚动高亮当前章节
  const sections = document.querySelectorAll('section[id]');
  const navItems = navLinks.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.dataset.section === current) {
        item.classList.add('active');
      }
    });
  });
}

/* ============================================================
   返回顶部按钮
   ============================================================ */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}

/* ============================================================
   滚动入场动画
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-header, .video-card, .main-image-item, .banner-item, .poster-item, .ip-carousel, .detail-image-wrapper, .about-bio, .about-skills').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/* ============================================================
   初始化
   ============================================================ */
function init() {
  // 仅在作品集主页执行渲染；播放页(player.html)不执行
  if (!document.getElementById('navbar')) return;
  renderProfile();
  renderEcommerce();
  renderBrandIP();
  renderTVC();
  renderDigitalHuman();
  renderComic();
  initLightbox();
  initVideoModal();
  initNav();
  initBackToTop();
  initScrollAnimations();
}

// DOM 就绪后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
