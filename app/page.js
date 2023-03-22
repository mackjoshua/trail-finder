import Image from 'next/image'
import styles from './page.module.css'
import textStyles from './CSS/textStyles.module.css'
import SearchForm from './SearchForm'

import heroImage from '../Illustrations/Hero_image.png'
import sun from '../Illustrations/Sun.png'
import orangeTrees from '../Illustrations/orangeTrees.png'
import stars from '../Illustrations/stars.png'
import mountains from '../Illustrations/Mountains.png'
import testimonial from './smiling-guy.png'
import flower from '../Illustrations/Flower.png'
import wavySun from '../Illustrations/Wavy_sun.png'
import outlineTrees from '../Illustrations/Trees.png'

import Link from 'next/link'



export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.heroHeading}`}>Find your trail</h1>
          <p className={`${textStyles.Biennale} ${textStyles.regular} ${styles.heroText}`}>Find your trail allows you to quickly locate the best trails near you. It&apos;s quick, easy, and convenient. No downloads or sign ups required. Simply enter your ZIP CODE to get started.</p>
        </div>
        <div className={styles.searchBarContainer}>
          <SearchForm />
        </div>
        <div className={styles.heroImageWrapper}>
          <Image src={heroImage} alt=''/>
        </div>
      </section>
      
      <div className={styles.midSectionWrapper}>
        <section className={styles.featuresSection}>
          <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.featuresHeadline}`}>Features Headline</h2>
          <div className={styles.features}>
            <div className={`${textStyles.Biennale} ${textStyles.regular} ${styles.featureBlock}`}>
              <div className={styles.imageWrapper}>
                <Image src={orangeTrees} alt="An illustration of a group of trees"/>
              </div>
              <div className={styles.textBlock}>
                <h3>Location Search</h3>
                <p>Find trails that are relevant and accessible to you based on your location</p>
              </div>
            </div>
            <div className={`${textStyles.Biennale} ${textStyles.regular} ${styles.featureBlock}`}>
              <div className={styles.imageWrapper}>
                <Image src={sun} alt="An illustration of the sun"/>
              </div>
              <div className={styles.textBlock}>
                <h3>Weather Tracking</h3>
                <p>Plan your hikes based on the most enjoyable weather </p>
              </div>
            </div>
            <div className={`${textStyles.Biennale} ${textStyles.regular} ${styles.featureBlock}`}>
              <div className={styles.imageWrapper}>
                <Image src={stars} alt="An illustration of orange stars"/>
              </div>
              <div className={styles.textBlock}>
                <h3>Social Sharing</h3>
                <p>Plan hikes with others and create lifelong memories</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.howItWorksSection}>
          <div className={styles.howItWorksWrapper}>
            <Image src={mountains} alt="An illustration of mountains" className={styles.mountains}/>
            <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.HIWHeading}`}>How it works</h2>
            <div className={styles.HIWInnerWrapper}>
              <div className={styles.numberWrapper}><p className={`${textStyles.Biennale} ${textStyles.medium}`}>1</p></div>
              <div>
                <h3 className={`${textStyles.HVAnalogue} ${textStyles.regular}`}>Enter your location</h3>
                <p className={`${textStyles.Biennale} ${textStyles.regular}`}>This is a description of a step in the process of how the web app works. The purpose is to provide more explanation of the functionality of the web app, and get visitors more intrigued to use it.</p>
              </div>
            </div>
            <div className={styles.HIWInnerWrapper}>
              <div className={styles.numberWrapper}><p className={`${textStyles.Biennale} ${textStyles.medium}`}>2</p></div>
              <div>
                <h3 className={`${textStyles.HVAnalogue} ${textStyles.regular}`}>Find a great trail</h3>
                <p className={`${textStyles.Biennale} ${textStyles.regular}`}>This is a description of a step in the process of how the web app works. The purpose is to provide more explanation of the functionality of the web app, and get visitors more intrigued to use it.</p>
              </div>
            </div>
            <div className={styles.HIWInnerWrapper}>
              <div className={styles.numberWrapper}><p className={`${textStyles.Biennale} ${textStyles.medium}`}>3</p></div>
              <div className={styles.finalStep}>
                <h3 className={`${textStyles.HVAnalogue} ${textStyles.regular}`}>Save and share with friends</h3>
                <p className={`${textStyles.Biennale} ${textStyles.regular}`}>This is a description of a step in the process of how the web app works. The purpose is to provide more explanation of the functionality of the web app, and get visitors more intrigued to use it.</p>
              </div>
            </div>
            <Image src={outlineTrees} alt="An illustration of outlined trees" className={styles.trees}/>
          </div>
        </section>
      </div>
      <div className={styles.testimonialWrapper}>
        <section className={styles.innerTestimonialWrapper}>
            <div className={styles.testimonialImage}>
              <Image src={testimonial} alt="An image of a smiling man"/>
              <Image src={flower} alt="An illustration of an orange flower" className={`${styles.flower} ${styles.topLeft}`}/>
              <Image src={flower} alt="An illustration of an orange flower" className={`${styles.flower} ${styles.bottomRight}`}/>
            </div>
            <div className={styles.testimonialText}>
              <p className={`${textStyles.Biennale} ${textStyles.regular} ${styles.testimonialParagraph}`}>&quot;Trail Hikes made it really easy to find a trail near me! I recommend it to all my friends, and I use it often when visiting areas I am unfamiliar with. I don&apos;t know what I would do without it.&quot;</p>
              <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold} ${styles.orangeText}`}>Johno Doe</h2>
            </div>
        </section>
      </div>
      <div className={styles.finalCTAWrapper}>
        <Image src={wavySun} alt="An illustration of a wavy sun"/>
        <h2 className={`${textStyles.HVAnalogue} ${textStyles.bold}`}>What are you waiting for? Come hike now!</h2>
        <div className={`${styles.searchBarContainer} ${styles.extraPadding}`}>
         <SearchForm />
        </div>
      </div>
      <div className={styles.creditsContainer}>
        <div className={`${textStyles.Biennale} ${textStyles.regular} ${styles.innerCreditsContainer}`}> <Link href='https://www.jdmack.digital/' className={styles.link}>Designed and developed by Joshua Mack</Link></div>
      </div>
    </main>
  )
}
