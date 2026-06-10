# Sanity Studio — Tạo Product content (Bước 4)

Hướng dẫn nhập **5 sản phẩm** vào Sanity Studio sau khi schema đã có trong code.

## Trước khi mở Studio

### 1. Tạo `.env.local` (nếu chưa có)

Copy từ `.env.example` và điền **Project ID** từ [sanity.io/manage](https://www.sanity.io/manage):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xy
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 2. CORS (đã làm ở Bước 3)

Dashboard → **API** → **CORS origins** phải có `http://localhost:3000`.

### 3. Chạy dev server

```bash
npm run dev
```

Mở **http://localhost:3000/studio** → đăng nhập tài khoản Sanity.

---

## Giao diện Studio

Sidebar trái → **Product** → nút **+** (Create new Product).

Schema khớp type `CompanyProduct` trong `lib/types/company.ts`:

| Field trong Studio | Bắt buộc | Mô tả |
|--------------------|----------|--------|
| **Name** | Có | Tên hiển thị (vd: `AQUILA-2`) |
| **Slug** | Có | URL: `/product/{slug}` — bấm **Generate** từ Name rồi **sửa tay** cho đúng bảng bên dưới |
| **Category** | Có | Drone / Station / Software |
| **Tagline** | Có | Câu mô tả ngắn dưới tên |
| **Description** | Có | Đoạn mô tả chính |
| **Features** | Không | Danh sách bullet — mỗi dòng một item |
| **Applications** | Không | Use cases |
| **Hero Image** | Khuyến nghị | Ảnh chính trên card + trang detail |
| **Gallery** | Không | Chỉ AQUILA-2 và argosALES có gallery |
| **Key Specs** | Không | Bảng spec (Label + Value) |
| **Detail Sections** | Không | Các section mở rộng (title, description, specs, image) |
| **Highlighted on homepage** | Không | Bật cho sản phẩm nổi bật trên trang chủ |

### Quy trình mỗi Product

1. **Create** → điền tab **Content**
2. Tab **Media** → upload ảnh từ `public/images/products/` (đường dẫn ghi trong bảng từng sản phẩm)
3. Tab **Details** → Key Specs + Detail Sections
4. Tab **Settings** → **Highlighted** nếu cần
5. Góc phải → **Publish** (draft không hiện trên API public)

> **Slug quan trọng:** Phải khớp URL hiện tại. Ví dụ `AQUILA-2+` → slug `aquila-2-plus`, không phải `aquila-2`.

---

## Sản phẩm 1: AQUILA-2

| Field | Giá trị |
|-------|---------|
| Name | `AQUILA-2` |
| Slug | `aquila-2` |
| Category | Drone |
| Highlighted | ✅ Bật |
| Hero Image | `public/images/products/sub_top_prd01.png` |
| Gallery (6 ảnh, đúng thứ tự) | `prd01_01_01.png` … `prd01_01_06.png` |

**Tagline:** Small drone with outstanding performance in various environments

**Description:** AQUILA-2 is efficiently used in industrial sites due to its excellent flight time and stability. Small but effective data acquisition is possible depending on the payload configured by the user.

**Features** (6 items — copy từng dòng vào Studio):

- Waterproof and wind-resistant features for stability and long flight times
- Dual GPS modules for precise location even without RTK
- Quick-release payload system supporting FHD to 4K EO/IR cameras
- Simple external I/O ports for easy payload connection
- RTK and DUAL GPS for high precision mapping data
- Compatible with Drone Stations for autonomous continuous missions

**Applications** (4 items):

- Industrial field operations
- Multipurpose missions with configurable payloads
- High precision mapping
- Station-integrated autonomous flights

**Key Specs:**

| Label | Value |
|-------|-------|
| Maximum takeoff weight | 4kg |
| Wind resistance | 15m/s |
| Waterproof Rating | IP53 |
| Maximum flight time | 67 minutes |
| Mission equipment attachment | Maximum 1.5kg |

**Detail Sections** (4 sections):

1. **Stability** — mô tả dài trong `lib/data/companyContent.ts` — ảnh `prd01_01_08.png`
2. **Long flights and dual GPS** — specs: Maximum flight time `67 minutes`, Enhanced Flight Stability `Dual GPS Support` — ảnh `prd01_01_09.png`
3. **The Most Convenient Way for Users, Customization** — spec: Mission equipment attachment `Maximum 1.5kg` — ảnh `prd01_01_10.png`
4. **Integration with the Station (Optional)** — không specs — ảnh `prd01_01_12.png`

Nội dung đầy đủ: mở `lib/data/companyContent.ts`, tìm `slug: "aquila-2"`.

---

## Sản phẩm 2: AQUILA-2+

| Field | Giá trị |
|-------|---------|
| Name | `AQUILA-2+` |
| Slug | `aquila-2-plus` |
| Category | Drone |
| Highlighted | Tắt |
| Hero Image | `sub_top_prd02.png` |
| Gallery | *(để trống)* |

**Tagline:** Drone and AI integration

**Key Specs:** Compute / Connectivity / AI / Navigation — xem `companyContent.ts` (`slug: "aquila-2-plus"`).

**Detail Sections:** 3 sections (Onboard AI, 5G Connection, AI Features of the Edge Device) — không có ảnh trong data gốc.

---

## Sản phẩm 3: AQUILA-3F

| Field | Giá trị |
|-------|---------|
| Name | `AQUILA-3F` |
| Slug | `aquila-3f` |
| Category | Drone |
| Highlighted | Tắt |
| Hero Image | `sub_top_prd03.png` |

**Detail Sections:** 3 sections (Storage Efficiency, Long flights and dual GPS, Integration with the Station).

---

## Sản phẩm 4: CUNA2

| Field | Giá trị |
|-------|---------|
| Name | `CUNA2` |
| Slug | `cuna2` |
| Category | Station |
| Highlighted | ✅ Bật |
| Hero Image | `sub_top_prd04.png` |

**Detail Sections:** 6 sections (Automatic Landing…, Basic Mission…, Alternating…, Sequential Hopping…, Push-Pull…, Anywhere on Earth) — không ảnh.

---

## Sản phẩm 5: argosALES

| Field | Giá trị |
|-------|---------|
| Name | `argosALES` |
| Slug | `argosales` |
| Category | Software |
| Highlighted | ✅ Bật |
| Hero Image | `sub_top_prd10.png` |
| Gallery | `prd03_01.png`, `prd03_02.png`, `prd03_03.png` |

**Detail Sections:** 4 sections — 3 section đầu có ảnh gallery tương ứng; section **BirdCom** không có ảnh.

---

## Checklist sau khi nhập xong

- [ ] Đủ **5** Product documents
- [ ] Mỗi document trạng thái **Published** (icon xanh, không phải Draft)
- [ ] Slug đúng: `aquila-2`, `aquila-2-plus`, `aquila-3f`, `cuna2`, `argosales`
- [ ] 3 sản phẩm **Highlighted**: AQUILA-2, CUNA2, argosALES

Kiểm tra trên Sanity Dashboard → **Vision** (GROQ):

```groq
*[_type == "product"]{ name, "slug": slug.current, category, highlighted }
```

Kết quả mong đợi: 5 documents.

---

## Bước tiếp theo (code — chưa làm)

Sau khi content đã Publish trên Studio:

1. Thêm `lib/sanity/client.ts` + queries GROQ
2. Cập nhật `lib/adapters/company.ts` đọc từ Sanity thay vì `companyContent.ts`
3. Sửa pages Product fetch async + `next.config.ts` cho `cdn.sanity.io`

Bạn có thể báo khi đã nhập xong 5 products để triển khai phần kết nối website.

## Lỗi thường gặp

| Vấn đề | Cách xử lý |
|--------|------------|
| Studio trắng / lỗi config | Kiểm tra `NEXT_PUBLIC_SANITY_PROJECT_ID` trong `.env.local`, restart `npm run dev` |
| Không đăng nhập được | Thêm CORS `http://localhost:3000` |
| Không thấy menu Product | Hard refresh `/studio`; đảm bảo schema đã deploy (code mới pull/build) |
| API trả về rỗng | Document chưa **Publish** |
