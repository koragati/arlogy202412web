import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "@/styles/Education.module.css";

export default function Pricing() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollToBottom1 = () => {
    router.push('/');
  };

  const faqs = [
    {
      question: "ヒント1",
      answer: "救急車を呼んだ時に5分で来てくれると仮定してみよう！"
    },
    {
      question: "ヒント２",
      answer: "救急車の平均スピードを40km/hと仮定すると、1台の救急車がカバーできる範囲が算出できるよ！"
    },
    {
      question: "ヒント３",
      answer: "円で四角形をカバーするためにはどうすれば良いか考えてみよう！"
    },
    {
      question: "合格解答例",
      answer: (
        <>
          1.東京都の面積は2194平方キロメートルなので差し当たり24km ✖️ 96kmの長方形と仮定する。<br />
          2.救急車を呼んだ時に5分で現場に救急車が到着し、救急車の平均スピードを40km/hと仮定する。<br />
          40[km/h] ✖️ 5/60[時間] ≒ 3[km]より<br />
          下の図のように1台の救急車がカバーできる面積は3✖️3✖️3.14≒27[平方キロメートル]と考えることができる。<br />
          <img 
            src="https://lh3.googleusercontent.com/d/1vR-k8IstH0nlReavvj1Qkvfi98PtHJkX=s1000?authuser=0"
            alt="Google Drive Image"
            width="150" height="150"
          /> <br/>
          また円で四角形をカバーする場合下の図のようになっていることが理想である。<br/>
          <img 
            src="https://lh3.googleusercontent.com/d/1fY_oPwX_1y6SUoZxJ05fsid3-9XVHxkz=s1000?authuser=0"
            alt="Google Drive Image"
            width="150" height="150"
          /> <br/>
          下の図のように12km ✖️ 12kmの正方形を東京都に埋め込むと考えると。<br/>
          <img 
            src="https://lh3.googleusercontent.com/d/1BMAqyNrooerr1fd0vMxuPIkLG-16qU_y=s1000?authuser=0"
            alt="Google Drive Image"
            width="280" height="150"
          /> <br/>

          16個の正方形が埋め込めるとわかる。<br/>
          １つの正方形に5台必要なので,16 ✖️ 5 = 80台となる。<br/>
          また正方形と正方形の間に下の図のように円を追加し、空白をカバーすると考えると、8 ✖️ 8 + 6 = 70台。<br/>
          <img 
            src="https://lh3.googleusercontent.com/d/1G_KyuUnuEnddgporaMBm7ZdwgeaBscPm=s1000?authuser=0"
            alt="Google Drive Image"
            width="280" height="150"
          /> <br/>
          よって、都内の救急車の数は70+80=150台と推定できる。<br/><br/>
          
          
          実際の台数は251台なので、良いフェルミ推定だとみなせる。<br/>
          誤差を埋める方法としては、「稼働している救急車のみを考慮するのではなく、待機している救急車を考慮する」などが考えられる。<br/><br/><br/>
          これはARLOGYの講師に10分で解いてもらった解答例です。<br/>
          ARLOGYではこのような、答えの見えづらい抽象的なお題に対しての多角的な視点を獲得することができます。<br/>
          少しでも「面白いな」「興味あるかも」と思ってもらえたら嬉しいです。<br/>
          少しでも当てはまった方！ぜひ無料体験授業で、お待ちしております。<br/>
        </>
      )
    },
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div><br/>
        <div id="qanda" className={styles.faqSection}>
        <h2>問. 東京都にある救急車の台数は何台だと思いますか？</h2>
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
           <h2>応用問題. 救急車出動にかかる東京都の年間の費用を推定しなさい。</h2>
           <img 
            src="https://lh3.googleusercontent.com/d/1MxzwqLwCPp5gfLtpDwfkVlJN_T437jTv=s500?authuser=0"
            alt="Google Drive Image"
            width="150" height="150"
          />
        </div>
      </div>

      <div className={styles.scrollArrow} onClick={scrollToBottom1}>
        <div>ホームページ<br/>TOPへ</div>
      </div>
    </div>
  );
}
