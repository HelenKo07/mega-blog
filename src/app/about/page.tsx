import Image from 'next/image';
import myImage from '../../../public/me.jpg';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image
        src={myImage}
        alt="Alena Korma photo"
        width={485}
        height={700}
        loading='eager'
        quality={100}
        priority
        sizes="100vw"
      />
      <p>Welcome to the About page!</p>
    </article>

  );
}
