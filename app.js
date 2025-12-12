const lessons = [
  {
    slug: 'what-is-fx',
    title: 'FXってなに？「円を外貨に替える」だけで理解する',
    category: '基礎',
    minutes: 1,
    updated: '2025/01/10',
    summary: '外貨両替の延長としてFXをとらえ、レート変動で利益が出る仕組みを理解します。',
    points: ['FXは通貨の交換で値動き差を狙う', '外貨預金とのちがいはレバレッジと取引スピード', 'まずは少額・デモから練習する'],
    content: [
      'FXは「1ドル=〇円」といった為替レートの変動を利用して差益をねらう取引です。海外旅行で両替する感覚の延長で、レートが円安に向かうか円高に向かうかを予想します。',
      '外貨預金との大きな違いは、少ない資金で大きな金額を動かせるレバレッジと、いつでも売買できるスピード感です。',
      '最初はデモ口座や少額から始め、「自分のお金が動く」ときの感情に慣れることが安全です。'
    ],
    quiz: [
      {
        q: 'FXで利益や損失が出る主な理由は？',
        choices: ['為替レートの変動', '銀行の手数料', '株価指数の変動'],
        answerIndex: 0,
        explain: '通貨の売値・買値の差（為替レート変動）によって損益が決まります。'
      },
      {
        q: '外貨預金との大きな違いに該当するものは？',
        choices: ['預金保護がある', 'レバレッジを使える', '元本保証がある'],
        answerIndex: 1,
        explain: 'FXはレバレッジを使って少額で大きな取引ができます（その分リスクも大きくなります）。'
      },
      {
        q: '初心者が最初に意識すべきことは？',
        choices: ['一度に大金を入金する', 'デモや少額で慣れる', '24時間取引する'],
        answerIndex: 1,
        explain: '感情コントロールに慣れるため、まずは少額・デモからが安全です。'
      }
    ]
  },
  {
    slug: 'yen-and-life',
    title: '円安・円高で生活はどう変わる？（食費/旅行/電気代）',
    category: '基礎',
    minutes: 2,
    updated: '2025/01/11',
    summary: '円安・円高が日常の支出に与える影響を生活目線で学びます。',
    points: ['円安は輸入品の価格を押し上げやすい', '旅行や留学費用も為替で変動する', '電気代・ガソリンは原油価格＋為替の影響を受ける'],
    content: [
      '円安になると海外から買うものが増税のように高くなり、食材や日用品の価格に反映されやすくなります。',
      '海外旅行・留学費用も円安で割高になる一方、円高では費用を抑えられます。',
      '電気代やガソリン価格は原油自体の価格に加えて、原油をドルで取引するため為替の影響を受けます。'
    ],
    quiz: [
      {
        q: '円安になると輸入品の価格はどうなりやすい？',
        choices: ['安くなる', '高くなる', '変わらない'],
        answerIndex: 1,
        explain: '同じ外貨を買うためにより多くの円が必要になるため、輸入品が高くなりやすいです。'
      },
      {
        q: '円高だと海外旅行費用は？',
        choices: ['抑えやすい', '高くなる', '変わらない'],
        answerIndex: 0,
        explain: '円の価値が高まるので現地通貨を安く調達でき、旅行費用を抑えやすくなります。'
      },
      {
        q: 'ガソリン・電気代に影響するのは？',
        choices: ['原油価格のみ', '原油価格と為替', '為替のみ'],
        answerIndex: 1,
        explain: '原油の市場価格と、ドル建てでの取引に伴う為替の影響が両方効きます。'
      }
    ]
  },
  {
    slug: 'pips-basic',
    title: '利益と損失はどう決まる？pipsの超入門',
    category: '基礎',
    minutes: 2,
    updated: '2025/01/12',
    summary: 'pips（ピップス）の考え方を使って、利益・損失を素早く把握する方法を学びます。',
    points: ['pipsは為替レートの最小単位', '損益は取引数量×pips変動×1通貨あたり価値', '数量を上げると損益の振れ幅も大きくなる'],
    content: [
      'pipsは為替レートの最小単位で、USD/JPYなら通常0.01円=1pipsです。',
      '損益は「取引数量×値幅（pips）×1pipsの価値」で計算されます。数量を増やすほど損益の振れ幅も大きくなります。',
      'pipsで値動きを把握すると、通貨ペアが変わっても損益イメージをつかみやすくなります。'
    ],
    quiz: [
      {
        q: 'USD/JPYで1pipsは通常いくら？',
        choices: ['1円', '0.1円', '0.01円'],
        answerIndex: 2,
        explain: '多くの業者では小数点第2位がpips単位となり、0.01円が1pipsです。'
      },
      {
        q: '損益を大きく変えやすい要素は？',
        choices: ['取引数量', 'チャートの色', '土日'],
        answerIndex: 0,
        explain: '数量を増やすと同じ値幅でも損益が大きくなります。'
      },
      {
        q: 'pipsで管理する利点は？',
        choices: ['通貨ペアによらず比較しやすい', 'グラフがカラフルになる', '税金が減る'],
        answerIndex: 0,
        explain: '通貨ペアが変わってもpipsなら損益感覚を比較しやすくなります。'
      }
    ]
  },
  {
    slug: 'leverage',
    title: 'レバレッジって危ないの？「テコ」の話',
    category: 'リスク',
    minutes: 2,
    updated: '2025/01/12',
    summary: 'レバレッジの仕組みと、倍率を抑えて使う安全な始め方を確認します。',
    points: ['レバレッジは少額で大きな取引を可能にするテコ', '倍率が高いほど損益の振れ幅が広がる', '初心者は低倍率で資金管理を徹底する'],
    content: [
      'レバレッジは「テコ」のように、少ない証拠金で大きな金額を動かす仕組みです。',
      '倍率が高いほど利益チャンスは増えますが、同じだけ損失も拡大します。',
      '最初は3〜5倍程度の低め設定にし、損切りラインを決めた上で少額から始めましょう。'
    ],
    quiz: [
      {
        q: 'レバレッジを高くするとどうなる？',
        choices: ['損益の振れ幅が大きくなる', '約定しなくなる', 'リスクがなくなる'],
        answerIndex: 0,
        explain: '大きな金額を動かすため、損益の振れ幅が同時に拡大します。'
      },
      {
        q: '初心者におすすめの設定は？',
        choices: ['最大倍率', '低めの倍率', '常にゼロ'],
        answerIndex: 1,
        explain: 'まずは低倍率で資金管理を練習するのが安全です。'
      },
      {
        q: 'レバレッジを使う前に決めておきたいのは？',
        choices: ['好きな色', '損切りライン', 'SNSの投稿時間'],
        answerIndex: 1,
        explain: '損切りラインを決めておくことで想定外の損失を防ぎやすくなります。'
      }
    ]
  },
  {
    slug: 'loss-cut',
    title: 'ロスカットとは？事故を防ぐ安全装置',
    category: 'リスク',
    minutes: 2,
    updated: '2025/01/13',
    summary: '口座破綻を防ぐためのロスカット（強制決済）の仕組みを確認します。',
    points: ['証拠金維持率が一定以下になると発動', '残高以上の損失を防ぐためのルール', 'ロスカット前に自分で損切りするのが理想'],
    content: [
      'ロスカットは証拠金維持率が一定以下になると自動でポジションを決済し、残高以上の損失を避ける仕組みです。',
      '相場急変時には滑ることもあるため、ロスカットだけに頼らず自分で早めに損切りすることが大切です。',
      'ロスカット水準は業者や設定によって異なるので、事前に確認しておきましょう。'
    ],
    quiz: [
      {
        q: 'ロスカットが発動する主な条件は？',
        choices: ['SNSで話題になる', '証拠金維持率が低下する', '週末になる'],
        answerIndex: 1,
        explain: '証拠金維持率が一定以下になると自動決済される仕組みです。'
      },
      {
        q: 'ロスカットだけに頼らない理由は？',
        choices: ['発動時に通知がない', '相場急変で想定より大きく滑ることがある', '税金が増える'],
        answerIndex: 1,
        explain: '急変時は約定価格がずれて損失が膨らむ可能性があるため、自分で早めに損切りすることが重要です。'
      },
      {
        q: 'ロスカット水準はどうやって決まる？',
        choices: ['国が一律で決める', '業者や設定で異なる', '毎日変わる'],
        answerIndex: 1,
        explain: '証拠金維持率の基準は業者やコースで異なるため事前確認が必要です。'
      }
    ]
  },
  {
    slug: 'spread',
    title: 'スプレッドは“見えない手数料”',
    category: 'コスト',
    minutes: 1,
    updated: '2025/01/14',
    summary: 'スプレッドの意味と、取引コストとしての捉え方を身につけます。',
    points: ['スプレッド=売値と買値の差', '狭いほどコストが低い', '経済指標前後は広がりやすい'],
    content: [
      'スプレッドは通貨ペアの売値と買値の差で、実質的な取引コストです。',
      'スプレッドが狭いほどコストは抑えられますが、指標発表などでは一時的に広がることがあります。',
      '約定力やツールの使いやすさも合わせて、総合的に口座を選びましょう。'
    ],
    quiz: [
      {
        q: 'スプレッドは何に近い？',
        choices: ['税金', '見えない取引コスト', 'スワップ'],
        answerIndex: 1,
        explain: '売値と買値の差で、実質的な取引コストのように働きます。'
      },
      {
        q: 'スプレッドが広がりやすい場面は？',
        choices: ['経済指標前後', '昼休み', '祝日を除く毎日'],
        answerIndex: 0,
        explain: '流動性が低下するタイミングではスプレッドが広がることがあります。'
      },
      {
        q: 'コスト比較で見るとよいのは？',
        choices: ['アプリの色', '約定力やツールの使い勝手も含めた総合力', 'SNSの評判だけ'],
        answerIndex: 1,
        explain: 'スプレッドだけでなく、約定力やツールもあわせて比較するのが現実的です。'
      }
    ]
  },
  {
    slug: 'swap',
    title: 'スワップポイントの仕組み（得も損もある）',
    category: 'コスト',
    minutes: 2,
    updated: '2025/01/14',
    summary: '通貨間の金利差から生まれるスワップポイントの基本と注意点を学びます。',
    points: ['金利差で毎日付与/支払いが発生', '受け取りも支払いもあり得る', '長期保有時は合計額を確認する'],
    content: [
      'スワップポイントは通貨ペアの金利差に応じて、日々受け取りまたは支払いが発生します。',
      '高金利通貨を買うと受け取りになりやすい一方、売ると支払いになることがあります。',
      '長期保有する場合は、スワップの合計が損益に大きく影響するため必ず確認しましょう。'
    ],
    quiz: [
      {
        q: 'スワップポイントは何に基づいて発生する？',
        choices: ['口座残高', '通貨ペアの金利差', '祝日'],
        answerIndex: 1,
        explain: '通貨ペアの金利差に応じて日々調整が入ります。'
      },
      {
        q: '高金利通貨を「買う」とどうなりやすい？',
        choices: ['毎日支払い', '毎日受け取り', '必ずゼロ'],
        answerIndex: 1,
        explain: '金利差がプラスなら受け取りになることが多いです。'
      },
      {
        q: '長期保有のとき確認したいのは？',
        choices: ['スワップ合計', 'アプリのデザイン', '天気'],
        answerIndex: 0,
        explain: '日々のスワップが積み上がるため、合計額を損益計算に含めることが重要です。'
      }
    ]
  },
  {
    slug: 'news-and-indicators',
    title: 'ニュースはどれを見ればいい？（金利・雇用・物価）',
    category: '基礎',
    minutes: 2,
    updated: '2025/01/15',
    summary: '為替に影響しやすい代表的な指標と、情報の追い方を整理します。',
    points: ['金利・雇用・物価が大枠を動かす', 'FOMCや雇用統計は注目度が高い', 'カレンダーで時間を把握し、直前の取引は控える'],
    content: [
      '為替は「金利・雇用・物価」の３つが大きく影響します。米国の政策金利や雇用統計、消費者物価指数（CPI）は特に注目度が高い指標です。',
      '経済指標カレンダーで発表時刻を把握し、直前直後はスプレッドが広がることもあるため注意します。',
      'ニュースは公式発表と複数メディアで確認し、見出しだけでなく内容を読む習慣をつけましょう。'
    ],
    quiz: [
      {
        q: '為替を動かしやすい3大テーマは？',
        choices: ['スポーツ・天気・映画', '金利・雇用・物価', 'ファッション・芸能・グルメ'],
        answerIndex: 1,
        explain: '金利・雇用・物価が経済の大枠を動かし、為替に影響します。'
      },
      {
        q: '発表直前に注意したいことは？',
        choices: ['スプレッドが広がることがある', 'アプリが暗くなる', 'スマホが使えなくなる'],
        answerIndex: 0,
        explain: '流動性低下でスプレッドが広がり、思わぬ価格で約定することがあります。'
      },
      {
        q: '情報収集で大事なのは？',
        choices: ['見出しだけ読む', '複数ソースで確認する', 'SNSだけを見る'],
        answerIndex: 1,
        explain: '公式発表と複数メディアを参照し、内容を理解することが重要です。'
      }
    ]
  },
  {
    slug: 'small-start',
    title: '少額で始める前に確認する3つ（資金/時間/ルール）',
    category: '始め方',
    minutes: 2,
    updated: '2025/01/16',
    summary: '実際に取引を始める前に整えておきたい資金・時間・マイルールをチェックします。',
    points: ['なくなっても生活に困らない資金か', '毎日どの時間帯に向き合えるか', '損切り・利確のルールを決めておく'],
    content: [
      '投資に回す資金は、なくなっても生活が揺らがない余剰資金に限定します。',
      '仕事や家事の合間にどれだけ時間を割けるか決め、無理ない時間帯で取引するのが長続きのコツです。',
      'エントリー前に「損切りはここ、利確はここ」と決めて、ルールに沿って淡々と動く準備を整えます。'
    ],
    quiz: [
      {
        q: '取引資金として適切なのは？',
        choices: ['生活費の大半', 'なくなっても生活に影響しない余剰資金', 'クレジットカードの枠'],
        answerIndex: 1,
        explain: '生活に必要な資金を守り、余剰資金で始めるのが基本です。'
      },
      {
        q: '時間の確保で考えたいことは？',
        choices: ['SNSの通知を増やす', '毎日向き合える時間帯を決める', '常に徹夜する'],
        answerIndex: 1,
        explain: '無理のない時間帯を決めることで継続しやすくなります。'
      },
      {
        q: 'エントリー前に決めるルールは？',
        choices: ['好きな通貨の色', '損切りと利確のライン', '友人に連絡する順番'],
        answerIndex: 1,
        explain: '出口を決めた上で取引することで感情に振り回されにくくなります。'
      }
    ]
  },
  {
    slug: 'checklist',
    title: '口座開設前チェックリスト（自分に向くか判断）',
    category: '始め方',
    minutes: 1,
    updated: '2025/01/17',
    summary: '自分にとってFXが適切かを判断するための最低限のチェック項目を整理します。',
    points: ['余剰資金と時間を確保できる', '価格変動リスクを理解した', '最低限のルールを守れる'],
    content: [
      'まず、余剰資金と学びに充てる時間を確保できるか確認します。',
      '価格変動リスクやロスカットの仕組みなど、基礎的なリスクを理解しているかを振り返ります。',
      '決めたルールを守れるか、自分の性格や生活リズムと合うかをチェックしましょう。'
    ],
    quiz: [
      {
        q: 'チェックリストに含めたいのは？',
        choices: ['余剰資金があるか', '好きなドラマの曜日', 'SNSのフォロワー数'],
        answerIndex: 0,
        explain: '生活費を守るため、余剰資金で行うことが前提です。'
      },
      {
        q: 'リスク理解で大切なのは？',
        choices: ['価格変動リスクを把握', '証拠金なしでできると思う', '必ず儲かると信じる'],
        answerIndex: 0,
        explain: '値動きにより損失が出る可能性を理解しておく必要があります。'
      },
      {
        q: '続けられるかの判断に役立つのは？',
        choices: ['ルールを守れるか', '睡眠を削り続けるか', '人に任せるか'],
        answerIndex: 0,
        explain: '自分で決めたルールを守れるかが継続のカギです。'
      }
    ]
  }
];

