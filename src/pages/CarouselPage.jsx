import React from 'react'
import styles from "./CarouselPage.module.css"
import ProfileWidget from '../components/ProfileWidget.jsx'
import WeatherWidget from '../components/WeatherWidget.jsx'
import NewsWidget from '../components/NewsWidget.jsx'

function CarouselPage() {
    return (
        <div className={styles.container}>
            <div className={styles.profileWidget}>
                <ProfileWidget />
            </div>
            <div className={styles.weatherWidget}>
                <WeatherWidget />
            </div>
            <div className={styles.newsWidget}>
                <NewsWidget />
            </div>
        </div>
    )
}

export default CarouselPage