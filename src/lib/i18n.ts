// ─────────────────────────────────────────────────────────────
// เนื้อหาเว็บไซต์ทั้งหมดอยู่ในไฟล์นี้ไฟล์เดียว — แก้ข้อความได้เลย
// ข้อมูลติดต่อ / ที่อยู่ / ตัวเลขสถิติ แก้ที่ `site` ด้านล่าง
// ─────────────────────────────────────────────────────────────

export type Lang = 'th' | 'en';

export const site = {
  nameTh: 'ทีพีเอ็น ออดิท แอนด์ คอนซัลติ้ง',
  nameEn: 'TPN Audit & Consulting Co., Ltd.',
  tagline: 'Trusted Professional Network',
  phone: '0843756668',
  phoneDisplay: '084-375-6668',
  lineId: '0843756668',
  lineUrl: 'https://line.me/ti/p/~0843756668',
  email: 'thanapoom.tpnaudit@gmail.com',
  // TODO: แก้ที่อยู่จริงของบริษัท
  addressTh: 'กรุงเทพมหานคร ประเทศไทย',
  addressEn: 'Bangkok, Thailand',
  // TODO: แก้เวลาทำการจริง
  hoursTh: 'จันทร์–ศุกร์ 9:00–18:00 น.',
  hoursEn: 'Mon–Fri 9:00–18:00',
  // TODO: ใส่ลิงก์ Google Maps embed จริง (Share > Embed a map > copy src)
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496013.9895867449!2d100.34635536718752!3d13.724893800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecde4c04b2f%3A0xc4b2b264a75a8b4a!2sBangkok!5e0!3m2!1sen!2sth!4v1700000000000',
  url: 'https://tpnaudit.github.io/tpn-audit',
  // สถิติหน้าแรก — แก้ตัวเลขได้ที่นี่
  stats: {
    years: '10+',
    clients: '100+',
  },
} as const;