const glossary = [
  { slug: 'ask-bid', term: '売値/買値（Bid/Ask）', category: '基礎', description: '通貨を売るときの価格がBid、買うときの価格がAsk。差がスプレッドになる。', tip: '表示順や差を確認してコスト感覚を持つ。' },
  { slug: 'pips', term: 'pips（ピップス）', category: '基礎', description: '為替レートの最小単位。USD/JPYでは通常0.01円が1pips。', tip: '損益計算をpipsで把握すると通貨ペアを跨いで比較しやすい。' },
  { slug: 'lot', term: '取引数量（ロット）', category: '基礎', description: '1取引あたりの通貨数量。数量が大きいほど損益が大きく動く。', tip: '初心者は数量を抑え、損切り幅と合わせてリスクを管理。' },
  { slug: 'leverage', term: 'レバレッジ', category: 'リスク', description: '証拠金の数倍〜数十倍の取引を可能にする仕組み。', tip: '倍率を抑えて練習し、損切りラインを決めておく。' },
  { slug: 'margin', term: '証拠金', category: 'リスク', description: 'ポジションを保有するために預ける担保。', tip: '必要証拠金と証拠金維持率を常に確認する。' },
  { slug: 'maintenance', term: '証拠金維持率', category: 'リスク', description: '口座の安全度を示す指標。一定以下でロスカットが発動する。', tip: '余力が減ったら数量を減らすなど早めに対応。' },
  { slug: 'loss-cut', term: 'ロスカット', category: 'リスク', description: '証拠金維持率が基準を下回ると自動で決済される仕組み。', tip: '自分の損切りルールで先に決済するのが理想。' },
  { slug: 'stop-loss', term: '損切り注文', category: 'リスク', description: '指定価格で自動決済する注文。損失拡大を防ぐ基本手段。', tip: 'エントリーと同時に置く癖を付ける。' },
  { slug: 'take-profit', term: '利確注文', category: '基礎', description: '利益を確定するための決済注文。', tip: '目標を決めて機械的に実行する。' },
  { slug: 'spread', term: 'スプレッド', category: 'コスト', description: '売値と買値の差。実質的な取引コスト。', tip: '広がりやすい時間帯を避ける。' },
  { slug: 'swap-point', term: 'スワップポイント', category: 'コスト', description: '通貨の金利差による受け取り/支払い。', tip: '長期保有では合計額を確認。' },
  { slug: 'market-order', term: '成行注文', category: '基礎', description: '現在の価格で即時に約定させる注文方法。', tip: '急変時は滑る可能性がある点に注意。' },
  { slug: 'limit-order', term: '指値注文', category: '基礎', description: '指定した価格以下/以上で約定を狙う注文。', tip: '入口と出口をあらかじめ決めやすい。' },
  { slug: 'slippage', term: 'スリッページ', category: 'コスト', description: '発注価格と実際の約定価格の差。', tip: '指標前は大きくなりやすい。' },
  { slug: 'carry-trade', term: 'キャリートレード', category: '基礎', description: '低金利通貨を借り、高金利通貨を買って金利差を得る手法。', tip: '為替変動リスクも伴うことを忘れない。' },
  { slug: 'pip-value', term: '1pipsあたりの価値', category: '基礎', description: '通貨量とレートで決まる1pips変動の金額。', tip: '数量を決める前に計算しておく。' },
  { slug: 'lot-size', term: '最小取引単位', category: '基礎', description: '業者ごとに設定される最小ロット。', tip: '小さい単位が選べる口座は練習向き。' },
  { slug: 'economic-calendar', term: '経済指標カレンダー', category: '基礎', description: '重要指標の発表予定をまとめたもの。', tip: '発表前後はポジション量を抑える。' },
  { slug: 'fomc', term: 'FOMC', category: '基礎', description: '米国の金融政策を決める会合。政策金利の方向性を左右する。', tip: '開催日程と声明をチェック。' },
  { slug: 'cpi', term: 'CPI（消費者物価指数）', category: '基礎', description: '物価上昇率を示す指標。インフレの強さを測る。', tip: '金利見通しに影響するため要チェック。' },
  { slug: 'nfp', term: '米雇用統計', category: '基礎', description: '米国の雇用者数などを示す指標。注目度が高い。', tip: '発表前後は値動きが荒くなる。' },
  { slug: 'usd-jpy', term: 'USD/JPY', category: '基礎', description: '米ドルと日本円の通貨ペア。国内で最も取引される。', tip: 'ニュースも多く情報を追いやすい。' },
  { slug: 'eur-usd', term: 'EUR/USD', category: '基礎', description: 'ユーロと米ドルの通貨ペア。取引量が世界最大級。', tip: 'スプレッドが狭く学習に向く。' },
  { slug: 'lot-risk', term: 'ポジションサイズ管理', category: 'リスク', description: '資金に対して適切な取引数量を決めること。', tip: '1回あたりの許容損失を決めて逆算する。' },
  { slug: 'drawdown', term: 'ドローダウン', category: 'リスク', description: '資産残高がピークからどれだけ減ったかの指標。', tip: '許容範囲を決めて取引を見直す。' },
  { slug: 'demo', term: 'デモ口座', category: '基礎', description: '仮想資金で取引を練習できる口座。', tip: '操作と感情の練習に活用。' },
  { slug: 'tax', term: '税金・申告', category: 'コスト', description: '利益に対する課税と申告義務。', tip: '年間損益を記録し、必要に応じて確定申告。' },
  { slug: 'chart-type', term: 'チャート種類', category: '基礎', description: 'ローソク足・ラインチャートなど価格表示の種類。', tip: 'ローソク足は始値/高値/安値/終値が分かりやすい。' },
  { slug: 'support-resistance', term: 'サポート/レジスタンス', category: '基礎', description: '価格が止まりやすい水準。', tip: '意識されやすい価格帯では反転に注意。' },
  { slug: 'risk-reward', term: 'リスクリワード', category: 'リスク', description: '想定利益と損失の比率。', tip: '1:2など有利な比率を意識する。' }
];

