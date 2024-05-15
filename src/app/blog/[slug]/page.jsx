import Image from 'next/image';
import styles from './singlePost.module.css';
// import PostUser from '@/components/postUser/postUser';
// import { Suspense } from "react";
// import { getPost } from "@/lib/data";

const SinglePostPage = async () => {
  // const { slug } = params;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>James Hetfield</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam
          consequatur maxime ducimus ullam magni dolor inventore minima,
          exercitationem obcaecati.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
