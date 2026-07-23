# AIGC 作品集 — 编辑指南

## 文件结构

```
portfolio/
├── index.html          ← 页面结构（一般不需要改）
├── css/style.css       ← 样式（颜色/间距在 :root 变量中）
├── js/main.js          ← ★ 核心配置文件，所有内容在这里编辑
└── assets/             ← 放你的图片和视频文件
    ├── ecommerce/
    │   ├── set1/       ← 电商套餐一的图片
    │   ├── set2/       ← 电商套餐二的图片
    │   └── set3/       ← 电商套餐三的图片
    ├── brand-ip/
    │   ├── set1/       ← 品牌IP设定一的图片
    │   └── set2/       ← 品牌IP设定二的图片
    ├── tvc/            ← TVC广告视频
    ├── digital-human/  ← 数字人口播视频
    └── comic/          ← 漫剧视频
```

---

## 如何替换占位图

### 第一步：把文件放到 assets 对应目录

例如你的电商套餐一的主图：
```
assets/ecommerce/set1/main-1.jpg
assets/ecommerce/set1/main-2.jpg
...
```

### 第二步：在 `js/main.js` 中填写路径

打开 `js/main.js`，找到 `DATA` 对象，将 `src: ''` 改为你的文件路径：

```javascript
// 修改前
mainImages: [
  { src: '', label: '主图 1' },
  ...
]

// 修改后
mainImages: [
  { src: 'assets/ecommerce/set1/main-1.jpg', label: '主图 1' },
  ...
]
```

> 只要 `src` 为空，页面会自动显示占位图。填了路径就会显示你的图片。

---

## 各板块编辑说明

### 1. 电商产品图（3套）

每套包含：
| 类型 | 数量 | 尺寸/比例 | 说明 | 路径示例 |
|------|------|-----------|------|----------|
| 主图 | 5张 | 1:1 | 正方形主图 | `assets/ecommerce/set1/main-1.jpg` |
| 详情页长图 | 1张 | 宽790px 高不定 | 3:4可滚动窗口预览 | `assets/ecommerce/set1/detail.jpg` |
| Banner海报 | 2张 | 1920×600 | 宽幅横版 | `assets/ecommerce/set1/banner-1.jpg` |
| 宣传海报 | 2张 | 9:16 | 竖版海报 | `assets/ecommerce/set1/poster-1.jpg` |

在 `DATA.ecommerce` 数组中编辑，每套是一个对象。

### 2. 品牌IP设定（2套）

每套包含多张IP设定图，路径如 `assets/brand-ip/set1/ip-1.jpg`。
在 `DATA.brandIP` 数组中编辑。图片为 3:4 大图，自动轮播展示，每 3.5 秒翻页，右下角显示页码（当前/总数），鼠标悬停暂停。

### 3. TVC广告（8条）

| 属性 | 说明 |
|------|------|
| `src` | 视频文件路径，如 `assets/tvc/tvc-1.mp4` |
| `poster` | 封面图路径，如 `assets/tvc/tvc-1-poster.jpg` |
| `ratio` | `"16:9"` 横版 或 `"9:16"` 竖版 |

在 `DATA.tvc` 数组中编辑。

### 4. 数字人口播（2条）

同 TVC 格式，比例为 `9:16`。在 `DATA.digitalHuman` 数组中编辑。

### 5. 漫剧

同 TVC 格式，比例为 `16:9`。在 `DATA.comic` 数组中编辑。

---

## 修改个人信息

在 `js/main.js` 的 `DATA.profile` 对象中修改：

```javascript
profile: {
  name: '你的名字',
  title: 'AIGC Visual Creator',
  tagline: '一句话简介',
  bio: '详细个人简介',
  skills: ['Midjourney', 'Stable Diffusion', ...],
  contact: {
    phone: '138-XXXX-XXXX',
    email: 'your@email.com',
    location: '城市'
  }
}
```

---

## 修改颜色/主题

打开 `css/style.css`，在 `:root` 变量中修改：

```css
:root {
  --bg-primary:   #FFFFFF;   /* 主背景色 */
  --accent:        #2563EB;   /* 强调色（按钮、链接等） */
  --text-primary:   #111827;  /* 主文字色 */
  ...
}
```

---

## 本地预览

用浏览器直接打开 `index.html` 即可预览。
或用本地服务器（推荐，视频播放更稳定）：

```bash
# 在 portfolio 目录下
python -m http.server 8080
# 然后访问 http://localhost:8080
```

## 支持的文件格式

- 图片：jpg / png / webp / gif
- 视频：mp4 / webm
