import styles from "../Component/Footer.module.css"

function Footer(){
    return(
        <div className={styles.foot}>
              <p>My To-Do App. All rights reserved.</p>
    <ul class="social-links">
      <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
      <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
      <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
    </ul>
    <p><a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a></p>

        </div>
    )

}
export default Footer;