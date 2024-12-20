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
        <h2>「ARLOGY（体験授業、通常教室）」<br/>特定商取引法に基づく表記</h2>
        <p>
          1.販売事業者の名称<br/>
          ARLOGY
        </p>
        <p>
          2.販売事業者の所在地<br/>
          〒176-0013 東京都練馬区豊玉中4丁目14番14号
        </p>
        <p>
          3.お問い合わせ先<br/>
          ARLOGY<br/>
          メールアドレス:arlogy-support@arlogy-education.com<br/>
          ※連絡先電話番号についても、上記お問い合わせメールアドレス宛に
          ご請求いただければ遅滞なく開示いたします。
        </p>
        <p>
          4.代表者<br/>
          代表　中川裕太
        </p>
        <p>
          5.販売価格<br/>
          5-1.体験授業<br/>
          体験授業についてお問い合わせページ上で表示される金額（無料）（原則として消費税込み価格で表示いたします）<br/>
          5-2.通常教室<br/>
          通常教室について料金ページ上で表示される金額（原則として消費税込み価格で表示いたします）<br/>
        </p>
        <p>
          6.販売価格以外の費用<br/>
          （1）通信費用及び電気通信回線の通信料金等（インターネット接続料金を含みます）
          ※料金は、お客様がご契約されている通信事業者等にお問い合わせください。
          （2）その他料金ページ・お問い合わせページ上、又はARLOGY入校時の契約書で表示される費用
        </p>
        <p>
          7.代金のお支払い時期<br/>
          7-1.体験授業<br/>
          お問い合わせページに別段の表示をしている場合を除き、
          体験授業の提供日（実施日）当日に、体験授業の提供前に現地でお支払いいただきます。（無料）<br/>
          7-2.通常教室<br/>
          7-2-1.初回お支払い時期<br/>
          ARLOGY入校時の契約書を締結した日に入塾料（無料）と通常授業料金を現地でお支払い、又は初回通常教室の提供前に振り込みにてお支払いいただきます。<br/>
          7-2-2.初回以外のお支払い時期<br/>
          月額料金として月の初回の通常教室実施日に通常授業料金を通常教室提供前にお支払い、又は月の初回の通常教室実施日より前に振り込みにてお支払いいただきます。<br/>

        </p>
        <p>
          8.代金のお支払い方法<br/>
          振り込み、又は現金による決済
        </p>
        <p>
          9.サービスの提供時期<br/>
          9-1.体験授業<br/>
          体験授業の提供日（実施日）当日に体験授業の料金（無料）をお支払いいただいた後、利用申し込みページに表示する
          本サービスの提供日（実施日）に提供いたします。<br/>
          9-2.通常教室<br/>
          9-2-1.エントリーコース<br/>
          当コースは月4回（欠席は回数に含まれます）、各60分（遅刻は時間に含まれます）の通常教室を提供します。曜日等その他詳細に関してはARLOGY入校時の契約書にて表示します。<br/>
          9-2-2.スタンダードコース<br/>
          当コースは月4回（欠席は回数に含まれます）、各90分（遅刻は時間に含まれます）の通常教室を提供します。曜日等その他詳細に関してはARLOGY入校時の契約書にて表示します。<br/>
          9-2-3.プレミアムコース<br/>
          当コースは月8回（欠席は回数に含まれます）、各90分（遅刻は時間に含まれます）の通常教室を提供します。曜日等その他詳細に関してはARLOGY入校時の契約書にて表示します。
        </p>
        <p>
          10.体験授業キャンセル<br/>
          （１）体験授業をキャンセルする場合は、当事業者メールアドレス（arlogy-support@arlogy-education.com）宛に
          メールにてキャンセルのご連絡をいただけますようお願いいたします（その他の方法によるキャンセルはお受けしておりません）。
          キャンセルの場合、以下にしたがってキャンセル料を申し受けます。キャンセル料のお支払い方法は振り込みに限られます。
          キャンセル料の決済については別途当事業者からお客様にメールにてお送りいたします。<br/>
          以下の①と②の両方を満たす場合、5000円のキャンセル料をいただきます。<br/>
          ①体験授業当日までに当事業者メールアドレスにキャンセルのご連絡がない場合<br/>
          ②キャンセル後、体験授業を受ける意思が見られない場合（キャンセル後一週間以上連絡が取れない場合を含む）<br/>
          （２）体験授業の提供後のキャンセル等はできず、お支払いいただいた代金の返還を求めることはできないものとします。
          （３）体験授業に当事業者の責めに帰すべき事由による品違い、数量違い又は不具合があった場合は、
          個別にご対応致しますので、速やかにご連絡ください。
        </p>
        <p>
          11.通常教室キャンセル<br/>
          （１）当事業者都合ではない事由による回数、時間の担保は致しかねます。
          （２）通常教室の提供後のキャンセル等はできず、お支払いいただいた代金の返還を求めることはできないものとします。
          （３）通常教室に当事業者の責めに帰すべき事由による品違い、数量違い又は不具合があった場合は、
          個別にご対応致しますので、速やかにご連絡ください。
          （４）退校については、通常教室提供前にお申し出頂き、次回の通常授業料のお支払いをお控えいただければ問題ございません。
        </p>
        <p>
          12.その他の販売条件<br/>
          その他の特別な販売条件があるサービスについては、料金ページ、又はお問い合わせページ、又はARLOGY入校時の契約書においてその条件を表示いたします。
        </p>
        <p></p><p></p>
        <a href="/" className={styles.floatingButton}>
        TOPへ<br/>戻る
      </a>
    </div>
  );
}