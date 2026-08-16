const translations = {
    en: {
        // Navbar
        "nav_courier": "Become a Courier",
        "nav_driver": "Drive with Us",
        "nav_partner": "Partner with Us",
        "nav_carrental": "List Your Fleet",

        // Hero
        "hero_title1": "One App.",
        "hero_title2": "Every Service.",
        "hero_sub": "<strong><span style='color: var(--brand-light);'>Reboulot</span></strong> food delivery, taxi rides, car rental & parcel shipping,<br class='break-lg'/>all in one seamless global experience.",
        "hero_cta1": "Get Started",
        "hero_cta2": "Explore Services",
        "hero_store": "Available on",

        // Ecosystem
        "eco_label": "The Ecosystem",
        "eco_title1": "All Services.",
        "eco_title2": "One Platform.",
        "eco_sub": "<span style='color: var(--brand-light);'>Reboulot</span> connects customers, partners, couriers, taxi drivers and car rental agencies through dedicated, purpose-built applications.",
        "eco_tag_partner": "For Businesses",
        "eco_app_partner": "Partner App",
        "eco_desc_partner": "Restaurants, grocery stores and retail shops. Manage your menu, receive orders and reach thousands of new customers without worrying about delivery logistics.",
        "eco_cta_partner": "Register your store →",
        "eco_tag_courier": "For Couriers",
        "eco_app_courier": "Delivery App",
        "eco_desc_courier": "Accept delivery orders in your zone, navigate efficiently and collect payment directly from customers in cash. Full control, zero middleman.",
        "eco_cta_courier": "Become a courier →",
        "eco_tag_taxi": "For Drivers",
        "eco_app_taxi": "Taxi App",
        "eco_desc_taxi": "Go online in seconds and connect with passengers nearby. Riders pay you directly in cash at the end of each trip no delays, no deductions.",
        "eco_cta_taxi": "Drive with us →",

        // Car Rental
        "eco_tag_carrental": "For Agencies",
        "eco_app_carrental": "Rental App",
        "eco_desc_carrental": "List your fleet of vehicles from city cars to SUVs and luxury. Receive bookings directly from customers across multiple countries.",
        "eco_cta_carrental": "List your fleet →",

        // Join Section
        "join_title": "Start with <span style='color: var(--brand-light);'>Reboulot</span> Today",
        "join_sub": "Choose your role and register now to get access to the platform and start earning.",
        "join_d_sub": "Deliver & earn in your city",
        "join_t_sub": "Connect with passengers nearby",
        "join_p_sub": "Reach thousands of new customers",
        "join_cr_sub": "Register your rental agency",

        // Footer
        "footer_tagline": "The Super-App for Food, Taxi, Delivery & Car Rental.",

        "f_link_taxi": "Taxi Drivers",
        "f_link_couriers": "Couriers",
        "f_link_partners": "Partners",
        "f_link_carrental": "Car Rental",
        "f_link_contact": "Contact Us",

        // Registration common
        "back_home": "← Back to Home",
        "form_name": "Full Name",
        "form_email": "Email Address",
        "form_phone": "Phone Number",
        "form_submit": "Submit Registration",
        "form_submitting": "Submitting...",
        "form_city_sel": "Select your city...",
        "form_consent": "I agree to the <a href='privacy-policy.html'>Privacy Policy</a> and <a href='terms-of-service.html'>Terms of Service</a>",
        "placeholder_name": "John Doe",
        "placeholder_email": "john@example.com",
        "placeholder_phone": "12 345 678",
        "placeholder_store_name": "My Awesome Restaurant",
        "form_map_inst": "Click on the map to drop a pin at your location.",
        "form_map_prompt": "Please select a location on the map.",
        "form_error": "Something went wrong. Please try again later.",
        // Reg Delivery
        "rd_title": "Deliver &",
        "rd_title2": "Earn Your Way",
        "rd_sub": "Join the <span style='color: var(--brand-light);'>Reboulot</span> courier fleet. Receive delivery requests in your area, deliver packages and food, and collect payment directly from customers cash in hand, every time.",
        "rd_b1_t": "Cash on Delivery",
        "rd_b1_d": "Customers pay you directly in cash upon receiving their order. No waiting, no platform deductions.",
        "rd_b2_t": "Choose Your Vehicle",
        "rd_b2_d": "Bike, scooter, or car use whatever you already have to start delivering instantly.",
        "rd_b3_t": "Work Your Zone",
        "rd_b3_d": "Define your preferred working area and receive orders closest to you with smart routing.",
        "rd_form_title": "Register as a Courier",
        "rd_form_sub": "Fill in your details to join the <span style='color: var(--brand-light);'>Reboulot</span> program.",
        "rt_form_sub": "Complete your details to join the Reboulot taxi network.",
        "rp_form_sub": "Fill in your store details to partner with Reboulot.",
        "rt_confirm": "I confirm that I own or have lawful use of a vehicle, hold valid insurance, and possess all required permits and licenses to operate as a taxi driver.",
        "rd_confirm": "I confirm that I own or have lawful use of a bicycle, scooter, or car, and hold an auto-entrepreneur permit or equivalent legal authorization for delivery services.",
        "rd_veh": "Vehicle Type",
        "rd_veh_sel": "Select your vehicle...",
        "rd_v1": "Bicycle",
        "rd_v2": "Scooter / Motorcycle",
        "rd_v3": "Car",
        "rd_v4": "Van",
        "rd_reg": "Preferred Working Region",

        // Reg Taxi
        "rt_title": "Drive on",
        "rt_title2": "Your Terms",
        "rt_sub": "Join <span style='color: var(--brand-light);'>Reboulot</span> as a taxi driver. Connect with passengers in your city and collect payment directly from them in cash no commissions, no deductions, ever.",
        "rt_b1_t": "Cash Payments",
        "rt_b1_d": "Passengers pay you directly in cash at the end of every trip. Instant, with no middleman.",
        "rt_b2_t": "Total Flexibility",
        "rt_b2_d": "You are your own boss. Go online and offline instantly. Work when and where it suits you.",
        "rt_b3_t": "Smart Driver App",
        "rt_b3_d": "A powerful, intuitive app to accept rides, navigate efficiently and manage your day.",
        "rt_b4_t": "Same Meter Fare",
        "rt_b4_d": "Passengers pay exactly what the taxi meter shows. No surge pricing, no hidden markups \u2014 the same fare they\u2019d pay on the street, just easier to connect.",
        "rt_form_title": "Register as a Taxi Driver",

        // Reg Partner
        "rp_title": "Grow",
        "rp_title2": "Your Business",
        "rp_sub": "Partner with <span style='color: var(--brand-light);'>Reboulot</span> to reach thousands of new customers in your city. Manage orders directly from a dedicated tablet and let our couriers handle the delivery.",
        "rp_b1_t": "Zero Commission",
        "rp_b1_d": "Keep 100% of your menu prices. Customers pay couriers directly in cash.",
        "rp_b2_t": "Delivery Solved",
        "rp_b2_d": "We handle the delivery logistics for you. Orders are automatically assigned to nearby couriers.",
        "rp_b3_t": "Easy Management",
        "rp_b3_d": "A dedicated tablet app to manage your menu, accept orders, and track your business growth.",
        "rp_form_title": "Register your Store",
        "rp_store_name": "Store Name",
        "rp_store_addr": "Store Address",
        "rp_confirm": "I confirm that I am authorized to operate a business and represent my store.",

        // Reg Car Rental
        "rc_title": "List Your",
        "rc_title2": "Fleet",
        "rc_sub": "Join <span style='color: var(--brand-light);'>Reboulot</span> as a car rental agency. List your vehicles, receive booking requests directly from customers, and manage your entire fleet from one dashboard.",
        "rc_b1_t": "List Your Fleet",
        "rc_b1_d": "Create detailed listings for each vehicle with photos, specs, and daily rates. City cars, SUVs, luxury, long-term rental \u2014 list it all.",
        "rc_b2_t": "Smart Dashboard",
        "rc_b2_d": "Manage bookings, track availability, and monitor your entire fleet from a single dashboard. Real-time calendar view.",
        "rc_b3_t": "Verified Trust",
        "rc_b3_d": "Build trust with customers through our agency verification program. Stand out and get more bookings.",
        "rc_b4_t": "Weekly Payouts",
        "rc_b4_d": "Receive payouts directly every week. No holds, no hidden fees, and no commission.",
        "rc_form_title": "Register Your Agency",
        "rc_form_sub": "Fill in your agency details to join the <span style='color: var(--brand-light);'>Reboulot</span> rental network.",
        "rc_confirm": "I confirm that I am authorized to rent vehicles and hold all required permits, insurance, and licenses for car rental operations.",
        "rc_agency_name": "Agency Name",
        "rc_store_addr": "Agency Location",
        "placeholder_agency_name": "My Rental Agency",

        // Footer links
        "f_link_privacy": "Privacy Policy",
        "f_link_terms": "Terms of Service",

        // Page Metadata
        "page_title_index": "Reboulot Food, Taxi, Delivery & Car Rental Super-App",
        "page_title_delivery": "Deliver with Reboulot | Courier Registration",
        "page_title_taxi": "Drive with Reboulot | Taxi Registration",
        "page_title_partner": "Partner with Reboulot | Store Registration",
        "page_title_404": "404 - Page Not Found | Reboulot",
        "page_title_pp": "Privacy Policy | Reboulot",
        "page_title_tos": "Terms of Service | Reboulot",
        "meta_desc_index": "Reboulot The super-app for food delivery, taxi rides, car rental and parcel shipping. Join as a driver, partner or rental agency today.",
        "meta_desc_delivery": "Register as a delivery courier with Reboulot. Deliver food and packages in your city.",
        "meta_desc_taxi": "Register as a taxi driver with Reboulot. Drive and earn cash in your city.",
        "meta_desc_partner": "Register your store with Reboulot. Reach thousands of new customers.",
        "page_title_carrental": "List Your Fleet with Reboulot | Car Rental Registration",
        "meta_desc_carrental": "Register your car rental agency with Reboulot. List your fleet of vehicles and receive direct bookings from customers.",
        "meta_desc_404": "Reboulot - Page not found.",

        // Legal meta descriptions
        "meta_desc_privacy": "Reboulot Privacy Policy — how we collect, use, and protect your personal information as a driver, courier, partner, or rental agency.",
        "meta_desc_tos": "Reboulot Terms of Service — the terms governing your use of the Reboulot platform as a driver, courier, partner, or rental agency.",

        // 404 page
        "error_404_title": "Page Not Found",
        "error_404_desc": "Oops! It seems you've wandered off the map. The page you are looking for doesn't exist or has been moved.",
        "error_404_link": "\u2190 Back to Safety",

        // Privacy Policy
        "pp_title": "Privacy Policy",
        "pp_intro": "Reboulot (\"we\", \"our\", \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you register as a driver, courier, partner, or car rental agency on our platform.",
        "pp_data_title": "Information We Collect",
        "pp_data_body": "When you register, we collect: your full name, email address, phone number, country code, vehicle type, agency name, city or region, store or agency location (including precise latitude and longitude from the map), and any additional information you provide. We also use localStorage to store your language preference and draft form data for a better experience.",
        "pp_use_title": "How We Use Your Information",
        "pp_use_body": "We use your information to: process your registration, communicate with you about your account, match you with delivery, ride or rental requests, improve our services, and comply with legal obligations.",
        "pp_store_title": "Data Storage & Security",
        "pp_store_body": "We implement reasonable security measures to protect your information. However, no method of electronic storage or transmission over the internet is 100% secure.",
        "pp_rights_title": "Your Rights",
        "pp_rights_body": "You have the right to access, correct, delete, or port your personal data, as well as to restrict or object to its processing. You may also withdraw your consent at any time. To exercise these rights, please contact us using the information below.",
        "pp_contact_title": "Contact Us",
        "pp_contact_body": "For any privacy-related inquiries, contact us at: support@reboulot.com",
        "pp_last_updated": "Last updated: May 2026",

        // Terms of Service
        "tos_title": "Terms of Service",
        "tos_intro": "These Terms of Service (\"Terms\") govern your registration and use of the Reboulot platform as a driver, courier, partner, or car rental agency. By registering, you agree to these Terms.",
        "tos_elig_title": "Eligibility",
        "tos_elig_body": "You must be at least 18 years old and legally eligible to provide the services you register for (driving, delivery, food service, or car rental). You agree to provide accurate and complete information during registration.",
        "tos_oblig_title": "Your Obligations",
        "tos_oblig_body": "You agree to: provide accurate information, maintain the confidentiality of your account, comply with all applicable laws, and conduct yourself professionally when using the platform.",
        "tos_prohib_title": "Prohibited Uses",
        "tos_prohib_body": "You may not: use the platform for any illegal purpose, provide false information, attempt to circumvent platform rules, or engage in fraudulent activity.",
        "tos_liab_title": "Limitation of Liability",
        "tos_liab_body": "Reboulot acts exclusively as a technical intermediary. To that extent, Reboulot declines all liability regarding: the condition of vehicles or goods, disputes between service providers and customers, damages, losses, or accidents, and payments or deposits. Reboulot will, however, make reasonable efforts to assist in resolving disputes where possible.",
        "tos_changes_title": "Changes to Terms",
        "tos_changes_body": "We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the platform after changes constitutes acceptance of the new Terms.",
        "tos_contact_title": "Contact",
        "tos_contact_body": "For questions about these Terms, contact: support@reboulot.com",
        "tos_last_updated": "Last updated: May 2026",

        // Additions for Listings & Verification
        "tos_object_title": "Purpose",
        "tos_object_body": "Reboulot is a platform that facilitates connections between service providers and customers. Reboulot is not a party to any service agreement and does not handle payments, deposits, insurance, or physical delivery of goods or vehicles. Our role is limited to providing the technical infrastructure for matching.",
        "tos_def_title": "Definitions",
        "tos_def_body": "Platform: the Reboulot website and digital services. Service Provider: drivers, couriers, partners, and car rental agencies publishing their services. Customer: individuals or businesses seeking services through the platform.",
        "tos_listings_title": "Listings and Reservations",
        "tos_listings_body": "All listings are published under the sole responsibility of the Service Provider. Reboulot does not verify prices, availability, or accuracy of information provided in listings. Any reservation request submitted through the platform constitutes a connection request only. Service Providers are free to accept or decline requests without justification. Payments, deposits, and physical delivery of services are handled exclusively between the Service Provider and the Customer.",
        "tos_verify_title": "Provider Verification",
        "tos_verify_body": "Some providers may display a verification indicator if they have provided documentation to confirm their legal or professional status. This verification is a one-time check and does not constitute an ongoing certification, guarantee of service quality, or endorsement by Reboulot.",

        // Modal
        "modal_success_title": "Success!",
        "modal_success_desc": "Registration successful! We will review your account information and reach out to you soon.",
        "modal_btn": "Close",

        // Account Deletion
        "page_title_deletion": "Account & Data Deletion Request | Reboulot",
        "meta_desc_deletion": "Request the permanent deletion of your Reboulot account and associated data. A verified, secure process for taxi drivers, couriers, partners and rental agencies.",
        "ad_title": "Account & Data Deletion Request",
        "ad_last_updated": "Last updated: August 2026",
        "ad_intro": "When you register with the <span style='color: var(--brand-light);'>Reboulot</span> app (as a taxi driver, delivery courier, store partner, or car rental agency) through the app or this website, we keep a verification record with some of your details. This page explains how to request the permanent deletion of your account and the data associated with it, and the steps we take to verify your identity before any data is removed.",
        "ad_how_title": "How to Request Account Deletion",
        "ad_step1": "Have your registered email address and phone number ready.",
        "ad_step2": "Fill in the verification form below with your email address, phone number, and the service you registered for.",
        "ad_step3": "If your details match our records, we log your request and call you on the phone number we have on file to confirm your identity before any deletion. If the details do not match, no request is created.",
        "ad_step4": "You may also send an email from your registered email address using the button below to confirm your request in writing.",
        "ad_form_title": "Verification Form",
        "ad_form_inst": "Enter the exact details you used when registering.",
        "ad_type": "Service You Registered For",
        "ad_type_sel": "Select your service type...",
        "ad_t1": "Delivery Driver (Courier)",
        "ad_t2": "Taxi Driver",
        "ad_t3": "Store Partner (Restaurant / Store)",
        "ad_t4": "Car Rental Agency",
        "ad_btn_submit": "Submit Deletion Request",
        "ad_status_ok": "Your details match our records. Your request has been logged; our team will call you on the phone number on file to confirm your identity before deletion.",
        "ad_status_nomatch": "We could not find a registration matching these details (or the phone number does not match). Please check your details and try again, or contact support at support@reboulot.com.",
        "ad_email_btn": "Send Confirmation Email",
        "ad_email_hint": "Opens your email app with a pre-filled message to support@reboulot.com. Send it from the email address you registered with.",
        "ad_email_subject": "Account Deletion Request",
        "ad_email_body": "Hello Reboulot support team,\n\nI request the permanent deletion of my account and the data associated with it.\n\nRegistered email: {email}\nPhone: {phone}\nService type: {service}\n\nPlease confirm receipt and proceed with the deletion as described on the account deletion page.",
        "ad_deleted_title": "Data That Will Be Deleted",
        "ad_deleted_body": "After identity confirmation, the following data is permanently deleted: your full name, email address, phone number, country code, vehicle type, working city/region, store or agency name, location coordinates, and any verification records we hold about you. Your account is deleted within 30 days of the confirmed request.",
        "ad_retained_title": "Data That May Be Retained",
        "ad_retained_body": "We retain only what the law requires: records needed to comply with legal, tax, or dispute-resolution obligations, kept only for as long as required by law. Residual copies in backups are purged within 90 days. A minimal audit log (hashed identifiers, service type, timestamps, and status) is kept to document that a deletion request was made and fulfilled.",
        "ad_contact_title": "Questions?",
        "ad_contact_body": "For questions about this process, contact us at: support@reboulot.com",

        // Cookie consent
        "cookie_text": "We use localStorage to remember your language preference and draft form data. By continuing, you consent to this.",
        "cookie_btn": "Accept"
    },
    ar: {
        // Navbar
        "nav_courier": "انضم كمندوب",
        "nav_driver": "انطلق كسائق",
        "nav_partner": "سجل متجرك",
        "nav_carrental": "أدرج أسطولك",

        // Hero
        "hero_title1": "تطبيق واحد.",
        "hero_title2": "كل خدمة.",
        "hero_sub": "<strong><span style='color: var(--brand-light);'>Reboulot</span></strong> لتوصيل الطعام، رحلات التاكسي، تأجير السيارات، وشحن الطرود،<br class='break-lg'/>كل ذلك في تجربة واحدة سلسة.",
        "hero_cta1": "ابدأ تجربتك الآن",
        "hero_cta2": "تصفح خدماتنا",
        "hero_store": "متوفر الآن على",

        // Ecosystem
        "eco_label": "عالمنا المتكامل",
        "eco_title1": "جميع الخدمات.",
        "eco_title2": "منصة واحدة تجمعنا.",
        "eco_sub": "منصة <span style='color: var(--brand-light);'>Reboulot</span> تجمع بين العملاء والشركاء، مناديب التوصيل، السائقين ووكالات تأجير السيارات، من خلال تطبيقات مبتكرة صُممت خصيصاً لتسهيل حياتك.",
        "eco_tag_partner": "لأصحاب الأعمال",
        "eco_app_partner": "تطبيق الشركاء",
        "eco_desc_partner": "للمطاعم والمتاجر ومحلات التجزئة. أدر طلباتك بذكاء، وسّع نطاق عملك، وصِل لآلاف العملاء الجدد دون أن تحمل همّ لوجستيات التوصيل.",
        "eco_cta_partner": "سجل نشاطك التجاري ←",
        "eco_tag_courier": "لمناديب التوصيل",
        "eco_app_courier": "تطبيق التوصيل",
        "eco_desc_courier": "استقبل الطلبات في نطاقك المفضل، وانطلق بكفاءة عالية لتحصيل أرباحك نقداً وفوراً من العملاء. تحكم كامل بأوقات عملك، وبدون وسطاء.",
        "eco_cta_courier": "انضم كمندوب توصيل ←",
        "eco_tag_taxi": "للسائقين",
        "eco_app_taxi": "تطبيق السائقين",
        "eco_desc_taxi": "سجل دخولك في ثوانٍ وابدأ باستقبال الركاب القريبين منك. احصل على أجرتك نقداً فور انتهاء الرحلة بلا تأخير ولا استقطاعات مزعجة.",
        "eco_cta_taxi": "انطلق معنا كسائق ←",

        // Car Rental
        "eco_tag_carrental": "لوكالات الإيجار",
        "eco_app_carrental": "تطبيق الإيجار",
        "eco_desc_carrental": "أدرج أسطول مركباتك من سيارات المدينة إلى الدفع الرباعي والفاخرة. استقبل طلبات الحجز مباشرة من العملاء في عدة بلدان.",
        "eco_cta_carrental": "أدرج أسطولك ←",

        // Join Section
        "join_title": "انطلق مع <span style='color: var(--brand-light);'>Reboulot</span> اليوم",
        "join_sub": "اختر دورك، سجل بياناتك، وابدأ بتحقيق دخل إضافي بكل سهولة.",
        "join_d_sub": "وصّل واكسب في مدينتك",
        "join_t_sub": "استقبل الركاب القريبين منك",
        "join_p_sub": "ضاعف مبيعاتك وصِل لعملاء جدد",
        "join_cr_sub": "سجل وكالة التأجير الخاصة بك",

        // Footer
        "footer_tagline": "التطبيق الشامل لتوصيل الطعام، حجز الرحلات، تأجير السيارات، وشحن الطرود.",

        "f_link_taxi": "سائقو سيارات الأجرة",
        "f_link_couriers": "مناديب التوصيل",
        "f_link_partners": "الشركاء التجاريين",
        "f_link_carrental": "تأجير السيارات",
        "f_link_contact": "تواصل معنا",

        // Registration common
        "back_home": "← العودة للصفحة الرئيسية",
        "form_name": "الاسم الكامل",
        "form_email": "البريد الإلكتروني",
        "form_phone": "رقم الجوال",
        "form_city_sel": "اختر مدينتك...",
        "form_submit": "إرسال طلب التسجيل",
        "form_submitting": "جارٍ الإرسال...",
        "form_consent": "أوافق على <a href='privacy-policy.html'>سياسة الخصوصية</a> و<a href='terms-of-service.html'>شروط الخدمة</a>",
        "placeholder_name": "محمد أحمد",
        "placeholder_email": "mohamed@example.com",
        "placeholder_phone": "12 345 678",
        "placeholder_store_name": "مطعمي المميز",
        "form_map_inst": "انقر على الخريطة لتحديد موقعك.",
        "form_map_prompt": "يرجى تحديد موقع على الخريطة.",
        "form_error": "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.",

        // Reg Delivery
        "rd_title": "وصّل واكسب",
        "rd_title2": "بطريقتك الخاصة",
        "rd_sub": "انضم لأسطول توصيل <span style='color: var(--brand-light);'>Reboulot</span> اليوم. استقبل الطلبات في منطقتك، سلم الطرود والوجبات، واقبض أرباحك نقداً وفوراً من العملاء.",
        "rd_b1_t": "دفع فوري نقداً",
        "rd_b1_d": "تستلم مستحقاتك نقداً من العميل مباشرة. لا تأجيل ولا عمولات مقتطعة.",
        "rd_b2_t": "استخدم مركبتك الخاصة",
        "rd_b2_d": "دراجة هوائية، نارية، أو سيارة انطلق بالمركبة التي تملكها وابدأ بجني الأرباح.",
        "rd_b3_t": "العمل في نطاقك المفضل",
        "rd_b3_d": "اختر المنطقة التي تفضل العمل بها، وسنوجه لك الطلبات القريبة لزيادة كفاءتك.",
        "rd_form_title": "سجل كمندوب توصيل",
        "rd_form_sub": "املأ بياناتك وانضم إلى عائلة <span style='color: var(--brand-light);'>Reboulot</span>.",
        "rt_form_sub": "أكمل بياناتك للانضمام إلى شبكة Reboulot كسائق تاكسي.",
        "rp_form_sub": "املأ بيانات متجرك لتصبح شريكاً مع Reboulot.",
        "rt_confirm": "أؤكد أنني أملك أو لدي الحق القانوني في استخدام مركبة، وأن لدي تأميناً سارياً وجميع التصاريح والرخص اللازمة للعمل كسائق تاكسي.",
        "rd_confirm": "أؤكد أنني أملك أو لدي الحق القانوني في استخدام دراجة هوائية أو نارية أو سيارة، وأن لدي ترخيص العمل الحر أو الترخيص القانوني المعادل لتقديم خدمات التوصيل.",
        "rd_veh": "نوع المركبة",
        "rd_veh_sel": "اختر نوع مركبتك...",
        "rd_v1": "دراجة هوائية",
        "rd_v2": "سكوتر / دراجة نارية",
        "rd_v3": "سيارة",
        "rd_v4": "شاحنة صغيرة",
        "rd_reg": "منطقة العمل المفضلة",

        // Reg Taxi
        "rt_title": "قُد على",
        "rt_title2": "شروطك الخاصة",
        "rt_sub": "انضم كسائق مع <span style='color: var(--brand-light);'>Reboulot</span> واستقل برحلاتك. تواصل مع ركاب مدينتك، واحصل على أجرتك نقداً وبدون أي عمولات مخفية.",
        "rt_b1_t": "أجرتك كاش وفوراً",
        "rt_b1_d": "يدفع لك الركاب نقداً في نهاية كل مشوار. فوري وبلا وسطاء.",
        "rt_b2_t": "مرونة بلا حدود",
        "rt_b2_d": "القرار بيدك. اعمل متى ما شئت وأينما شئت، سجل دخولك وانطلق براحتك.",
        "rt_b3_t": "تطبيق ذكي لخدمتك",
        "rt_b3_d": "تطبيق متطور وسهل الاستخدام لقبول الرحلات، التوجيه الذكي، وإدارة يومك بكفاءة.",
        "rt_b4_t": "نفس أجرة العداد",
        "rt_b4_d": "يدفع الركاب نفس ما يظهره عداد التاكسي بالضبط. لا أسعار مضاعفة ولا رسوم مخفية — نفس الأجرة المعتادة، ولكن بطريقة أسهل للتواصل.",
        "rt_form_title": "سجل كسائق سيارة أجرة",

        // Reg Partner
        "rp_title": "ارتقِ",
        "rp_title2": "بنشاطك التجاري",
        "rp_sub": "انضم كشريك تجاري مع <span style='color: var(--brand-light);'>Reboulot</span> للوصول إلى آلاف العملاء الجدد. أدر طلباتك بسهولة عبر جهاز لوحي، ودع أسطولنا يتكفل بالتوصيل.",
        "rp_b1_t": "أرباحك لك بنسبة 100%",
        "rp_b1_d": "لا نفرض أي عمولات على قائمة طعامك. العميل يدفع للمندوب نقداً.",
        "rp_b2_t": "لا تشيل همّ التوصيل",
        "rp_b2_d": "اللوجستيات علينا. سيتم إسناد طلباتك تلقائياً لأقرب مندوب توصيل متاح.",
        "rp_b3_t": "إدارة سلسة وذكية",
        "rp_b3_d": "تطبيق لوحي مخصص لإدارة منتجاتك، قبول الطلبات، ومتابعة مبيعاتك لحظة بلحظة.",
        "rp_form_title": "سجل نشاطك التجاري",
        "rp_store_name": "اسم المتجر أو المطعم",
        "rp_store_addr": "العنوان بالتفصيل",
        "rp_confirm": "أؤكد أنني مفوض بتشغيل هذا النشاط التجاري وأنني أمثل هذا المتجر.",

        // Reg Car Rental
        "rc_title": "أدرج",
        "rc_title2": "أسطولك",
        "rc_sub": "انضم كوكالة تأجير سيارات مع <span style='color: var(--brand-light);'>Reboulot</span>. أدرج مركباتك، استقبل طلبات الحجز من العملاء، وأدر أسطولك بالكامل من لوحة تحكم واحدة.",
        "rc_b1_t": "أدرج أسطولك",
        "rc_b1_d": "أنشئ إعلانات مفصلة لكل مركبة مع الصور والمواصفات والأسعار اليومية. سيارات مدينة، دفع رباعي، فاخرة، إيجار طويل المدى.",
        "rc_b2_t": "لوحة تحكم ذكية",
        "rc_b2_d": "أدر الحجوزات وتابع التوفر وراقب أسطولك من لوحة تحكم واحدة مع تقويم فوري.",
        "rc_b3_t": "ثقة موثقة",
        "rc_b3_d": "ابنِ الثقة مع العملاء من خلال برنامج التحقق من الوكالات. تميز واحصل على حجوزات أكثر.",
        "rc_b4_t": "دفعات أسبوعية",
        "rc_b4_d": "استلم مستحقاتك أسبوعياً. لا تعليق للمدفوعات ولا رسوم مخفية ولا عمولات.",
        "rc_form_title": "سجل وكالتك",
        "rc_form_sub": "املأ بيانات وكالتك للانضمام إلى شبكة تأجير <span style='color: var(--brand-light);'>Reboulot</span>.",
        "rc_confirm": "أؤكد أنني مفوض لتأجير السيارات وأن لدي جميع التصاريح والتأمينات والرخص اللازمة لتشغيل وكالة تأجير سيارات.",
        "rc_agency_name": "اسم الوكالة",
        "rc_store_addr": "موقع الوكالة",
        "placeholder_agency_name": "وكالتي للتأجير",

        // Footer links
        "f_link_privacy": "سياسة الخصوصية",
        "f_link_terms": "شروط الخدمة",

        // Page Metadata
        "page_title_index": "Reboulot التطبيق الشامل للطعام ورحلات التاكسي والتوصيل وتأجير السيارات",
        "page_title_delivery": "توصيل مع Reboulot | تسجيل مندوب",
        "page_title_taxi": "قُد مع Reboulot | تسجيل سائق",
        "page_title_partner": "كن شريكاً مع Reboulot | تسجيل متجر",
        "page_title_404": "404 - الصفحة غير موجودة | Reboulot",
        "page_title_pp": "سياسة الخصوصية | Reboulot",
        "page_title_tos": "شروط الخدمة | Reboulot",
        "meta_desc_index": "Reboulot التطبيق الشامل لتوصيل الطعام ورحلات التاكسي وتأجير السيارات وشحن الطرود. سجل كسائق أو شريك أو وكالة تأجير اليوم.",
        "meta_desc_delivery": "سجل كمندوب توصيل مع Reboulot. سلّم الوجبات والطرود في مدينتك.",
        "meta_desc_taxi": "سجل كسائق تاكسي مع Reboulot. قُد واكسب نقداً في مدينتك.",
        "meta_desc_partner": "سجل متجرك مع Reboulot. وصِل لآلاف العملاء الجدد.",
        "page_title_carrental": "سجل أسطولك مع Reboulot | تسجيل وكالة تأجير",
        "meta_desc_carrental": "سجل وكالة تأجير السيارات مع Reboulot. أدرج أسطول مركباتك واستقبل حجوزات مباشرة من العملاء.",
        "meta_desc_404": "Reboulot - الصفحة غير موجودة.",

        // Legal meta descriptions
        "meta_desc_privacy": "سياسة الخصوصية لـ Reboulot — كيفية جمع واستخدام وحماية معلوماتك الشخصية كسائق أو مندوب توصيل أو شريك تجاري أو وكالة تأجير.",
        "meta_desc_tos": "شروط الخدمة لـ Reboulot — الشروط التي تحكم استخدامك لمنصة Reboulot كسائق أو مندوب توصيل أو شريك تجاري أو وكالة تأجير.",

        // 404 page
        "error_404_title": "الصفحة غير موجودة",
        "error_404_desc": "عذراً! يبدو أنك ضللت الطريق. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
        "error_404_link": "\u2190 العودة إلى الصفحة الرئيسية",

        // Privacy Policy
        "pp_title": "سياسة الخصوصية",
        "pp_intro": "تلتزم Reboulot (\"نحن\") بحماية خصوصيتك. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند التسجيل كسائق أو مندوب توصيل أو شريك تجاري أو وكالة تأجير سيارات على منصتنا.",
        "pp_data_title": "المعلومات التي نجمعها",
        "pp_data_body": "عند التسجيل، نقوم بجمع: اسمك الكامل، بريدك الإلكتروني، رقم هاتفك، رمز البلد، نوع مركبتك، اسم الوكالة، المدينة أو المنطقة، موقع متجرك أو وكالتك (بما في ذلك خط العرض وخط الطول من الخريطة)، وأي معلومات إضافية تقدمها. كما نستخدم التخزين المحلي لحفظ تفضيلات اللغة والبيانات المؤقتة للنموذج.",
        "pp_use_title": "كيف نستخدم معلوماتك",
        "pp_use_body": "نستخدم معلوماتك من أجل: معالجة طلب التسجيل، التواصل معك بخصوص حسابك، مطابقتك مع طلبات التوصيل أو الرحلات أو الإيجار، تحسين خدماتنا، والامتثال للالتزامات القانونية.",
        "pp_store_title": "تخزين البيانات وأمنها",
        "pp_store_body": "نقوم بتنفيذ إجراءات أمنية معقولة لحماية معلوماتك. ومع ذلك، لا توجد طريقة تخزين إلكترونية أو نقل عبر الإنترنت آمنة بنسبة 100٪.",
        "pp_rights_title": "حقوقك",
        "pp_rights_body": "لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها أو نقلها، وكذلك تقييد أو الاعتراض على معالجتها. يمكنك أيضاً سحب موافقتك في أي وقت. لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات أدناه.",
        "pp_contact_title": "اتصل بنا",
        "pp_contact_body": "للاستفسارات المتعلقة بالخصوصية، اتصل بنا على: support@reboulot.com",
        "pp_last_updated": "آخر تحديث: مايو 2026",

        // Terms of Service
        "tos_title": "شروط الخدمة",
        "tos_intro": "تنطبق شروط الخدمة (\"الشروط\") على تسجيلك واستخدامك لمنصة Reboulot كسائق أو مندوب توصيل أو شريك تجاري أو وكالة تأجير سيارات. بالتسجيل، فإنك توافق على هذه الشروط.",
        "tos_elig_title": "أهلية التسجيل",
        "tos_elig_body": "يجب أن يكون عمرك 18 عاماً على الأقل ومؤهلاً قانونياً لتقديم الخدمات التي تسجل من أجلها (القيادة أو التوصيل أو الخدمات الغذائية أو تأجير السيارات). كما توافق على تقديم معلومات دقيقة وكاملة أثناء التسجيل.",
        "tos_oblig_title": "التزاماتك",
        "tos_oblig_body": "توافق على: تقديم معلومات دقيقة، الحفاظ على سرية حسابك، الامتثال لجميع القوانين المعمول بها، والتصرف بشكل مهني عند استخدام المنصة.",
        "tos_prohib_title": "الاستخدامات المحظورة",
        "tos_prohib_body": "لا يجوز لك: استخدام المنصة لأي غرض غير قانوني، تقديم معلومات كاذبة، محاولة التحايل على قواعد المنصة، أو الانخراط في أي نشاط احتيالي.",
        "tos_liab_title": "حدود المسؤولية",
        "tos_liab_body": "Reboulot تعمل حصراً كوسيط تقني. وفي هذا الإطار، ترفض Reboulot أي مسؤولية تتعلق بـ: حالة المركبات أو السلع، النزاعات بين مقدمي الخدمات والعملاء، الأضرار أو الخسائر أو الحوادث، والمدفوعات أو الودائع. ومع ذلك، ستبذل Reboulot جهوداً معقولة للمساعدة في حل النزاعات عند الإمكان.",
        "tos_changes_title": "تعديل الشروط",
        "tos_changes_body": "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. تصبح التعديلات سارية عند نشرها. استمرار استخدام المنصة بعد التعديلات يعني قبولك للشروط الجديدة.",
        "tos_contact_title": "اتصل بنا",
        "tos_contact_body": "للاستفسار حول هذه الشروط، تواصل معنا على: support@reboulot.com",
        "tos_last_updated": "آخر تحديث: مايو 2026",

        // Additions for Listings & Verification
        "tos_object_title": "الغرض",
        "tos_object_body": "Reboulot هي منصة تسهل التواصل بين مقدمي الخدمات والعملاء. Reboulot ليست طرفاً في أي اتفاق خدمة ولا تتعامل في المدفوعات أو التأمينات أو التسليم المادي للسلع أو المركبات. دورنا يقتصر على توفير البنية التحتية التقنية للتوفيق بين الأطراف.",
        "tos_def_title": "تعريفات",
        "tos_def_body": "المنصة: موقع Reboulot الإلكتروني وخدماته الرقمية. مقدم الخدمة: السائقون والمناديب والشركاء ووكالات تأجير السيارات الذين ينشرون خدماتهم. العميل: الأفراد أو الشركات الذين يبحثون عن خدمات عبر المنصة.",
        "tos_listings_title": "الإعلانات والحجوزات",
        "tos_listings_body": "جميع الإعلانات منشورة تحت المسؤولية الكاملة لمقدم الخدمة. Reboulot لا تتحقق من الأسعار أو التوفر أو دقة المعلومات المقدمة في الإعلانات. أي طلب حجز يتم إرساله عبر المنصة يشكل طلب تواصل فقط. لمقدمي الخدمة الحرية في قبول أو رفض الطلبات دون إبداء أسباب. المدفوعات والودائع والتسليم المادي تتم حصراً بين مقدم الخدمة والعميل.",
        "tos_verify_title": "التحقق من مقدمي الخدمة",
        "tos_verify_body": "قد يعرض بعض مقدمي الخدمة مؤشر تحقق إذا قدموا وثائق لتأكيد وضعهم القانوني أو المهني. هذا التحقق هو فحص لمرة واحدة ولا يشكل شهادة مستمرة أو ضماناً لجودة الخدمة أو تأييداً من Reboulot.",

        // Modal
        "modal_success_title": "تم بنجاح!",
        "modal_success_desc": "لقد استلمنا طلبك بنجاح! سنقوم بمراجعة بياناتك والتواصل معك في أقرب وقت ممكن لبدء رحلتك معنا.",
        "modal_btn": "إغلاق",

        // Account Deletion
        "page_title_deletion": "طلب حذف الحساب والبيانات | Reboulot",
        "meta_desc_deletion": "اطلب الحذف الدائم لحسابك في Reboulot والبيانات المرتبطة به. عملية آمنة ومتحقق منها لسائقي التاكسي ومناديب التوصيل والشركاء ووكالات التأجير.",
        "ad_title": "طلب حذف الحساب والبيانات",
        "ad_last_updated": "آخر تحديث: أغسطس 2026",
        "ad_intro": "عند تسجيلك في تطبيق <span style='color: var(--brand-light);'>Reboulot</span> (كسائق تاكسي، مندوب توصيل، شريك تجاري، أو وكالة تأجير سيارات) من خلال التطبيق أو هذا الموقع، نحتفظ بسجل تحقق يتضمن بعض بياناتك. تشرح هذه الصفحة كيفية طلب الحذف الدائم لحسابك والبيانات المرتبطة به، والإجراءات التي نتبعها للتحقق من هويتك قبل حذف أي بيانات.",
        "ad_how_title": "كيف أطلب حذف حسابي؟",
        "ad_step1": "جهّز عنوان البريد الإلكتروني ورقم الهاتف اللذين استخدمتهما عند التسجيل.",
        "ad_step2": "املأ نموذج التحقق أدناه بالبريد الإلكتروني ورقم الهاتف ونوع الخدمة التي سجلت بها.",
        "ad_step3": "إذا تطابقت بياناتك مع سجلاتنا، نسجّل طلبك ونتصل بك على رقم الهاتف المسجل لدينا لتأكيد هويتك قبل أي حذف. إذا لم تتطابق البيانات، لا يتم إنشاء أي طلب.",
        "ad_step4": "يمكنك أيضاً إرسال بريد إلكتروني من عنوان البريد الذي سجلت به باستخدام الزر أدناه لتأكيد الطلب كتابياً.",
        "ad_form_title": "نموذج التحقق",
        "ad_form_inst": "أدخل نفس البيانات التي استخدمتها عند التسجيل بدقة.",
        "ad_type": "الخدمة التي سجلت بها",
        "ad_type_sel": "اختر نوع الخدمة...",
        "ad_t1": "مندوب توصيل",
        "ad_t2": "سائق تاكسي",
        "ad_t3": "شريك تجاري (مطعم / متجر)",
        "ad_t4": "وكالة تأجير سيارات",
        "ad_btn_submit": "إرسال طلب الحذف",
        "ad_status_ok": "تطابقت بياناتك مع سجلاتنا. تم تسجيل طلبك؛ سيتصل بك فريقنا على رقم الهاتف المسجل لتأكيد هويتك قبل الحذف.",
        "ad_status_nomatch": "لم نعثر على تسجيل مطابق لهذه البيانات (أو أن رقم الهاتف لا يطابق). يرجى التحقق من البيانات والمحاولة مرة أخرى، أو التواصل مع الدعم على support@reboulot.com.",
        "ad_email_btn": "إرسال بريد التأكيد",
        "ad_email_hint": "يفتح تطبيق البريد لديك مع رسالة معبأة مسبقاً إلى support@reboulot.com. أرسلها من عنوان البريد الذي سجلت به.",
        "ad_email_subject": "طلب حذف الحساب",
        "ad_email_body": "مرحباً فريق دعم Reboulot،\n\nأطلب الحذف الدائم لحسابي والبيانات المرتبطة به.\n\nالبريد الإلكتروني المسجل: {email}\nرقم الهاتف: {phone}\nنوع الخدمة: {service}\n\nيرجى تأكيد الاستلام والمتابعة في الحذف كما هو موضح في صفحة حذف الحساب.",
        "ad_deleted_title": "البيانات التي سيتم حذفها",
        "ad_deleted_body": "بعد تأكيد الهوية، يتم حذف البيانات التالية بشكل دائم: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، رمز الدولة، نوع المركبة، مدينة/منطقة العمل، اسم المتجر أو الوكالة، إحداثيات الموقع، وأي سجلات تحقق بحوزتنا عنك. يُحذف الحساب خلال 30 يوماً من تأكيد الطلب.",
        "ad_retained_title": "البيانات التي قد نحتفظ بها",
        "ad_retained_body": "نحتفظ فقط بما يقتضيه القانون: سجلات ضرورية للامتثال للالتزامات القانونية أو الضريبية أو تسوية النزاعات، ولمدة الاحتفاظ المطلوبة قانوناً فقط. يتم إتلاف النسخ المتبقية في النسخ الاحتياطية خلال 90 يوماً. كما نحتفظ بسجل تدقيق بسيط (معرّفات مشفرة، نوع الخدمة، التواريخ، والحالة) لتوثيق أن طلب الحذف قد قُدّم ونُفّذ.",
        "ad_contact_title": "هل لديك أسئلة؟",
        "ad_contact_body": "للاستفسارات حول هذه العملية، تواصل معنا على: support@reboulot.com",

        // Cookie consent
        "cookie_text": "نستخدم التخزين المحلي لحفظ تفضيلات اللغة والبيانات المؤقتة للنموذج. باستمرارك، فإنك توافق على ذلك.",
        "cookie_btn": "موافق"
    }
};

