import Head from "next/head";
import styles from "@/styles/basic.module.css";

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Basic クラス 授業内容</title>
        </Head>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Basicクラス <br/>授業内容</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.content}>
            <h2 className={styles.contentHeading}>授業内容</h2>
            <p className={styles.contentParagraph}>
            Basicクラスが行うこととしては、観察問題・コンセンサスゲーム・メモリーツリーなどが挙げられます。
            </p>
            <article className={styles.article}>
              <h3 className={styles.articleTitle}>例：観察問題</h3>
              <h4 className={styles.articleSubheading}>概要</h4>
              <p className={styles.articleParagraph}>
              観察問題は、某有名私立中学の受験問題のお土産問題と呼ばれるものを基にした問題になります。今回はお題として、ネジとポータブルラジオを例に挙げます。
              </p>
              <h4 className={styles.articleSubheading}>目的</h4>
              <p className={styles.articleParagraph}>
              あらゆる事象に対しての観察眼と思考力、自分の考えをまとめて分かりやすく発表する発信力を養います。他の人の発表を聞くことで、傾聴力と多角的な思考を養います。
              </p>
              <ol className={styles.articleList}>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>①</h5>
    <p className={styles.listDescription}>
    数種類のネジを生徒に配ります。それらを手に取って観察してもらい、記入用紙に特徴や違いを書いてもらいます。このプロセスで普段当たり前に接しているものを改めて考え直すことで、見過ごしがちな事象に対しての観察眼と思考力を養います。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>②</h5>
    <p className={styles.listDescription}>
    ネジについて記入した特徴を皆の前で発表します。このプロセスでは、自分の考えたものを整理し、全員に内容が伝わるように発表する発信力を身につけます。他の生徒が発表しているタイミングでは、自分の視点には無かった意見を聞くことで思考の幅を広げつつ、傾聴力を養います。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>③</h5>
    <p className={styles.listDescription}>
    今まで出た意見を要素毎に分類して、まとめていきます。例えば、ネジの物質的特徴、フォルムの特徴、色の特徴、何に使えそうかというように分類していきます。生徒側から出ていなかった視点の意見を講師が発表します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>④</h5>
    <p className={styles.listDescription}>
    その後、ネジを用いたポータブルラジオに観察対象を移行していきます。ミクロからマクロに移行することによって、ネジが普段触れているものに近い機械の中で、どのような役割を担っているのかを認識していきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑤</h5>
    <p className={styles.listDescription}>
    同様の手順で発表を行い、その後一日の振り返りをしていきます。そこで気付いたことや、思いついたこと、考えたことをまとめていきます。また、自分の中で最大限お題としてやってみたい課題を提出していきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑥</h5>
    <p className={styles.listDescription}>
    アルロジー側は、一日の振り返りに対して次の授業までにフィードバックを行います。
    </p>
  </li>
</ol>
            </article>
          </section>
        </main>
      </div>
    );
  }