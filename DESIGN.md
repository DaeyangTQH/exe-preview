---
name: Hồn Tích Đất Việt
description: Mỗi món lưu niệm mở ra một câu chuyện Việt Nam.
colors:
  ink: "#000000"
  paper: "#f6f2ea"
  card: "#ffffff"
  muted: "#5e5856"
  soft-surface: "#efe8da"
  aged-lacquer: "#9e6a2e"
  aged-lacquer-alt: "#a06b2d"
  aged-lacquer-light: "#e0b878"
typography:
  display:
    fontFamily: '"Cormorant Garamond", Georgia, "Times New Roman", serif'
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Cormorant Garamond", Georgia, "Times New Roman", serif'
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Cormorant Garamond", Georgia, "Times New Roman", serif'
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Be Vietnam Pro", "Segoe UI", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: '"Be Vietnam Pro", "Segoe UI", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.32em"
rounded:
  pill: "9999px"
  card-lg: "2rem"
  card-md: "1.5rem"
  card-sm: "1rem"
spacing:
  section-y: "6rem"
  section-x: "2rem"
  container: "80rem"
  stack-sm: "1rem"
  stack-md: "1.5rem"
  stack-lg: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "1.25rem 3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "1.25rem 3.5rem"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.25rem 2.5rem"
  nav-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.5rem"
  card-collection:
    backgroundColor: "rgba(255, 255, 255, 0.7)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card-lg}"
    padding: "1.75rem"
  card-story:
    backgroundColor: "rgba(244, 240, 232, 0.8)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card-lg}"
    padding: "1.5rem"
---

# Design System: Hồn Tích Đất Việt

## Overview

**Creative North Star: "The Living Museum"**

Hồn Tích Đất Việt nhìn và cảm giác như một bảo tàng mini — không phô trưng, không hô hào. Không gian editorial chậm, ánh sáng trắng, typography serif làm chủ, và sắc sơn son thếp vàng cũ xuất hiện như điểm nhấn hiếm trên nền trắng và xám mực. Mọi surface gợi vật thể thật: mô hình in 3D, giấy dày, khung trưng bày.

Theo review, "The Living Museum" đúng hướng nhưng cần **bản sắc Việt rõ hơn**: bổ sung một lớp **visual language Việt Nam ở mức nhẹ** (motif họa tiết, texture giấy thủ công) chiếm ~5–10% diện tích, để giao diện không thể bị nhầm sang Nhật / Hàn / Pháp / Ý khi gỡ bỏ chữ.

Hệ thống từ chối SaaS landing template, cửa hàng lưu niệm rẻ tiền, và AI slop (card grid giống hệt, eyebrow mọi section). Canvas là **giấy thủ công**: off-white ấm rất nhẹ (`#f6f2ea`) phủ một lớp grain mờ (giấy dó), không phải cream/sand bão hòa. Warmth đến từ accent Aged Lacquer, motif văn hóa, texture giấy, video hero, và nhịp kể chuyện.

**Key Characteristics:**

- Serif display + sans body; tiếng Việt có dấu là first-class
- Canvas là giấy off-white ấm (`#f6f2ea`) + grain mờ; card interiors giữ trắng tinh (`#ffffff`) để có tầng tonal. `#efe8da` cho soft-surface (story card)
- Aged Lacquer (`#9e6a2e`) ≤10% diện tích màn hình — accent gỗ cổ / sơn son thếp vàng cũ, không flood
- Motif văn hóa Việt (Đông Sơn, Văn Miếu, Hội An, Bát Tràng, mái ngói, giấy dó) ở 5–10% diện tích — gợi, không trang trí dày
- Pill buttons, bo góc lớn (2rem) cho cards — cảm giác vật thể, không tech-sharp
- Lifted elevation: shadow nhẹ ở rest, nâng rõ hơn khi hover
- Motion: fade-rise entrance, scale hover; luôn có `prefers-reduced-motion` fallback

## Colors

Bảng màu editorial tối giản: đen mực trên trắng, xám muted cho prose, sắc gỗ cổ / sơn son thếp vàng cũ cho accent văn hóa.

### Primary

- **Aged Lacquer** (`#9e6a2e` / ~oklch(53% 0.09 67)): Accent chính — section kickers (uppercase tracked), điểm nhấn văn hóa, motif tint. Không dùng làm background lớn. Gợi **gỗ cổ, sơn son thếp vàng cũ, đồ thủ công truyền thống** — không phải vàng kim luxury/jewelry.
  - **Lý do đổi (theo review):** Lacquer Gold cũ (`#b98a3a`) thiên về luxury / jewelry / premium branding hơn là di sản Việt và thủ công truyền thống. Accent mới kéo về phía đất và gỗ.
  - **Alt để thử nghiệm:** `#a06b2d` (`aged-lacquer-alt`) — sắc tương đương, ấm hơn nhẹ; chọn 1 trong 2 sau khi test trên UI thật.

