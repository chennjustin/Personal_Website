# 陳竑齊（Hung‑Chi, Justin）個人網站

使用 HTML、CSS 與 TypeScript 實作，並支援深色/淺色主題。

## 內容導覽

- 首頁 Home：自我介紹 & 動態標題
- 關於我 About：聯絡資訊、相關能力與學經歷、興趣
- 旅行 Travel：各個旅行紀錄
- 聯繫 Contact：常用聯絡方式

## 網站特色與互動

- 主題切換：支援深色/淺色模式，會記住偏好
- 平滑動畫：進場淡入、卡片懸停、標題輪播、時間軸/模態切換
- 複製便捷：在 About 可一鍵複製 Email/電話
- 響應式設計（開發中）：桌機、平板、手機皆可閱讀
- 中英切換：開發中

## 介面與動線

- 導航列：固定於頂端，滾動會改變樣式；手機為漢堡選單
- Navbar/Footer：非首頁頁面會自動載入首頁的 Navbar/Footer
- 動畫節奏：元素淡入、卡片升起、圖示縮放、點點同步

## 技術與實作

- HTML/CSS：語義化標記、CSS 變數、Grid/Flex、自訂動畫、RWD
- TypeScript：頁面模組（home.ts、about.ts、travel.ts、contact.ts），與共用腳本（navbar-config.ts、footer-config.ts）
- IntersectionObserver：滾動進場與時間軸/卡片動畫觸發
- LocalStorage：主題偏好保存
- 注意：語言切換已移除，所有文案直接寫在 HTML（避免多語程式邏輯，管理更單純）

## 專案結構

```
hw1/
├── home/               首頁（index.html、home.css、home.ts/js）
├── about/              關於我（about.html、about.css、about.ts/js）
├── travel/             旅行（travel.html、travel.css、travel.ts/js）
├── contact/            聯繫（contact.html、contact.css、contact.ts/js）
├── src/                共用資源（navbar-config.ts/js、footer-config.ts/js、圖片）
├── tsconfig.json
└── README.md
```

## 在本機開啟（可再home的資料夾找到index.html）

1) 安裝 TypeScript 並編譯：

```bash
cd hw1
npx tsc
```

2) 啟動簡單伺服器：

```bash
python -m http.server 8000
# 或
npx serve .
```

3) 瀏覽 `http://localhost:8000/hw1/home/index.html`

## 聯絡方式

- Email：chenjustin824@ntu.im
- GitHub：chennjustin
- LinkedIn：Hung‑Chi Chen
- Phone：0963617655

---

© 2025.09 陳竑齊. 保留所有權利.
