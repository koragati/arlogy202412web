import styles from "@/styles/idea.module.css";

export default function AboutArlogy() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img 
              src="https://lh3.googleusercontent.com/d/18h1n-2KiEjcSf1T6XR_SzAtJkVstgiC8=s3000?authuser=0"
              alt="Google Drive Image"
              width="124" 
              height="62" 
            />
          </div>
          <ul className={styles.navItems}>
            <li><a href="/">TOP</a></li>
            <li><a href="/details/idea">理念</a></li>
            <li><a href="/details/contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <section className={`${styles.section} ${styles.intro}`}>
          <h2 className={styles.sectionTitle}>生き抜く力を育む</h2>
          <div className={styles.sectionContent}>
            <p>「AIが神になる？」 - なりません。</p>
            <p>「AIが人類を滅ぼす？」 - 滅ぼしません。</p>
            <p>
              AIが人間の仕事を全て肩代わりするという未来はありません。
              AIはコンピューターであり、コンピューターは計算機であり、計算機は計算しかできない。
            </p>
            <p>
              しかし、人間の仕事の多くがAIに代替される社会はすぐそこに迫っています。
              日本の詰め込み教育によって培われるものは、AIにとっては赤子の手をひねるようなものだからです。
            </p>
            <p>
              これから先、様々な業種のIT化・DX化が進んでいく世の中で、子供達が活躍するために必要な力はなにか？
              そして私たちに今できることは何か？
            </p>
            <p>
              「最先端のITに触れている私たちにしか見えていない世界を子供達にーーー」
              そんな強い想いから、ARLOGY【アルロジー】を立ち上げることを決めました。
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.list}`}>
          <h2 className={styles.sectionTitle}>ARLOGYとは？</h2>
          <div className={styles.sectionContent}>
            <p>ARLOGY【アルロジー】は、論理的突破力を鍛えることに特化した教室です。</p>
            <p>論理的突破力とは、以下の三つの要素に分解されます：</p>
            <h3>アクション</h3>
            <ul>
              <li>主体性 / 働きかけ力 / 実行力</li>
            </ul>
            <h3>シンキング</h3>
            <ul>
              <li>課題発見力 / 計画力 / 想像力</li>
            </ul>
            <h3>チームワーク</h3>
            <ul>
              <li>発信力 / 状況把握力 etc...</li>
            </ul>
            <p>
              授業は水平思考、グループディスカッション、フェルミ推定など、実践的なアプローチを取り入れたアウトプット型で行います。
            </p>
            <p>
              まず考える。そして行動に移す。その過程で考えるだけでは見つからなかった課題が明らかになります。
              さらに、1人では成し遂げられることに限界があることにも気づきます。
            </p>
            <p>
              だからこそ、同じ志を持つ仲間たちと協力し、力を合わせて目標を達成することが大切です。
              このプロセスを通じて、論理的突破力の獲得を目指します。
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.conclusion}`}>
          <h2 className={styles.sectionTitle}>最後に</h2>
          <div className={styles.sectionContent}>
            <p>私たちは正しい努力を積み重ねれば、誰もが天才と称される存在になれると確信しています。</p>
            <p>
              そのためには、勉強がもたらす成果や喜びをしっかりと理解し、
              そのモチベーションを育てることが重要です。
            </p>
            <p>
              しかし、こうした本質的な学びを提供する塾は数少なく、
              手軽に受講できるものではない現状です。
            </p>
            <p>この状況を変え、多くの人が等しく成長できる場を作りたいと考えています。</p>
          </div>
        </section>
      </div>
    </>
  );
}
