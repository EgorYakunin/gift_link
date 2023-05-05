import Image from 'next/image'
import styles from './page.module.css'
import CopyData from './components/CopyData';

import link_icon from './icons/link.svg';

export default function Home() {
  return (
    <main className={styles.main}>
		<div className={styles.spacer}></div>
		<div className={styles.card}>
			<h1>For the best GF ever</h1>
			<p>
				This is the login cardentials to the Udemy account with the Best drawing course on caracter design! I hope you enjoy!
			</p>
		</div>
		<div className={styles.spacer}></div>
		<div className={styles.card}>
			<h1>Go to the course</h1>
			<p>Email</p>
			<CopyData text="websiteadmim@gmail.com"/>

			<div className={styles.spacer}></div>

			<p>Password</p>
			<CopyData text="password_123"/>
			<div className={styles.spacer}></div>
			<div className={styles.spacer}></div>
			
			<a href="https://www.udemy.com/join/login-popup/" target="_blank">
				<div className={styles.button}>
					<p className={styles.btn_title}>Enjoy drawing!</p>
					<Image src={link_icon} alt="link icon" className={styles.icon} />
				</div>
			</a>
			<div className={styles.spacer}></div>
			<div className={styles.spacer}></div>
		</div>
    </main>
  )
}
