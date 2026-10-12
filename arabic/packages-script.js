    // Package Data with Arabic translations
    const packagesData = [
      
      // 1. General Health
      {
          id: 1,
          name: "عرض لقاح العمرة – 60 درهم",
          category: "general_health",
          description: "احمِ نفسك قبل رحلة العمرة مع باقة تطعيم ميسورة التكلفة.",
          features: [
            "لقاح العمرة",
            "لقاح آمن ومعتمد",
            "إعطاء سريع للتطعيم",
            "استشارة طبيب متاحة",
            "مناسب لجميع الفئات العمرية",
            "رعاية صحية نظيفة واحترافية"
          ],
          fullDetails: "يضمن لك عرض لقاح العمرة هذا الحماية خلال رحلتك الروحية. يتوفر بسعر مناسب ويشمل لقاحًا آمنًا ومعتمدًا يتم تقديمه من قبل متخصصين في الرعاية الصحية ضمن بيئة نظيفة وآمنة."
        },
      
      {
        id: 3,
        name: "فحص العافية الصحي – 59 درهم",
        category: "general_health",
        description: "باقة فحص صحي ميسورة التكلفة للفحص الروتيني.",
        features: [
          "سكر الدم (FBS/RBS)",
          "ملف الدهون",
          "فحص الكبد",
          "ملف الكلى",
          "فحص ضغط الدم",
          "مؤشر كتلة الجسم",
          "استشارة طبيب عام مجانية"
        ],
        fullDetails: "مثالي للمراقبة الصحية المنتظمة والكشف المبكر."
      },
      {
        id: 4,
        name: "فحص الصحة الأساسي – 99 درهم",
        category: "general_health",
        description: "فحص صحي أساسي متقدم لتقييم مفصل.",
        features: [
          "سكر الدم",
          "ملف الدهون",
          "ملف الكلى",
          "ملف الكبد",
          "هرمون الغدة الدرقية (TSH)",
          "تحليل البول الروتيني",
          "مؤشر كتلة الجسم",
          "ضغط الدم"
        ],
        fullDetails: "تقييم شامل للوظائف الرئيسية للجسم."
      },

      // 2. Diabetes
      {
        id: 5,
        name: "باقة جلوكوفيت للسكري – 59 درهم",
        category: "diabetes",
        description: "باقة فحص السكري الأساسية.",
        features: [
          "FBS/RBS",
          "السكر التراكمي (HbA1c)"
        ],
        fullDetails: "يساعد في مراقبة مستويات سكر الدم الفورية وطويلة المدى."
      },

      // 3. Blood Test
      {
        id: 6,
        name: "باقة فقر الدم – 199 درهم",
        category: "blood_test",
        description: "باقة فحص فقر الدم الشاملة.",
        features: [
          "صورة الدم الكاملة (CBC)",
          "الفيريتين",
          "الحديد",
          "القدرة الكلية لربط الحديد (TIBC)",
          "فيتامين ب12"
        ],
        fullDetails: "يساعد في تشخيص أسباب التعب والضعف."
      },

      // 5. Women Health
      {
        id: 7,
        name: "باقة اللياقة البدنية للسيدات – 199 درهم",
        category: "women_health",
        description: "تقييم شامل لصحة المرأة.",
        features: [
          "هرمون FSH",
          "هرمون LH",
          "هرمون TSH",
          "فيتامين د",
          "صورة دم كاملة",
          "تخطيط القلب (ECG)"
        ],
        fullDetails: "يغطي الصحة الهرمونية والغذائية والعامة."
      },

      // 6. Allergy
      {
        id: 8,
        name: "باقة حساسية الجلد – 199 درهم",
        category: "allergy",
        description: "يكشف عن حالات حساسية الجلد في وقت مبكر.",
        features: [
          "صورة دم كاملة",
          "الأجسام المضادة (IgE)",
          "العد المطلق للحمضات (AEC)"
        ],
        fullDetails: "يساعد في تحديد أسباب الحكة والطفح الجلدي."
      },
      {
        id: 9,
        name: "باقة حساسية الأنف – 599 درهم",
        category: "allergy",
        description: "تشخيص شامل لحساسية الأنف.",
        features: [
          "استشارة أنف وأذن وحنجرة",
          "تنظير الأنف",
          "اختبار الحساسية"
        ],
        fullDetails: "يساعد في تشخيص الحساسية التنفسية."
      },

      // 7. General Fitness
      {
        id: 10,
        name: "باقة الصحة واللياقة – 149 درهم",
        category: "general_fitness",
        description: "مصممة لمراقبة نمط الحياة النشط.",
        features: [
          "تخطيط القلب (ECG)",
          "فيتامين د",
          "صورة دم كاملة",
          "ملف الدهون",
          "مؤشر كتلة الجسم"
        ],
        fullDetails: "يساعد في تتبع حالة اللياقة البدنية والتغذية."
      },

      // 8. Nutrition
      {
        id: 11,
        name: "فحص فيتامين د – 49 درهم",
        category: "nutrition",
        description: "تحقق من نقص فيتامين د.",
        features: [
          "فحص فيتامين د",
          "نتائج سريعة"
        ],
        fullDetails: "يدعم صحة العظام والجهاز المناعي."
      },

      // 9. Advanced Health
      {
        id: 12,
        name: "فحص الصحة المتقدم – 199 درهم",
        category: "advanced_health",
        description: "فحص صحي متقدم كامل.",
        features: [
          "صورة دم كاملة",
          "فحوصات السكري",
          "الغدة الدرقية",
          "الكبد والكلى",
          "تخطيط القلب"
        ],
        fullDetails: "تقييم مفصل لكامل الجسم."
      },
      {
        id: 13,
        name: "فحص الصحة التنفيذي – 199 درهم",
        category: "advanced_health",
        description: "باقة صحية تنفيذية متعمقة.",
        features: [
          "صورة دم كاملة",
          "السكري",
          "فيتامين د",
          "الكالسيوم"
        ],
        fullDetails: "تقييم صحي وقائي متقدم."
      },
      {
    "id": 19,
    "name": "استشارة صحة المرأة",
     "category": "women_health", 
    "description": "خدمة استشارة شاملة لأمراض النساء تركز على صحة المرأة وتشمل الرعاية الإنجابية، واضطرابات الهرمونات، والفحوصات الوقائية.",
    "features": [
        "علاج اضطراب الدورة الشهرية",
        "رعاية الحمل",
        "علاج تكيس المبايض (PCOS)",
        "رعاية سن اليأس",
        "الاستشارة بشأن وسائل منع الحمل",
        "تركيب وإزالة اللولب (IUCD)",
        "فحص السرطان (مثل مسحة عنق الرحم)",
        "علاج اضطرابات الحيض",
        "فحوصات العقم والعلاج الأولي"
    ],
    "fullDetails": "تقدم هذه الخدمة رعاية متكاملة لصحة المرأة بإشراف طبيبة متخصصة ذات خبرة عالية. تشمل الرعاية جميع مراحل حياة المرأة بدءًا من مشاكل الدورة الشهرية ورعاية الحمل، وصولًا إلى سن اليأس وتشخيص وعلاج العقم. كما توفر فحوصات وقائية مثل الكشف المبكر عن سرطان عنق الرحم وإرشادات طبية حول وسائل منع الحمل، مما يساعد على الحفاظ على صحة المرأة على المدى الطويل."
    },
      {
        id: 22,
        name: "باقة الحمل الأساسية – 1750 درهم",
        category: "women_health",
        description: "رعاية متكاملة للأم الحامل لضمان صحة الأم والطفل، وتشمل 5 استشارات نسائية و2 فحص بالموجات فوق الصوتية.",
        features: [
          "استشارة طب النساء والتوليد – 5 زيارات",
          "فحص بالموجات فوق الصوتية العادي – مرتان",
          "فحص التشوهات (Anomaly Scan) – مرة واحدة",
          "فحص الشفافية القفوية (NT Scan) – مرة واحدة",
          "فحوصات المختبر: CBC، RBS، تحليل البول، VDRL، PPBS، فصيلة الدم، TSH",
          "متابعة ضغط الدم ومؤشر كتلة الجسم (BMI)",
          "فحوصات منتظمة قبل الولادة",
          "رعاية وإرشادات مخصصة"
        ],
        fullDetails: "توفر باقة الحمل الأساسية في مركز مترو ستاركير الطبي الرعاية الأساسية قبل الولادة للأمهات الحوامل. تشمل 5 استشارات مع طبيب النساء والتوليد، وفحصين عاديين بالموجات فوق الصوتية، وفحصي التشوهات والشفافية القفوية، بالإضافة إلى مجموعة من فحوصات المختبر تشمل CBC وRBS وتحليل البول وVDRL وPPBS وفصيلة الدم وTSH، مع متابعة ضغط الدم ومؤشر كتلة الجسم. صُممت الباقة لتوفير رعاية مطمئنة لكِ ولطفلك طوال فترة الحمل."
      },
      {
        id: 23,
        name: "باقة الحمل التنفيذية – 2500 درهم",
        category: "women_health",
        description: "رعاية متقدمة للأم الحامل تشمل 7 استشارات مع طبيب النساء والتوليد و3 فحوصات بالموجات فوق الصوتية وفحوصات مختبر موسعة.",
        features: [
          "استشارة طب النساء والتوليد – 7 زيارات",
          "فحص بالموجات فوق الصوتية العادي – 3 مرات",
          "فحص الشفافية القفوية (NT Scan) – مرة واحدة",
          "فحص التشوهات (Anomaly Scan) – مرة واحدة",
          "فحوصات المختبر: CBC × 3، HCV، RBS، TSH، VDRL، GTT، HIV، HBSAG، فصيلة الدم، RUBELLA، تحليل البول × 2",
          "متابعة ضغط الدم ومؤشر كتلة الجسم (BMI)",
          "فحوصات متقدمة بالموجات فوق الصوتية",
          "فحوصات مخبرية أساسية"
        ],
        fullDetails: "تقدم باقة الحمل التنفيذية مستوى متقدمًا من رعاية الأمومة، وتشمل 7 استشارات مع طبيب النساء والتوليد و3 فحوصات عادية بالموجات فوق الصوتية، بالإضافة إلى فحصي الشفافية القفوية والتشوهات. تشمل الفحوصات المخبرية CBC ثلاث مرات، وHCV وRBS وTSH وVDRL وGTT وHIV وHBSAG وفصيلة الدم وRubella وتحليل البول مرتين، مع متابعة ضغط الدم ومؤشر كتلة الجسم."
      },
      {
        id: 24,
        name: "باقة الحمل المميزة – 3250 درهم",
        category: "women_health",
        description: "باقة شاملة لرعاية الحمل تشمل 10 استشارات و4 فحوصات بالموجات فوق الصوتية ومجموعة كاملة من فحوصات المختبر.",
        features: [
          "استشارة طب النساء والتوليد – 10 زيارات",
          "فحص بالموجات فوق الصوتية العادي – 4 مرات",
          "فحص الشفافية القفوية (NT Scan) – مرة واحدة",
          "فحص التشوهات (Anomaly Scan) – مرة واحدة",
          "فحوصات المختبر: CBC × 4، HIV، HCV، VDRL، TSH، GTT، HBSAG، HbA1c، تحليل البول × 3، مزرعة البول والحساسية، فصيلة الدم، سكر صائم × 2، وسكر الدم بعد الطعام",
          "متابعة ضغط الدم ومؤشر كتلة الجسم (BMI)",
          "فحوصات متقدمة بالموجات فوق الصوتية",
          "فحوصات مخبرية أساسية",
          "رعاية وإرشادات مخصصة",
          "راحة واطمئنان لكِ ولطفلك"
        ],
        fullDetails: "تعد باقة الحمل المميزة أكثر باقات الأمومة شمولًا، إذ تشمل 10 استشارات مع طبيب النساء والتوليد و4 فحوصات عادية بالموجات فوق الصوتية، وفحصي الشفافية القفوية والتشوهات، ومجموعة واسعة من الفحوصات المخبرية تشمل CBC أربع مرات وHIV وHCV وVDRL وTSH وGTT وHBSAG وHbA1c وتحليل البول ثلاث مرات ومزرعة البول والحساسية وفصيلة الدم وفحوصات سكر الدم الصائم وبعد الطعام، مع متابعة ضغط الدم ومؤشر كتلة الجسم."
      },
      {
        id: 25,
        name: "باقة مترو المميزة للعافية – 299 درهم",
        category: "advanced_health",
        description: "فحص صحي متكامل يشمل صورة الدم والسكري والدهون والكبد والكلى والغدة الدرقية وتخطيط القلب وفحص النظر واستشارة الأسنان.",
        features: [
          "صورة دم كاملة (CBC – 19 مؤشرًا)",
          "فحوصات السكري: FBS / RBS وHbA1c",
          "ملف الدهون: الكوليسترول الكلي والدهون الثلاثية وLDL وVLDL وHDL وNon-HDL",
          "وظائف الكبد: SGPT وSGOT وALP والبيليروبين وGGT والبروتين الكلي والألبومين والغلوبولين",
          "وظائف الكلى: اليوريا والكرياتينين وGFR وحمض اليوريك",
          "وظائف الغدة الدرقية: TSH وFT3 وFT4",
          "فحوصات إضافية: الفوسفور والمغنيسيوم والحديد وCRP وتخطيط القلب وفحص النظر واستشارة الأسنان ومراجعة تقرير الطبيب",
          "تحليل البول ومؤشر كتلة الجسم وضغط الدم"
        ],
        fullDetails: "باقة مترو المميزة للعافية هي فحص وقائي شامل مصمم للاطمئنان على صحتك. تشمل صورة دم كاملة من 19 مؤشرًا، وفحوصات السكري والدهون ووظائف الكبد والكلى والغدة الدرقية، إضافة إلى الفوسفور والمغنيسيوم والحديد وCRP وتخطيط القلب وفحص النظر واستشارة الأسنان وتحليل البول ومؤشر كتلة الجسم وضغط الدم ومراجعة تقرير الطبيب."
      },
      {
        id: 26,
        name: "فحص الحديد – 49 درهم",
        category: "blood_test",
        description: "إذا كنت تشعر بالتعب أو الضعف بشكل غير معتاد، يساعد فحص الحديد على قياس مستوى الحديد في الدم وتقييم انخفاضه أو ارتفاعه.",
        features: [
          "فحص مستوى الحديد",
          "نتائج سريعة",
          "الكشف عن نقص الحديد أو زيادته",
          "إمكانية استشارة الطبيب"
        ],
        fullDetails: "يقيس فحص الحديد مستوى الحديد في الدم ويساعد الطبيب في تقييم انخفاضه أو ارتفاعه. قد يؤثر انخفاض الحديد في نقل الأكسجين داخل الجسم ويسبب الشعور المستمر بالإرهاق. اسأل طبيبك عما إذا كان هذا الفحص مناسبًا لك."
      },
      {
        id: 27,
        name: "فحص المغنيسيوم – 49 درهم",
        category: "nutrition",
        description: "يساعد فحص المغنيسيوم على التحقق من اختلال مستواه الذي قد يرتبط بتشنجات العضلات أو التعب غير المبرر.",
        features: [
          "فحص مستوى المغنيسيوم",
          "نتائج سريعة",
          "الكشف عن اختلال مستوى المغنيسيوم",
          "دعم تقييم صحة العضلات والأعصاب"
        ],
        fullDetails: "يلعب المغنيسيوم دورًا مهمًا في تعافي العضلات ووظائف الأعصاب والحفاظ على مستويات الطاقة. يمكن أن يساعد الفحص في التحقق من مستوى المغنيسيوم. استشر طبيبك لمعرفة ما إذا كان هذا الفحص مناسبًا لك."
      },
      {
        id: 28,
        name: "فحص الفوسفور – 49 درهم",
        category: "nutrition",
        description: "يساعد فحص الفوسفور على تقييم توازن المعادن وصحة العظام والكلى ضمن التقييم الصحي.",
        features: [
          "فحص مستوى الفوسفور",
          "نتائج سريعة",
          "يساعد في تقييم صحة العظام",
          "يساعد في تقييم وظائف الكلى"
        ],
        fullDetails: "يعمل الفوسفور مع الكالسيوم لدعم صحة العظام، كما يرتبط توازنه بوظائف الجسم المختلفة. يساعد فحص الفوسفور على تقييم مستوى هذا المعدن ضمن الفحص الصحي. استشر طبيبك لمعرفة ما إذا كان هذا الفحص مناسبًا لك."
      },
      {
        id: 29,
        name: "باقة فيتامين D وB12 – 120 درهم",
        category: "nutrition",
        description: "فحوصات بسيطة يمكن أن تساعد في متابعة صحة الأسرة والحفاظ على النشاط والقوة والعافية.",
        features: [
          "فحص فيتامين D",
          "فحص فيتامين B12",
          "مناسبة لجميع الفئات العمرية",
          "تساعد في تقييم الطاقة والمناعة وصحة الأعصاب",
          "دعم الصحة العامة"
        ],
        fullDetails: "يساعد فحص فيتامين D وB12 على التحقق من مستويات هذين الفيتامينين المهمين. قد يرتبط انخفاض فيتامين D بضعف العظام، وقد يرتبط انخفاض B12 بالتعب ومشكلات الأعصاب. اسأل طبيبك عن مدى ملاءمة هذه الباقة لك ولعائلتك."
      },
      {
        id: 30,
        name: "باقة فحص فقر الدم – 149 درهم",
        category: "blood_test",
        description: "فحوصات أساسية لتقييم ملف الحديد والمساعدة في تحديد أسباب التعب والضعف.",
        features: [
          "لطاخة الدم المحيطية (PS)",
          "الحديد",
          "السعة الكلية لارتباط الحديد (TIBC)",
          "السعة غير المشبعة لارتباط الحديد (UIBC)",
          "الترانسفيرين",
          "الفيريتين"
        ],
        fullDetails: "تتضمن باقة فحص فقر الدم مجموعة من فحوصات ملف الحديد: لطاخة الدم المحيطية والحديد والسعة الكلية وغير المشبعة لارتباط الحديد والترانسفيرين والفيريتين. تساعد هذه الفحوصات الطبيب في تقييم أسباب التعب والضعف وانخفاض الطاقة."
      },
      {
        id: 31,
        name: "باقة صحة القلب بلس – 199 درهم",
        category: "advanced_health",
        description: "فحص شامل لصحة القلب لتقييم مؤشرات القلب والأوعية الدموية المهمة.",
        features: [
          "الكرياتينين",
          "تروبونين I",
          "CK-MB",
          "المغنيسيوم",
          "أبوليبوبروتين A1",
          "أبوليبوبروتين B",
          "hs-CRP",
          "تخطيط القلب (ECG)"
        ],
        fullDetails: "تتضمن باقة صحة القلب بلس مجموعة من المؤشرات المهمة لتقييم صحة القلب، مثل تروبونين I وCK-MB وhs-CRP وأبوليبوبروتين A1 وB والكرياتينين والمغنيسيوم وتخطيط القلب. استشر الطبيب لتفسير النتائج وتحديد الفحوصات المناسبة لحالتك."
      },
      {
        id: 32,
        name: "باقة أساسيات صحة القلب – 149 درهم",
        category: "advanced_health",
        description: "مجموعة مختارة من الفحوصات لتقييم مؤشرات القلب والأوعية الدموية المهمة.",
        features: [
          "الكرياتينين",
          "أبوليبوبروتين A1",
          "أبوليبوبروتين B",
          "hs-CRP"
        ],
        fullDetails: "تساعد باقة أساسيات صحة القلب في متابعة بعض المؤشرات المرتبطة بصحة القلب والأوعية الدموية، وتشمل hs-CRP وأبوليبوبروتين A1 وB والكرياتينين. ناقش النتائج مع طبيبك للحصول على التقييم المناسب."
      },
      {
        id: 33,
        name: "باقة فحص القلب الشامل – 299 درهم",
        category: "advanced_health",
        description: "تقييم شامل لمؤشرات القلب والتمثيل الغذائي والمعادن ضمن باقة واحدة.",
        features: [
          "صورة دم كاملة (CBC)",
          "ملف الدهون: الكوليسترول الكلي وLDL والدهون الثلاثية وVLDL وHDL وNon-HDL",
          "وظائف الكلى: اليوريا وحمض اليوريك والكرياتينين وGFR",
          "المعادن: المغنيسيوم والفوسفور وفيتامين D والكالسيوم",
          "الغدة الدرقية: TSH",
          "فحوصات السكري: FBS/RBS وHbA1c",
          "وظائف الكبد: SGOT وSGPT وGGT",
          "مؤشرات القلب: تروبونين I وCK-MB وأبوليبوبروتين A وB وhs-CRP",
          "التقييم والاستشارة: تخطيط القلب وضغط الدم ومؤشر كتلة الجسم واستشارة طبيب عام"
        ],
        fullDetails: "تجمع باقة فحص القلب الشامل مجموعة من الفحوصات في باقة واحدة، بما في ذلك صورة الدم وملف الدهون ووظائف الكلى والكبد وفحوصات السكري والمعادن والغدة الدرقية ومؤشرات القلب، إضافة إلى تخطيط القلب وقياس ضغط الدم ومؤشر كتلة الجسم واستشارة الطبيب العام. يساعد الطبيب في تفسير النتائج وتحديد المتابعة المناسبة."
      }
    ];

    let currentFilter = "all";
    let currentSort = "default";

    function getCategoryLabel(cat) {
      const labels = {
        "general_health": "الصحة العامة",
        "diabetes": "السكري",
        "blood_test": "فحص الدم",
        "women_health": "صحة المرأة",
        "allergy": "الحساسية",
        "general_fitness": "اللياقة البدنية",
        "nutrition": "التغذية",
        "advanced_health": "الصحة المتقدمة"
      };
      return labels[cat] || cat;
    }

    function renderPackages() {
      let filtered = packagesData.filter(pkg => currentFilter === "all" || pkg.category === currentFilter);

      if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
      else if (currentSort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name, 'ar'));

      const grid = document.getElementById("packagesGrid");
      if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">لم يتم العثور على باقات في هذه الفئة. يرجى تجربة تصفية أخرى.</div>';
        return;
      }

      grid.innerHTML = filtered.map(pkg => {
        // Extract price and clean name
        const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*(AED|درهم)/i);
        const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;
        const priceAmount = priceMatch ? priceMatch[2] : "";

        return `
        <div class="package-card">
          ${priceAmount ? `
          <div class="price-badge">
            <div class="amount">${priceAmount}</div>
            <div class="currency">درهم</div>
          </div>` : ''}
          <div class="package-header">
            <div class="package-category" style="margin-bottom:10px;">${getCategoryLabel(pkg.category)}</div>
            <h3>${displayName}</h3>
          </div>
          <div class="package-body">
            <p class="package-desc">${pkg.description}</p>
            <ul class="package-features">
              ${pkg.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
              ${pkg.features.length > 3 ? `<li><i class="fas fa-ellipsis-h"></i> +${pkg.features.length - 3} خدمات أخرى</li>` : ''}
            </ul>
          </div>
          <div class="package-footer">
            <button class="view-details-btn" onclick="openModal(${pkg.id})">عرض التفاصيل</button>
          </div>
        </div>
      `}).join('');
    }

    function openModal(id) {
      const pkg = packagesData.find(p => p.id === id);
      if (!pkg) return;

      const priceMatch = pkg.name.match(/(.*)[–-]\s*(\d+)\s*(AED|درهم)/i);
      const displayName = priceMatch ? priceMatch[1].trim() : pkg.name;

      let featuresHtml = '';
      if (pkg.packages) {
        featuresHtml = pkg.packages.map(cat => `
          <h4 style="color: var(--maroon); margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 5px; font-size: 1rem;">
            <i class="fas fa-tags" style="margin-left: 8px;"></i> ${cat.category_name}
          </h4>
          <ul style="margin-bottom: 15px;">
            ${cat.services.map(s => `
              <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.85rem;">
                <span><i class="fas fa-check-circle" style="color: var(--maroon); margin-left: 8px; font-size: 0.8rem;"></i> ${s.name}</span>
                <span style="font-weight: 700; color: var(--maroon); white-space: nowrap;">${s.price}</span>
              </li>
            `).join('')}
          </ul>
        `).join('');
      } else {
        featuresHtml = `
          <h4><i class="fas fa-list-ul" style="margin-left: 8px;"></i> تتضمن الباقة:</h4>
          <ul>
            ${pkg.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
          </ul>
        `;
      }

      document.getElementById("modalTitle").innerText = displayName;
      document.getElementById("modalBody").innerHTML = `
        <p><strong>${pkg.description}</strong></p>
        ${priceMatch ? `<p class="modal-price" style="color: var(--maroon); font-weight: 700; font-size: 1.2rem; margin-bottom: 15px;">السعر: ${priceMatch[2]} درهم</p>` : ''}
        ${featuresHtml}
        <h4 style="margin-top:20px;"><i class="fas fa-info-circle"></i> معلومات تفصيلية:</h4>
        <p>${pkg.fullDetails}</p>
        <p><strong>المدة:</strong> تكتمل عادة خلال 2-3 ساعات مع ظهور النتائج في غضون 24-48 ساعة.</p>
        <p><strong>التحضير:</strong> قد يلزم الصيام لبعض الفحوصات. يرجى استشارة فريقنا للحصول على تعليمات محددة.</p>
      `;
      document.getElementById("packageModal").classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      document.getElementById("packageModal").classList.remove("active");
      document.body.style.overflow = "";
    }

    // Dropdown Toggles (Filter & Sort)
    const filterMobileToggle = document.getElementById("filterMobileToggle");
    const filterTabs = document.getElementById("filterTabs");
    const activeCategoryText = document.getElementById("activeCategoryText");
    const sortDropdownToggle = document.getElementById("sortDropdownToggle");
    const sortOptions = document.getElementById("sortOptions");
    const activeSortText = document.getElementById("activeSortText");

    if (filterMobileToggle) {
      filterMobileToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        filterTabs.classList.toggle("show");
        if (sortOptions) sortOptions.classList.remove("show");
      });
    }

    if (sortDropdownToggle) {
      sortDropdownToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        sortOptions.classList.toggle("show");
        if (filterTabs) filterTabs.classList.remove("show");
      });
    }

    // Filter Category Selection
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.category;
        
        if (activeCategoryText) activeCategoryText.innerText = btn.innerText;
        if (window.innerWidth <= 768) filterTabs.classList.remove("show");
        renderPackages();
      });
    });

    // Sort Option Selection
    document.querySelectorAll(".sort-opt").forEach(opt => {
      opt.addEventListener("click", () => {
        document.querySelectorAll(".sort-opt").forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
        currentSort = opt.dataset.value;
        
        if (activeSortText) activeSortText.innerText = opt.innerText;
        sortOptions.classList.remove("show");
        renderPackages();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (filterTabs && !filterTabs.contains(e.target) && e.target !== filterMobileToggle) {
        filterTabs.classList.remove("show");
      }
      if (sortOptions && !sortOptions.contains(e.target) && e.target !== sortDropdownToggle) {
        sortOptions.classList.remove("show");
      }
    });

    document.getElementById("packageModal").addEventListener("click", (e) => {
      if (e.target === document.getElementById("packageModal")) closeModal();
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      const hamburger = document.getElementById("hamburger");
      if (navLinks && hamburger) {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
      }
    }

    // Back to top
    const backToTopBtn = document.getElementById("backToTop");
    window.onscroll = function () {
      if (backToTopBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      }
    };
    if (backToTopBtn) {
      backToTopBtn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const isArabicPage = window.location.pathname.includes('/arabic/');
        if (btn.dataset.lang === 'en') {
          window.location.href = isArabicPage ? '../packages.html' : 'packages.html';
        } else if (btn.dataset.lang === 'ar') {
          window.location.href = isArabicPage ? 'packages.html' : 'arabic/packages.html';
        }
      });
    });

    // Initial render
    renderPackages();
  