const th = {
  langName: 'ไทย',
  switchLabel: 'EN',
  nav: {
    home: 'หน้าแรก',
    services: 'บริการ',
    about: 'เกี่ยวกับเรา',
    contact: 'ติดต่อเรา',
    cta: 'ปรึกษาฟรี',
  },
  footer: {
    desc: 'สำนักงานสอบบัญชีโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) ประสบการณ์จาก Big 4 ให้บริการตรวจสอบบัญชี ภาษี และที่ปรึกษาทางการเงินสำหรับธุรกิจทุกขนาด',
    contactHead: 'ติดต่อเรา',
    linksHead: 'เมนู',
    rights: 'สงวนลิขสิทธิ์',
  },
  home: {
    metaTitle: 'TPN Audit & Consulting — สำนักงานสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA)',
    metaDesc:
      'สำนักงานสอบบัญชีคุณภาพ รับตรวจสอบบัญชี ตรวจงบการเงิน TFRS for NPAEs ตรวจสอบกิจการ BOI ที่ปรึกษาภาษีและวางระบบบัญชี โดยทีม CPA ประสบการณ์ Big 4 ราคาเริ่มต้น 5,000 บาท',
    heroKicker: 'Trusted Professional Network',
    heroTitle: 'ความน่าเชื่อถือของงบการเงินคุณ\nคือมาตรฐานของเรา',
    heroSub:
      'สำนักงานสอบบัญชีที่ดูแลโดยผู้สอบบัญชีรับอนุญาต (CPA) โดยตรง ด้วยประสบการณ์จากบริษัทตรวจสอบบัญชีระดับ Big 4 — ตรวจสอบบัญชี ภาษี และที่ปรึกษาทางการเงิน ครบจบในที่เดียว',
    heroCta: 'ปรึกษาฟรี ไม่มีค่าใช้จ่าย',
    heroCta2: 'ดูบริการทั้งหมด',
    trust: [
      { value: '10+', label: 'ปีประสบการณ์วิชาชีพ' },
      { value: '100+', label: 'งานตรวจสอบต่อปี' },
      { value: 'CPA', label: 'ผู้สอบบัญชีรับอนุญาต' },
      { value: 'Big 4', label: 'ประสบการณ์ระดับสากล' },
    ],
    servicesHead: 'บริการของเรา',
    servicesSub: 'ครอบคลุมทุกความต้องการด้านบัญชี ภาษี และการเงินของธุรกิจ',
    servicesMore: 'ดูรายละเอียด',
    whyHead: 'ทำไมต้อง TPN',
    whySub: 'เราตั้งใจให้บริการสอบบัญชีเป็นเรื่องง่ายและคุ้มค่าสำหรับธุรกิจของคุณ',
    why: [
      {
        title: 'ดูแลโดย CPA โดยตรง',
        desc: 'ทุกงานตรวจสอบและเซ็นรับรองโดยผู้สอบบัญชีรับอนุญาตตัวจริง ไม่ส่งต่องานให้บุคคลภายนอก คุณคุยกับผู้รับผิดชอบงานได้โดยตรงตลอดโครงการ',
      },
      {
        title: 'มาตรฐานจาก Big 4',
        desc: 'ทีมงานผ่านประสบการณ์จากบริษัทตรวจสอบบัญชีชั้นนำระดับโลก นำวิธีการทำงานและการควบคุมคุณภาพระดับสากลมาใช้กับงานทุกขนาด',
      },
      {
        title: 'ตอบเร็ว ไม่ทิ้งงาน',
        desc: 'ติดต่อได้ทั้งโทรศัพท์และ LINE ตอบคำถามภายใน 24 ชั่วโมง วางแผนงานล่วงหน้าชัดเจน แจ้งความคืบหน้าสม่ำเสมอจนถึงวันส่งงบ',
      },
      {
        title: 'เข้าใจ SME ราคายุติธรรม',
        desc: 'ค่าบริการชัดเจนตั้งแต่ต้น เริ่มต้นเพียง 5,000 บาท ประเมินตามปริมาณงานจริง ไม่มีค่าใช้จ่ายแอบแฝง เหมาะกับธุรกิจขนาดเล็กถึงขนาดกลาง',
      },
    ],
    ctaHead: 'พร้อมเริ่มต้นแล้วหรือยัง?',
    ctaSub: 'ปรึกษาเบื้องต้นฟรี ไม่มีข้อผูกมัด — ทักไลน์หรือโทรหาเราวันนี้ เพื่อประเมินราคาที่เหมาะกับธุรกิจของคุณ',
    ctaBtn: 'ติดต่อเราเลย',
  },
  services: {
    metaTitle: 'บริการตรวจสอบบัญชี ภาษี และที่ปรึกษา | TPN Audit & Consulting',
    metaDesc:
      'รับตรวจสอบบัญชี งบการเงิน TFRS for NPAEs ตรวจสอบกิจการ BOI ที่ปรึกษาภาษี วางระบบบัญชีและที่ปรึกษาทางการเงิน โดยผู้สอบบัญชีรับอนุญาต ราคาเริ่มต้น 5,000 บาท',
    head: 'บริการของเรา',
    sub: 'บริการด้านบัญชี ภาษี และการเงินครบวงจร โดยทีมผู้สอบบัญชีรับอนุญาต',
    priceNote: 'ค่าบริการเริ่มต้น 5,000 บาท — ประเมินตามขนาดและความซับซ้อนของกิจการ ขอใบเสนอราคาได้ฟรี',
    priceLabel: 'เริ่มต้น 5,000 บาท',
    faqHead: 'คำถามที่พบบ่อย',
    faqSub: 'รวมคำตอบสำหรับคำถามที่ผู้ประกอบการถามเราบ่อยที่สุด',
    list: [
      {
        id: 'audit',
        title: 'ตรวจสอบบัญชีและงบการเงิน',
        short: 'ตรวจสอบงบการเงินประจำปีตามมาตรฐาน TFRS for NPAEs พร้อมรายงานผู้สอบบัญชีรับอนุญาต',
        body: [
          'บริการตรวจสอบงบการเงินประจำปีสำหรับบริษัทจำกัด ห้างหุ้นส่วนจดทะเบียน และนิติบุคคลทุกประเภท ตามมาตรฐานการรายงานทางการเงินสำหรับกิจการที่ไม่มีส่วนได้เสียสาธารณะ (TFRS for NPAEs) และมาตรฐานการสอบบัญชีที่รับรองทั่วไป งานทุกชิ้นตรวจสอบและลงลายมือชื่อรับรองโดยผู้สอบบัญชีรับอนุญาต (CPA) โดยตรง',
          'ขอบเขตงานครอบคลุมการวางแผนการตรวจสอบ การประเมินความเสี่ยง การตรวจสอบเอกสารประกอบรายการบัญชี การยืนยันยอดลูกหนี้-เจ้าหนี้-เงินฝากธนาคาร การสังเกตการณ์ตรวจนับสินค้าคงเหลือ ไปจนถึงการจัดทำรายงานของผู้สอบบัญชีและงบการเงินฉบับยื่นกรมพัฒนาธุรกิจการค้าและกรมสรรพากร',
          'นอกจากการแสดงความเห็นต่องบการเงินแล้ว เรายังสรุปประเด็นที่พบระหว่างการตรวจสอบ พร้อมข้อเสนอแนะในการปรับปรุงระบบบัญชีและการควบคุมภายใน เพื่อให้งบการเงินปีถัดไปแข็งแรงขึ้น ปิดงบได้เร็วขึ้น และลดความเสี่ยงจากการถูกประเมินภาษีย้อนหลัง',
        ],
      },
      {
        id: 'boi',
        title: 'ตรวจสอบกิจการ BOI',
        short: 'ตรวจสอบและรับรองรายงานสำหรับกิจการที่ได้รับการส่งเสริมการลงทุนจาก BOI',
        body: [
          'กิจการที่ได้รับการส่งเสริมการลงทุนจากคณะกรรมการส่งเสริมการลงทุน (BOI) มีหน้าที่ยื่นรายงานที่ผ่านการตรวจสอบและรับรองจากผู้สอบบัญชีรับอนุญาต เพื่อใช้สิทธิประโยชน์ยกเว้นภาษีเงินได้นิติบุคคลในแต่ละรอบบัญชี ทีมงานของเรามีประสบการณ์ตรวจสอบกิจการ BOI หลากหลายประเภทกิจการ ทั้งภาคการผลิต บริการ และซอฟต์แวร์',
          'บริการครอบคลุมการตรวจสอบแบบคำขอใช้สิทธิและประโยชน์ยกเว้นภาษีเงินได้นิติบุคคล การตรวจสอบการแยกบัญชีระหว่างกิจการที่ได้รับส่งเสริมและไม่ได้รับส่งเสริม การตรวจสอบเงื่อนไขตามบัตรส่งเสริม เช่น ขนาดการลงทุน กำลังการผลิต และรายได้จากโครงการ พร้อมให้คำแนะนำการจัดทำบัญชีแยกโครงการอย่างถูกต้องตั้งแต่ต้นปี',
          'เราทำงานประสานกับฝ่ายบัญชีของกิจการและที่ปรึกษา BOI เพื่อให้การยื่นแบบเป็นไปตามกำหนดเวลา ลดความเสี่ยงจากการถูกเพิกถอนสิทธิประโยชน์ และใช้สิทธิยกเว้นภาษีได้เต็มเม็ดเต็มหน่วยตามที่กฎหมายกำหนด',
        ],
      },
      {
        id: 'tax',
        title: 'บริการที่ปรึกษาภาษี',
        short: 'วางแผนภาษี ตรวจสุขภาพภาษี และดูแลประเด็นภาษีอากรครบทุกประเภท',
        body: [
          'ภาษีเป็นต้นทุนก้อนใหญ่ที่บริหารจัดการได้ หากวางแผนอย่างถูกต้องตั้งแต่ต้น บริการที่ปรึกษาภาษีของเราครอบคลุมภาษีเงินได้นิติบุคคล ภาษีมูลค่าเพิ่ม ภาษีเงินได้หัก ณ ที่จ่าย ภาษีธุรกิจเฉพาะ และอากรแสตมป์ โดยทีมงานที่เข้าใจทั้งมุมกฎหมายภาษีและมุมปฏิบัติจริงของธุรกิจ',
          'เราให้บริการตรวจสุขภาพภาษี (Tax Health Check) เพื่อค้นหาความเสี่ยงก่อนที่กรมสรรพากรจะพบ วางแผนภาษีสำหรับธุรกรรมสำคัญ เช่น การจ่ายเงินปันผล การปรับโครงสร้างกิจการ การทำสัญญากับคู่ค้าต่างประเทศ รวมถึงตอบข้อหารือประเด็นภาษีที่ซับซ้อนพร้อมอ้างอิงข้อกฎหมายและแนววินิจฉัยที่เกี่ยวข้อง',
          'กรณีถูกตรวจสอบหรือได้รับหนังสือเชิญพบจากกรมสรรพากร เราช่วยเตรียมเอกสารชี้แจง วิเคราะห์ประเด็น และให้คำปรึกษาตลอดกระบวนการ เพื่อให้กิจการเสียภาษีอย่างถูกต้องในจำนวนที่เหมาะสม ไม่ขาดและไม่เกินกว่าที่กฎหมายกำหนด',
        ],
      },
      {
        id: 'advisory',
        title: 'วางระบบบัญชีและที่ปรึกษาทางการเงิน',
        short: 'ออกแบบระบบบัญชี ผังบัญชี และรายงานทางการเงินที่ใช้ตัดสินใจได้จริง',
        body: [
          'ระบบบัญชีที่ดีไม่ใช่แค่บันทึกให้ครบ แต่ต้องให้ข้อมูลที่ผู้บริหารใช้ตัดสินใจได้ทันเวลา เราให้บริการวางระบบบัญชีตั้งแต่การออกแบบผังบัญชี กำหนดขั้นตอนการทำงานของเอกสาร (Document Flow) การควบคุมภายในที่จำเป็น ไปจนถึงการเลือกและติดตั้งโปรแกรมบัญชีที่เหมาะกับขนาดธุรกิจ',
          'สำหรับกิจการที่เติบโตเร็ว เราช่วยยกระดับจากการทำบัญชีเพื่อยื่นภาษี ไปสู่การมีรายงานผลประกอบการรายเดือน งบกระแสเงินสด และตัวชี้วัดทางการเงินที่สำคัญ เพื่อให้เจ้าของกิจการเห็นภาพธุรกิจของตัวเองชัดเจนขึ้น วางแผนกำไรและสภาพคล่องได้ล่วงหน้า',
          'นอกจากนี้ยังให้คำปรึกษาทางการเงินเฉพาะเรื่อง เช่น การเตรียมงบการเงินเพื่อขอสินเชื่อธนาคาร การจัดทำประมาณการทางการเงิน (Financial Projection) และการเตรียมความพร้อมด้านบัญชีสำหรับการระดมทุนหรือขยายกิจการ',
        ],
      },
    ],
    faq: [
      {
        q: 'บริษัทจำกัดต้องตรวจสอบงบการเงินทุกปีหรือไม่?',
        a: 'ต้องตรวจทุกปีครับ บริษัทจำกัดและห้างหุ้นส่วนจดทะเบียนทุกแห่งมีหน้าที่จัดทำงบการเงินและให้ผู้สอบบัญชีรับอนุญาตตรวจสอบก่อนนำส่งกรมพัฒนาธุรกิจการค้าและยื่นแบบ ภ.ง.ด.50 ต่อกรมสรรพากร แม้จะไม่ได้ประกอบกิจการหรือเป็น "งบเปล่า" ก็ตาม (ยกเว้นห้างหุ้นส่วนขนาดเล็กที่ทุนไม่เกิน 5 ล้านบาท สินทรัพย์รวมและรายได้รวมไม่เกิน 30 ล้านบาท ซึ่งใช้ผู้ตรวจสอบและรับรองบัญชีภาษีอากรได้)',
      },
      {
        q: 'ต้องเตรียมเอกสารอะไรบ้างสำหรับการตรวจสอบ?',
        a: 'เอกสารหลักได้แก่ งบทดลอง สมุดรายวันและบัญชีแยกประเภท เอกสารประกอบรายการรับ-จ่าย ใบกำกับภาษีซื้อ-ขาย รายงานสต๊อกสินค้า สัญญาสำคัญ หนังสือรับรองบริษัทและบัญชีรายชื่อผู้ถือหุ้น (บอจ.5) แบบภาษีที่ยื่นระหว่างปี และ Bank Statement ทุกบัญชี — เรามี Checklist ให้ครบถ้วนหลังตกลงงาน ทำให้เตรียมครั้งเดียวจบ',
      },
      {
        q: 'การตรวจสอบใช้เวลานานแค่ไหน?',
        a: 'ขึ้นกับขนาดกิจการและความพร้อมของเอกสาร โดยทั่วไปงบขนาดเล็กที่เอกสารครบใช้เวลาประมาณ 1–2 สัปดาห์ กิจการขนาดกลางประมาณ 3–4 สัปดาห์ หากติดต่อเราล่วงหน้าก่อนสิ้นรอบบัญชี จะช่วยให้วางแผนงานได้ดีขึ้นและปิดงบได้เร็วขึ้นมาก',
      },
      {
        q: 'ค่าสอบบัญชีคิดอย่างไร เริ่มต้นเท่าไหร่?',
        a: 'ค่าบริการเริ่มต้นที่ 5,000 บาท สำหรับงบที่ไม่มีความเคลื่อนไหวหรือรายการน้อย และประเมินเพิ่มตามปริมาณรายการ ความซับซ้อนของธุรกิจ และจำนวนบริษัทในเครือ เราแจ้งราคาชัดเจนเป็นลายลักษณ์อักษรก่อนเริ่มงานทุกครั้ง ไม่มีค่าใช้จ่ายแอบแฝง',
      },
      {
        q: 'ต้องส่งงบการเงินภายในเมื่อไหร่ ถ้าส่งช้ามีค่าปรับหรือไม่?',
        a: 'บริษัทจำกัดต้องจัดประชุมสามัญผู้ถือหุ้นเพื่ออนุมัติงบภายใน 4 เดือนนับจากวันสิ้นรอบบัญชี และนำส่งงบต่อกรมพัฒนาธุรกิจการค้าภายใน 1 เดือนหลังประชุม ส่วนแบบ ภ.ง.ด.50 ต้องยื่นภายใน 150 วันนับจากวันสิ้นรอบบัญชี หากล่าช้าจะมีค่าปรับทั้งต่อบริษัทและกรรมการ เราช่วยวางปฏิทินงานให้ลูกค้าทุกรายเพื่อไม่ให้พลาดกำหนด',
      },
      {
        q: 'บริษัทเพิ่งจดทะเบียนใหม่ ยังไม่มีรายได้ ต้องทำอะไรบ้าง?',
        a: 'แม้ยังไม่มีรายได้ก็ต้องจัดทำบัญชี ปิดงบการเงิน ให้ผู้สอบบัญชีตรวจสอบ และนำส่งหน่วยงานราชการตามปกติ ซึ่งงบลักษณะนี้ ("งบเปล่า") ค่าบริการจะอยู่ในระดับเริ่มต้น เราช่วยดูแลให้ครบทั้งกระบวนการตั้งแต่ปีแรก เพื่อให้ประวัติการนำส่งงบของบริษัทสะอาดตั้งแต่ต้น',
      },
      {
        q: 'อยู่ต่างจังหวัด ใช้บริการได้หรือไม่?',
        a: 'ได้ครับ เราทำงานผ่านระบบออนไลน์เป็นหลัก รับ-ส่งเอกสารทางอีเมล ไลน์ หรือระบบแชร์ไฟล์ และประชุมผ่าน Video Call ได้ ลูกค้าของเรามีทั้งในกรุงเทพฯ และต่างจังหวัดทั่วประเทศ กรณีจำเป็นต้องเข้าสังเกตการณ์ตรวจนับสินค้า เราจะนัดหมายและวางแผนการเดินทางล่วงหน้า',
      },
    ],
  },
  about: {
    metaTitle: 'เกี่ยวกับเรา | TPN Audit & Consulting — Trusted Professional Network',
    metaDesc:
      'รู้จัก TPN Audit & Consulting สำนักงานสอบบัญชีโดยทีมผู้สอบบัญชีรับอนุญาต ประสบการณ์จาก Big 4 กับแนวคิด Trusted Professional Network เครือข่ายมืออาชีพที่คุณวางใจได้',
    head: 'เกี่ยวกับเรา',
    sub: 'เครือข่ายมืออาชีพที่คุณวางใจได้',
    storyHead: 'เรื่องราวของเรา',
    story: [
      'TPN Audit & Consulting ก่อตั้งขึ้นโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) ที่ผ่านประสบการณ์ตรวจสอบบัญชีจากบริษัทตรวจสอบระดับ Big 4 ด้วยความเชื่อว่าธุรกิจไทยทุกขนาด — ไม่ใช่เฉพาะบริษัทมหาชนขนาดใหญ่ — ควรเข้าถึงงานสอบบัญชีที่มีคุณภาพระดับสากล ในราคาที่สมเหตุสมผล',
      'ชื่อ TPN ย่อมาจาก "Trusted Professional Network" — เครือข่ายมืออาชีพที่วางใจได้ สะท้อนวิธีทำงานของเรา: ผสานความเชี่ยวชาญของผู้สอบบัญชี นักภาษี และที่ปรึกษาทางการเงิน เข้าเป็นทีมเดียวที่ดูแลลูกค้าอย่างใกล้ชิด ตอบทุกคำถามด้วยความรู้จริง และยืนอยู่ข้างความถูกต้องเสมอ',
      'วันนี้เราดูแลงานตรวจสอบมากกว่า 100 กิจการต่อปี ครอบคลุมธุรกิจซื้อมาขายไป บริการ การผลิต อสังหาริมทรัพย์ และกิจการที่ได้รับการส่งเสริม BOI โดยยังคงหลักการเดิมตั้งแต่วันแรก — งานทุกชิ้นต้องผ่านมือ CPA ผู้รับผิดชอบโดยตรง',
    ],
    meaningHead: 'ความหมายของ TPN',
    meaning: [
      { letter: 'T', word: 'Trusted', desc: 'ความไว้วางใจคือหัวใจของวิชาชีพสอบบัญชี เรารักษาความเป็นอิสระ ความเที่ยงธรรม และความลับของลูกค้าอย่างเคร่งครัด' },
      { letter: 'P', word: 'Professional', desc: 'ทำงานตามมาตรฐานวิชาชีพและจรรยาบรรณของสภาวิชาชีพบัญชี พัฒนาความรู้ต่อเนื่องให้ทันทุกการเปลี่ยนแปลงของมาตรฐานและกฎหมายภาษี' },
      { letter: 'N', word: 'Network', desc: 'เครือข่ายผู้เชี่ยวชาญหลากหลายสาขา ทั้งบัญชี ภาษี และการเงิน พร้อมส่งต่อและประสานงานเพื่อแก้ปัญหาให้ลูกค้าได้ครบทุกมิติ' },
    ],
    valuesHead: 'วิธีทำงานของเรา',
    values: [
      { title: 'ตรงไปตรงมา', desc: 'แจ้งขอบเขตงาน ราคา และกำหนดเวลาชัดเจนตั้งแต่ต้น พบประเด็นอะไรบอกตรงๆ พร้อมทางแก้ ไม่สร้างความกังวลเกินจริง' },
      { title: 'ลึกจริงในสิ่งที่ทำ', desc: 'ไม่ใช่แค่เช็คให้ครบตามฟอร์ม แต่เข้าใจธุรกิจของลูกค้า มองความเสี่ยงเฉพาะตัวของแต่ละกิจการ และให้คำแนะนำที่นำไปใช้ได้จริง' },
      { title: 'ทันเวลาเสมอ', desc: 'วางแผนงานย้อนกลับจากกำหนดส่ง (Deadline-first) แจ้งความคืบหน้าเป็นระยะ ลูกค้าไม่ต้องทวงถามหรือลุ้นวันสุดท้าย' },
      { title: 'โตไปด้วยกัน', desc: 'มองความสัมพันธ์ระยะยาว ช่วยลูกค้าวางรากฐานบัญชีที่แข็งแรง เพื่อรองรับการเติบโตของธุรกิจในทุกช่วงเวลา' },
    ],
  },
  contact: {
    metaTitle: 'ติดต่อเรา — ปรึกษาฟรี | TPN Audit & Consulting',
    metaDesc:
      'ติดต่อสำนักงานสอบบัญชี TPN Audit & Consulting ปรึกษาฟรีทางโทรศัพท์ 084-375-6668 หรือ LINE ประเมินราคางานตรวจสอบบัญชีและภาษีภายใน 24 ชั่วโมง',
    head: 'ติดต่อเรา',
    sub: 'ปรึกษาเบื้องต้นฟรี ไม่มีข้อผูกมัด — ตอบกลับภายใน 24 ชั่วโมง',
    formHead: 'ส่งข้อความถึงเรา',
    name: 'ชื่อ-นามสกุล',
    company: 'ชื่อบริษัท',
    phone: 'เบอร์โทรศัพท์',
    email: 'อีเมล',
    message: 'รายละเอียดที่ต้องการปรึกษา',
    submit: 'ส่งข้อความ',
    formNote: 'ปุ่มส่งข้อความจะเปิดโปรแกรมอีเมลพร้อมข้อความที่กรอกไว้ หรือติดต่อทางไลน์/โทรศัพท์ได้เลย',
    infoHead: 'ช่องทางติดต่อ',
    callLabel: 'โทรหาเรา',
    lineLabel: 'Add LINE',
    lineSub: 'ตอบเร็วที่สุดทางนี้',
    emailLabel: 'อีเมล',
    addressLabel: 'ที่อยู่',
    hoursLabel: 'เวลาทำการ',
    mapHead: 'แผนที่',
  },
} as const;

