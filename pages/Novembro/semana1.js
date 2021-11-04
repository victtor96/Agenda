import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <ul>
  <li><a href="http://localhost:3000/">Home</a></li>
  <li><a href="#news">News</a></li>
  <li className={styles.dropdown}>
    <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
    <li className={styles.dropdown.content}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
</ul>
      
      
      
      
      
     
  )
}
