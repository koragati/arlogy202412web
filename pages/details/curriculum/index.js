import React from 'react';
import styles from "@/styles/Curriculum.module.css";
import { useRouter } from 'next/router';

export default function Pricing() {
  
  return (
    
    <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>簡易的なカリキュラムのフロー</h1>
    </header>
    <div className={styles.imageWrapper}>
      <img 
        src="https://lh3.googleusercontent.com/d/1_Il-ZXlTsUoiUgO8F2ef8hkdO2axRmjv=s10000?authuser=0"
        alt="Google Drive Image"
        className={styles.image}
      />
      <a href="/detailsnew/basic" className={`${styles.link} ${styles.blink} ${styles.linkTop}`}>basicクラス詳細はこちらをTAP</a>
      <a href="/detailsnew/advanced" className={`${styles.link} ${styles.blink} ${styles.linkMiddle}`}>advancedクラス詳細はこちらをTAP</a>
      <a href="/detailsnew/master" className={`${styles.link} ${styles.blink} ${styles.linkBottom}`}>masterクラス詳細はこちらをTAP</a>
    </div>
    <a href="/" className={styles.floatingButton}>
        TOPへ<br/>戻る
      </a>
  </div>
  );
}