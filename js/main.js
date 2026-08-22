/* aRacnid GamepadApp website interactions */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-aracnid');
  const toggler = document.querySelector('.navbar-toggler-custom');
  const navCollapse = document.getElementById('mainNav');
  const backToTop = document.querySelector('.back-to-top');

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.download': 'Download',
      'nav.features': 'Features',
      'nav.controllers': 'Supported Controllers',
      'nav.faq': 'FAQ',

      'hero.eyebrow': 'Windows gamepad utility',
      'hero.title': 'Take full control of your <span>gamepad.</span>',
      'hero.description': 'Test, remap, customize and emulate supported controllers on Windows with aRacnid GamepadApp.',
      'hero.download': 'Download for Windows',
      'hero.github': 'View on GitHub',
      'hero.latest': 'Latest Release',

      'download.eyebrow': 'Get aRacnid',
      'download.title': 'Choose your download',
      'download.subtitle': 'Setup is recommended for most users. Both packages are built for Windows 10 / 11 64-bit.',
      'download.recommended': 'Recommended',
      'download.setupTitle': 'Setup Installer',
      'download.setupDesc': 'The easiest way to install aRacnid on your PC.',
      'download.setupButton': 'Download Setup',
      'download.portableTitle': 'Portable ZIP',
      'download.portableDesc': 'Extract the archive and run aRacnid without using the installer.',
      'download.portableButton': 'Download ZIP',
      'download.smartScreen': 'aRacnid and its installer are currently unsigned, so Windows SmartScreen may display a warning on first launch.',

      'install.eyebrow': 'Installation',
      'install.title': 'Up and running in four steps',
      'install.subtitle': 'After your download starts, follow these steps to prepare virtual controller output.',
      'install.step1Title': 'Download',
      'install.step1Text': 'Run the Setup installer, or extract the Portable ZIP.',
      'install.step2Title': 'Launch aRacnid',
      'install.step2Text': 'Open the app and select or create your profile.',
      'install.step3Title': 'Manage Components',
      'install.step3Text': 'Open <strong>Advanced → Manage Components</strong> and install ViGEmBus and HidHide when needed.',
      'install.step4Title': 'Connect & Play',
      'install.step4Text': 'Connect a supported controller by USB or Bluetooth and choose your virtual output.',

      'features.eyebrow': 'Features',
      'features.title': 'Everything you need between your controller and the game',
      'features.subtitle': 'Built around real-time testing, flexible remapping and clean virtual controller output.',

      'features.testerTitle': 'Gamepad Tester',
      'features.testerText': 'See buttons, sticks, triggers and controller status react in real time. aRacnid can visualize both DualShock-style and Xbox-style layouts.',
      'features.testerPoint1': 'Live button and analog feedback',
      'features.testerPoint2': 'Connection and battery information',
      'features.testerPoint3': 'DS4 and Xbox visual layouts',

      'features.remapTitle': 'Button Remapping',
      'features.remapText': 'Map buttons, sticks and triggers to the output layout you want, then tune deadzone, anti-deadzone and sensitivity settings.',
      'features.remapPoint1': 'Per-control remapping',
      'features.remapPoint2': 'Analog deadzone and sensitivity controls',
      'features.remapPoint3': 'Vibration testing and trigger mappings',

      'features.virtualTitle': 'Virtual DS4 or Xbox 360 Output',
      'features.virtualText': 'Use a supported physical controller and present it to games as a virtual DualShock 4 or Xbox 360 Controller.',
      'features.physicalInput': 'Physical input',

      'features.lightbarTitle': 'Lightbar Customization',
      'features.lightbarText': 'Choose custom colors, save color presets and control the controller lightbar directly from aRacnid.',
      'features.lightbarPoint1': 'Color picker with RGB and HEX controls',
      'features.lightbarPoint2': 'Quick color presets',
      'features.lightbarPoint3': 'Lightbar on/off control',

      'features.advancedTitle': 'Advanced Components',
      'features.advancedText': 'Manage the drivers used for virtual controller output from inside the app. HidHide also includes a Configure action for double-input prevention.',
      'features.advancedPoint1': 'Install ViGEmBus and HidHide from Advanced → Manage Components',
      'features.advancedPoint2': 'Configure HidHide from aRacnid',
      'features.advancedPoint3': 'Third-party components are downloaded from their official GitHub sources only when you choose to install them',

      'controllers.eyebrow': 'Compatibility',
      'controllers.title': 'Supported physical controllers',
      'controllers.subtitle': 'Connect supported controllers by USB or Bluetooth where the controller provides it.',
      'controllers.virtualLabel': 'Virtual output',
      'controllers.virtualText': 'DualShock 4 or Xbox 360 Controller',
      'controllers.unsupportedLabel': 'Not supported as physical input yet',
      'controllers.unsupportedText': 'Xbox 360 / Xbox One / Xbox Series controllers and Steam Controller',
      'controllers.f310Note': '<strong>Note:</strong> Logitech F310, F510, and F710 controllers may currently produce incorrect or repeated inputs in some games while using XInput mode. The cause is still being investigated. To avoid issues, we recommend using these controllers in <strong>DirectInput (D)</strong> mode. See <a href="#faq10"><strong>FAQ #10</strong></a> if you are unsure how to switch modes.',

      'faq.title': 'Frequently asked questions',
      'faq.subtitle': 'Quick answers to the most common setup and troubleshooting questions.',

      'faq.q1': 'Which controllers does aRacnid support?',
      'faq.a1': 'aRacnid supports DualShock 4 v1/v2, DualShock 4 USB Wireless Adapter, DualSense, DualSense Edge, Nintendo Switch Pro Controller, Nintendo Joy-Con, and Logitech F310/F510/F710. Xbox and Steam controllers are not currently supported as physical input devices.',

      'faq.q2': 'Do I need ViGEmBus and HidHide?',
      'faq.a2': 'ViGEmBus is required for virtual controller output. HidHide is recommended to prevent double input by hiding the physical controller from games. Both can be installed from Advanced → Manage Components.',

      'faq.q3': 'Can I use aRacnid over Bluetooth?',
      'faq.a3': 'Yes. Supported controllers can be used over Bluetooth when the controller and Windows provide a compatible Bluetooth connection. USB connections are also supported.',

      'faq.q4': 'Why does Windows SmartScreen show a warning?',
      'faq.a4': 'aRacnid and its installer are currently unsigned, so Windows SmartScreen may display a warning on first launch. Download aRacnid only from the official GitHub repository or this website.',

      'faq.q5': 'My controller causes double input in games. What should I do?',
      'faq.a5': 'First, close aRacnid and connect your controller to your PC. Open HidHide Configuration and go to the Devices tab. Check the box next to your controller, then enable Enable device hiding at the bottom of the window. Finally, disconnect your controller once and reconnect it.',

      'faq.q6': 'My controller is not detected by aRacnid. What should I do?',
      'faq.a6': 'First, close aRacnid and open HidHide Configuration. Go to the Applications tab and click the + button in the bottom-right corner. Select aRacnid GamepadApp from your desktop and add it to the list. Then close HidHide and reopen aRacnid.',

      'faq.q7': 'The virtual controller is not detected in my game. What should I do?',
      'faq.a7': 'Check Advanced → Manage Components and make sure ViGEmBus is installed. If your physical controller is detected by aRacnid, make sure a virtual DualShock 4 or Xbox 360 output is selected. Close the game, keep aRacnid running, and launch the game again. If needed, disconnect and reconnect the controller once.',

      'faq.q8': 'Why does my game show Xbox buttons when I use a PlayStation controller?',
      'faq.a8': 'This is usually not an error. If Xbox 360 is selected as the virtual output, the game sees an Xbox 360 Controller and may display A/B/X/Y prompts. If the game supports PlayStation prompts, select DualShock 4 as the virtual output instead.',

      'faq.q10': 'My Logitech F310, F510, or F710 registers inputs twice or behaves incorrectly in games. What should I do?',
      'faq.a10': 'Logitech F310, F510, and F710 controllers may currently produce incorrect or repeated inputs, such as L1/R1 being registered more than once, while using <strong>XInput (X)</strong> mode. The exact cause is still being investigated. As a temporary workaround, move the <strong>X / D</strong> switch on the controller to <strong>D (DirectInput)</strong>, reconnect it, and restart aRacnid. This issue has not been observed so far while using DirectInput mode.',

      'faq.q9': 'What should I do if aRacnid is still not working correctly?',
      'faq.a9': 'Make sure the required components are installed and your controller is detected by Windows. If the problem continues, open an issue on the official aRacnid GitHub repository and include your controller model, connection type (USB or Bluetooth), Windows version, and a clear description of the problem.',

      'faq.helpTitle': 'Need help or found a bug?',
      'faq.helpText': 'Open a GitHub Issue for support, bug reports or feature requests.',
      'faq.helpButton': 'Open GitHub Issue',

      'footer.tagline': 'Gamepad testing, remapping, customization and virtual output for Windows.',
      'footer.support': 'Support',
      'footer.privacy': 'Privacy-first: aRacnid does not collect telemetry, usage data or personal information.',
      'footer.developed': 'Developed by',
      'footer.license': 'aRacnid GamepadApp is licensed under GPL-3.0.',
      'footer.disclaimer': 'aRacnid is not affiliated with or endorsed by Sony Interactive Entertainment, Microsoft, Nintendo, Valve, or Logitech.',

      'toast.download': 'Download started. Installation guide is just below.'
    },

    tr: {
      'nav.home': 'Ana Sayfa',
      'nav.download': 'İndir',
      'nav.features': 'Özellikler',
      'nav.controllers': 'Desteklenen Kollar',
      'nav.faq': 'SSS',

      'hero.eyebrow': 'Windows gamepad aracı',
      'hero.title': 'Gamepad kontrolünü tamamen <span>eline al.</span>',
      'hero.description': 'aRacnid GamepadApp ile desteklenen kontrolcüleri Windows üzerinde test et, yeniden eşle, özelleştir ve sanal gamepad olarak kullan.',
      'hero.download': 'Windows için İndir',
      'hero.github': 'GitHub’da Görüntüle',
      'hero.latest': 'Son Sürüm',

      'download.eyebrow': 'aRacnid’i Edin',
      'download.title': 'İndirme seçeneğini seç',
      'download.subtitle': 'Çoğu kullanıcı için Setup önerilir. Her iki paket de Windows 10 / 11 64-bit içindir.',
      'download.recommended': 'Önerilen',
      'download.setupTitle': 'Setup Kurulumu',
      'download.setupDesc': 'aRacnid’i bilgisayarına kurmanın en kolay yolu.',
      'download.setupButton': 'Setup İndir',
      'download.portableTitle': 'Portable ZIP',
      'download.portableDesc': 'Arşivi çıkar ve kurulum kullanmadan aRacnid’i çalıştır.',
      'download.portableButton': 'ZIP İndir',
      'download.smartScreen': 'aRacnid ve kurulum dosyası şu anda dijital olarak imzalı değildir; bu nedenle Windows SmartScreen ilk çalıştırmada uyarı gösterebilir.',

      'install.eyebrow': 'Kurulum',
      'install.title': 'Dört adımda kullanıma hazır',
      'install.subtitle': 'İndirme başladıktan sonra sanal gamepad çıkışını hazırlamak için bu adımları takip et.',
      'install.step1Title': 'İndir',
      'install.step1Text': 'Setup dosyasını çalıştır veya Portable ZIP’i çıkar.',
      'install.step2Title': 'aRacnid’i Aç',
      'install.step2Text': 'Uygulamayı aç ve profilini seç veya yeni profil oluştur.',
      'install.step3Title': 'Bileşenleri Yönet',
      'install.step3Text': '<strong>Gelişmiş → Bileşenleri Yönet</strong> bölümünü aç ve gerektiğinde ViGEmBus ile HidHide’ı kur.',
      'install.step4Title': 'Bağla ve Oyna',
      'install.step4Text': 'Desteklenen kontrolcünü USB veya Bluetooth ile bağla ve sanal çıkış türünü seç.',

      'features.eyebrow': 'Özellikler',
      'features.title': 'Kontrolcün ile oyun arasında ihtiyacın olan her şey',
      'features.subtitle': 'Gerçek zamanlı test, esnek tuş atama ve temiz sanal gamepad çıkışı üzerine kuruldu.',

      'features.testerTitle': 'Gamepad Tester',
      'features.testerText': 'Tuşları, analogları, tetikleri ve gamepad durumunu gerçek zamanlı olarak gör. aRacnid hem DualShock hem Xbox tarzı düzenleri görselleştirebilir.',
      'features.testerPoint1': 'Canlı tuş ve analog geri bildirimi',
      'features.testerPoint2': 'Bağlantı ve pil bilgisi',
      'features.testerPoint3': 'DS4 ve Xbox görsel düzenleri',

      'features.remapTitle': 'Tuş Atamaları',
      'features.remapText': 'Tuşları, analogları ve tetikleri istediğin çıkış düzenine eşle; deadzone, anti-deadzone ve hassasiyet ayarlarını düzenle.',
      'features.remapPoint1': 'Kontrol bazlı yeniden eşleme',
      'features.remapPoint2': 'Analog deadzone ve hassasiyet ayarları',
      'features.remapPoint3': 'Titreşim testi ve tetik eşlemeleri',

      'features.virtualTitle': 'Sanal DS4 veya Xbox 360 Çıkışı',
      'features.virtualText': 'Desteklenen fiziksel kontrolcünü oyunlara sanal DualShock 4 veya Xbox 360 Controller olarak göster.',
      'features.physicalInput': 'Fiziksel giriş',

      'features.lightbarTitle': 'Lightbar Özelleştirme',
      'features.lightbarText': 'Özel renkler seç, renk presetleri kaydet ve kontrolcünün ışık çubuğunu doğrudan aRacnid üzerinden yönet.',
      'features.lightbarPoint1': 'RGB ve HEX kontrollü renk seçici',
      'features.lightbarPoint2': 'Hızlı renk presetleri',
      'features.lightbarPoint3': 'Lightbar açma/kapatma kontrolü',

      'features.advancedTitle': 'Gelişmiş Bileşenler',
      'features.advancedText': 'Sanal gamepad çıkışı için kullanılan sürücüleri uygulama içinden yönet. HidHide, çift input sorununu önlemek için ayrıca Yapılandır seçeneği sunar.',
      'features.advancedPoint1': 'ViGEmBus ve HidHide’ı Gelişmiş → Bileşenleri Yönet üzerinden kur',
      'features.advancedPoint2': 'HidHide’ı aRacnid içinden yapılandır',
      'features.advancedPoint3': 'Üçüncü taraf bileşenler yalnızca sen kurmayı seçtiğinde resmî GitHub kaynaklarından indirilir',

      'controllers.eyebrow': 'Uyumluluk',
      'controllers.title': 'Desteklenen fiziksel kontrolcüler',
      'controllers.subtitle': 'Desteklenen kontrolcüleri, kontrolcü destekliyorsa USB veya Bluetooth ile bağla.',
      'controllers.virtualLabel': 'Sanal çıkış',
      'controllers.virtualText': 'DualShock 4 veya Xbox 360 Controller',
      'controllers.unsupportedLabel': 'Şimdilik fiziksel giriş olarak desteklenmiyor',
      'controllers.unsupportedText': 'Xbox 360 / Xbox One / Xbox Series kolları ve Steam Controller',
      'controllers.f310Note': '<strong>Not:</strong> Logitech F310, F510 ve F710 modellerinin XInput modunda bazı oyunlarda hatalı veya tekrarlanan girişler görülebilmektedir. Sorunun nedeni şu anda araştırılmaktadır. Sorun yaşamamak için bu kontrolcüleri <strong>DirectInput (D)</strong> modunda kullanmanızı öneririz. Nasıl yapılacağını bilmiyorsanız <a href="#faq10"><strong>SSS 10. maddeye</strong></a> bakabilirsiniz.',

      'faq.title': 'Sık sorulan sorular',
      'faq.subtitle': 'En sık karşılaşılan kurulum ve sorun giderme konuları için hızlı çözümler.',

      'faq.q1': 'aRacnid hangi kontrolcüleri destekliyor?',
      'faq.a1': 'aRacnid; DualShock 4 v1/v2, DualShock 4 USB Wireless Adapter, DualSense, DualSense Edge, Nintendo Switch Pro Controller, Nintendo Joy-Con ve Logitech F310/F510/F710 modellerini destekler. Xbox ve Steam kontrolcüleri şu anda fiziksel giriş aygıtı olarak desteklenmemektedir.',

      'faq.q2': 'ViGEmBus ve HidHide gerekli mi?',
      'faq.a2': 'ViGEmBus sanal kontrolcü çıkışı için gereklidir. HidHide ise fiziksel kontrolcüyü oyunlardan gizleyerek çift input sorununu önlemek için önerilir. Her iki bileşen de Gelişmiş → Bileşenleri Yönet bölümünden kurulabilir.',

      'faq.q3': 'aRacnid Bluetooth üzerinden kullanılabilir mi?',
      'faq.a3': 'Evet. Desteklenen kontrolcüler, kontrolcü ve Windows uyumlu bir Bluetooth bağlantısı sağladığında Bluetooth üzerinden kullanılabilir. USB bağlantısı da desteklenir.',

      'faq.q4': 'Windows SmartScreen neden uyarı gösteriyor?',
      'faq.a4': 'aRacnid ve kurulum dosyası şu anda dijital olarak imzalanmamıştır. Bu nedenle Windows SmartScreen ilk çalıştırmada uyarı gösterebilir. aRacnid’i yalnızca resmi GitHub deposundan veya bu siteden indirin.',

      'faq.q5': 'Kolum oyunlarda çift atlama / çift input yapıyor. Ne yapmalıyım?',
      'faq.a5': 'Önce aRacnid’i kapatın ve kontrolcünüzü bilgisayara bağlayın. HidHide Configuration uygulamasını açıp Devices sekmesine gidin. Listede bulunan kontrolcünüzün yanındaki kutucuğu işaretleyin ve pencerenin altındaki Enable device hiding seçeneğini etkinleştirin. Son olarak kontrolcünüzü bilgisayardan bir kez çıkarıp yeniden bağlayın.',

      'faq.q6': 'Kolum aRacnid tarafından görünmüyor. Ne yapmalıyım?',
      'faq.a6': 'Önce aRacnid’i kapatın ve HidHide Configuration uygulamasını açın. Applications sekmesine gidin ve sağ alttaki + düğmesine basın. Masaüstündeki aRacnid GamepadApp uygulamasını seçip listeye ekleyin. Ardından HidHide’ı kapatıp aRacnid’i yeniden açın.',

      'faq.q7': 'Sanal kontrolcü oyunda görünmüyor / çalışmıyor. Ne yapmalıyım?',
      'faq.a7': 'Gelişmiş → Bileşenleri Yönet bölümünü açıp ViGEmBus’ın kurulu olduğundan emin olun. Fiziksel kontrolcünüz aRacnid tarafından algılanıyorsa sanal DualShock 4 veya Xbox 360 çıkışının seçili olduğunu kontrol edin. Oyunu kapatın, aRacnid açıkken oyunu yeniden başlatın. Gerekirse kontrolcüyü bir kez çıkarıp tekrar bağlayın.',

      'faq.q8': 'PlayStation kolu kullanıyorum ama oyunda Xbox tuşları görünüyor. Neden?',
      'faq.a8': 'Bu genellikle bir hata değildir. Sanal çıkış olarak Xbox 360 seçiliyse oyun kontrolcüyü Xbox 360 Controller olarak görür ve A/B/X/Y tuşlarını gösterebilir. Oyun PlayStation tuş simgelerini destekliyorsa sanal çıkışı DualShock 4 olarak seçin.',

      'faq.q10': 'Logitech F310, F510 veya F710 kullanırken tuşlar iki kez algılanıyor ya da oyunlarda hatalı çalışıyor. Ne yapmalıyım?',
      'faq.a10': 'Logitech F310, F510 ve F710 modellerinin <strong>XInput (X)</strong> modunda bazı oyunlarda L1/R1 gibi girişler hatalı veya birden fazla kez algılanabiliyor. Sorunun kesin nedeni şu anda araştırılmaktadır. Geçici çözüm olarak kontrolcünün üzerindeki <strong>X / D</strong> anahtarını <strong>D (DirectInput)</strong> konumuna alın. Ardından kontrolcüyü yeniden bağlayın ve aRacnid’i tekrar başlatın. DirectInput modunda bu sorun şu ana kadar gözlemlenmemiştir.',

      'faq.q9': 'aRacnid hâlâ düzgün çalışmıyorsa ne yapmalıyım?',
      'faq.a9': 'Gerekli bileşenlerin kurulu olduğundan ve kontrolcünüzün Windows tarafından algılandığından emin olun. Sorun devam ederse resmi aRacnid GitHub deposunda bir Issue açın. Kontrolcü modelinizi, bağlantı türünü (USB veya Bluetooth), Windows sürümünüzü ve sorunu mümkün olduğunca açık şekilde belirtin.',

      'faq.helpTitle': 'Yardıma mı ihtiyacın var veya hata mı buldun?',
      'faq.helpText': 'Destek, hata bildirimi veya özellik isteği için GitHub Issue aç.',
      'faq.helpButton': 'GitHub Issue Aç',

      'footer.tagline': 'Windows için gamepad test, tuş atama, özelleştirme ve sanal çıkış aracı.',
      'footer.support': 'Destek',
      'footer.privacy': 'Gizlilik odaklı: aRacnid telemetri, kullanım verisi veya kişisel bilgi toplamaz.',
      'footer.developed': 'Geliştiren',
      'footer.license': 'aRacnid GamepadApp GPL-3.0 ile lisanslanmıştır.',
      'footer.disclaimer': 'aRacnid; Sony Interactive Entertainment, Microsoft, Nintendo, Valve veya Logitech ile bağlantılı değildir ve bu şirketler tarafından desteklenmemektedir.',

      'toast.download': 'İndirme başladı. Kurulum rehberi hemen aşağıda.'
    }
  };

  /* Latest release version (GitHub API) */
  const RELEASE_API_URL =
    'https://api.github.com/repos/lutfisehmusoglu/aRacnid-GamepadApp/releases/latest';

  const FALLBACK_VERSION = '1.0.5';

  function applyVersion(version) {
    document
      .querySelectorAll('[data-version]')
      .forEach(el => {
        el.textContent = version;
      });
  }

  applyVersion(FALLBACK_VERSION);

  fetch(RELEASE_API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const tag =
        typeof data.tag_name === 'string'
          ? data.tag_name.trim()
          : '';

      const version = tag.replace(/^v/i, '');

      if (version) {
        applyVersion(version);
      }
    })
    .catch(() => {
      /* keep fallback version silently */
    });

  function handleScroll() {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 30);
    backToTop?.classList.toggle('show', y > 500);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (toggler && navCollapse) {
    navCollapse.addEventListener('show.bs.collapse', () => toggler.classList.add('active'));
    navCollapse.addEventListener('hide.bs.collapse', () => toggler.classList.remove('active'));

    navCollapse.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      })
    );
  }

  function openFaqPanel(target) {
    if (!target?.classList.contains('accordion-collapse')) {
      return target;
    }

    bootstrap.Collapse.getOrCreateInstance(
      target,
      { toggle: false }
    ).show();

    return target.closest('.accordion-item') || target;
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const selector = anchor.getAttribute('href');
      if (!selector || selector === '#') return;

      const target = document.querySelector(selector);
      if (!target) return;

      event.preventDefault();

      const scrollTarget = openFaqPanel(target);
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const targetPosition =
        scrollTarget.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight +
        90;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -35px 0px'
      }
    );

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 3) * 0.07}s`;
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  const sectionLinks = [
    ...document.querySelectorAll('.nav-link[data-section]')
  ];

  const observedSections = sectionLinks
    .map(link => document.getElementById(link.dataset.section))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const navObserver = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (!visible) return;

        sectionLinks.forEach(link =>
          link.classList.toggle(
            'active',
            link.dataset.section === visible.target.id
          )
        );
      },
      {
        rootMargin: '-25% 0px -62% 0px',
        threshold: [0.02, 0.15, 0.4]
      }
    );

    observedSections.forEach(section =>
      navObserver.observe(section)
    );
  }

  function showToast(message) {
    let toast = document.querySelector('.download-toast');

    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'download-toast';
      toast.innerHTML =
        '<i class="bi bi-download"></i><span></span>';

      document.body.appendChild(toast);
    }

    toast.querySelector('span').textContent = message;
    toast.classList.add('show');

    window.clearTimeout(toast._hideTimer);

    toast._hideTimer = window.setTimeout(
      () => toast.classList.remove('show'),
      3600
    );
  }

  document
    .querySelectorAll('.download-trigger')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        const url = link.href;
        const frame = document.createElement('iframe');

        frame.style.display = 'none';
        frame.setAttribute('aria-hidden', 'true');
        frame.src = url;

        document.body.appendChild(frame);

        window.setTimeout(
          () => frame.remove(),
          60000
        );

        const lang =
          document.documentElement.lang === 'tr'
            ? 'tr'
            : 'en';

        showToast(
          translations[lang]['toast.download']
        );

        window.setTimeout(() => {
          document
            .getElementById('installation')
            ?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
        }, 2000);
      });
    });

  function applyLanguage(lang) {
    const dictionary =
      translations[lang] || translations.en;

    document.documentElement.lang = lang;

    document
      .querySelectorAll('[data-i18n]')
      .forEach(el => {
        const value =
          dictionary[el.dataset.i18n];

        if (value !== undefined) {
          el.textContent = value;
        }
      });

    document
      .querySelectorAll('[data-i18n-html]')
      .forEach(el => {
        const value =
          dictionary[el.dataset.i18nHtml];

        if (value !== undefined) {
          el.innerHTML = value;
        }
      });

    document
      .querySelectorAll('.lang-btn')
      .forEach(button => {
        const active =
          button.dataset.lang === lang;

        button.classList.toggle(
          'active',
          active
        );

        button.setAttribute(
          'aria-pressed',
          active ? 'true' : 'false'
        );
      });

    document.title =
      lang === 'tr'
        ? 'aRacnid GamepadApp — Windows Gamepad Kontrol ve Tuş Atama'
        : 'aRacnid GamepadApp — Windows Gamepad Control & Remapping';

    try {
      localStorage.setItem(
        'aracnid-language',
        lang
      );
    } catch (_) { }
  }

  document
    .querySelectorAll('.lang-btn')
    .forEach(button => {
      button.addEventListener(
        'click',
        () =>
          applyLanguage(
            button.dataset.lang
          )
      );
    });

  let initialLanguage = 'en';

  try {
    initialLanguage =
      localStorage.getItem(
        'aracnid-language'
      ) || 'en';
  } catch (_) { }

  applyLanguage(
    initialLanguage === 'tr'
      ? 'tr'
      : 'en'
  );

  function openFaqFromHash() {
    if (!window.location.hash) return;

    const target = document.querySelector(window.location.hash);
    if (!target?.classList.contains('accordion-collapse')) return;

    const scrollTarget = openFaqPanel(target);
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    window.setTimeout(() => {
      const targetPosition =
        scrollTarget.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        18;

      window.scrollTo({
        top: targetPosition,
        behavior: 'auto'
      });
    }, 120);
  }

  window.addEventListener('hashchange', openFaqFromHash);
  openFaqFromHash();

  backToTop?.addEventListener(
    'click',
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  );
});
