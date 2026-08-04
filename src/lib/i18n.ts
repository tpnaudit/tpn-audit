// ─────────────────────────────────────────────────────────────
// เนื้อหาเว็บไซต์ทั้งหมดอยู่ในไฟล์นี้ไฟล์เดียว — แก้ข้อความได้เลย
// ข้อมูลติดต่อ / ที่อยู่ / ตัวเลขสถิติ แก้ที่ `site` ด้านล่าง
// ─────────────────────────────────────────────────────────────

export type Lang = 'th' | 'en';

const addressTh = '46/933 ถนนอโศก-ดินแดง แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310';

export const site = {
  nameTh: 'ทีพีเอ็น ออดิท แอนด์ คอนซัลติ้ง',
  legalNameTh: 'บริษัท ทีพีเอ็น ออดิท แอนด์ คอนซัลติ้ง จำกัด',
  nameEn: 'TPN Audit & Consulting Co., Ltd.',
  tagline: 'Trusted Professional Network',
  phone: '0843756668',
  phoneDisplay: '084-375-6668',
  lineUrl: 'https://line.me/ti/p/CSjPMLrl9D',
  email: 'thanapoom.tpnaudit@gmail.com',
  addressTh,
  addressEn: '46/933 Asok-Din Daeng Road, Bang Kapi, Huai Khwang, Bangkok 10310',
  // TODO: แก้เวลาทำการจริง
  hoursTh: 'จันทร์–ศุกร์ 9:00–18:00 น.',
  hoursEn: 'Mon–Fri 9:00–18:00',
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(addressTh)}&output=embed`,
  url: 'https://tpnaudit.github.io/tpn-audit',
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
    lineNote: 'เพิ่มเพื่อนทาง LINE',
  },
  home: {
    metaTitle: 'TPN Audit & Consulting — สำนักงานสอบบัญชี โดยผู้สอบบัญชีรับอนุญาต (CPA)',
    metaDesc:
      'สำนักงานสอบบัญชีคุณภาพ รับตรวจสอบบัญชี ตรวจงบการเงิน TFRS for NPAEs ตรวจสอบกิจการ BOI ที่ปรึกษาภาษีและวางระบบบัญชี โดยทีม CPA ประสบการณ์ Big 4 ค่าบริการโปร่งใส สมเหตุสมผล',
    heroKicker: 'Trusted Professional Network',
    heroTitle: 'ยกระดับความน่าเชื่อถือให้งบการเงินของคุณ\nด้วยมาตรฐานวิชาชีพระดับสากล',
    heroSub:
      'สำนักงานสอบบัญชีที่ดูแลโดยผู้สอบบัญชีรับอนุญาต (CPA) โดยตรง ด้วยประสบการณ์จากบริษัทตรวจสอบบัญชีใน Big 4 — บริการตรวจสอบบัญชี และรับเป็นที่ปรึกษาทางการเงิน ภาษี รวมถึงวางระบบบัญชี',
    heroCta: 'ปรึกษาฟรี ไม่มีค่าใช้จ่าย',
    heroCta2: 'ดูบริการทั้งหมด',
    trust: [
      { value: 'หลากหลายธุรกิจ', label: 'ประสบการณ์งานตรวจสอบ' },
      { value: '100+', label: 'งานตรวจสอบต่อปี' },
      { value: 'CPA', label: 'ผู้สอบบัญชีรับอนุญาต' },
      { value: 'Big 4', label: 'ประสบการณ์ระดับสากล' },
    ],
    servicesHead: 'บริการของเรา',
    servicesSub: 'ครอบคลุมทุกความต้องการด้านบัญชี ภาษี และการเงินของธุรกิจ',
    servicesMore: 'ดูรายละเอียด',
    whyHead: 'ทำไมต้อง TPN',
    whySub: 'มุ่งมั่นให้บริการตรวจสอบบัญชีที่โปร่งใส ได้มาตรฐาน ในอัตราค่าบริการที่สมเหตุสมผล',
    why: [
      {
        title: 'ดูแลโดย CPA โดยตรง',
        desc: 'ทุกงานตรวจสอบและลงลายมือชื่อรับรองโดยผู้สอบบัญชีรับอนุญาต ไม่ส่งต่องานให้บุคคลภายนอก ท่านสามารถสื่อสารและรับคำปรึกษาจากผู้สอบบัญชีผู้รับผิดชอบงานได้โดยตรงตลอดระยะเวลาการให้บริการ',
      },
      {
        title: 'มาตรฐานจาก Big 4',
        desc: 'ทีมงานผ่านประสบการณ์จากบริษัทตรวจสอบบัญชีชั้นนำระดับโลก นำวิธีการทำงานและการควบคุมคุณภาพระดับสากลมาใช้กับงานทุกขนาด',
      },
      {
        title: 'ให้บริการอย่างใกล้ชิดและตรงต่อเวลา',
        desc: 'ติดต่อได้ทั้งโทรศัพท์และ LINE ตอบคำถามภายใน 24 ชั่วโมง วางแผนงานล่วงหน้าชัดเจน แจ้งความคืบหน้าสม่ำเสมอจนถึงวันส่งงบ',
      },
      {
        title: 'โครงสร้างค่าบริการที่โปร่งใส',
        desc: 'ประเมินค่าบริการตามปริมาณงานและขนาดธุรกิจอย่างสมเหตุสมผล แจ้งเป็นลายลักษณ์อักษรก่อนเริ่มงานทุกครั้ง ไม่มีค่าใช้จ่ายแอบแฝง เหมาะกับธุรกิจขนาดเล็กถึงขนาดกลาง',
      },
    ],
    ctaHead: 'พร้อมเริ่มต้นแล้วหรือยัง?',
    ctaSub: 'ปรึกษาเบื้องต้นฟรี ไม่มีข้อผูกมัด — ทักไลน์หรือโทรหาเราวันนี้ เพื่อประเมินราคาที่เหมาะกับธุรกิจของคุณ',
    ctaBtn: 'ติดต่อเราเลย',
  },
  services: {
    metaTitle: 'บริการตรวจสอบบัญชี ภาษี และที่ปรึกษา | TPN Audit & Consulting',
    metaDesc:
      'รับตรวจสอบบัญชี งบการเงิน TFRS for NPAEs ตรวจสอบกิจการ BOI ที่ปรึกษาภาษี วางระบบบัญชีและที่ปรึกษาทางการเงิน โดยผู้สอบบัญชีรับอนุญาต ค่าบริการโปร่งใส สมเหตุสมผล',
    head: 'บริการของเรา',
    sub: 'บริการด้านบัญชี ภาษี และการเงินครบวงจร โดยทีมผู้สอบบัญชีรับอนุญาต',
    priceNote:
      'บริการมาตรฐานมีอัตราค่าบริการคงที่ ส่วนงานตรวจสอบบัญชีประเมินตามขนาดและความซับซ้อนของกิจการ — ขอใบเสนอราคาได้ฟรี ไม่มีข้อผูกมัด',
    faqHead: 'คำถามที่พบบ่อย',
    faqSub: 'รวมคำตอบสำหรับคำถามที่ผู้ประกอบการถามเราบ่อยที่สุด',
    list: [
      {
        id: 'audit',
        title: 'ตรวจสอบบัญชีและงบการเงิน',
        short: 'ตรวจสอบงบการเงินประจำปีตามมาตรฐาน TFRS for NPAEs พร้อมรายงานผู้สอบบัญชีรับอนุญาต',
        price: 'ประเมินราคาตามขอบเขตงาน',
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
        price: 'ประเมินราคาตามขอบเขตงาน',
        body: [
          'กิจการที่ได้รับการส่งเสริมการลงทุนจากคณะกรรมการส่งเสริมการลงทุน (BOI) มีหน้าที่ยื่นรายงานที่ผ่านการตรวจสอบและรับรองจากผู้สอบบัญชีรับอนุญาต เพื่อใช้สิทธิประโยชน์ยกเว้นภาษีเงินได้นิติบุคคลในแต่ละรอบบัญชี ทีมงานของเรามีประสบการณ์ตรวจสอบกิจการ BOI หลากหลายประเภทกิจการ ทั้งภาคการผลิต บริการ และซอฟต์แวร์',
          'บริการครอบคลุมการตรวจสอบแบบคำขอใช้สิทธิและประโยชน์ยกเว้นภาษีเงินได้นิติบุคคล การตรวจสอบการแยกบัญชีระหว่างกิจการที่ได้รับส่งเสริมและไม่ได้รับส่งเสริม การตรวจสอบเงื่อนไขตามบัตรส่งเสริม เช่น ขนาดการลงทุน กำลังการผลิต และรายได้จากโครงการ พร้อมให้คำแนะนำการจัดทำบัญชีแยกโครงการอย่างถูกต้องตั้งแต่ต้นปี',
          'เราทำงานประสานกับฝ่ายบัญชีของกิจการและที่ปรึกษา BOI เพื่อให้การยื่นแบบเป็นไปตามกำหนดเวลา ลดความเสี่ยงจากการถูกเพิกถอนสิทธิประโยชน์ และใช้สิทธิยกเว้นภาษีได้เต็มเม็ดเต็มหน่วยตามที่กฎหมายกำหนด',
        ],
      },
      {
        id: 'bookkeeping',
        title: 'รับทำบัญชีรายเดือน',
        short: 'ดูแลบัญชีและยื่นภาษีให้ครบทุกเดือน โดยนักบัญชีผู้รับผิดชอบประจำที่ติดต่อได้โดยตรง',
        price: 'เริ่มต้น 3,000 บาท/เดือน',
        body: [
          'บริการจัดทำบัญชีรายเดือนสำหรับนิติบุคคลที่ต้องการให้งานบัญชีและภาษีอยู่ในความดูแลของผู้ประกอบวิชาชีพตลอดทั้งปี เราบันทึกรายการบัญชีตามมาตรฐานการรายงานทางการเงิน จัดทำงบทดลองและรายงานทางการเงินประจำเดือน พร้อมตรวจสอบความครบถ้วนถูกต้องของเอกสารประกอบรายการก่อนบันทึกทุกครั้ง',
          'ขอบเขตงานครอบคลุมการยื่นแบบภาษีตามกำหนดเวลาครบทุกประเภท ทั้งภาษีเงินได้หัก ณ ที่จ่าย (ภ.ง.ด.1, ภ.ง.ด.3, ภ.ง.ด.53) ภาษีมูลค่าเพิ่ม (ภ.พ.30) แบบนำส่งเงินสมทบประกันสังคม ตลอดจนภาษีเงินได้นิติบุคคลครึ่งปี (ภ.ง.ด.51) โดยเราติดตามกำหนดนำส่งให้ทั้งหมด ท่านจึงไม่ต้องกังวลเรื่องเบี้ยปรับและเงินเพิ่มจากการยื่นล่าช้า',
          'ลูกค้าทุกรายมีนักบัญชีผู้รับผิดชอบประจำที่ติดต่อสอบถามได้โดยตรง พร้อมสรุปภาพรวมผลประกอบการให้ทราบอย่างสม่ำเสมอ และเมื่อถึงรอบปิดบัญชีประจำปี ข้อมูลที่จัดเก็บอย่างเป็นระบบตลอดปีจะทำให้การปิดงบและการตรวจสอบเป็นไปอย่างราบรื่นและรวดเร็วยิ่งขึ้น',
        ],
      },
      {
        id: 'dormant',
        title: 'ปิดงบการเงิน (บริษัทไม่ได้ดำเนินกิจการ)',
        short: 'จัดทำ ตรวจสอบ และนำส่งงบการเงินประจำปีสำหรับบริษัทที่หยุดดำเนินกิจการ ราคาเดียวจบ',
        price: '7,500 บาท (รวมค่าสอบบัญชีแล้ว)',
        body: [
          'บริษัทที่จดทะเบียนไว้แต่ยังไม่ได้เริ่มดำเนินกิจการ หรือหยุดดำเนินกิจการชั่วคราว ยังคงมีหน้าที่ตามกฎหมายในการจัดทำบัญชี ปิดงบการเงินประจำปี ให้ผู้สอบบัญชีรับอนุญาตตรวจสอบ และนำส่งต่อกรมพัฒนาธุรกิจการค้าและกรมสรรพากรตามกำหนดเวลา แม้จะไม่มีรายได้เกิดขึ้นในรอบบัญชีนั้นก็ตาม',
          'บริการนี้ครอบคลุมตั้งแต่การจัดทำงบการเงินและหมายเหตุประกอบงบการเงิน การตรวจสอบและลงลายมือชื่อรับรองโดยผู้สอบบัญชีรับอนุญาต การจัดเตรียมเอกสารประกอบการประชุมสามัญผู้ถือหุ้น ไปจนถึงการนำส่งงบการเงินต่อกรมพัฒนาธุรกิจการค้าและการยื่นแบบ ภ.ง.ด.50 ในอัตราค่าบริการเดียวจบ ไม่มีค่าใช้จ่ายเพิ่มเติมภายหลัง',
          'การนำส่งงบการเงินอย่างต่อเนื่องทุกปีช่วยรักษาสถานะทางกฎหมายของบริษัทให้ถูกต้อง ไม่เกิดค่าปรับสะสมทั้งต่อบริษัทและกรรมการ และทำให้กิจการพร้อมกลับมาดำเนินธุรกิจ หรือดำเนินการเลิกบริษัทอย่างถูกต้องได้ทันทีเมื่อต้องการ',
        ],
      },
      {
        id: 'registration',
        title: 'จดทะเบียนบริษัท',
        short: 'ดำเนินการจดทะเบียนจัดตั้งบริษัทครบวงจร ตั้งแต่จองชื่อจนได้เลขทะเบียนนิติบุคคล',
        price: '8,900 บาท (รวมค่าธรรมเนียมแล้ว)',
        body: [
          'บริการจดทะเบียนจัดตั้งบริษัทจำกัดแบบครบวงจร ดำเนินการให้ตั้งแต่การตรวจสอบและจองชื่อนิติบุคคล การจัดทำหนังสือบริคณห์สนธิ การกำหนดวัตถุประสงค์ของกิจการ โครงสร้างผู้ถือหุ้นและทุนจดทะเบียน จนถึงการยื่นคำขอจดทะเบียนต่อกรมพัฒนาธุรกิจการค้าจนได้รับเลขทะเบียนนิติบุคคล',
          'อัตราค่าบริการรวมค่าธรรมเนียมราชการเรียบร้อยแล้ว ครอบคลุมเอกสารจัดตั้งครบชุด หนังสือรับรองบริษัท ตราประทับบริษัท และคำแนะนำในการเปิดบัญชีธนาคารในนามนิติบุคคล พร้อมให้คำปรึกษาเรื่องการขึ้นทะเบียนภาษีมูลค่าเพิ่มและการขึ้นทะเบียนนายจ้างกับสำนักงานประกันสังคมเมื่อกิจการเข้าเงื่อนไข',
          'หากท่านยังไม่แน่ใจว่าควรจดทะเบียนเป็นบริษัทหรือไม่ เรายินดีให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย ทั้งในมุมภาระภาษีเมื่อเทียบกับการประกอบธุรกิจในนามบุคคลธรรมดา ต้นทุนการดูแลบัญชีรายปี และความเหมาะสมกับขนาดรายได้ของกิจการ เพื่อให้ท่านตัดสินใจได้บนข้อมูลที่ครบถ้วน',
        ],
      },
      {
        id: 'tax',
        title: 'บริการที่ปรึกษาภาษี',
        short: 'วางแผนภาษี ตรวจสุขภาพภาษี และดูแลประเด็นภาษีอากรครบทุกประเภท',
        price: 'ประเมินราคาตามขอบเขตงาน',
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
        price: 'ประเมินราคาตามขอบเขตงาน',
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
        q: 'ค่าสอบบัญชีคิดอย่างไร?',
        a: 'ค่าบริการประเมินตามปริมาณรายการ ความซับซ้อนของธุรกิจ และจำนวนบริษัทในเครือ โดยงบที่ไม่มีความเคลื่อนไหวหรือรายการน้อยจะอยู่ในระดับเริ่มต้น เราแจ้งราคาชัดเจนเป็นลายลักษณ์อักษรก่อนเริ่มงานทุกครั้ง ไม่มีค่าใช้จ่ายแอบแฝง ขอใบเสนอราคาได้ฟรีโดยไม่มีข้อผูกมัด',
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
      'TPN Audit & Consulting ก่อตั้งขึ้นโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) ที่ผ่านประสบการณ์ตรวจสอบบัญชีจากบริษัทตรวจสอบใน Big 4 ด้วยความเชื่อว่าธุรกิจไทยทุกขนาด — ไม่ใช่เฉพาะบริษัทมหาชนขนาดใหญ่ — ควรเข้าถึงงานสอบบัญชีที่มีคุณภาพระดับสากล ในราคาที่สมเหตุสมผล',
      'ชื่อ TPN ย่อมาจาก "Trusted Professional Network" — เครือข่ายมืออาชีพที่วางใจได้ สะท้อนวิธีทำงานของเรา: ผสานความเชี่ยวชาญของผู้สอบบัญชีที่ดูแลลูกค้าอย่างใกล้ชิด',
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
    formNote: 'ข้อมูลของท่านจะถูกส่งถึงเราโดยตรง และใช้เพื่อการติดต่อกลับเท่านั้น หรือหากต้องการคำตอบทันที ติดต่อทางไลน์หรือโทรศัพท์ได้เลย',
    formSending: 'กำลังส่ง...',
    formSuccess: 'ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อเรา — ทีมงานจะติดต่อกลับโดยเร็วที่สุด',
    formError: 'ขออภัย ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทางไลน์หรือโทรศัพท์',
    infoHead: 'ช่องทางติดต่อ',
    callLabel: 'โทรหาเรา',
    lineLabel: 'เพิ่มเพื่อนทาง LINE',
    lineSub: 'ช่องทางที่ตอบกลับเร็วที่สุด — แตะเพื่อเพิ่มเพื่อน หรือสแกน QR Code',
    lineCta: 'แตะเพื่อเพิ่มเพื่อน',
    lineQr: 'สแกนเพื่อเพิ่มเพื่อนใน LINE',
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
    lineNote: 'Add us on LINE',
  },
  home: {
    metaTitle: 'TPN Audit & Consulting — Audit Firm Led by Licensed CPAs in Bangkok',
    metaDesc:
      'Quality audit firm in Bangkok. Statutory audits under TFRS for NPAEs, BOI audits, tax advisory, and accounting system design by CPAs with Big 4 experience. Transparent, reasonable fees.',
    heroKicker: 'Trusted Professional Network',
    heroTitle: 'Elevating the credibility of your financial statements\nthrough international professional standards',
    heroSub:
      'An audit firm where every engagement is handled directly by licensed CPAs with experience at Big 4 audit firms — audit services, together with financial and tax advisory and accounting system setup.',
    heroCta: 'Get a Free Consultation',
    heroCta2: 'Explore Our Services',
    trust: [
      { value: 'Multi-industry', label: 'Audit experience' },
      { value: '100+', label: 'Audits per year' },
      { value: 'CPA', label: 'Licensed auditors' },
      { value: 'Big 4', label: 'International background' },
    ],
    servicesHead: 'Our Services',
    servicesSub: 'Comprehensive accounting, tax, and finance services for your business',
    servicesMore: 'Learn more',
    whyHead: 'Why TPN',
    whySub: 'Committed to transparent, standards-driven audit services at reasonable professional fees.',
    why: [
      {
        title: 'Direct CPA involvement',
        desc: 'Every engagement is performed and signed off by a licensed CPA — never outsourced. You communicate and consult directly with the engagement CPA throughout the entire service period.',
      },
      {
        title: 'Big 4 standards',
        desc: 'Our team trained at leading global audit firms and applies the same methodology and quality controls to engagements of every size.',
      },
      {
        title: 'Attentive, on-time service',
        desc: 'Reach us by phone or LINE and get answers within 24 hours. Clear timelines, regular progress updates, and no last-minute surprises.',
      },
      {
        title: 'Transparent fee structure',
        desc: 'Fees are assessed on actual scope and business size, quoted in writing before any engagement begins. No hidden charges — built for small and medium businesses.',
      },
    ],
    ctaHead: 'Ready to get started?',
    ctaSub: 'The first consultation is free, with no obligation. Message us on LINE or call today for a quote tailored to your business.',
    ctaBtn: 'Contact Us',
  },
  services: {
    metaTitle: 'Audit, Tax & Advisory Services | TPN Audit & Consulting',
    metaDesc:
      'Statutory audits under TFRS for NPAEs, BOI audits, tax advisory, accounting system design, and financial advisory by licensed CPAs. Transparent, reasonable fees.',
    head: 'Our Services',
    sub: 'Full-scope accounting, tax, and finance services from a licensed CPA team',
    priceNote:
      'Standard services carry a fixed fee; audit engagements are quoted by business size and complexity. Free, no-obligation quotations.',
    faqHead: 'Frequently Asked Questions',
    faqSub: 'Answers to the questions business owners ask us most often',
    list: [
      {
        id: 'audit',
        title: 'Financial Statement Audit',
        short: 'Annual statutory audits under TFRS for NPAEs, signed by licensed CPAs.',
        price: 'Quoted by scope of work',
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
        price: 'Quoted by scope of work',
        body: [
          'Companies promoted by Thailand’s Board of Investment (BOI) must file CPA-certified reports to claim corporate income tax exemptions each accounting period. Our team has audited BOI-promoted businesses across manufacturing, services, and software.',
          'Services include certification of applications for corporate income tax exemption, verification of the separation of accounts between promoted and non-promoted activities, and testing of promotion certificate conditions such as investment size, production capacity, and project revenue — with guidance on proper project-based bookkeeping from the start of the year.',
          'We coordinate with your accounting team and BOI consultants to meet every filing deadline, reduce the risk of privilege revocation, and ensure you capture the full tax benefits the law provides.',
        ],
      },
      {
        id: 'bookkeeping',
        title: 'Monthly Bookkeeping',
        short: 'Monthly books and every tax filing handled, with a dedicated accountant you can reach directly.',
        price: 'From THB 3,000 / month',
        body: [
          'Monthly bookkeeping for juristic persons that want their accounting and tax obligations in professional hands all year round. We record transactions in accordance with Thai financial reporting standards, prepare monthly trial balances and management reports, and verify the completeness of supporting documents before anything is posted.',
          'The engagement covers every periodic tax filing on schedule: withholding tax returns (PND.1, PND.3, PND.53), VAT returns (PP.30), social security contributions, and the half-year corporate income tax return (PND.51). We track all filing deadlines on your behalf, so late-filing surcharges and penalties never become your problem.',
          'Every client is assigned a responsible accountant available for direct questions, with regular summaries of business performance. When the annual close comes around, records kept in order throughout the year make preparing and auditing the financial statements substantially faster and smoother.',
        ],
      },
      {
        id: 'dormant',
        title: 'Dormant Company Annual Filing',
        short: 'Preparation, audit, and filing of annual financial statements for dormant companies at one flat fee.',
        price: 'THB 7,500 (audit fee included)',
        body: [
          'A company that is registered but has not yet begun trading, or has temporarily ceased operations, still carries the legal obligation to maintain accounts, prepare annual financial statements, have them audited by a licensed CPA, and file them with the Department of Business Development and the Revenue Department on time — even with no revenue in the period.',
          'This service covers preparation of the financial statements and notes, audit and sign-off by a licensed CPA, preparation of the documents for the annual general meeting, filing of the financial statements with the Department of Business Development, and submission of the PND.50 return — all at a single flat fee with no charges added later.',
          'Filing consistently every year keeps the company in good legal standing, prevents penalties accumulating against both the company and its directors, and leaves the business ready to resume trading or to be wound up properly whenever you decide.',
        ],
      },
      {
        id: 'registration',
        title: 'Company Registration',
        short: 'End-to-end incorporation, from name reservation through to your juristic person registration number.',
        price: 'THB 8,900 (government fees included)',
        body: [
          'End-to-end registration of a Thai limited company: name availability check and reservation, preparation of the memorandum of association, definition of business objectives, shareholder structure and registered capital, and filing the registration application with the Department of Business Development through to issue of the registration number.',
          'The fee includes all government charges, a complete set of incorporation documents, the company affidavit, the company seal, and guidance on opening a corporate bank account — together with advice on VAT registration and employer registration with the Social Security Office once your business meets the thresholds.',
          'If you are not yet certain whether incorporating is the right move, we are glad to advise at no charge: the tax position compared with trading as an individual, the annual cost of maintaining company accounts, and whether incorporation suits your current revenue. You decide with the full picture in front of you.',
        ],
      },
      {
        id: 'tax',
        title: 'Tax Advisory',
        short: 'Tax planning, health checks, and support across every Thai tax type.',
        price: 'Quoted by scope of work',
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
        price: 'Quoted by scope of work',
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
        a: 'Fees are assessed on transaction volume, business complexity, and the number of group entities, with dormant or low-activity companies at our starting rate. We always quote in writing before starting — no hidden charges, and quotations are free with no obligation.',
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
      'TPN stands for "Trusted Professional Network" — a network of professionals you can trust. It describes how we work: the combined expertise of auditors who stay close to every client.',
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
    formNote: 'Your details are sent directly to us and used only to respond to your enquiry. For an immediate reply, reach us on LINE or by phone.',
    formSending: 'Sending...',
    formSuccess: 'Your message has been sent — thank you. We will be in touch shortly.',
    formError: 'Sorry, your message could not be sent. Please try again, or reach us on LINE or by phone.',
    infoHead: 'Get in touch',
    callLabel: 'Call us',
    lineLabel: 'Add us on LINE',
    lineSub: 'The fastest way to reach us — tap to add, or scan the QR code',
    lineCta: 'Tap to add as friend',
    lineQr: 'Scan to add us on LINE',
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