const SUPPORTED_LANGS = ['ar', 'en'];
const DEFAULT_LANG = 'ar';

let storedLang = localStorage.getItem('reboulot_lang');
let currentLang = SUPPORTED_LANGS.indexOf(storedLang) !== -1 ? storedLang : DEFAULT_LANG;

const LANG_LABELS = {
    ar: 'العربية',
    en: '🇬🇧 English'
};

function applyLanguage(lang) {
    if (translations[lang] === undefined) lang = DEFAULT_LANG;
    currentLang = lang;
    localStorage.setItem('reboulot_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            const tag = el.tagName;
            if (tag === 'TITLE') {
                document.title = dict[key];
            } else if (tag === 'META') {
                el.setAttribute('content', dict[key]);
            } else {
                el.innerHTML = dict[key];
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });
    const sel = document.getElementById('lang-select');
    if (sel && sel.tagName === 'SELECT') {
        sel.value = lang;
    }
    const selMobile = document.getElementById('lang-select-mobile');
    if (selMobile && selMobile.tagName === 'SELECT') {
        selMobile.value = lang;
    }
    document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: currentLang } }));
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        currentLang = urlLang;
        localStorage.setItem('reboulot_lang', urlLang);
    }
    applyLanguage(currentLang);

    // Attach change event to select dropdowns
    function setupLangSelect(id) {
        const sel = document.getElementById(id);
        if (!sel || sel.tagName !== 'SELECT') return;
        sel.addEventListener('change', (e) => {
            const newLang = e.target.value;
            applyLanguage(newLang);
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            history.replaceState(null, '', url);
        });
        sel.innerHTML = '';
        Object.entries(LANG_LABELS).forEach(([code, label]) => {
            const opt = document.createElement('option');
            opt.value = code;
            opt.textContent = label;
            if (code === currentLang) opt.selected = true;
            sel.appendChild(opt);
        });
    }
    setupLangSelect('lang-select');
    setupLangSelect('lang-select-mobile');

    // Cookie consent banner
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieBanner && cookieAccept && !localStorage.getItem('reboulot_cookie_consent')) {
        cookieBanner.classList.add('show');
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('reboulot_cookie_consent', '1');
            cookieBanner.classList.remove('show');
        });
    }
});