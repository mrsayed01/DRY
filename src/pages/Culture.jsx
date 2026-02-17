import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/culture.css';
import img1 from '../assets/carousel-1.jpg';
import img2 from '../assets/carousel-2.jpg';
import img3 from '../assets/carousel-3.jpg';
import img4 from '../assets/hero.jpg';

export default function Culture() {
    const cultureItems = [
        {
            title: "Language & Literature",
            desc: "The Yoruba language is central to our identity, rich in proverbs, poetry (Ewi), and oral history passed down through generations.",
            img: img1,
            icon: "fa-book"
        },
        {
            title: "Festivals & Traditions",
            desc: "From the Olojo Festival to the Osun-Osogbo festival, our calendar is filled with celebrations of life, divinity, and ancestry.",
            img: img2,
            icon: "fa-drum"
        },
        {
            title: "Art & Clothing",
            desc: "Our Aso-Oke, Adire, and intricate beadwork are renowned worldwide, symbolizing royalty, elegance, and deep cultural significance.",
            img: img3,
            icon: "fa-tshirt"
        },
        {
            id: "music",
            title: "Music & Dance",
            desc: "The talking drum (Gangan) speaks the language of our people, accompanying dances that tell stories of old and celebrate the new.",
            img: img4,
            icon: "fa-music"
        },
        {
            id: "drums",
            title: "Drums",
            desc: "Drums are the heartbeat of Yoruba culture, used for communication, celebration, and spiritual rituals.",
            img: img4,
            icon: "fa-drum"
        },
        {
            id: "tribal-marks",
            title: "Tribal Marks",
            desc: "Tribal marks are a form of identification and beautification, telling the story of one's lineage and heritage.",
            img: img3,
            icon: "fa-user"
        }
    ];

    return (
        <>
            <Navbar />
            <PageHeader title="Yoruba Culture" path="/culture" name="Culture" />
            
            <div className="culture-page container-xxl py-5">
                <div className="container">
                     <div className="culture-intro">
                        <h1>Our Vibrant Culture</h1>
                        <p className="lead">
                            Celebrating the art, music, language, and traditions that define the Indigenous Yoruba People.
                        </p>
                    </div>
                    
                    <div className="culture-grid">
                        {cultureItems.map((item, index) => (
                            <div className="culture-card" key={index} id={item.id}>
                                <div className="culture-img-wrapper">
                                    <img src={item.img} alt={item.title} />
                                    <div className="culture-icon">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                </div>
                                <div className="culture-content">
                                    <h3 className="culture-title">{item.title}</h3>
                                    <p className="culture-text">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
