import React from 'react';
import styles from "@/styles/Price.module.css";
import { useRouter } from 'next/router';

export default function Pricing() {
  const plans = [
    {
      title: 'Basicクラス',
      price1: (
        <>
          <del>¥6,500/月</del> → <span className={styles.enfprice}>¥5,000/月</span><br/>(エントリーコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price2: (
        <>
          <del>¥9,500/月</del> → <span className={styles.enfprice}>¥7,500/月 </span><br/>(スタンダードコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price3: (
        <>
          <span className={styles.enfprice1}>¥15,000/月 </span><br/>(プレミアムコース)<br/>
        </>
      ),
      description: '対象年齢 小４〜小６',
      features: ['基本的な思考力を身につけ、あらゆる事象に対しての気付きを獲得しながら、他者とのコミュニケーションにおいての論理性を主体的に身につける。'],
    },
    {
      title: 'Advancedクラス',
      price1: (
        <>
          <del>¥7,500/月</del> →<span className={styles.enfprice}>¥5,000/月</span> <br/>(エントリーコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price2: (
        <>
          <del>¥10,500/月</del> → <span className={styles.enfprice}>¥7,500/月 </span> <br/>(スタンダードコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price3: (
        <>
        <span className={styles.enfprice1}>¥16,000/月</span> <br/>(プレミアムコース)<br/>
        </>
      ),
      description: '対象年齢 中１〜中３',
      features: ['より実践的な課題に取り組み、深いレベルでの論理的思考と多角的な視点を獲得し、チームワークを意識しながら社会的なコミュニケーション能力を身につける。'],
    },
    {
      title: 'Masterクラス',
      price1: (
        <>
          <del>¥8,500/月</del> → <span className={styles.enfprice}>¥5,000/月</span><br/> (エントリーコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price2:(
        <>
          <del>¥11,500/月</del> → <span className={styles.enfprice}>¥7,500/月 </span><br/> (スタンダードコース)<br/>
          <t className={styles.limitedOffer}>先着20名様限定!</t>
        </>
      ),
      price3:(
        <>
            <span className={styles.enfprice1}>¥17,000/月</span><br/> (プレミアムコース)<br/>
        </>
      ),
      description: '対象年齢 高１〜高３',
      features: ['社会に出てから成し遂げたいことの目標を設定し、具体的な道筋を切り開く論理的突破力を身につける。'],
    },
  ];

  const router = useRouter();

  const ChangePage = () => {
    router.push('/details/contact');
  };
  const scrollToBottom1 = () => {
    router.push('/');
  };
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
          <li>
                <a href="/">TOP</a>
            </li>
            <li>
                <a href="/details/idea">理念</a>
            </li>
            <li>
                <a href="/details/price" className={styles.orangeLink}>料金</a>
            </li>
            <li>
                <a href="/details/contact">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </header>
    <div className={styles.pageContainer}>
      <div className={styles.promoBanner}>
      <p>期間限定</p><p className={styles.limit}>※入塾料<del>¥10,000</del>　→無料</p>
    </div>
      <h1 className={styles.heading}>通常教室料金プラン</h1>
    <a href='/details/sale'>「体験授業、通常教室」特定商取引法に基づく表記</a><br/>
      <h5 className={styles.heading1}>【税込表記】</h5>
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th className={styles.red}> </th>
            <th className={styles.red}>エントリーコース</th>
            <th className={styles.red}>スタンダードコース</th>
            <th className={styles.red}>プレミアムコース</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th  className={styles.red}>授業分数</th>
            <td>60分</td>
            <td>90分</td>
            <td>90分×週2回</td>
          </tr>
          <tr>
            <th className={styles.red}>プラス学習</th>
            <td>✕</td>
            <td>◯</td>
            <td>◯</td>
          </tr>
          <tr>
            <th  className={styles.red}>プログラミング学習</th>
            <td>✕</td>
            <td>✕</td>
            <td>◯</td>
          </tr>
          <tr>
            <th  className={styles.red}>フィードバック</th>
            <td>月に一回のフィードバック</td>
            <td>授業毎の綿密なフィードバック</td>
            <td>授業毎の綿密なフィードバック</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.cardsContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h2>{plan.title}</h2>
            <p className={styles.description}>{plan.description}</p>
            <p className={styles.price}>{plan.price1}</p>
            <p className={styles.price}>{plan.price2}</p>
            <p className={styles.price}>{plan.price3}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={styles.button} onClick={ChangePage}>
              無料体験授業等の<br />お問い合わせはこちら
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.fixedContainer}>
            <div className={styles.fixedItem}>
                <a href="/details/contact">💬<br/>無<br/>料<br/>体<br/>験<br/>相<br/>談</a>
            </div>
        </div>
    <a href="/" className={styles.floatingButton}>
        TOPへ<br/>戻る
      </a>
    </>
  );
}