### Neutral

- **Ink** (`#000000` / oklch(0% 0 0)): Headlines, primary buttons, selection highlight bg, logo wordmark.
- **Background** (`#ffffff` / oklch(100% 0 0)): Body canvas, main sections, card interiors.
- **Muted Stone** (`#6f6f6f` / oklch(52% 0 0)): Body prose, nav inactive links, italic emphasis trong display headings. Đủ contrast ≥4.5:1 trên trắng.
- **Soft Surface** (`#f4f0e8` / oklch(95% 0.02 85)): Story preview card background only — không dùng làm page body. Warm tint có chủ ý, không cream-default toàn site.

### Named Rules

**The Lacquer Accent Rule.** Aged Lacquer xuất hiện trên ≤10% bất kỳ màn hình nào. Sự hiếm của nó là điểm — như nét sơn son thếp vàng trên đồ gỗ cũ.

**The Paper Canvas Rule.** Body background là giấy off-white ấm (`#f6f2ea`) phủ grain mờ (giấy dó) — nhám nhẹ, hơi ngả màu, không phải trắng tinh và cũng không phải cream/sand bão hòa. Card interiors giữ `#ffffff` để tạo tầng tonal nổi trên giấy. Text giữ contrast AA: muted tối hơn (`#5e5856`) cho đủ ≥4.5:1 trên giấy.

**The 5–10% Heritage Rule.** Tổng diện tích của accent + motif văn hóa Việt giữ trong khoảng 5–10% mỗi màn hình. Đủ để "đọc" ra Việt Nam, không đủ để biến thành website du lịch nhà nước hay bảo tàng truyền thống.

## Vietnamese Cultural Motifs

Lớp visual language làm rõ bản sắc Việt (vấn đề ưu tiên 2 trong review). Dùng **gợi**, không trang trí dày; áp dụng ở mức nhẹ và có chủ ý.

### Suggested Motifs

- **Hoa văn Đông Sơn** — đường viền, divider, hoặc texture overlay rất mờ.
- **Hoa văn chạm đá Văn Miếu** — họa tiết section break, khung trang trọng.
- **Cửa gỗ Hội An** — pattern lưới cho frame ảnh / khung card.
- **Bóng mái ngói truyền thống** — silhouette ở chân section hoặc footer.
- **Hoa văn gốm Bát Tràng** — accent nhỏ, icon, hoặc viền card collection.
- **Texture giấy dó / giấy thủ công** — nền surface nhẹ thay cho gradient phẳng.

### Usage Rules

- **Diện tích:** ~5–10% mỗi màn hình (gộp chung với accent — xem _The 5–10% Heritage Rule_).
- **Tông màu:** vẽ motif bằng Aged Lacquer hoặc Ink ở opacity thấp; không màu chói.
- **Vai trò:** divider, frame ảnh, texture surface, footer silhouette — **không** dán đè lên body text.
- **A11y:** motif là trang trí → `aria-hidden`, không giảm contrast của text bên trên.
- **Tránh:** dùng motif như icon-trên-mọi-heading hay sticker dày đặc kiểu website du lịch.

## Typography

**Display Font:** Cormorant Garamond (Georgia, Times New Roman fallback)
**Body Font:** Be Vietnam Pro (Segoe UI, system-ui fallback)

**Character:** Serif editorial chậm cho headlines tiếng Việt; sans humanist rõ ràng cho body và UI. Cặp font trên trục contrast (serif + sans), cả hai hỗ trợ Vietnamese diacritics.

### Hierarchy

- **Display** (400, clamp 3rem–6rem, line-height 0.95, letter-spacing −0.04em): Hero h1 only. `text-wrap: balance`. Italic `em` dùng Muted Stone cho emphasis phrases.
- **Headline** (400, clamp 2.5rem–4.5rem, line-height 0.95, letter-spacing −0.03em): Section h2 ("Biến sản phẩm...", "Bộ sưu tập khởi đầu").
- **Title** (400, clamp 2rem–3rem, line-height 1.1): Card place names (Hồ Gươm, Hội An), story card titles.
- **Body** (400, 1rem/1.125rem, line-height 1.625): Prose paragraphs, max-width ~42rem (max-w-2xl). `text-wrap: pretty`.
- **Label** (600, 0.75rem, letter-spacing 0.32em, uppercase): Section kickers ("From object to experience", "First collection"). Một kicker deliberate per section — không eyebrow mọi block.

### Named Rules

