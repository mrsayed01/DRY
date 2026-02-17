import React from 'react';
import '../css/news.css';
import news1 from '../assets/carousel-1.jpg'; // Placeholder images
import news2 from '../assets/carousel-2.jpg';
import news3 from '../assets/carousel-3.jpg';

const newsData = [
    {
        id: 1,
        title: "D.R.Y. Sovereignty Recognized by Global Alliances",
        date: "April 15, 2024",
        category: "Politics",
        image: news1,
        excerpt: "The Democratic Republic of the Yoruba receives acknowledgment from international bodies following the historic proclamation.",
        featured: true
    },
    {
        id: 2,
        title: "Infrastructure Development Plan Unveiled",
        date: "May 10, 2024",
        category: "Development",
        image: news2,
        excerpt: "The provisional government announces a comprehensive roadmap for rebuilding roads, power, and healthcare.",
        featured: false
    },
    {
        id: 3,
        title: "Cultural Renaissance Festival Announced",
        date: "May 22, 2024",
        category: "Culture",
        image: news3,
        excerpt: "A week-long celebration of Yoruba heritage, arts, and music to take place in the capital.",
        featured: false
    },
    {
        id: 4,
        title: "New Education Policy for Indigenous Youths",
        date: "June 01, 2024",
        category: "Education",
        image: news1,
        excerpt: "Free and compulsory education initiative launched to empower the next generation of leaders.",
        featured: false
    }
];

export default function NewsUpdates() {
    const featuredNews = newsData.find(news => news.featured);
    const otherNews = newsData.filter(news => !news.featured);

    return (
        <section className="news-section">
            <div className="container">
                <div className="news-header">
                    <h2 className="section-title">Latest News & Updates</h2>
                    <p className="lead">Stay informed about the progress and announcements of the D.R.Y. Government.</p>
                </div>

                {featuredNews && (
                    <div className="featured-news">
                        <div className="news-card">
                            <div className="news-img-wrapper">
                                <img src={featuredNews.image} alt={featuredNews.title} />
                                <span className="news-category">{featuredNews.category}</span>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <i className="far fa-calendar-alt"></i> {featuredNews.date}
                                </div>
                                <h3 className="news-title">{featuredNews.title}</h3>
                                <p className="news-excerpt">{featuredNews.excerpt}</p>
                                <a href="#" className="news-link">Read Full Story <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                )}

                <div className="row g-4">
                    {otherNews.map(news => (
                        <div key={news.id} className="col-lg-4 col-md-6">
                            <div className="news-card">
                                <div className="news-img-wrapper">
                                    <img src={news.image} alt={news.title} />
                                    <span className="news-category">{news.category}</span>
                                </div>
                                <div className="news-content">
                                    <div className="news-meta">
                                        <i className="far fa-calendar-alt"></i> {news.date}
                                    </div>
                                    <h3 className="news-title">{news.title}</h3>
                                    <p className="news-excerpt">{news.excerpt}</p>
                                    <a href="#" className="news-link">Read More <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}