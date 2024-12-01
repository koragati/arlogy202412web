import styles from "@/styles/contact.module.css";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfessionalRadioButton() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const router = useRouter();
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
                <a href="/details/idea"  >理念</a>
            </li>
            <li>
                <a href="/details/contact" className={styles.orangeLink}>お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </header>
    <div className={styles.main}>
    <h2>お問い合わせ</h2>
      <div className={styles.click}>
      <a href='https://lin.ee/d5frHDH' className={styles.linkButtonBlue}>
      LINEでのお問い合わせはこちらをクリック※おすすめ</a></div>
      <p>または以下のQRから公式LINEを追加してください。</p>
      <img 
            src="https://lh3.googleusercontent.com/d/14dO4x4ZkZlkPCs8k2dL5XaTbCoU9PBWt=s1000?authuser=0"
            alt="Google Drive Image"
            width="200" height="200"
          /> <br/>
          <div className={styles.click}>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfI3WFAlWJezQ0YNN69Ms_tD2Qd8NAGkm_g-ACV0NnCMCBqPw/viewform?vc=0&c=0&w=1&flr=0'
      className={styles.linkButtonBlue}>
      お電話またはメールでのお問い合わせはこちらをクリック</a></div>
      <p>Googleフォームのページに遷移します。<br/></p>

      <div className={styles.contact}>
      <p className={styles.blank}>※無料体験授業にお申し込みの方は、お申し込み前に以下をご一読の上、お申し込み下さい。</p>
      <div className={styles.enter}>
      <p>1,参加対象</p>
      <p>参加時点で小学校三年生〜高校三年生の方（下記を満たす場合その限りではありません。）</p>
      <p>ひらがなの読み書き、簡単な四則演算ができること、最後まで問題なく体験教室を受講することが必要です。</p>
      </div>
      <div className={styles.enter}>
      <p>2,内容</p>
      <p>推定所要時間:60分</p>
      <p>・当事業の説明（10分〜15分）</p>
      <p>・体験授業（30分〜40分）</p>
      <p>お子様と保護者様と講師での体験型授業を行います。</p>
      <p>・面談（5分〜10分）</p>
      <p>入塾に関するご質問やご相談をこの面談でお伺いします。</p>
      </div>
      <div className={styles.enter}>
      <p>3,体験料金</p>
      <p>無料</p>
      </div>
      <div className={styles.enter}>
      <p>4,場所</p>
      <p>〒1150045東京都北区赤羽1-11-4 アポー赤羽ビル5階 <br/>【赤羽駅から徒歩3分】
      <br/>※ご自宅またはその付近に出張も可能です！</p>
      </div>
      <div className={styles.enter}>
      <p>5,日時</p>
      <p>LINEまたはGoogleフォーム（その後のメールor電話のやり取り）にて日程を決定します。</p>
      <p>基本平日は16時から22時。休日は13時から22時までを想定しております。</p>
      </div>
      <div>
      <p>上記内容は申し込み後にもメールでお送り致します。</p>
      </div>
      <div className={styles.policy}>
      <a href='/details/sale'>「体験授業、通常教室」特定商取引法に基づく表記</a><br/>
      <a href='/details/policy'>「ARLOGY」プライバシーポリシー</a>
      </div>
      </div>
      {/* <div className={styles.time1}>
      <p>※無料体験授業は60分程度を想定しています。<br/>（当事業の説明10~15分、 保護者様と講師とお子様でのカリキュラム体験30~40分）</p>
    
      </div> */}
      
      <h1>無料体験授業までの流れ</h1>
    <div>
      {/* ラジオボタン部分 */}
      <div className={styles.radioGroup}>
        <label
          className={`${styles.radioButton} ${
            selectedOption === 'option1' ? styles.radioButtonChecked : ''
          }`}
        >
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            className={styles.radioInput}
          />
          LINEでお問い合わせの場合
        </label>
        <label
          className={`${styles.radioButton} ${
            selectedOption === 'option2' ? styles.radioButtonChecked : ''
          }`}
        >
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
            className={styles.radioInput}
          />
          お電話でお問い合わせの場合
        </label>
        <label
          className={`${styles.radioButton} ${
            selectedOption === 'option3' ? styles.radioButtonChecked : ''
          }`}
        >
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
            className={styles.radioInput}
          />
          メールでお問い合わせの場合
        </label>
      </div>
      <div className={styles.flowdescription}>
        {selectedOption === 'option1' && (
          <p>LINEにて無料体験授業の日時・場所決定<br/>
          ↓<br/>LINEにて当事業に関する不明点や質問を事前ヒアリング（希望制）
          <br/>↓<br/>
          無料体験授業当日</p>
        )}
        {selectedOption === 'option2' && (
          <p>
            お問い合わせフォームにお客様電話番号とお電話可能日時を記入 <br/>↓<br/>
            メールでお電話予定日時をリマインド <br/>↓<br/>
            お電話（5~10分を想定）にて無料体験授業の日時・場所決定 <br/>↓<br/>お電話（5~10分を想定）にて当事業に関する不明点や質問を事前ヒアリング（希望制）
            <br/>↓<br/>
            無料体験授業当日
          </p>
        )}
        {selectedOption === 'option3' && (
          <p>メールにて無料体験授業の日時・場所決定 <br/>↓<br/>メールにて当事業に関する不明点や質問を事前ヒアリング（希望制）
           <br/>↓<br/>
           無料体験授業当日</p>
        )}
      </div>
    </div>
    <div className={styles.scrollArrow} onClick={scrollToBottom1}>
              <div>TOPへ<br/>戻る</div>
            </div>
    </div>
    </>
  );
}