const progressKey = 'fx-learning-progress';
const defaultProgress = { completedLessons: [], quizScores: {}, lastLesson: null };

function loadProgress() {
  try {
    const saved = localStorage.getItem(progressKey);
    return saved ? JSON.parse(saved) : { ...defaultProgress };
  } catch (e) {
    return { ...defaultProgress };
  }
}

function saveProgress(data) {
  localStorage.setItem(progressKey, JSON.stringify(data));
}

let progress = loadProgress();

function trackEvent(name, payload = {}) {
  console.log('[analytics]', name, payload);
}

function setActiveTab(view) {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.target === view);
  });
}

function setRoute(view, slug) {
  const hash = slug ? `#/${view}/${slug}` : `#/${view}`;
  if (location.hash !== hash) {
    location.hash = hash;
  } else {
    render(view, slug);
  }
}

function formatMinutes(minutes) {
  return `${minutes}分で読める`;
}

function homeView() {
  const nextLesson = lessons.find((l) => !progress.completedLessons.includes(l.slug)) || lessons[0];
  const completed = progress.completedLessons.length;
  const quizDone = Object.keys(progress.quizScores).length;
  return `
    <section class="section">
      <h2>続きから</h2>
      <div class="card">
        <p class="meta">未完了のレッスン</p>
        <h3>${nextLesson.title}</h3>
        <p class="meta">${formatMinutes(nextLesson.minutes)} / ${nextLesson.category}</p>
        <div class="button-row">
          <button class="button" data-action="open-lesson" data-slug="${nextLesson.slug}">読む</button>
          <button class="button ghost" data-action="open-quiz" data-slug="${nextLesson.slug}">3問クイズ</button>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>今日の1分レッスン</h2>
      <div class="card-grid">
        ${lessons.slice(0,3).map((lesson) => `
          <article class="card">
            <div class="badges"><span class="tag">${lesson.category}</span></div>
            <h3>${lesson.title}</h3>
            <p class="meta">${formatMinutes(lesson.minutes)}・更新日 ${lesson.updated}</p>
            <p>${lesson.summary}</p>
            <div class="button-row">
              <button class="button secondary" data-action="open-lesson" data-slug="${lesson.slug}">読む</button>
              <button class="button ghost" data-action="open-quiz" data-slug="${lesson.slug}">クイズ</button>
            </div>
          </article>`).join('')}
      </div>
    </section>
    <section class="section">
      <h2>学習の進捗</h2>
      <p class="small">レッスン完了 ${completed}/10 ・ クイズ完了 ${quizDone}/10</p>
      <div class="progress-bar"><span style="width:${(completed/lessons.length)*100}%"></span></div>
      <div class="button-row" style="margin-top:10px;">
        <button class="button" data-action="open-learn">学ぶ一覧へ</button>
        <button class="button secondary" data-action="open-glossary">用語で復習</button>
      </div>
    </section>
    <section class="section">
      <h2>口座開設を検討する</h2>
      <p class="small">まずは情報収集から。キャンペーン比較やサポート体制をチェック。</p>
      <button class="button" data-action="cta-open-account">口座開設サイトへ</button>
    </section>
  `;
}

