import styles from '../global.module.css';
import logo from '../../assets/Logo.png';
import React from 'react';

const OPEN_MAP_WIDGET="https://www.openstreetmap.org/export/embed.html?bbox=-79.44913387298584%2C43.843039262967345%2C-79.40124034881593%2C43.862133755111394&amp;layer=mapnik";

export default function LandingPage() {
  return (
    <main>
      <div>
        <div className={styles.header}>
          <img src={logo} alt="qApp" width={'56px'} height={'56px'} className={styles.round_logo}/>
          <div className={styles.header_links}>
            <a href='/' className={styles.cta_text_black}>Loans</a>
            <a href='/' className={styles.cta_text_black}>Mortgages</a>
            <a href='/' className={styles.cta_text_black}>About us</a>
          </div>
          <button className={styles.rect_action_button}>Login</button>
        </div>
        <div className={styles.call_to_action}>
          <div>
            <h1 className={styles.text_logo}>q</h1>
            <h3 className={styles.cta_text_black}>helps you</h3>
            <h1 className={styles.cta_text_green}>get a loan</h1>
          </div>
        </div>
        <div className={styles.convicing_info}>
          <div className={styles.icon_information}>
            {/* TODO: ADD A MONEY ICON */}
            <h3 className={styles.information}>No KYC <h7>*</h7> </h3>
          </div>
          <div className={styles.icon_information}>
            {/* TODO: ADD ICON TO EVERY Q ADVANTAGES POINT */}
            <h3 className={styles.information}>Flexible contracts</h3>
          </div>
          <div className={styles.icon_information}>
            <h3 className={styles.information}>Withdraw in 24hrs <h7>**</h7> </h3>
          </div>
          <div className={styles.icon_information}>
            <h3 className={styles.information}>87% client approval</h3>
          </div>
        </div>
        <div className={styles.app_preview}>
          <div className={styles.side_text_image}>
            <h1 className={styles.cta_text_green}>Money even when <p> you're
               in bad credit </p></h1>
            <h3 className={styles.text_black}>Our business strategy, <p> low
               interest rates,</p> <p> and fast credit analists </p> help you back on track!</h3>
            <button className={styles.outline_button}> Fill a deal
            </button>
          </div>
        </div>
        <div className={styles.customer_comments}>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}>"Very trustworthy! Supported all my financial needs."</h3>
            <h4 className={styles.text_black}>Joseph Smith</h4>
          </div>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}> "It was a simple and fast approval process. I loved it."</h3>
            <h4 className={styles.text_black}>Cris Santos</h4>
          </div>
          <div className={styles.customer_comment}>
            <h3 className={styles.comment_text}> "My credit analist was very flexible. Made my day." </h3>
            <h4 className={styles.text_black}>Jean Baptiste</h4>
          </div>
        </div>
        <div className={styles.div_banner}>
        </div>
        <div className={styles.convicing_info}>
          <h3 className={styles.information}>Visit us in our headquarters in Canada</h3>
          
          <h3 className={styles.information}> </h3>
          <iframe width="425" height="350" frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0" src={OPEN_MAP_WIDGET} title="Questrade location">
          </iframe><br/>
          <a className={styles.information} href={"https://www.openstreetmap.org/#map=15/43.8526/-79.4252"}>Get directions</a>
        </div>
        <div className={styles.footer_row}>
          <div className={styles.footer}>
            <a href='/' className={styles.footer_text}>Deals</a>
            <a href='/' className={styles.footer_text}>Partnerships</a>
            <a href='/' className={styles.footer_text}>Careers</a>
            <a href='/' className={styles.footer_text}>Blog</a>
          </div>
          <div className={styles.footer}>
            <h3 className={styles.company_grey}>q company © 2023</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
