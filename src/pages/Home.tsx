import { Hero } from '../components/home/Hero';
import { PartnerMarquee } from '../components/home/PartnerMarquee';
import { Facilities } from '../components/home/Facilities';
import { VenueList } from '../components/home/VenueList';
import { ScheduleSimulation } from '../components/home/ScheduleSimulation';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { BlogSection } from '../components/home/BlogSection';
import { LocationMap } from '../components/home/LocationMap';
import { PricingSection } from '../components/home/PricingSection';
import { Testimonials } from '../components/home/Testimonials';
import { FAQSection } from '../components/home/FAQSection';
import { PreFooterCTA } from '../components/home/PreFooterCTA';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { SEO } from '../components/common/SEO';

export const Home = () => {
    return (
        <>
            <SEO />
            <Navbar />
            <Hero />
            <PartnerMarquee />
            <Facilities />
            <VenueList />
            <ScheduleSimulation />
            <UpcomingEvents />
            <BlogSection />
            <LocationMap />
            <PricingSection />
            <Testimonials />
            <FAQSection />
            <PreFooterCTA />

            <Footer />
            <ScrollToTop />
        </>
    );
};