function learnView() {
  const categories = ['すべて', ...new Set(lessons.map((l) => l.category))];
  return `
    <section class="section">
      <div class="search-box">
        <select id="filter-category">
          ${categories.map((c) => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="list" id="lesson-list">
        ${lessons.map(renderLessonCard).join('')}
      </div>
    </section>
  `;
}

function renderLessonCard(lesson) {
  const done = progress.completedLessons.includes(lesson.slug);
  return `
    <article class="list-item" data-category="${lesson.category}" data-title="${lesson.title}">
      <div class="badges">
        <span class="tag">${lesson.category}</span>
        ${done ? '<span class="status">完了</span>' : ''}
      </div>
      <h4>${lesson.title}</h4>
      <p class="small">${formatMinutes(lesson.minutes)}・更新日 ${lesson.updated}</p>
      <p>${lesson.summary}</p>
      <div class="button-row">
        <button class="button" data-action="open-lesson" data-slug="${lesson.slug}">詳細</button>
        <button class="button secondary" data-action="open-quiz" data-slug="${lesson.slug}">クイズ</button>
      </div>
    </article>
  `;
}

function lessonDetailView(slug) {
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return '<p>レッスンが見つかりませんでした。</p>';
  const done = progress.completedLessons.includes(slug);
  return `
    <section class="section">
      <div class="badges"><span class="tag">${lesson.category}</span></div>
      <h2>${lesson.title}</h2>
      <p class="small">${formatMinutes(lesson.minutes)}・更新日 ${lesson.updated}</p>
      ${lesson.content.map((p) => `<p>${p}</p>`).join('')}
      <div class="section" style="margin-top:12px;">
        <h3>重要ポイント</h3>
        <ul>
          ${lesson.points.map((p) => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="button-row">
        <button class="button" data-action="mark-complete" data-slug="${slug}">${done ? '完了済み' : '読了して完了'}</button>
        <button class="button ghost" data-action="open-quiz" data-slug="${slug}">3問クイズへ</button>
      </div>
      <div class="section" style="margin-top:12px; background:#f8fbfd; border:1px solid #dce7ee;">
        <h3>口座開設を検討する</h3>
        <p>キャンペーンやサポート体制を比較し、安心できる業者を選びましょう。</p>
        <button class="button" data-action="cta-open-account" data-placement="lesson_footer">資料をみる</button>
      </div>
    </section>
  `;
}

