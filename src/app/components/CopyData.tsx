"use client";

import Image from 'next/image';
import styles from './CopyData.module.css';
import { useState } from 'react';
import copy_icon from '../icons/copy.svg';
import check_icon from '../icons/check.svg';

type props = {
	text: string
}

export default function CopyData(props: props) {

	const [copy, change_copy] = useState(false);

	function handle_click() {
		navigator.clipboard.writeText(props.text);
		change_copy(prev => !prev);
	}
	
	return (
		<div className={styles.main} onClick={handle_click}>
			<p className={styles.text}>
				{props.text}
			</p>
			<div className={styles.wrapper}>
				<Image src={!copy ? copy_icon : check_icon} alt="copy icon" className={styles.icon} />
			</div>
		</div>
	);
}
