import { getAllArticles } from './(server)/api';
import style from './page.module.css'

export default async function Home() {
  const allArticles = await getAllArticles();
  return (
    <>
      <h1 className={style.title}>HelenKo blog</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>{article.header}</li>
        ))}
      </ul>
    </>
  );
}
