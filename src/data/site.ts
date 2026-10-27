// Tüm site verisi tek yerde. Doğrulanmamış kurumsal iddialar (kuruluş yılı,
// proje sayısı, sertifika, müşteri sayısı vb.) BİLEREK eklenmemiştir.
// TODO: Gerçek alan adı ve doğrulanmış iletişim bilgilerini girin.

export const site = {
  name: 'M&T Mimarlık Mühendislik',
  shortName: 'M&T',
  url: 'https://mtmimarlikmuhendislik.com',
  locale: 'tr_TR',
  language: 'tr',
  tagline: 'Geleceği tasarlıyor, güvenle inşa ediyoruz.',
  description:
    'M&T Mimarlık Mühendislik; mimari tasarım ve mühendislik hizmetlerini estetik, işlevsellik ve güvenliği bir araya getirerek sunmayı hedefleyen bir mimarlık ve mühendislik markasıdır.',
  contact: {
    email: 'info@mtmimarlikmuhendislik.com',
    // Yalnızca şehir/ülke; fiziksel ofis adresi doğrulanana kadar eklenmez.
    location: 'İstanbul, Türkiye',
  },
};

// TODO: Gerçek sosyal medya hesap URL'lerini girin.
export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/mtmimarlikmuhendisliktr', network: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mt-mimarlik-muhendislik', network: 'linkedin' },
  { label: 'X', href: '#', network: 'x' },
  { label: 'Facebook', href: '#', network: 'facebook' },
  { label: 'YouTube', href: '#', network: 'youtube' },
] as const;

export const nav = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

/**
 * Kurucu geçmiş mesleki deneyimleri — müşteri / iş ortağı listesi değildir.
 * Sayfa şimdilik yayında değil. Geri koymak için:
 * `backup/referanslar/referanslar.astro` → `src/pages/referanslar.astro`
 * `backup/referanslar/logos/` → `public/images/references/`
 * ve menüye Referanslar bağlantısını ekleyin.
 */
export type ReferenceOrg = {
  name: string;
  logo: string;
  roleTitle: string;
  description: string;
  /** Opsiyonel kurum sitesi; verilmezse tıklanabilir olmaz. */
  href?: string;
  alt?: string;
};

export const references: ReferenceOrg[] = [
  {
    name: 'Arslan İnşaat',
    logo: '/images/references/arslan-insaat.png',
    roleTitle: 'Şantiye Yönetimi ve Anahtar Teslim Uygulamalar',
    description:
      "25'ten fazla şantiyede şantiye şefliği görevleri ve anahtar teslim proje süreçlerinde saha yönetimi deneyimi.",
  },
  {
    name: 'Doruk Grup',
    logo: '/images/references/doruk-grup.png',
    roleTitle: 'Asma Tavan ve Bölme Duvar Sistemleri',
    description:
      "Asma tavan ve bölme duvar uygulamalarında, 15'ten fazla tavan modeli kapsamında şantiye şefliği ve saha koordinasyonu deneyimi.",
  },
  {
    name: 'Abdi İbrahim',
    logo: '/images/references/abdi-ibrahim.png',
    roleTitle: 'Revit Projelendirme ve Şantiye Yönetimi',
    description:
      'Abdi İbrahim şantiyesinde Revit üzerinden proje çizimleri ve şantiye şefliği görevleri.',
  },
  {
    name: 'Karasu Project',
    logo: '/images/references/karasu-project.png',
    roleTitle: 'Mimari ve Statik Projelendirme',
    description:
      'Mimari ve statik proje çizimleri, üç boyutlu görselleştirme (render) çalışmaları ve dış cephe tasarımı.',
  },
  {
    name: 'Trio Metal Tavan',
    logo: '/images/references/trio-metal-tavan.png',
    roleTitle: 'Mimari Tavan Projeleri ve Saha Yönetimi',
    description:
      'İstanbul Finans Merkezi kulelerinde mimari tavan projelerinin çizimi ve şantiye şefliği deneyimi.',
  },
];