**The Vietnamese First Rule.** Mọi display size phải test với copy tiếng Việt có dấu ở mobile. Letter-spacing floor −0.04em; không tighter. Hero clamp max 6rem.

**The One Kicker Rule.** Mỗi section tối đa một uppercase tracked label. Nhiều hơn = AI eyebrow grammar.

## Elevation

Hybrid tonal + lifted. Surfaces chủ yếu phẳng với border `rgba(0,0,0,0.1)` và bg semi-transparent. Shadow xuất hiện có chủ ý để cards cảm giác như vật thể trên bàn trưng bày — nâng thêm khi hover.

Depth cũng đến từ: `backdrop-blur-md` trên navbar và ghost buttons (functional, không decorative glassmorphism); gradient overlay trên video background; tonal shift từ white → soft-surface cards.

### Shadow Vocabulary

- **Ambient card** (`0 25px 50px -12px rgba(0,0,0,0.05)`): Collection cards, story preview at rest (`shadow-xl shadow-black/5`).
- **Featured lift** (`0 25px 50px -12px rgba(0,0,0,0.05)` at larger spread): Story hero card (`shadow-2xl shadow-black/5`).
- **Inner recess** (`inset 0 2px 4px rgba(0,0,0,0.06)`): QR placeholder box.
- **Hover lift** (`transform: translateY(-4px)`): Collection cards on hover — structural, not shadow-only.

### Named Rules

**The Lifted Object Rule.** Cards rest với shadow ambient nhẹ. Hover thêm translateY −4px hoặc scale 1.03 trên buttons — phản hồi vật lý, không bounce.

**The No-Glass-Default Rule.** Backdrop blur chỉ trên navbar và ghost CTA khi cần đọc trên video. Không glassmorphism trang trí trên mọi card.

## Components

### Buttons

- **Shape:** Full pill (`rounded-full`, 9999px)
- **Primary:** Ink bg, white text, padding 1.25rem 3.5rem (hero) or 0.625rem 1.5rem (nav CTA). Font body, no uppercase.
- **Hover / Focus:** `scale(1.03)`, 300ms ease-out transform. No color shift on primary.
- **Secondary / Ghost:** `bg-white/60`, `border border-black/15`, `backdrop-blur-md`, ink text. Same hover scale.

### Cards / Containers

- **Corner Style:** Large radius 2rem (`rounded-[2rem]`) for feature cards; 1.5rem for inner image frames.
- **Background:** Collection cards `white/70`; story card `soft-surface/80`.
- **Shadow Strategy:** Ambient at rest; hover lift per Elevation section.
- **Border:** `1px solid rgba(0,0,0,0.1)` — full border, never side-stripe accent.
- **Internal Padding:** 1.5rem (story) to 1.75rem (collection).

### Navigation

- **Style:** Sticky header, `bg-white/70 backdrop-blur-md`, max-width 80rem centered.
- **Logo:** Display font 1.875rem, ink, ® superscript at 0.45em.
- **Links:** Body 0.875rem; active ink, inactive muted → ink on hover.
- **CTA:** Nav pill button (primary small variant).
- **Mobile:** Nav links hidden below md; CTA remains visible.

### Step Rows (signature)

- **Style:** Horizontal pill rows with numbered circle (ink bg, white numeral) + label text.
- **Use:** Real 3-step sequence ("Chọn mô hình → Quét QR → Khám phá") — numbers earn their place here.

### Video Hero (signature)

