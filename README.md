# TPN Audit & Consulting — เว็บไซต์บริษัท

เว็บไซต์ 2 ภาษา (ไทย/อังกฤษ) สร้างด้วย [Astro](https://astro.build) + Tailwind CSS v4

**Online:** https://tpnaudit.github.io/tpn-audit/

## รันบนเครื่อง

```bash
npm install
npm run dev      # เปิด http://localhost:4321/tpn-audit/
npm run build    # build ลงโฟลเดอร์ dist/
```

## วิธีแก้เนื้อหา

เนื้อหา **ทั้งเว็บ** อยู่ในไฟล์เดียว: [`src/lib/i18n.ts`](src/lib/i18n.ts)

| อยากแก้อะไร | แก้ตรงไหน |
|---|---|
| เบอร์โทร / LINE / อีเมล / ที่อยู่ / เวลาทำการ | `site` ด้านบนสุดของไฟล์ (จุดที่มี `TODO`) |
| ตัวเลขปีประสบการณ์ / จำนวนลูกค้า | `th.home.trust` และ `en.home.trust` |
| ข้อความหน้าแรก / บริการ / FAQ / About | object `th` (ไทย) และ `en` (อังกฤษ) |
| Google Maps | `site.mapEmbed` — ไปที่ Google Maps > Share > Embed a map แล้ว copy ค่าใน `src="..."` มาวาง |
| สีแบรนด์ | `src/styles/global.css` (บล็อก `@theme`) |
| โลโก้ | ตอนนี้เป็น text logo — ถ้ามีไฟล์โลโก้ ให้วางใน `public/` แล้วแก้ `src/components/Header.astro` |

แก้เสร็จแล้ว commit + push → เว็บอัปเดตอัตโนมัติใน 1–2 นาที (ผ่าน GitHub Actions)

```bash
git add -A
git commit -m "update content"
git push
```

## Deploy

Deploy อัตโนมัติด้วย GitHub Actions (`.github/workflows/deploy.yml`) ทุกครั้งที่ push ขึ้น branch `main` — ไม่ต้องทำอะไรเพิ่ม

### ถ้าจะย้ายไป Vercel

1. สมัคร/ล็อกอิน [vercel.com](https://vercel.com) แล้วกด **Import Project** เลือก repo นี้
2. Vercel ตรวจพบ Astro อัตโนมัติ — กด Deploy ได้เลย
3. **สำคัญ:** ลบบรรทัด `base: '/tpn-audit'` ใน `astro.config.mjs` และแก้ `site` เป็นโดเมนใหม่ก่อน

## ต่อโดเมนของตัวเอง (เช่น tpnaudit.com)

1. จดโดเมนที่ Cloudflare / Namecheap
2. ใน repo GitHub: **Settings > Pages > Custom domain** ใส่โดเมน แล้วตั้ง DNS ตามที่ GitHub แนะนำ (CNAME ชี้ไป `tpnaudit.github.io`)
3. แก้ `astro.config.mjs`: เปลี่ยน `site` เป็น `https://tpnaudit.com` และ **ลบบรรทัด `base: '/tpn-audit'`**
4. แก้ `site.url` ใน `src/lib/i18n.ts` ให้ตรงกัน แล้ว push

## ฟอร์มติดต่อ

ตอนนี้ปุ่ม "ส่งข้อความ" เปิดโปรแกรมอีเมลพร้อมข้อความที่กรอก (mailto) — ไม่ต้องมี backend

ถ้าอยากให้ส่งเข้าอีเมลอัตโนมัติโดยไม่เปิดโปรแกรมเมล: สมัคร [Formspree](https://formspree.io) (ฟรี 50 ข้อความ/เดือน) แล้วแก้ฟอร์มใน `src/components/pages/ContactPage.astro` เป็น `<form action="https://formspree.io/f/XXXX" method="POST">` และลบ `<script>` ท้ายไฟล์

## โครงสร้างโปรเจกต์

```
src/
├── lib/i18n.ts              ← เนื้อหาทั้งหมด (ไทย + อังกฤษ)
├── styles/global.css        ← สีแบรนด์ + ฟอนต์
├── layouts/Base.astro       ← <head>, SEO, Schema.org
├── components/
│   ├── Header.astro / Footer.astro
│   └── pages/               ← เทมเพลตหน้า (ใช้ร่วม 2 ภาษา)
└── pages/                   ← routes: /, /services, /about, /contact + /en/...
```
