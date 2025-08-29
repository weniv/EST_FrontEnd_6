import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {

    const { user } = useAuthContext();

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
                <DiaryForm uid={user.uid} />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    <DiaryList />
                </ul>
            </section>
        </div>
    )
}