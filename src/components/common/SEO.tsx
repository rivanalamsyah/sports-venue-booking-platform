import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../data/mockData';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO = ({
    title = "ArenaPlay - Booking Lapangan Olahraga Premium",
    description = "Platform booking lapangan olahraga terbaik & terlengkap di Indonesia. Sewa lapangan Futsal, Basket, Badminton, Padel, dan Mini Soccer dengan fasilitas standar internasional.",
    keywords = "booking futsal, sewa lapangan basket, lapangan badminton jakarta, padel tennis indonesia, mini soccer premium, arena olahraga, sport center",
    image = "/images/general/hero_bg.png",
    url = "https://arenaplay.id"
}: SEOProps) => {
    const fullTitle = `${title} | ${SITE_CONFIG.name}`;

    return (
        <Helmet>
            {/* Standard Types */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={SITE_CONFIG.name} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};
