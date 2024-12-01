import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from "next/head";
import styles from "@/styles/Education20241201.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>東京都で消費されるマクドナルドのハンバーガーの数</title>
        <meta name="description" content="東京都におけるマクドナルドのハンバーガー消費推定を解説します。" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>東京都で消費されるマクドナルドのハンバーガーの数の推定</h1>

        <section className={styles.section}>
          <p>
            東京都で1日に消費されるマクドナルドのハンバーガーの数を推定します。計算式は以下の通りです：
          </p>
          <pre className={styles.code}>
            (東京都のマクドナルドの店舗数) × (一店舗でのハンバーガーの平均個数)
          </pre>
          <p>
            ※体感ベース、大体二駅に一店舗くらいマクドナルドってあるよね。
            <br />
            ※ハンバーガーの売れる個数って平均1人につき1個じゃない？
          </p>
          <pre className={styles.code}>
            (東京都に存在する駅の数) × (1/2) × (一店舗の平均利用者数)
          </pre>
          <p>
            ※テイクアウトと店舗利用って大体1:2くらいだよね。
          </p>
          <pre className={styles.code}>
(東京都に存在する駅の数)×(1/2) × (一店舗の平均座席数)×(マクドナルドの平均稼働率)×(マクドナルドの平均回転率)×(3/2)
          </pre>
        </section>

        <section className={styles.section}>
          <h2>計算の詳細</h2>
          <p>
            <strong>1. 東京都に存在する駅の数の推定</strong>
            <br />
            平均すると一駅3分くらいで到着すると仮定。
            電車の平均時速を60kmとすると、駅間の距離は60*(3/60)=3km。
            東京都の面積（2194 km²）に対して等間隔に駅が並んでいると仮定すると：
          </p>
          <pre className={styles.code}>2194 / 3 ≒ 730個</pre>
          <p>
            <strong>2. 一店舗の平均座席数</strong>
            <br />
            差し当たり100席と仮定。
          </p>
          <p>
            <strong>3. マクドナルドの平均稼働率の推定</strong>
            <br />
            営業時間を7時から22時までとし、ピーク帯（11-13時、18-20時）は平均稼働率90%、
            その他の時間帯は30%と仮定。
          </p>
          <pre className={styles.code}>
            (90*4 + 30*11) / 15 ≒ 45%
          </pre>
          <p>
            <strong>4. マクドナルドの平均回転率</strong>
            <br />
            食事だけする人と作業する人を1:1と仮定。
            食事だけする人の平均滞在時間30分、作業する人の平均滞在時間120分：
          </p>
          <pre className={styles.code}>
            15 * 60 / 75 = 12回転
          </pre>
        </section>

        <section className={styles.section}>
          <h2>最終計算</h2>
          <pre className={styles.code}>
            730 × (1/2) × 100 × (0.45) × 12 × (3/2) ≒ 30万個
          </pre>
          <p>
            東京都の人口（1400万人）を考慮すると、1ヶ月半に1回程度の頻度でマクドナルドのハンバーガーを購入している計算になります。
          </p>
        </section>
      </main>
    </div>
  );
}
