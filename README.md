# 陳竑齊（Hung‑Chi, Justin）個人網站

使用 Next.js 14+ App Router、TypeScript、React 和 Tailwind CSS 實作，並支援深色/淺色主題。

## 技術棧

- **框架**: Next.js 14+ (App Router)
- **語言**: TypeScript
- **UI 庫**: React
- **樣式**: Tailwind CSS + 自訂 CSS
- **字體**: Inter (Google Fonts)
- **圖標**: Font Awesome 6.0

## 內容導覽

- **首頁** (`/home`): 自我介紹 & 動態標題
- **關於我** (`/about`): 聯絡資訊、相關能力與學經歷、興趣
- **旅行** (`/travel`): 各個旅行紀錄
- **聯繫** (`/contact`): 常用聯絡方式

## 網站特色與互動

- **主題切換**: 支援深色/淺色模式，會記住偏好
- **平滑動畫**: 進場淡入、卡片懸停、標題輪播、時間軸/模態切換
- **複製便捷**: 在 About 可一鍵複製 Email/電話
- **響應式設計**: 桌機、平板、手機皆可閱讀
- **表單驗證**: Contact 頁面包含完整的表單驗證

## 專案結構

```
personal-website/
├── app/
│   ├── layout.tsx              # 全域 layout
│   ├── page.tsx                # 根路由（重定向到 /home）
│   ├── globals.css             # 全域樣式
│   ├── home/
│   │   ├── page.tsx            # 首頁
│   │   └── home.css            # 首頁樣式
│   ├── about/
│   │   ├── page.tsx            # 關於我頁面
│   │   └── about.css           # 關於我樣式
│   ├── travel/
│   │   ├── page.tsx            # 旅行頁面
│   │   └── travel.css          # 旅行樣式
│   ├── contact/
│   │   ├── page.tsx            # 聯絡頁面
│   │   └── contact.css         # 聯絡樣式
│   └── api/
│       └── contact/
│           └── route.ts        # 聯絡表單 API
├── components/
│   ├── Navbar.tsx              # 導航列組件
│   ├── Footer.tsx              # 頁尾組件
│   ├── ThemeToggle.tsx         # 主題切換組件
│   └── TitleAnimation.tsx      # 標題動畫組件
├── hooks/
│   ├── useTheme.ts             # 主題管理 hook
│   └── useScrollAnimation.ts   # 滾動動畫 hook
├── public/                     # 靜態資源（圖片）
├── styles/
│   └── globals.css             # Tailwind + CSS 變數
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 安裝與執行

1. 安裝依賴：

```bash
npm install
```

2. 啟動開發伺服器：

```bash
npm run dev
```

3. 開啟瀏覽器訪問 `http://localhost:3000`

## 建置與部署

1. 建置生產版本：

```bash
npm run build
```

2. 啟動生產伺服器：

```bash
npm start
```

## 部署到 Vercel

專案已配置好可一鍵部署到 Vercel：

1. 將專案推送到 GitHub
2. 在 Vercel 中導入專案
3. Vercel 會自動偵測 Next.js 並進行部署

## 聯絡方式

- Email：chenjustin824@ntu.im
- GitHub：chennjustin
- LinkedIn：Hung‑Chi Chen
- Phone：0963617655

---

© 2025.09 陳竑齊. 保留所有權利.