function quizListView() {
  return `
    <section class="section">
      <h2>クイズ一覧</h2>
      <div class="list">
        ${lessons.map((lesson) => {
          const score = progress.quizScores[lesson.slug];
          return `
            <article class="list-item">
              <div class="badges"><span class="tag">${lesson.category}</span></div>
              <h4>${lesson.title}</h4>
              <p class="small">${lesson.quiz.length}問 / ${formatMinutes(lesson.minutes)}</p>
              ${score !== undefined ? `<p class="status">スコア ${score}/${lesson.quiz.length}</p>` : ''}
              <div class="button-row">
                <button class="button" data-action="open-quiz" data-slug="${lesson.slug}">クイズを受ける</button>
                <button class="button ghost" data-action="open-lesson" data-slug="${lesson.slug}">レッスンへ</button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function quizDetailView(slug) {
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return '<p>クイズが見つかりませんでした。</p>';
  return `
    <section class="section">
      <h2>${lesson.title}のクイズ</h2>
      ${lesson.quiz.map((q, idx) => `
        <div class="quiz-question">
          <p><strong>Q${idx + 1}. ${q.q}</strong></p>
          <div class="choices">
            ${q.choices.map((choice, cIdx) => `
              <label>
                <input type="radio" name="q${idx}" value="${cIdx}"> ${choice}
              </label>
            `).join('')}
          </div>
          <div class="explain small" data-answer="${q.answerIndex}" style="display:none; margin-top:6px;">${q.explain}</div>
        </div>
      `).join('')}
      <div class="button-row" style="margin-top:12px;">
        <button class="button" data-action="submit-quiz" data-slug="${slug}">採点する</button>
        <button class="button secondary" data-action="open-lesson" data-slug="${slug}">レッスンに戻る</button>
      </div>
      <div id="quiz-result"></div>
    </section>
  `;
}

function glossaryView() {
  const categories = ['すべて', ...new Set(glossary.map((g) => g.category))];
  return `
    <section class="section">
      <h2>用語辞典</h2>
      <div class="search-box">
        <input id="search-term" type="search" placeholder="用語を検索" aria-label="用語検索">
        <select id="glossary-category">
          ${categories.map((c) => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="list" id="glossary-list">
        ${glossary.map(renderGlossaryItem).join('')}
      </div>
    </section>
  `;
}

function renderGlossaryItem(item) {
  return `
    <article class="list-item" data-category="${item.category}" data-term="${item.term}">
      <div class="badges"><span class="tag">${item.category}</span></div>
      <h4>${item.term}</h4>
      <p>${item.description}</p>
      <div class="button-row">
        <button class="button ghost" data-action="open-glossary-detail" data-slug="${item.slug}">詳細</button>
      </div>
    </article>
  `;
}

function glossaryDetailView(slug) {
  const item = glossary.find((g) => g.slug === slug);
  if (!item) return '<p>用語が見つかりませんでした。</p>';
  return `
    <section class="section">
      <div class="badges"><span class="tag">${item.category}</span></div>
      <h2>${item.term}</h2>
      <p>${item.description}</p>
      <p class="small">ワンポイント：${item.tip}</p>
      <div class="button-row">
        <button class="button" data-action="open-glossary">一覧に戻る</button>
        <button class="button ghost" data-action="open-learn">レッスンを探す</button>
      </div>
    </section>
  `;
}

function meView() {
  const completed = lessons.filter((l) => progress.completedLessons.includes(l.slug));
  const totalQuiz = Object.entries(progress.quizScores);
  const completionRate = Math.round((completed.length / lessons.length) * 100);
  return `
    <section class="section">
      <h2>進捗サマリー</h2>
      <p class="small">レッスン完了 ${completed.length}/${lessons.length} ・ クイズ完了 ${totalQuiz.length}/${lessons.length}</p>
      <div class="progress-bar"><span style="width:${completionRate}%"></span></div>
      <div class="badges" style="margin-top:10px;">
        ${completionRate >= 50 ? '<span class="tag">基礎ハーフ達成</span>' : ''}
        ${completionRate === 100 ? '<span class="tag">全レッスン完了</span>' : ''}
      </div>
    </section>
    <section class="section">
      <h2>完了レッスン</h2>
      ${completed.length === 0 ? '<p class="small">まだ完了したレッスンはありません。</p>' : ''}
      <ul>
        ${completed.map((l) => `<li>${l.title}</li>`).join('')}
      </ul>
    </section>
    <section class="section">
      <h2>クイズ履歴</h2>
      ${totalQuiz.length === 0 ? '<p class="small">まだクイズは未受験です。</p>' : ''}
      <ul>
        ${totalQuiz.map(([slug, score]) => {
          const lesson = lessons.find((l) => l.slug === slug);
          return `<li>${lesson ? lesson.title : slug}：${score}/${lesson ? lesson.quiz.length : 3} 点</li>`;
        }).join('')}
      </ul>
    </section>
  `;
}

function simplePage(title, body) {
  return `
    <section class="section">
      <h2>${title}</h2>
      ${body.map((p) => `<p>${p}</p>`).join('')}
    </section>
  `;
}

function aboutView() {
  return simplePage('運営者情報', [
    'FX学習ミニアプリは初心者が安心して基礎を学べるように制作されたコンテンツサイトです。',
    '運営：Example Studio / 連絡先：contact@example.com',
    '教材は教育目的であり、投資判断はご自身でお願いします。'
  ]);
}

function disclaimerView() {
  return simplePage('免責・リスク説明', [
    '本サイトは情報提供を目的としており、特定の投資行動を推奨するものではありません。',
    'FX取引は元本割れを含む損失リスクがあります。レバレッジ取引では損失が拡大する場合があります。',
    '最新の取引条件や手数料は必ず各サービス提供者の公式情報を確認してください。'
  ]);
}

function contactView() {
  return simplePage('お問い合わせ', [
    '内容に関するお問い合わせはメールでお受けしています。',
    'contact@example.com までご連絡ください。返信には数日いただく場合があります。'
  ]);
}

function privacyView() {
  return simplePage('プライバシーポリシー', [
    '本サイトでは閲覧体験向上のためアクセス解析を行う場合があります。取得したデータは匿名で保存され、第三者提供は行いません。',
    '外部リンク先で取得される情報については各サービスのポリシーをご確認ください。'
  ]);
}

function render(view, slug) {
  setActiveTab(view);
  let html = '';
  switch (view) {
    case 'home':
      html = homeView();
      break;
    case 'learn':
      html = slug ? lessonDetailView(slug) : learnView();
      break;
    case 'quiz':
      html = slug ? quizDetailView(slug) : quizListView();
      break;
    case 'glossary':
      html = slug ? glossaryDetailView(slug) : glossaryView();
      break;
    case 'me':
      html = meView();
      break;
    case 'about':
      html = aboutView();
      break;
    case 'disclaimer':
      html = disclaimerView();
      break;
    case 'contact':
      html = contactView();
      break;
    case 'privacy':
      html = privacyView();
      break;
    default:
      html = homeView();
  }
  document.getElementById('app').innerHTML = html + footerLinks();
  attachDynamicHandlers(view);
}

function footerLinks() {
  return `
    <div class="link-row" style="margin:16px 0;">
      <a href="#/about">運営者情報</a>
      <a href="#/disclaimer">免責・リスク</a>
      <a href="#/contact">問い合わせ</a>
      <a href="#/privacy">プライバシー</a>
    </div>
  `;
}

function attachDynamicHandlers(view) {
  document.querySelectorAll('[data-action]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const action = e.currentTarget.dataset.action;
      const slug = e.currentTarget.dataset.slug;
      if (action === 'open-lesson') setRoute('learn', slug);
      if (action === 'open-quiz') setRoute('quiz', slug);
      if (action === 'open-glossary') setRoute('glossary');
      if (action === 'open-glossary-detail') setRoute('glossary', slug);
      if (action === 'open-learn') setRoute('learn');
      if (action === 'open-home') setRoute('home');
      if (action === 'open-me') setRoute('me');
      if (action === 'mark-complete') markLessonComplete(slug);
      if (action === 'submit-quiz') gradeQuiz(slug);
      if (action === 'cta-open-account') handleCta(e.currentTarget.dataset.placement || 'home_banner');
    });
  });

  if (view === 'learn' && !location.hash.includes('/learn/')) {
    const select = document.getElementById('filter-category');
    select.addEventListener('change', () => filterLessons(select.value));
  }

  if (view === 'glossary' && !location.hash.includes('/glossary/')) {
    const termInput = document.getElementById('search-term');
    const category = document.getElementById('glossary-category');
    termInput.addEventListener('input', () => filterGlossary(termInput.value, category.value));
    category.addEventListener('change', () => filterGlossary(termInput.value, category.value));
  }
}

