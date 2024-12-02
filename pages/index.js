import { useEffect, useState } from "react";
import styles from "@/styles/renewal.module.css";
import Head from "next/head";
import Script from 'next/script';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

    const faqs = [
      {
          question: "ARLOGYとは何ですか？",
          answer: "ARLOGY【アルロジー】は、論理的突破力を育てることに特化した教室です。"
      },
      {
          question: "授業内容はどのようなものですか？",
          answer: "授業は水平思考、グループディスカッション、フェルミ推定など実践的なアプローチを取り入れたアウトプット型で行います。"
      },
      {
          question: "カリキュラムはどのようなものですか？",
          answer: "BasicクラスおよびAdvancedクラスは、1年から2年を目安に各ステージの学びを深め、次のクラスへと進むことが想定されています。一方で、Masterクラスは、成長に限界を設けない「青天井」の学びの場であり、自身の目標や探究心に応じて、長期的にスキルを磨き続けることができます。(※詳細はお問い合わせください！)"
      }
      ,
      {
          question: "入塾のタイミングは？",
          answer: "私たちのカリキュラムは、知識の量に依存せず、論理的突破力を駆使して解決する課題を中心に構成されています。そのため、どのタイミングからでもご参加いただけ、いつからでも取り組むことが可能です。"
      }
      ,
      {
          question: "講師はどのような人ですか？",
          answer: "私たちの講師陣は、論理的突破力を理解し、子供たちが具体的な道筋を切り開くためのサポートができる厳選された集団です。IT業界から映像業界に至るまで、幅広い業界出身の講師が集まり、それぞれの専門知識と経験を活かしながら、多角的な視点で子供たちの成長を支えています。"
      }
      ,
      {
          question: "開講日時はいつですか？",
          answer: "平日は16時から22時。休日は13時から20時までです。(※詳細はお問い合わせください！)"
      }
      ,
      {
          question: "開催場所はどこですか？",
          answer: <>〒1150045東京都北区赤羽1-11-4 アポー赤羽ビル5階 <br/>【赤羽駅から徒歩3分】</>
      }
      ,
      {
          question: "入塾テストはありますか？",
          answer: "無料体験授業時に、基本的な四則演算の確認と面談を行います。また無料体験授業では、興味のあるカリキュラム内容をご紹介し、実際に簡単な課題に取り組んでいただける機会もご用意しています。"
      }
      ,
      {
          question: "授業料の納入方法は？",
          answer: "授業料は、初月の授業時に現金でお支払いいただくか、初月授業前にお振込みいただく形となります。ご都合に合わせてお選びください。"
      }
      ,
      {
          question: "退塾したい場合どうすれば良いですか？",
          answer: "退塾をご希望の場合は次月授業の前にお申し出頂き、次回の授業料のお支払いをお控えいただければ問題ございません。お手続きについてご不明な点があれば、事前にご相談ください。"
      }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };


  const [showArrow, setShowArrow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // スクロール位置を管理する変数
  
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY; // 現在のスクロール位置を取得
      setScrollPosition(currentPosition);
  
      if (currentPosition > 100) { // スクロール位置が100px以上の場合に矢印を表示
        setShowArrow(true);
      } else {
        setShowArrow(false); // スクロール位置が100px未満の場合に矢印を非表示
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <Head>
        <title>ARLOGY【アルロジー】未来を切り開く論理的突破力を。</title>
        <meta name="description" content="論理的突破力を育む学習塾”ARLOGY”" />
        <meta name="google-site-verification" content="-i2neSiW10E1IbIZvNV0K6GDNBl8StmH0uCfd-Zirig" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VBCX4GSZJ6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VBCX4GSZJ6');
        `}
      </Script>
    <div>
      {/* ナビゲーションバー */}
      <header className={styles.header}>
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <img 
        src="https://lh3.googleusercontent.com/d/18h1n-2KiEjcSf1T6XR_SzAtJkVstgiC8=s3000?authuser=0"
        alt="Google Drive Image"
        width="124" height="62" 
      /> 
    </div>
    <ul className={styles.navItems}>
            <li>
                <a href="/" className={styles.orangeLink}>TOP</a>
            </li>
            <li>
                <a href="/details/idea">理念</a>
            </li>
            <li>
                <a href="/details/price">料金</a>
            </li>
            <li>
                <a href="/details/contact">お問い合わせ</a>
            </li>
        </ul>
  </nav>
</header>

      {/* ヒーローセクション */}
<section id="hero" className={styles.hero}>
  <div className={styles.heroContent}>
    {"日本で一番\n生徒が発言する塾\nARLOGY".split("").map((char, index) => (
      char === "\n" ? (
        <br key={index} /> /* 改行文字の場合は <br> に置き換え */
      ) : (
        <span key={index} className={styles.heroChar}>
          {char}
        </span>
      )
    ))}
  </div>
</section>

      {/* 特徴セクション */}
      <section id="about" className={`${styles.section} ${styles.fadeIn}`}>
        <h2>ARLOGYを試す<br/> チャンス！</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>冬季講習開催！</h3>
            <p>一月上旬から二月上旬にかけてアルロジーの教室で行われる冬季無料体験授業です。<br/>
            ※詳細は近日中に公開※</p>
          </div>
          <div className={styles.feature}>
            <h3>無料体験授業実施中！</h3>
            <p>当教室でアルロジーの体験授業と説明を受けることができます。<br/>※お子様のご家庭やお近くの喫茶店での実施も可能です。
            </p>
          </div>
        </div>
      </section>

      {/* 新しいセクション */}
<section id="active-learning" className={`${styles.section} ${styles.fadeIn}`}>
  <div className={styles.highlightText}>
    <p>当塾では <span className={styles.highlight}>考える力</span> だけでは無く</p>
    <p><span className={styles.highlight}>言語化能力</span> や <span className={styles.highlight}>行動力</span> を伸ばす</p>
    <p className={styles.mainHighlight}>アクティブラーニング</p>
    <p>に重きを置くカリキュラムで<br/>お子様の成績を</p>
    <p className={styles.mainHighlight}>伸ばします！！！</p>
    <p><span className={styles.highlight}>思考</span>→<span className={styles.highlight}>行動</span>→<span className={styles.highlight}>発見</span>というサイクルを全ての授業に組み込んでおります。<br/>

    <img 
            src="https://lh3.googleusercontent.com/d/1MZp4VRg6zpjP59vzKUVr0OIlmVd4ZR7U=s1000?authuser=0"
            alt="Google Drive Image"
            width="300" height="200" 
          /> 

    <br/>これにより<br/></p>
    <p className={styles.mainHighlight1}>価値のある<br/>アクティブラーニング</p>
    <br/>
    <p>をお子様に提供することができます。</p>
    <p>現代の詰め込み教育だけでは培えない能力を、培うことができます!!!
    </p>
    {/* <a href="#curriculum-details" className={styles.curriculumLink}>
      思考・発見・行動サイクル詳細はこちら
    </a> */}
  </div>
</section>

<section id="concerns" className={`${styles.section} ${styles.concerns} ${styles.fadeIn}`}>
  <h2>こんなお悩みありませんか？</h2>
  <div className={styles.concernLabelContainer}>
    <span className={styles.concernLabel}>\お悩み1/</span>
    </div>
    <div className={styles.concernContainer}>
  <div className={styles.concernHeader}>
    勉強のモチベーションが<br/>上がらない。。。
  </div>
</div>
<div className={styles.concernItem}>
  <div className={styles.concernBody}>
    <br/>
    <p className={styles.highlight}>
      現実にリンクさせた問題でお子様にワクワクを！
    </p>
    <p>
      「勉強って何のためにやるの？」という誰もが一度は持ったことのある疑問。
      勉強が社会でどのように活かされるか、アルロジーの授業を通して実感することで、
      学業に対して意欲的になっていきます。
    </p>
  </div>
</div><div className={styles.concernLabelContainer}>
    <span className={styles.concernLabel}>\お悩み2/</span>
    </div>
    <div className={styles.concernContainer}>
  <div className={styles.concernHeader}>
    自分の意見を伝える力を<br/>身につけてほしい。。。
  </div>
</div>
<div className={styles.concernItem}>
  <div className={styles.concernBody}>
    <br/>
    <p className={styles.highlight}>
      全授業に自分の言葉で発表する時間があります！
    </p>
    <p>
      アルロジーは自分の力で考え、その意見を先生や他の生徒に伝えるプロセスを大切にしています。
      課題を解決する際に常に意見交換や発表の場を設けることで、発信力とコミュニケーション能力を身につけていきます。
    </p>
  </div>
</div>
<div className={styles.concernLabelContainer}>
    <span className={styles.concernLabel}>\お悩み3/</span>
    </div>
    <div className={styles.concernContainer}>
  <div className={styles.concernHeader}>
    自ら答えを導き出す力を<br/>伸ばしたい。。。
  </div>
</div>
<div className={styles.concernItem}>
  <div className={styles.concernBody}>
    <br/>
    <p className={styles.highlight}>
      生徒がどこで躓いたかを授業毎に検証します！
    </p>
    <p>
      ARLOGYでは、問題に取り組みながら思考の過程を、授業終わりには1日の振り返りを生徒に書かせて提出させます。
      生徒の思考のつまずきと、授業への姿勢を明確にすることで、講師陣が成長への指針を的確にサポートします。
    </p>
  </div>
</div>
  <div className={styles.highlightText}>
  <a href="/details/curriculum" className={styles.curriculumLink}>
      カリキュラム全体図はこちら
    </a>
    </div>
</section>
<section id="class-info" className={`${styles.section} ${styles.classInfo} ${styles.fadeIn}`}>
  <h2>クラス案内</h2>
  <div className={styles.classList}>
    <div className={styles.classItem}>
      <div className={styles.classHeader} style={{ backgroundColor: "#B85C38" }}>
        Basicクラス<br/>※小学三~六年生対象
      </div>
      <div className={styles.classContent}>
        <p>
        アルロジーの小学校3年生から6年生が対象のBasicクラスでは、論理的に考えることの楽しさを体感しながら、思考力の土台を身につけていきます。また、日常に紐づいたトピックを扱い、仲間とのコミュニケーションを交えて取り組むことで、世の中の見え方が広がる第一歩を踏み出していきます。
        </p>
        <a href="/detailsnew/basic" className={styles.classLink}>
          小学生向けBasicコース詳細 →
        </a>
      </div>
    </div>
    <div className={styles.classItem}>
      <div className={styles.classHeader} style={{ backgroundColor: "#22543D" }}>
        Advancedクラス<br/>※中学生対象
      </div>
      <div className={styles.classContent}>
        <p>
        アルロジーの中学校1年生から3年生が対象のAdvancedクラスでは、社会的なトピックを扱い、将来に通用する論理的思考力の獲得を目指します。また、グループ課題を通じ、チームワークを重んじた建設的なやり取りを意識し、より実践的なコミュニケーション能力を身につけることを目指します。
        </p>
        <a href="/detailsnew/advanced" className={styles.classLink}>
          中学生向けAdvancedクラス詳細 →
        </a>
      </div>
    </div>
    <div className={styles.classItem}>
      <div className={styles.classHeader} style={{ backgroundColor: "#B63940" }}>
        Masterクラス<br/>※高校生対象
      </div>
      <div className={styles.classContent}>
        <p>
        アルロジーの高校1年生から高校3年生が対象のMasterクラスでは、各々の生徒の個人的な将来の目標・ビジョンを設定し、それらを具現化するためにはどういうプロセスを踏んでいけば実現できるかを考え、実行できるような能力を身につけるのが目標です。Masterクラスのみ、生徒が全授業のトピックをアルロジー側に提案できるサジェストカリキュラムを取り入れているのが特徴です。
        </p>
        <a href="/detailsnew/master" className={styles.classLink}>
          高校生向けMasterクラス詳細 →
        </a>
      </div>
    </div>
  </div>
</section>

<section id="free-consultation" className={`${styles.section} ${styles.freeConsultation} ${styles.fadeIn}`}>
  <h2>無料体験授業の流れ</h2>
  <div className={styles.steps}>
    <div className={styles.step}>
      <div className={styles.stepNumber} style={{ backgroundColor: "#B85C38" }}>1</div>
      <div className={styles.stepContent}>
        <h3>保護者様にアルロジーに関しての疑問点などを確認</h3>
        <ul>
          <li>アルロジーに関しての疑問点</li>
          <li>お子様の教育に関してのお悩み</li>
          <li>アルロジーに関して期待すること</li>
        </ul>
        <p>以上について、保護者様にお伺いいたします。</p>
      </div>
    </div>
    <div className={styles.step}>
      <div className={styles.stepNumber} style={{ backgroundColor: "#6B2C3E" }}>2</div>
      <div className={styles.stepContent}>
        <h3>アルロジーに関して保護者様に説明</h3>
        <ul>
          <li>アルロジーの教育指針</li>
          <li>クラス別カリキュラムの概要</li>
          <li>コース別料金プラン</li>
          <li>保護者様の疑問点に対しての回答</li>
        </ul>
        <p>以上について、保護者様に説明させて頂きます。</p>
      </div>
    </div>
    <div className={styles.step}>
      <div className={styles.stepNumber} style={{ backgroundColor: "#22543D" }}>3</div>
      <div className={styles.stepContent}>
        <h3>無料体験授業の実施</h3>
        <ul>
          <li>アウトプット形式の授業を体感</li>
          <li>授業内容の確認</li>
          <li>講師とのやり取りを確認</li>
        </ul>
        <p>模擬形式の授業を体験して、その有用性を実感して頂きます。</p>
      </div>
    </div>
    <div className={styles.step}>
      <div className={styles.stepNumber} style={{ backgroundColor: "#D17A22" }}>4</div>
      <div className={styles.stepContent}>
        <h3>今後の流れについて</h3>
        <ul>
          <li>体験授業を終えた上での質疑応答</li>
          <li>入塾時期の決定</li>
          <li>入塾後の流れを説明</li>
        </ul>
        <p>改めて体験授業の内容を含めた疑問点に対して回答し。入塾からその後までの流れを説明させて頂きます。</p>
      </div>
    </div>
    <div className={styles.highlightText}>
  <a href="/details/contact" className={styles.curriculumLink}>
      無料体験相談会の<br/>お申し込みはこちら
    </a>
    </div>
  </div>
  
</section>
      {/* 動画セクション */}
      <section id="video" className={`${styles.section} ${styles.fadeIn}`}>
  <h2>ARLOGY<br />紹介動画</h2>
  <div className={styles.videoWrapper}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/T3xgq-Erac0"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <p>
    ARLOGYは日本で一番生徒が話す機会を設ける塾です。圧倒的に地頭力が上がる授業を提供しています！
  </p>
</section>

      {/* <section id="testimonials" className={`${styles.section} ${styles.fadeIn}`}>
        <h2>生徒の声</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <p>「自分のペースで進められてよかった！」</p>
            <span>- 山田 太郎</span>
          </div>
          <div className={styles.testimonial}>
            <p>「授業がない分、自学自習が身に付きました！」</p>
            <span>- 佐藤 花子</span>
          </div>
        </div>
      </section> */}

 {/* FAQ */}
 <section id="video" className={`${styles.section} ${styles.fadeIn}`}>
 <h2>よくあるご質問</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className={styles.faqIcon}>
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
</section>
{/* 無料体験授業リンクアイコン */}
{showArrow && (
<div className={styles.fixedContainer}>
            <div className={styles.fixedItem}>
                <a href="/details/contact">💬<br/>無<br/>料<br/>体<br/>験<br/>相<br/>談</a>
            </div>
        </div>
           )}
      {/* フッター */}
      <footer className={styles.footer}>
        <p>© 2024 ARLOGY</p>
        <a href='/details/sale'>「体験授業、通常教室」特定商取引法に基づく表記</a>
      <a href='/details/policy'>「ARLOGY」プライバシーポリシー</a>
      </footer>
    </div>
    </>
  );
}