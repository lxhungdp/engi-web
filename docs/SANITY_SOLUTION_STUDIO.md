# Sanity Studio — Nhập Solution content

Hướng dẫn nhập **4 solution blocks** vào Studio, khớp data trong `lib/data/companyContent.ts`.

## Mở Studio

1. `npm run dev`
2. **http://localhost:3000/studio/structure**
3. Sidebar → **Solution** → **+ Create**

## Các field trong Studio

| Field | Tab | Bắt buộc | Hiển thị trên web |
|-------|-----|----------|-------------------|
| **Name** | Content | ✅ | Tiêu đề block |
| **Slug** | Content | ✅ | Anchor `#slug` trên `/solution` |
| **Description** | Content | ✅ | Đoạn mô tả chính |
| **Problem / Context** | Content | | Đoạn phụ dưới description |
| **Benefits** | Content | | Bullet list |
| **Related Products** | Content | | Dòng "Related Products: …" |
| **Outcome** | Content | | Lưu CMS (chưa hiện UI) |
| **Hero Image** | Media | Khuyến nghị | Ảnh bên phải block |
| **YouTube Videos** | Media | | Embed video + mô tả |
| **Icon** | Settings | ✅ | Icon lucide (Shield, Route…) |
| **Display Order** | Settings | ✅ | Thứ tự trên trang (1–4) |
| **Featured** | Settings | | Đánh dấu nổi bật |

Sau mỗi solution → **Publish**.

Ảnh upload từ: `public/images/solutions/`

---

## Block 1 — Public Safety

| Field | Giá trị |
|-------|---------|
| Name | `Public Safety` |
| Slug | `public-safety` |
| Display Order | `1` |
| Icon | `Shield (Public Safety)` |
| Featured | ✅ Bật |
| Hero Image | `sol_bg01.png` |

**Description:**
We help ensure maximum safety based on aerial data collected through drone technology

**Problem / Context:**
A rapid situational awareness based on aviation data allows for effective response to emergency missions such as wildfire detection and nighttime surveillance.

**Benefits** (3 items):
1. Rapid Emergency Response — Quickly detecting emergency situations allows for prompt initial response, aiding in safety.
2. Information Collection and Analysis — Equipped with high-resolution and thermal cameras, drones can swiftly and accurately assess the location and scale of fires.
3. Surveillance Tool — Drones serve as crucial tools for surveillance teams, ensuring safety and enabling faster responses.

**Related Products:**
AQUILA-2 with thermal imaging camera (ZT30 payload), CUNA2 or PORTUS-P station (optional)

**Outcome** (optional):
Real-time monitoring and quicker response in the event of wildfires or emergencies.

**YouTube Videos** (2 items):

| YouTube ID | Title |
|------------|-------|
| `D2vdLuStLpc` | Fire Monitoring and Crime Prevention (Featured Video - Rainbow) |
| `0IavSxgLe9s` | Utilizing Drones for Fire Monitoring and Crime Prevention (Featured Video - White Hot) |

**Video 1 description:**
When relying solely on CCTV or security personnel, surveillance coverage may be limited. Especially in large areas, it can be difficult to effectively monitor hard-to-reach areas. During nighttime patrols, it becomes challenging to accurately detect objects or activities within the field of view, resulting in delayed responses to crime or safety issues.

**Video 2 description:**
By using thermal cameras, drones can detect fires or crimes from afar. This helps overcome blind spots of CCTV and accurately identifies crime scenes or fire locations.

---

## Block 2 — Highway Surveillance

| Field | Giá trị |
|-------|---------|
| Name | `Highway Surveillance` |
| Slug | `highway-surveillance` |
| Display Order | `2` |
| Icon | `Route (Highway)` |
| Featured | Tắt |
| Hero Image | `sol_bg02.png` |

**Description:**
Provide accurate and timely highway information for faster safety measures

**Problem / Context:**
We are implementing a control system that utilizes automatic charging stations and autonomous drones deployed near highways for regular patrols, surveillance activities, and real-time monitoring of road conditions.

**Benefits** (3 items):
1. Fast and Efficient Response — Swiftly detect accidents, traffic congestion, road conditions, etc., while moving quickly through long highway sections.
2. Automated Functions — Capable of performing specific tasks autonomously, enabling control without operator intervention.
3. Economic Efficiency — Cost-effective operations enable high-quality surveillance and management.

**Related Products:**
AQUILA-2 with ZR30 payload and Speaker, CUNA2 or PORTUS-M+ station (optional)

**Outcome:**
Real-time monitoring to maintain highway safety and prevent secondary accidents.

**YouTube Videos** (1 item):

| YouTube ID | Title |
|------------|-------|
| `ba3XXrwhui4` | Utilization Video: Highway Traffic Monitoring |

**Description:**
Drones equipped with speakers and searchlights enable on-site control before emergency vehicles arrive. Prior to the arrival of the response team, drones capture data using cameras such as thermal imaging and multispectral cameras to quickly assess situations and support planning in challenging disaster environments.

---

## Block 3 — Facility Monitoring

| Field | Giá trị |
|-------|---------|
| Name | `Facility Monitoring` |
| Slug | `facility-monitoring` |
| Display Order | `3` |
| Icon | `Building (Facility)` |
| Featured | ✅ Bật |
| Hero Image | `sol_bg03.png` |

**Description:**
Utilize automated patrol drones to conduct regular patrols and monitor the site in real-time

**Problem / Context:**
Large industrial sites require consistent patrol coverage and real-time monitoring.

**Benefits:** *(để trống — data gốc không có)*

**Related Products:**
Automated patrol drones with CUNA2 fixed station for scheduled missions.

**Outcome:**
Regular patrols and real-time site monitoring with reduced manual setup.

**YouTube Videos:** *(để trống)*

---

## Block 4 — Aerial Surveying and Mapping

| Field | Giá trị |
|-------|---------|
| Name | `Aerial Surveying and Mapping` |
| Slug | `aerial-surveying-and-mapping` |
| Display Order | `4` |
| Icon | `Map (Surveying)` |
| Featured | Tắt |
| Hero Image | `sol_bg04.png` |

**Description:**
Mapping automation and digitization using drone solutions

**Problem / Context:**
The drone performs mapping tasks and captures photos at each flight location, leaving behind site survey images to track construction progress and completion rates.

**Benefits** (3 items):
1. Innovative Approach: Drones — Using drones offers the capability to collect data even in challenging and hazardous environments.
2. Enhanced Efficiency — It improves the efficiency of geographical information gathering and simplifies data processing.
3. High-Resolution Mapping and Modeling — Drones can be equipped with high-resolution cameras and sensors to capture detailed information.

**Related Products:**
EasyMapper-C with AQUILA-3F platform

**Outcome:**
Accurate maps and 3D models for construction progress tracking.

**YouTube Videos:** *(để trống)*

---

## Checklist

- [ ] 4 Solution documents
- [ ] Slug đúng 4 giá trị trên
- [ ] Display Order: 1, 2, 3, 4
- [ ] Hero Image đã upload
- [ ] Tất cả **Published**

**Vision query:**
```groq
*[_type == "solution"] | order(sortOrder asc) {
  name, "slug": slug.current, sortOrder, icon, "videoCount": count(videos)
}
```

## Kiểm tra website

- http://localhost:3000/solution
- http://localhost:3000/solution#public-safety
- Trang chủ — preview solution cards