- **Layout:** Full-bleed looping video (`object-fit: cover`) làm nền hero ở đầu trang; copy overlay căn dưới-trái, text sáng (#fff) + accent Aged Lacquer Light (`#e0b878`).
- **Scrim:** Gradient kép (trái→phải + trên→dưới) tông `rgba(10,7,3,…)` đảm bảo contrast cho headline/nav và fade đáy hero về giấy.
- **Poster:** `poster` tĩnh (ảnh địa danh) hiển thị khi video chưa load / khi reduced-motion.
- **A11y:** Nút pause/play luôn hiện (WCAG — kiểm soát moving content); `prefers-reduced-motion` → không autoplay, dừng ở poster. Video `aria-hidden`, muted, loop, playsinline.
- **Showcase:** Ngay sau video hero là figure still-life mô hình (vật thể vật lý) trên giấy — nối từ "câu chuyện" (video) về "vật thể" (sản phẩm).

### Hero (clarity-first)

Hero phải đẹp **và** rõ ràng — trả lời trong vài giây đầu: _cái gì / khác gì / làm gì tiếp_ (xem PRODUCT.md › Hero Requirements).

- **H1 (display):** câu định vị sản phẩm, không chỉ slogan thơ. Gợi ý: "Vietnamese Souvenir Models Made from Recycled Plastic".
- **Subhead (body):** một dòng hành động — "Scan the QR code to discover the stories behind each destination."
- **CTA:** ít nhất một primary rõ ràng (Xem bộ sưu tập / Mua / Quét QR) ở fold đầu.
- **Cân bằng:** giữ chất editorial chậm, nhưng không hi sinh sự rõ ràng về sản phẩm.

### Collection Grid (signature)

Tổ chức sản phẩm theo **bộ sưu tập** (Vietnam Heritage Collection), không phải list món rời.

- **Layout:** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` — responsive không cần breakpoint thủ công.
- **Card:** dùng `card-collection` (`white/70`, `rounded-[2rem]`, full border `black/10`, ambient shadow, hover translateY −4px).
- **Nội dung mỗi card:** ảnh/model địa danh, tên (Title font), một dòng mô tả ngắn, badge bộ sưu tập tùy chọn.
- **Items khởi đầu:** Hồ Gươm · Chùa Một Cột · Hội An · Huế · Tràng An · Vịnh Hạ Long.
- **Tương lai:** trạng thái "đã sưu tập / chưa" (progress) — Priority 3.

### QR Story Page (product surface)

Trang mỗi địa danh, thiết kế như sản phẩm riêng để tạo cảm giác "mở khóa câu chuyện". Thứ tự section chuẩn:

1. **Hero** — tên địa danh + ảnh nổi bật (full-bleed, Display title).
2. **Story Timeline** — lịch sử hình thành (dùng Step Rows / timeline dọc).
3. **Interactive Map** — vị trí thực tế (frame bo góc 1.5rem, full border).
4. **Fun Facts** — 3–5 mục, mỗi mục một ý ngắn (không card grid giống hệt nhau).
5. **Audio Story** — player ~1 phút, có control (không autoplay).
6. **Mini Quiz** — 3 câu hỏi nhanh, phản hồi tức thì.
7. **Related Destinations** — gợi ý địa danh khác trong bộ sưu tập (dẫn ngược về Collection).

Register của trang này có thể chuyển sang `product` khi build.

### Comparison Section (USP)

So sánh trực tiếp để làm rõ điểm khác biệt — phục vụ pitch / khảo sát / nhà đầu tư.

- **Layout:** hai cột (Traditional Souvenir vs Hồn Tích Đất Việt), không dùng side-stripe border; phân tách bằng full border / background tint.
- **Nội dung:** trang trí-vs-kể chuyện, không story-vs-QR experience, giá trị giáo dục, nhựa thường-vs-tái chế.
- **Nhấn mạnh:** cột Hồn Tích Đất Việt dùng accent Aged Lacquer nhẹ ở tiêu đề/checkmark, không flood.

## Do's and Don'ts

### Do:

- **Do** use Be Vietnam Pro for all Vietnamese body copy and UI labels.
- **Do** use Cormorant Garamond for display headlines with `text-wrap: balance`.
- **Do** keep Aged Lacquer (`#9e6a2e`) for deliberate accent moments only (section kickers, rare highlights, motif tint).
- **Do** add Vietnamese cultural motifs at ~5–10% of the screen — gợi bản sắc Việt, `aria-hidden`.
- **Do** make the hero answer _what / why different / what next_ — đẹp nhưng phải rõ sản phẩm.
- **Do** organize products as a collection (Vietnam Heritage Collection), not loose items.
- **Do** use warm off-white paper (`#f6f2ea`) + faint grain as page canvas; keep card interiors `#ffffff` for tonal layering.
- **Do** test muted text `#5e5856` against paper `#f6f2ea` for WCAG AA (≥4.5:1).
- **Do** provide `prefers-reduced-motion: reduce` alternatives for all entrance animations.
- **Do** use full borders (`border-black/10`) or background tints — never side-stripe accents.

### Don't:

- **Don't** use SaaS landing template patterns: gradient hero, metric cards, eyebrow on every section, startup generic layout.
- **Don't** look like a cheap souvenir shop: garish colors, clutter, fonts that break Vietnamese diacritics.
- **Don't** ship AI slop: cream/sand body bg as default, identical card grids, numbered section markers (01/02/03) without real sequence meaning.
- **Don't** use decorative glassmorphism, gradient text (`background-clip: text`), or `border-left` accent stripes.
- **Don't** pair two similar sans-serifs or push hero type above 6rem clamp max.
- **Don't** use Instrument Serif or other Latin-only display fonts for Vietnamese headlines.
- **Don't** revert the accent to luxury/jewelry gold (`#b98a3a`); keep the aged-wood lacquer tone.
- **Don't** overload motifs into a state-tourism / traditional-museum look — stay within 5–10%.
- **Don't** let the QR page feel like a generic info page — it must feel like unlocking a story.
