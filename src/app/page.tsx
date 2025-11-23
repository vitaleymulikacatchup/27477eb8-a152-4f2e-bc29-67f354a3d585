"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Star, Users, Sparkles, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Stay"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919362936-yqdoon0f.jpg"
          logoAlt="Luxe Stay Hotel Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "pricing" },
            { name: "Amenities", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Experience Luxury Redefined"
          description="Discover your sanctuary in our award-winning hotel. Impeccable service, breathtaking views, and unforgettable moments await you"
          tag="Welcome to Elegance"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919363765-8vsx53w9.jpg"
          imageAlt="Luxury hotel lobby entrance"
          buttons={[
            { text: "Book Your Stay", href: "pricing" },
            { text: "Explore More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Your Perfect Escape Awaits"
          description="Nestled in the heart of the city, our hotel combines modern luxury with timeless elegance. Every detail is carefully crafted to ensure your comfort and satisfaction"
          tag="About Our Hotel"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919364511-z5r0jbo3.jpg"
          imageAlt="Hotel property exterior"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Award-Winning Design",
              description: "Recognized globally for architectural excellence and contemporary luxury",
              icon: Award
            },
            {
              title: "Premium Comfort",
              description: "Luxurious rooms with premium bedding, spa-quality bathrooms, and stunning views",
              icon: Star
            },
            {
              title: "Expert Service",
              description: "Dedicated staff available 24/7 to exceed your expectations",
              icon: Users
            },
            {
              title: "Prime Location",
              description: "Steps away from shopping, dining, culture, and entertainment"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Indulge in our extensive collection of luxury amenities designed for your relaxation and wellness"
          tag="Premium Facilities"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa, sauna, and wellness center",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919366751-zzpcv3hd.jpg",
              imageAlt: "Spa and wellness center"
            },
            {
              id: "02",
              title: "Olympic Pool",
              description: "Cool off in our stunning outdoor swimming pool with heated facilities and poolside service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919367566-ik0lz0k9.jpg",
              imageAlt: "Hotel swimming pool"
            },
            {
              id: "03",
              title: "Fine Dining",
              description: "Savor exquisite cuisine prepared by our Michelin-trained chefs in our elegant restaurant",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919368099-kvtvytl2.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: "04",
              title: "Fitness Center",
              description: "State-of-the-art equipment and personal training services for your health goals",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919368892-5lbqvy1b.jpg",
              imageAlt: "Hotel fitness center"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Perfect Room"
          description="Select from our range of beautifully appointed rooms, each offering unique views and amenities"
          tag="Room Types"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          plans={[
            {
              id: "deluxe",
              price: "$189/night",
              name: "Deluxe Room",
              buttons: [
                { text: "Book Now", onClick: () => console.log('Deluxe booking') },
                { text: "View Details", onClick: () => console.log('Deluxe details') }
              ],
              features: [
                "King or twin beds",
                "City or garden view",
                "Premium bedding and pillows",
                "Marble bathroom with bath and shower",
                "Complimentary WiFi and premium channels",
                "Mini bar and work desk"
              ]
            },
            {
              id: "suite",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$299/night",
              name: "Luxury Suite",
              buttons: [
                { text: "Book Now", onClick: () => console.log('Suite booking') },
                { text: "View Details", onClick: () => console.log('Suite details') }
              ],
              features: [
                "Separate living and sleeping areas",
                "Panoramic city views",
                "Luxury bath amenities",
                "Premium entertainment system",
                "Priority room service",
                "Access to executive lounge",
                "Welcome amenities"
              ]
            },
            {
              id: "penthouse",
              price: "$599/night",
              name: "Presidential Penthouse",
              buttons: [
                { text: "Book Now", onClick: () => console.log('Penthouse booking') },
                { text: "View Details", onClick: () => console.log('Penthouse details') }
              ],
              features: [
                "Two-bedroom luxury suite",
                "Private terrace with hot tub",
                "360-degree city views",
                "Private butler service",
                "In-room spa facilities",
                "Gourmet mini bar",
                "Personal concierge"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Guests Say"
          description="Experience the stories of our satisfied visitors and their memorable stays"
          tag="Guest Reviews"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              company: "Global Tech Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919369405-vnort0f9.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Architect",
              company: "Design Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919370409-videwjhz.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Travel Blogger",
              company: "Wanderlust Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919371342-yugvgr48.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Hotel Critic",
              company: "Luxury Living Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919372141-k0bd7e71.jpg",
              imageAlt: "David Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our hotel, rooms, and services"
          textPosition="left"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer free cancellation up to 7 days before your arrival. Cancellations within 7 days are subject to a one-night stay charge. For special events and peak seasons, different terms may apply."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for guests booking 3 nights or more. For shorter stays, airport transfers are available at an additional cost. Please request this service during booking."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets in select rooms for a non-refundable fee of $50 per night. Please inform us of your pet during booking. All pets must have proof of vaccination and cannot be left unattended in rooms."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our hotel features three restaurants: our signature fine dining establishment, a casual bistro, and a rooftop bar. Room service is available 24/7, and in-room dining accommodates special dietary requirements."
            },
            {
              id: "5",
              title: "Is WiFi included?",
              content: "Complimentary high-speed WiFi is included with all room bookings. We also offer premium WiFi packages for streaming and video conferencing needs at an additional cost."
            },
            {
              id: "6",
              title: "What is your check-in and check-out time?",
              content: "Standard check-in is at 3:00 PM and check-out at 11:00 AM. Early check-in and late check-out are available based on availability at no extra charge. Our concierge can arrange luggage storage if needed."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Subscribe to Our Newsletter"
          description="Get exclusive offers, special events, and travel tips delivered to your inbox. Join our community of luxury travelers"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763919372905-g5vi4c8s.jpg"
          imageAlt="Hotel evening atmosphere"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. You can unsubscribe anytime. Read our privacy policy for more details."
          onSubmit={() => console.log('Newsletter subscription')}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Luxe Stay"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© Luxe Stay Hotel, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "About",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Rooms", href: "pricing" },
                { label: "Amenities", href: "features" },
                { label: "Dining", href: "amenities" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Booking Help", href: "help" },
                { label: "Feedback", href: "feedback" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/luxestay", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/luxestay", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com/luxestay", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/luxestay", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}