import Image from 'next/image'
import styles from './page.module.css'
import menu from "./assets/menu.png"
import favorites from "./assets/icons8-star-26.png"
import recent from "./assets/recent.png"
import search from "./assets/search.png"
import popular from "./assets/popular.png"
import user from "./assets/user.jpeg"
import maps from "./assets/maps.jpeg"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <div className={styles.leftcontainer}>
        <div className={styles.leftcontainerchild}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150" height="35" viewBox="0 0 50 50">
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>


        <h2 className={styles.leftcontainerheading}>Menu</h2>
        </div>

        <div className={styles.leftcontainerchild}>

        <svg className="feather feather-star" fill="none" height="35" width="200" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        
<h2 className={styles.leftcontainerheading}>Favorites</h2>
        </div>

        <div className={styles.leftcontainerchild}>
        <svg viewBox="0 0 24 24" height="35" width="200"  xmlns="http://www.w3.org/2000/svg"><title/><path d="M12.25,2A9.81,9.81,0,0,0,4.77,5.46L3.41,4.25a1,1,0,0,0-1.07-.16A1,1,0,0,0,1.75,5V9a1,1,0,0,0,1,1h4.5a1,1,0,0,0,.93-.64,1,1,0,0,0-.27-1.11L6.26,6.78a7.86,7.86,0,0,1,6-2.78A8,8,0,1,1,4.72,14.67a1,1,0,0,0-1.89.66A10,10,0,1,0,12.25,2Z" fill="black"/><path d="M16,16a1,1,0,0,1-.6-.2l-4-3A1,1,0,0,1,11,12V8a1,1,0,0,1,2,0v3.5l3.6,2.7a1,1,0,0,1,.2,1.4A1,1,0,0,1,16,16Z" fill="black"/></svg>
<h2 className={styles.leftcontainerheading}>Recent</h2>
        </div>

        <div className={styles.leftcontainerchild}>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="35" viewBox="0 0 12 16" id="flame"><g fill="none" fill-rule="evenodd"><g fill="#000"><path d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></g></g></svg>
<h2 className={styles.leftcontainerheading}>Popular</h2>
        </div>

        <div className={styles.leftcontainerchild}>
        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="200" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
<h2 className={styles.leftcontainerheading}>Advanced Search</h2>
        </div>
        
       </div>
       
       <div className={styles.navbar}>
       <div className={styles.searchInputcontainer}>
       <input className={styles.searchInput} placeholder='Search'></input>
       <svg className={styles.searchInputIcon} xmlns="http://www.w3.org/2000/svg" fill='black' height="20" width="30" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
       </div>

       <Image alt='user' className={styles.userImage} src={user} height={20} width={20}/>
       </div>
      </div>
    </main>
  )
}