function markLessonComplete(slug) {
  if (!progress.completedLessons.includes(slug)) {
    progress.completedLessons.push(slug);
    progress.lastLesson = slug;
    saveProgress(progress);
    trackEvent('lesson_complete', { slug });
  }
  render('learn', slug);
}

function gradeQuiz(slug) {
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return;
  const answers = lesson.quiz.map((_, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
  if (answers.includes(null)) {
    alert('すべての設問を選択してください');
    return;
  }
  let score = 0;
  answers.forEach((ans, idx) => {
    const explain = document.querySelectorAll('.explain')[idx];
    explain.style.display = 'block';
    const isCorrect = ans === lesson.quiz[idx].answerIndex;
    if (isCorrect) score += 1;
  });
  progress.quizScores[slug] = score;
  progress.lastLesson = slug;
  saveProgress(progress);
  trackEvent('quiz_complete', { slug, score });
  const resultBox = document.getElementById('quiz-result');
  const shareText = `『${lesson.title}』のクイズで${score}/${lesson.quiz.length}点！ #FX学習`;
  resultBox.innerHTML = `
    <div class="result">
      <p>スコア：${score} / ${lesson.quiz.length}</p>
      <p>${score >= 2 ? 'Good！次のレッスンへ進みましょう。' : '復習してもう一度チャレンジしてみてください。'}</p>
      <div class="button-row">
        <button class="button" data-action="open-lesson" data-slug="${slug}">レッスンを復習</button>
        <button class="button ghost" id="share-result">結果をシェア</button>
        <button class="button secondary" data-action="open-glossary">用語を調べる</button>
      </div>
      ${score >= 2 ? '<p class="small">さらに踏み込むなら口座開設ガイドもチェック</p><button class="button" data-action="cta-open-account" data-placement="quiz_result">口座開設を検討する</button>' : ''}
    </div>
  `;
  const shareButton = document.getElementById('share-result');
  if (shareButton) {
    shareButton.addEventListener('click', () => shareResult(shareText));
  }
  attachDynamicHandlers('quiz');
}

function shareResult(text) {
  if (navigator.share) {
    navigator.share({ text, url: location.href }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert('結果をコピーしました！SNSに貼り付けてシェアしてください。');
  }
  trackEvent('quiz_share', { text });
}

function filterLessons(category) {
  const items = document.querySelectorAll('#lesson-list .list-item');
  items.forEach((item) => {
    const match = category === 'すべて' || item.dataset.category === category;
    item.style.display = match ? 'block' : 'none';
  });
}

function filterGlossary(keyword, category) {
  const items = document.querySelectorAll('#glossary-list .list-item');
  items.forEach((item) => {
    const term = item.dataset.term.toLowerCase();
    const cat = item.dataset.category;
    const matchKeyword = term.includes(keyword.toLowerCase());
    const matchCategory = category === 'すべて' || cat === category;
    item.style.display = matchKeyword && matchCategory ? 'block' : 'none';
  });
}

function handleRoute() {
  const hash = location.hash.replace('#/', '');
  if (!hash) {
    render('home');
    return;
  }
  const [view, slug] = hash.split('/');
  render(view, slug);
}

function handleCta(placement) {
  trackEvent('cta_open_account_click', { placement });
  alert('口座開設ガイドへ遷移（ダミーリンク）');
}

function init() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => setRoute(tab.dataset.target));
  });
  handleRoute();
}

init();
