import Head from "next/head";
import styles from "@/styles/basic.module.css";

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Master クラス 授業内容</title>
        </Head>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Masterクラス <br/>授業内容</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.content}>
            <h2 className={styles.contentHeading}>授業内容</h2>
            <p className={styles.contentParagraph}>
            Masterクラスが行うこととしては、フェルミ推定・グループディスカッション・ケース面接・マーケティング分析などが挙げられます。
            </p>
            <h2 className={styles.contentHeading}>サジェストカリキュラムとは</h2>
            <p className={styles.contentParagraph}>
            サジェストカリキュラムとは、生徒が授業で扱うトピックをアルロジー側に提案できるシステムです。Masterクラスは、高校生という将来の進路決定を目前に控えたタイミングでアルロジーを受講する意義として、授業で取り扱うトピックもより各々の将来のビジョンと結びついた内容を取り込めるこの形式を採用しています。このシステムにより、生徒のビジョンを多角的な視点で考え直す機会になり、自分の将来へのプロセスをより現実的なものにしていきます。
            </p>
            <article className={styles.article}>
              <h3 className={styles.articleTitle}>例：マーケティング分析</h3>
              <h4 className={styles.articleSubheading}>概要</h4>
              <p className={styles.articleParagraph}>
              マーケティング分析は、身の回りにあるプロダクトがどのようなマーケティング戦略によって広まり、なぜ受容されているかを社会・文化・数値的な観点から分析します。一般的な企業で用いられるマーケティング分析は市場そのものを中心に分析して戦略を構築していきますが、アルロジーでは取り扱うプロダクトそれ自体を起点に、市場分析へと移行していきます。
ありとあらゆるプロダクトが溢れている現代において、マーケティングというのは非常に重要な役割を担っています。身の回りにあるものがなぜ今自分たちの手元にあり、影響を及ぼしているか様々な媒体の広告を対象に分析します。
              </p>
              <h4 className={styles.articleSubheading}>目的</h4>
              <p className={styles.articleParagraph}>
              プロダクト自体がどのように市場に広がっていくか、なぜそれが受け入れられているかを分析することによって、現代社会のあり方をより立体的に捉える視野・分析力・言語化能力を養います。プロダクトから市場の流れを順序立てて、多層的に分析することで、複雑な事象にも対応可能な論理的思考力を養います。
              </p>
              <ol className={styles.articleList}>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>①</h5>
    <p className={styles.listDescription}>
    分析するプロダクトをアルロジー側から提示します。この時、生徒側からサジェストカリキュラムによって提示されたトピックを扱うこともあります。
取り扱うプロダクトに関しては、食品・洋服・家電製品・サービス・アイドルグループ・映画・Youtuberなど多岐に渡ります。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>②</h5>
    <p className={styles.listDescription}>
    プロダクトとその広告について、個々人で分析する時間を設けます。
まずはプロダクト自体が、社会・文化の中でどういった立ち位置で、市場の中でどういった影響を持ち得るか、という点を多角的に分析します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>③</h5>
    <p className={styles.listDescription}>
    プロダクトの広告がどのような意図・戦略をもって作られているかを考察します。広告は何となく見た印象と、しっかりと観察眼をもって見るのとでは見え方が大きく異なります。そのどちらも踏まえたうえで、市場内でそのプロダクトが何を訴求しているのかを考えていきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>④</h5>
    <p className={styles.listDescription}>
    グループに分かれてもらい、各々の意見交換をスピーディーに行います。その後、広告としてより良い形が無いかをグループで模索し、案を出していきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑤</h5>
    <p className={styles.listDescription}>
    各々のグループで、最善と思われる広告を具体的に提示します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑥</h5>
    <p className={styles.listDescription}>
    アルロジー講師側は提案された広告案に関してのフィードバックを行います。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑦</h5>
    <p className={styles.listDescription}>
    生徒は一日の振り返りの中で何ができて、何ができなかったかを記述します。また、今回の分析を通じて変化した価値観などもあれば記述してもらいます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑧</h5>
    <p className={styles.listDescription}>
    翌週、アルロジー講師のフィードバックを書き加えた一日の振り返りを生徒に返却します。
    </p>
  </li>
</ol>
            </article>
          </section>
        </main>
        <div className={styles.fixedContainer}>
            <div className={styles.fixedItem}>
                <a href="/details/contact">💬<br/>無<br/>料<br/>体<br/>験<br/>相<br/>談</a>
            </div>
        </div>
      </div>
    );
  }