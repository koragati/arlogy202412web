import React from 'react';
import styles from "@/styles/Document.module.css";
import { useRouter } from 'next/router';

export default function Pricing() {
  

  const router = useRouter();
  const scrollToBottom1 = () => {
    router.push('/');
  };
  return (
    
    <div className={styles.container}>
        <h2>「ARLOGY【アルロジー】」<br/>プライバシーポリシー</h2>
        <p>ARLOGY（以下「当事業者」といいます）は、
          当事業者の運営するサービス「ARLOGY【アルロジー】」（体験授業及び通常教室を含みます）
          （以下「本ポリシー」といいます）を定めます。<br/>
          当事業者は、本サービスの受講者（以下「受講者」といいます）及び契約者
          （受講者の保護者）（以下「契約者」といい、「受講者」と「契約者」を総称して以下「利用者」といいます）に
          本サービスを提供する際、本サービス運営のための必要な範囲で、本ポリシーに基づき
          利用者の個人情報等を取得することができるものとし、個人情報の保護に関する法律（以下「個人情報保護法」といいます）
          その他の関連法令等を遵守し、利用者の個人情報を厳正に管理します。<br/>
          なお、本ポリシー中の用語の定義は、本ポリシーに特段の定めがない限り、個人情報保護法及び関連法令の例によります。
          </p>
        <p>
          1.個人情報の取得<br/>
          1-1.当事業者は、以下に定める利用者に関する個人情報及びその他の情報を取得します。<br/>
          （１）体験授業において取得する情報<br/>
          ①契約者に関する以下の情報<br/>
          ・氏名<br/>
          ・住所<br/>
          ・連絡先（電話番号、メールアドレス）<br/>
          ②受講者に関する以下の情報<br/>
          ・氏名<br/>
          ・性別<br/>
          ・生年月日<br/>
          ・紹介者の氏名<br/>
          ・テスト結果<br/>
          ③その他本サービス又は当社サイト等で個別に明示する情報（アンケート等に利用者が記載した情報を含みます）<br/>
          （２）通常教室において取得する情報<br/>
          ①契約者に関する以下の情報<br/>
          ・氏名<br/>
          ・連絡先（住所、自宅及び携帯電話番号、メールアドレス、緊急連絡先）<br/>
          ・金融機関口座情報その他決済手段に関する情報<br/>
          ②受講者に関する以下の情報<br/>
          ・氏名<br/>
          ・性別<br/>
          ・生年月日<br/>
          ・就学中の学校名、学年<br/>
          ・申込日、コース、クラス<br/>
          ・テスト結果<br/>
          ・受講履歴<br/>
          ③その他本サービス又は当事業サイト等で個別に明示する情報（アンケート等に利用者に記載した情報を含みます）<br/>
          1-2.利用者による本サービスの利用過程でIPアドレス、クッキー、サービス利用記録および機器情報が生成され
          又は当事業者により取得されることがあります。なお、クッキーについては、利用者は、利用者が使用するウェブブラウザ上の
          設定により無効にすることもできますが、この場合、利用者は、本サービスの一部を利用できなくなることがあります。<br/>
        </p>
        <p>
          2.個人情報の利用目的<br/>
          当社は、本サービスに関連して取得した利用者の個人情報等を次の以下に定める目的で利用します。<br/>
          （１）利用希望者及び利用者の確認及び識別<br/>
          （２）利用希望者及び利用者への意思確認その他の利用者管理<br/>
          （３）利用者に対する本サービス利用料の請求その他決済処理<br/>
          （４）利用者に対する郵便物の送付<br/>
          （５）利用者からのお問い合わせ対応及び本サービスに関連する利用者への連絡<br/>
          （６）本サービスの利用状況等に係る統計情報の作成、本サービス又は当事業ウェブサービスにおける公表等<br/>
          （７）本サービスに関する規約違反又は本サービスの不正利用の疑いがある場合の調査・対応<br/>
          （８）本サービスその他当事業者サービスの開発、運営及び提供を目的とした業務<br/>
          （９）本サービスその他当事業者サービスに関するご案内・情報提供<br/>
          （１０）その他本サービスその他当事業者サービス内で明示する目的<br/>
        </p>
        <p>
          3.個人情報の第三者提供<br/>
          3-1.当事業者は、利用者の個人情報等を利用者の事前の承諾を得ることなく、第三者に開示、提供しません。
          但し、当社は、以下に定める場合には、利用者の個人情報等第三者に提供することができるものとします。<br/>
          （１）本人の同意がある場合<br/>
          （２）裁判所、検察庁、警察、税務署、弁護士会又はこれに準した権限を有する期間から個人情報の
          開示を求められた場合その他法令等に基づき当事業者が提供義務を負う場合<br/>
          （３）個人情報保護法その他の法令により認められる場合<br/>
          （４）個人の生命、身体又は財産の保護のために必要な場合で、本人の同意を得ることが困難な場合<br/>
          （５）本サービス利用料（入会金、受講料、教材費、施設管理費等）の集金業務等を集金代行業者又は
          クレジットカード会社等に委託する場合<br/>
          （６）本サービスの利用者情報の管理、本サービスの予約受付、利用者との連絡に関するシステムの運用を同運用業者に委託する場合<br/>
          （７）当事業者が行う本サービスに関連する業務の全部または一部を第三者に委託する場合<br/>
          （８）当事業者の権利行使又は財産保護のために必要となる場合<br/>
          （９）合併、営業譲渡その他の事由による事業の継承の際に、事業を承継する者に対して開示する場合<br/>
          （１０）その他本サービスその他当事業者サービス内で個別に定める場合<br/>
          3-2.本サービスその他当事業者サービスの開発及び運営に関する業務については一部の業務を
          外部に委託することがあり、それに伴い、利用目的の達成に必要な範囲内において、利用者の
          個人情報等を委託先に提供することがあります。この場合、当事業者は、個人情報保護体制が
          整備された委託先を選定するとともに、当該委託先との間に個人情報保護に関する契約を締結します。
        </p>
        <p>
          4.リンク先等での個人情報の取り扱い<br/>
          当事業者サイト上で、第三者が運営する外部サイトへのリンクが表示されることがあります。
          リンク先の外部サイトで取得される個人情報については、外部サイトの運営者が定めるプライバシーポリシー
          が適用されるものとし、当事業者は、これらの外部サイトに関連して何らの責任も負わないものとします。<br/>
        </p>
        <p>
          5.法令等の遵守・安全管理の実施<br/>
          5-1.当事業者は個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守するとともに、
          当事業者の個人情報管理体制をこれらの法令、指針その他の規範に適合させます。<br/>
          5-2.当事業者は個人情報への不正アクセス、個人情報の改竄及び漏洩等を防止するために適切な安全対策を行います。
          当事業者は、万が一個人情報の漏洩等があった場合には、速やかに適切な措置を講じます。
        </p>
        <p>
          6.利用者の個人情報の開示・訂正等<br/>
          6-1.当事業者は、利用者から取得した個人情報について、当該利用者本人から開示、訂正、削除等を求められた場合、
          利用者本人からの請求であることを確認の上、遅滞なく対応致します。但し、以下に該当する場合において、
          その全部又は一部に対応しない旨の決定をしたとき、その旨を遅滞なく通知します。<br/>
          （１）利用者本人からの請求であることが確認できない場合<br/>
          （２）利用者本人又は第三者の生命、身体、財産その他の権利利益を害する恐れがある場合<br/>
          （３）業務の適切な実施に著しい支障を及ぼす恐れがある場合<br/>
          （４）法令違反に該当する場合<br/>
          （５）当社の保有個人情報に該当しない場合<br/>
          6-2.個人情報に関する以下のお問い合わせ先は以下の通りです。<br/>
          ・事業者名：中川裕太<br/>
          ・所在地:〒176-0013 東京都練馬区豊玉中4丁目14番14号<br/>
          ・連絡先メールアドレス:arlogy-support@arlogy-education.com<br/> 
        </p>
        <p>
          7.本ポリシーの改定<br/>
          本ポリシーは変更される場合があり、その場合は変更内容及び変更日を当事業者サイト上に掲載し
          又は利用者に個別に電子メールその他の電磁的方法により通知します。
          利用者は、定期的に当事業者サイト又は当社からの通知を確認し変更事項の有無及びその内容を
          確認する必要があります。
          利用者が変更日以降に本サービスを利用する場合、変更されたポリシーに同意したものとみなします。
        </p>
        <p>
          制定日:2024年10月5日
        </p>
      <div className={styles.scrollArrow} onClick={scrollToBottom1}>
              <div>TOPへ<br/>戻る</div>
            </div>
    </div>
  );
}