const en = {
  langName: 'English',
  switchLabel: 'ไทย',
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    cta: 'Free Consultation',
  },
  footer: {
    desc: 'An audit firm led by licensed CPAs with Big 4 experience, providing audit, tax, and financial advisory services for businesses of every size.',
    contactHead: 'Contact',
    linksHead: 'Menu',
    rights: 'All rights reserved.',
  },
  home: {
    metaTitle: 'TPN Audit & Consulting — Audit Firm Led by Licensed CPAs in Bangkok',
    metaDesc:
      'Quality audit firm in Bangkok. Statutory audits under TFRS for NPAEs, BOI audits, tax advisory, and accounting system design by CPAs with Big 4 experience. Fees from THB 5,000.',
    heroKicker: 'Trusted Professional Network',
    heroTitle: 'Your financial statements,\nheld to our highest standard',
    heroSub:
      'An audit firm where every engagement is handled directly by licensed CPAs with Big 4 experience — audit, tax, and financial advisory under one roof.',
    heroCta: 'Get a Free Consultation',
    heroCta2: 'Explore Our Services',
    trust: [
      { value: '10+', label: 'Years of experience' },
      { value: '100+', label: 'Audits per year' },
      { value: 'CPA', label: 'Licensed auditors' },
      { value: 'Big 4', label: 'International background' },
    ],
    servicesHead: 'Our Services',
    servicesSub: 'Comprehensive accounting, tax, and finance services for your business',
    servicesMore: 'Learn more',
    whyHead: 'Why TPN',
    whySub: 'We make professional auditing simple, responsive, and worth every baht.',
    why: [
      {
        title: 'Direct CPA involvement',
        desc: 'Every engagement is performed and signed off by a licensed CPA — never outsourced. You speak directly with the person responsible for your audit, from kickoff to filing.',
      },
      {
        title: 'Big 4 standards',
        desc: 'Our team trained at leading global audit firms and applies the same methodology and quality controls to engagements of every size.',
      },
      {
        title: 'Fast, reliable communication',
        desc: 'Reach us by phone or LINE and get answers within 24 hours. Clear timelines, regular progress updates, and no last-minute surprises.',
      },
      {
        title: 'Fair pricing for SMEs',
        desc: 'Transparent fees from THB 5,000, quoted upfront based on actual scope. No hidden charges — built for small and medium businesses.',
      },
    ],
    ctaHead: 'Ready to get started?',
    ctaSub: 'The first consultation is free, with no obligation. Message us on LINE or call today for a quote tailored to your business.',
    ctaBtn: 'Contact Us',
  },
  services: {
    metaTitle: 'Audit, Tax & Advisory Services | TPN Audit & Consulting',
    metaDesc:
      'Statutory audits under TFRS for NPAEs, BOI audits, tax advisory, accounting system design, and financial advisory by licensed CPAs. Fees from THB 5,000.',
    head: 'Our Services',
    sub: 'Full-scope accounting, tax, and finance services from a licensed CPA team',
    priceNote: 'Fees start at THB 5,000, quoted by business size and complexity. Free, no-obligation quotations.',
    priceLabel: 'From THB 5,000',
    faqHead: 'Frequently Asked Questions',
    faqSub: 'Answers to the questions business owners ask us most often',
    list: [
      {
        id: 'audit',
        title: 'Financial Statement Audit',
        short: 'Annual statutory audits under TFRS for NPAEs, signed by licensed CPAs.',
        body: [
          'We provide annual statutory audits for limited companies, registered partnerships, and other juristic persons in accordance with Thai Financial Reporting Standards for Non-Publicly Accountable Entities (TFRS for NPAEs) and generally accepted auditing standards. Every engagement is performed and signed by a licensed CPA.',
          'Our scope covers audit planning, risk assessment, substantive testing of transactions, confirmations of receivables, payables, and bank balances, inventory count observation, and preparation of the auditor’s report and financial statements for filing with the Department of Business Development and the Revenue Department.',
          'Beyond the audit opinion, we deliver a summary of findings with practical recommendations for improving your accounting systems and internal controls — so next year’s close is faster, cleaner, and carries less tax-assessment risk.',
        ],
      },
      {
        id: 'boi',
        title: 'BOI Audit',
        short: 'Audit and certification for businesses promoted by the Board of Investment.',
        body: [
          'Companies promoted by Thailand’s Board of Investment (BOI) must file CPA-certified reports to claim corporate income tax exemptions each accounting period. Our team has audited BOI-promoted businesses across manufacturing, services, and software.',
          'Services include certification of applications for corporate income tax exemption, verification of the separation of accounts between promoted and non-promoted activities, and testing of promotion certificate conditions such as investment size, production capacity, and project revenue — with guidance on proper project-based bookkeeping from the start of the year.',
          'We coordinate with your accounting team and BOI consultants to meet every filing deadline, reduce the risk of privilege revocation, and ensure you capture the full tax benefits the law provides.',
        ],
      },
      {
        id: 'tax',
        title: 'Tax Advisory',
        short: 'Tax planning, health checks, and support across every Thai tax type.',
        body: [
          'Tax is one of your largest costs — and one of the most manageable with proper planning. Our advisory covers corporate income tax, VAT, withholding tax, specific business tax, and stamp duty, delivered by a team fluent in both tax law and business practicality.',
          'We perform tax health checks to surface risks before the Revenue Department does, plan for significant transactions such as dividend payments, restructurings, and cross-border contracts, and provide written opinions on complex tax questions with full legal references.',
          'If you are audited or summoned by the Revenue Department, we help prepare supporting documents, analyze the issues, and advise you throughout the process — so you pay exactly what the law requires, no more and no less.',
        ],
      },
      {
        id: 'advisory',
        title: 'Accounting Systems & Financial Advisory',
        short: 'Chart of accounts, workflows, and management reporting you can actually use.',
        body: [
          'A good accounting system does more than record transactions — it gives management timely information for decisions. We design accounting systems end to end: chart of accounts, document workflows, essential internal controls, and selection and implementation of accounting software suited to your size.',
          'For fast-growing businesses, we help you evolve from tax-filing bookkeeping to monthly management reports, cash flow statements, and key financial indicators — so owners see their business clearly and plan profit and liquidity ahead of time.',
          'We also advise on specific needs such as preparing financial statements for bank loans, building financial projections, and getting your accounting ready for fundraising or expansion.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does a Thai limited company need an audit every year?',
        a: 'Yes. Every limited company and registered partnership must prepare financial statements audited by a licensed CPA before filing with the Department of Business Development and submitting the PND.50 tax return — even if the company was dormant. (Small registered partnerships under certain thresholds may use a Tax Auditor instead.)',
      },
      {
        q: 'What documents do I need to prepare?',
        a: 'Key items include the trial balance, journals and general ledger, supporting documents for income and expenses, tax invoices, inventory reports, significant contracts, the company affidavit and shareholder list (BOJ.5), tax returns filed during the year, and bank statements for all accounts. We provide a complete checklist once engaged.',
      },
      {
        q: 'How long does an audit take?',
        a: 'It depends on the size of the business and readiness of documents. Small companies with complete records typically take 1–2 weeks; medium-sized businesses around 3–4 weeks. Engaging us before your year-end lets us plan ahead and close much faster.',
      },
      {
        q: 'How are audit fees calculated?',
        a: 'Fees start at THB 5,000 for dormant or low-activity companies, and scale with transaction volume, business complexity, and the number of group entities. We always quote in writing before starting — no hidden charges.',
      },
      {
        q: 'What are the filing deadlines, and are there penalties for late filing?',
        a: 'A limited company must hold its annual general meeting to approve the financial statements within 4 months of year-end, file them with the DBD within 1 month after the meeting, and submit the PND.50 within 150 days of year-end. Late filings incur fines for both the company and its directors. We build a filing calendar for every client.',
      },
      {
        q: 'My company is newly registered with no revenue yet — what do I need to do?',
        a: 'Even without revenue, you must keep accounts, prepare financial statements, have them audited, and file as usual. These "dormant" engagements are priced at our starting rate, and we handle the full process so your filing record is clean from year one.',
      },
      {
        q: 'Can you serve clients outside Bangkok?',
        a: 'Absolutely. We work primarily online — documents via email, LINE, or shared drives, and meetings via video call. Our clients are located throughout Thailand. Where an on-site inventory count is required, we schedule and plan the visit in advance.',
      },
    ],
  },
  about: {
    metaTitle: 'About Us | TPN Audit & Consulting — Trusted Professional Network',
    metaDesc:
      'Meet TPN Audit & Consulting, an audit firm led by licensed CPAs with Big 4 experience, built on the idea of a Trusted Professional Network.',
    head: 'About Us',
    sub: 'The professional network you can trust',
    storyHead: 'Our Story',
    story: [
      'TPN Audit & Consulting was founded by a team of licensed CPAs with audit experience at Big 4 firms, built on one belief: every Thai business — not just large public companies — deserves access to international-quality audit work at a sensible price.',
      'TPN stands for "Trusted Professional Network," and it describes how we work: auditors, tax specialists, and financial advisors operating as one team that stays close to clients, answers every question with real expertise, and always stands on the side of integrity.',
      'Today we handle more than 100 audit engagements a year across trading, services, manufacturing, real estate, and BOI-promoted businesses — while keeping the principle we started with: every engagement passes directly through the hands of a responsible CPA.',
    ],
    meaningHead: 'What TPN Means',
    meaning: [
      { letter: 'T', word: 'Trusted', desc: 'Trust is the heart of the audit profession. We rigorously protect our independence, objectivity, and client confidentiality.' },
      { letter: 'P', word: 'Professional', desc: 'We work to the standards and code of ethics of the Federation of Accounting Professions, and continuously update our knowledge as standards and tax law evolve.' },
      { letter: 'N', word: 'Network', desc: 'A network of specialists across accounting, tax, and finance, coordinating seamlessly to solve client problems from every angle.' },
    ],
    valuesHead: 'How We Work',
    values: [
      { title: 'Straightforward', desc: 'Clear scope, fees, and timelines from day one. When we find an issue, we say so directly — with a solution, not alarm.' },
      { title: 'Genuinely thorough', desc: 'Not box-ticking. We understand your business, assess the risks specific to it, and give recommendations you can actually use.' },
      { title: 'Always on time', desc: 'We plan backwards from your filing deadlines and report progress regularly — you never have to chase us.' },
      { title: 'Growing together', desc: 'We build long-term relationships, laying strong accounting foundations that support your business at every stage of growth.' },
    ],
  },
  contact: {
    metaTitle: 'Contact Us — Free Consultation | TPN Audit & Consulting',
    metaDesc:
      'Contact TPN Audit & Consulting for a free consultation. Call 084-375-6668 or add us on LINE — quotes within 24 hours.',
    head: 'Contact Us',
    sub: 'Free initial consultation, no obligation — we reply within 24 hours',
    formHead: 'Send us a message',
    name: 'Full name',
    company: 'Company',
    phone: 'Phone',
    email: 'Email',
    message: 'How can we help?',
    submit: 'Send Message',
    formNote: 'The send button opens your email client with the message pre-filled — or reach us instantly via LINE or phone.',
    infoHead: 'Get in touch',
    callLabel: 'Call us',
    lineLabel: 'Add LINE',
    lineSub: 'Fastest way to reach us',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Office hours',
    mapHead: 'Map',
  },
} as const;

export const dict = { th, en };

export function t(lang: Lang) {
  return dict[lang];
}

/** path เช่น '/', '/services/', '/en/about/' — เติม base ของ GitHub Pages ให้อัตโนมัติ */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** สลับภาษาโดยคงหน้าเดิม */
export function switchLangPath(lang: Lang, page: string): string {
  // page: '', 'services', 'about', 'contact'
  const p = page ? `/${page}/` : '/';
  return lang === 'th' ? withBase(`/en${p === '/' ? '/' : p}`) : withBase(p);
}
