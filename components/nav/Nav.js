import Link from "next/link"
import styles from "../../styles/Nav.module.css"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav