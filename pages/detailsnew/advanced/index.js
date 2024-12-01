import Head from "next/head";
import styles from "@/styles/basic.module.css";

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Advanced クラス 授業内容</title>
        </Head>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Advancedクラス <br/>授業内容</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.content}>
            <h2 className={styles.contentHeading}>授業内容</h2>
            <p className={styles.contentParagraph}>
            Advancedクラスが行うこととしては、水平思考・グループディスカッション・プレゼン・弁論などが挙げられます。
            </p>
            <article className={styles.article}>
              <h3 className={styles.articleTitle}>例：グループディスカッション</h3>
              <h4 className={styles.articleSubheading}>概要</h4>
              <p className={styles.articleParagraph}>
              グループディスカッションは、アルロジーの中で全クラスの根幹を担っている課題です。ディスカッションの形式に関しても、課題解決型・ディベート型・選択型・自由討論型など多岐にわたります。企業の就活などによって行われるグループディスカッションは、得意な役割をそれぞれが担いスタートすることが多いですが、アルロジーの場合、それぞれの役割をカリキュラムを通して一通り体験できることも特徴です。
              </p>
              <h4 className={styles.articleSubheading}>目的</h4>
              <p className={styles.articleParagraph}>
              社会的でマクロなトピックから、学校生活の中で疑問に感じるようなトピックまで幅広く取り扱います。日頃生徒が思考している内容を深めたり、接したことのない抽象的な問題に対して新たに向き合っていきます。それぞれのディスカッション形式に沿って対話をすることで論理的思考力を鍛えていきます。
　　　　　　　　　また、思考と対話のスピード感がある程度求められていくことで、実践的なコミュニケーション能力を身につけていきます。
              </p>
              <ol className={styles.articleList}>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>①</h5>
    <p className={styles.listDescription}>
    生徒を5人前後ごとのグループに割り振ります。ディスカッションのテーマと、それに準じた形式をアルロジー側が提示します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>②</h5>
    <p className={styles.listDescription}>
    それぞれの形式に沿って、まずはグループ内の役割を各々で割り振ります。その週以降は毎回違う役割が割り当てられるように分担しつつ、自分が得意な役割、苦手な役割を認識していきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>③</h5>
    <p className={styles.listDescription}>
    定められた時間内で、各チームの意見をまとめていきます。このプロセスでは役割に応じて求められる能力は異なっていきますが、基本的には課題に対する思考力、自分の考えを瞬時にチーム内に共有する言語化能力を鍛えていきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>④</h5>
    <p className={styles.listDescription}>
    各チームでまとめた意見をそれぞれ発表していきます。発表した意見を基にディスカッションの形式に沿って、課題を進めていきます。例えば、ディベート型であればその中でお互いの意見の良し悪しを発表していくという流れになっていきます。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑤</h5>
    <p className={styles.listDescription}>
    アルロジーの講師は全体の意見をまとめます。また、どちらのチームがどのような点で優れていて、どのような点が足りなかったかを発表します。また、両チームに足りなかった視点の意見をアルロジー講師が発表します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑥</h5>
    <p className={styles.listDescription}>
    生徒は一日の振り返りシートに役割の中で何ができて、何ができなかったかを記述します。また、次回以降同じ役割が回ってきた際にどのように今回の経験を活かすかを記述します。
    </p>
  </li>
  <li className={styles.articleListItem}>
    <h5 className={styles.listTitle}>⑦</h5>
    <p className={styles.listDescription}>
    翌週、アルロジー講師はフィードバックを書き加えた一日の振り返りシートを、生徒に返却します。
    </p>
  </li>
</ol>
            </article>
          </section>
        </main>
      </div>
    );
  }