export const services = [
  {
    slug: 'mimari-tasarim',
    icon: 'Building2',
    title: 'Mimari Tasarım',
    text: 'Konsept geliştirmeden uygulama projesine kadar; mekânın kullanımını, ışığını ve bağlamını gözeten tasarım süreci.',
    summary:
      'İhtiyaç analizi, konsept ve uygulama projesini kapsayan bütüncül mimari tasarım süreci.',
    body: [
      'Mimari tasarım sürecinde mekânın nasıl kullanılacağını, ışık ve yönelim koşullarını, çevreyle kurduğu ilişkiyi ve kullanıcı deneyimini birlikte ele alıyoruz.',
      'Konsept aşamasından uygulama projesine kadar ölçekli çizimler, malzeme kararları ve detay çözümleri üzerinden ilerleyerek uygulanabilir bir bütün oluşturmayı hedefliyoruz.',
    ],
  },
  {
    slug: 'muhendislik-hizmetleri',
    icon: 'Ruler',
    title: 'Mühendislik Hizmetleri',
    text: 'Taşıyıcı sistem tasarımı ve statik hesaplar dahil, yapının güvenliğini ve performansını destekleyen mühendislik çözümleri.',
    summary:
      'Yapının güvenliğini ve performansını destekleyen taşıyıcı sistem ve statik çözümler.',
    body: [
      'Mühendislik hizmetlerinde taşıyıcı sistem kurgusu, statik hesaplar ve yapısal kararların mimari tasarımla uyumlu olmasına önem veriyoruz.',
      'Amaç; güvenlik, dayanıklılık ve işlevselliği aynı proje bütünü içinde değerlendirerek uygulanabilir teknik çözümler üretmektir.',
    ],
  },
  {
    slug: 'tesisat-ve-koordinasyon',
    icon: 'Wrench',
    title: 'Tesisat ve Koordinasyon',
    text: 'Mekanik, elektrik ve tesisat disiplinlerinin mimari projeyle uyumlu biçimde koordine edilmesi.',
    summary:
      'Mekanik, elektrik ve tesisat disiplinlerinin mimariyle uyumlu koordinasyonu.',
    body: [
      'Tesisat ve koordinasyon çalışmalarında mekanik, elektrik ve ilgili disiplinlerin mimari kararlarla çakışmadan ilerlemesini gözetiyoruz.',
      'Disiplinler arası uyum, hem proje kalitesini hem de uygulama sürecinin sağlıklı ilerlemesini destekler.',
    ],
  },
  {
    slug: 'danismanlik-ve-proje-yonetimi',
    icon: 'ClipboardList',
    title: 'Danışmanlık ve Proje Yönetimi',
    text: 'Proje geliştirme, süreç planlaması ve uygulama aşamasında teknik danışmanlık desteği.',
    summary:
      'Proje geliştirme, süreç planlaması ve uygulama aşamasında teknik danışmanlık.',
    body: [
      'Danışmanlık ve proje yönetimi kapsamında ihtiyaçların netleştirilmesi, süreçlerin planlanması ve teknik kararların izlenebilir biçimde yürütülmesi üzerinde duruyoruz.',
      'Her projede iletişim, önceliklendirme ve uygulama takibini; tasarımın sahaya doğru aktarılmasını destekleyecek şekilde ele alıyoruz.',
    ],
  },
] as const;

export const approach = [
  {
    no: '01',
    title: 'Dinle ve Analiz Et',
    text: 'İhtiyaçları, bütçeyi ve arsa ya da yapı koşullarını birlikte netleştiriyoruz.',
  },
  {
    no: '02',
    title: 'Konsept Geliştir',
    text: 'Mekânsal fikirleri çizim ve modeller üzerinden değerlendirilebilir hâle getiriyoruz.',
  },
  {
    no: '03',
    title: 'Detaylandır ve Koordine Et',
    text: 'Mimari ve mühendislik disiplinlerini tutarlı bir proje bütünü içinde buluşturuyoruz.',
  },
  {
    no: '04',
    title: 'Güvenle Uygula',
    text: 'Uygulama sürecini takip ederek tasarımın sahaya doğru aktarılmasını gözetiyoruz.',
  },
] as const;

export const aboutValues = [
  {
    title: 'Estetik ve işlev',
    text: 'Görünüm ile kullanımın birbirini desteklediği mekânlar için dengeli kararlar almayı önemsiyoruz.',
  },
  {
    title: 'Disiplinler arası uyum',
    text: 'Mimari ve mühendislik süreçlerini ayrı parçalar değil, tek bir proje bütünü olarak ele alıyoruz.',
  },
  {
    title: 'Uygulanabilirlik',
    text: 'Tasarım kararlarının sahada karşılık bulması için teknik netlik ve koordinasyonu ön planda tutuyoruz.',
  },
] as const;
