import React from 'react';
import styles from "@/styles/Curriculum.module.css";
import { useRouter } from 'next/router';

export default function Pricing() {
  

  const router = useRouter();
  const scrollToBottom1 = () => {
    router.push('/');
  };
  return (
    
    <div className={styles.container}>
        <h2>簡易的なカリキュラムのフロー</h2>
        <img 
            src="https://lh3.googleusercontent.com/d/1nVWSO_hnjeMXTEMRK4RnCLyZsRYAs0yq=s500?authuser=0"
            alt="Google Drive Image"
          />
        
      <div className={styles.scrollArrow} onClick={scrollToBottom1}>
              <div>TOPへ<br/>戻る</div>
            </div>
    </div>
  );
}