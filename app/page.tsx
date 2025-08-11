'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

import { Heart, MapPin, Calendar, Clock, Gift, Users, Sparkles, Camera, Music } from 'lucide-react'

export default function WeddingWebsite() {
const [activeSection, setActiveSection] = useState('home')




const renderNavigation = () => (
  <>
    {/* Desktop Navigation */}
    <nav className="hidden md:block fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[var(--elegant-border)] shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Diana & Victor"
              width={80}
              height={40}
              className="object-contain"
            />
          </div>
          
          <div className="flex items-center space-x-12">
            {[
              { id: 'home', label: 'Home' },
              { id: 'registry', label: 'Registry' },
              { id: 'dresscode', label: 'Dress Code' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-light text-base tracking-wide transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-[var(--elegant-gold)]' 
                    : 'text-[var(--elegant-brown-dark)] hover:text-[var(--elegant-gold)]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--elegant-gold)]"></div>
                )}
              </button>
            ))}
          </div>
          
          <div>
            <Button
              onClick={() => window.open('https://tally.so/r/nPqb7V', '_blank')}
              className="bg-[var(--elegant-gold)] hover:bg-[var(--elegant-gold-dark)] text-white px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 border-0 rounded-none"
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </nav>
    
    {/* Mobile Header - Logo Only */}
    <div className="md:hidden fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[var(--elegant-border)] shadow-sm">
      <div className="flex items-center justify-center h-16 px-6">
        <Image
          src="/logo.png"
          alt="Diana & Victor"
          width={80}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
    
    {/* Mobile Navigation Tabs - Fixed at bottom */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[var(--elegant-border)] z-50">
      <div className="grid grid-cols-4 h-16">
        {[
          { id: 'home', label: 'Home' },
          { id: 'registry', label: 'Registry' },
          { id: 'dresscode', label: 'Dress' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-[var(--elegant-gold)] bg-[var(--elegant-gold)]/5' 
                : 'text-[var(--elegant-brown-dark)] hover:text-[var(--elegant-gold)] hover:bg-[var(--elegant-gold)]/5'
            }`}
          >
            <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
              activeSection === item.id ? 'bg-[var(--elegant-gold)]' : 'bg-transparent'
            }`}></div>
            <span className="text-xs font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
        
        {/* RSVP Button */}
        <button
          onClick={() => window.open('https://tally.so/r/nPqb7V', '_blank')}
          className="flex flex-col items-center justify-center bg-[var(--elegant-gold)] text-white transition-all duration-300 hover:bg-[var(--elegant-gold-dark)]"
        >
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <span className="text-xs font-medium tracking-wide">RSVP</span>
        </button>
      </div>
    </div>
  </>
)

const renderHome = () => (
  <>
    <section className="relative min-h-screen bg-[var(--elegant-cream)]">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--elegant-gold) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Hero Logo Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <Image
                src="/logo.png"
                alt="Diana & Victor"
                width={300}
                height={150}
                className="object-contain mx-auto"
              />
            </div>
            
            {/* Elegant Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-[var(--elegant-gold)] w-24"></div>
              <div className="mx-4 w-2 h-2 bg-[var(--elegant-gold)] rounded-full"></div>
              <div className="h-px bg-[var(--elegant-gold)] w-24"></div>
            </div>
            
            {/* Event Details */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-light text-[var(--elegant-brown-dark)] tracking-wider mb-2">
                    Traditional Wedding
                  </h2>
                  <div className="w-16 h-px bg-[var(--elegant-gold)] mx-auto"></div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[var(--elegant-gold)]"></div>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-light text-[var(--elegant-brown-dark)] tracking-wider mb-2">
                    La Dot
                  </h2>
                  <div className="w-16 h-px bg-[var(--elegant-gold)] mx-auto"></div>
                </div>
              </div>
              
              <p className="text-lg text-[var(--elegant-brown)] font-light max-w-2xl mx-auto leading-relaxed">
                A beautiful union of cultures and traditions
              </p>
            </div>
          </div>
          
          {/* Date and Location */}
          <div className="bg-white/60 backdrop-blur-sm border border-[var(--elegant-border)] rounded-none p-12 mb-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--elegant-gold)]/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-[var(--elegant-gold)]" />
                </div>
                <h3 className="text-xl font-light text-[var(--elegant-brown-dark)] tracking-wide">Date</h3>
                <p className="text-2xl font-light text-[var(--elegant-gold)]">November 29th, 2025</p>
                <p className="text-base text-[var(--elegant-brown)] font-light">4:00 PM - 12:00 AM</p>
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--elegant-gold)]/10 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-[var(--elegant-gold)]" />
                </div>
                <h3 className="text-xl font-light text-[var(--elegant-brown-dark)] tracking-wide">Location</h3>
                <p className="text-2xl font-light text-[var(--elegant-gold)]">Casa Social De Madeira</p>
                <p className="text-base text-[var(--elegant-brown)] font-light">Pretoria, South Africa</p>
              </div>
            </div>
          </div>
          
          {/* Invitation Message */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl md:text-2xl font-light text-[var(--elegant-brown-dark)] leading-relaxed mb-8">
              You are cordially invited to join us in celebrating our traditional wedding, a magnificent union where two cultures and worlds unite as one. It will be our great honor and joy to share this extraordinary day with you as we embark on our beautiful journey together.
            </p>
            
            <Button 
              onClick={() => window.open('https://tally.so/r/nPqb7V', '_blank')}
              className="bg-[var(--elegant-gold)] hover:bg-[var(--elegant-gold-dark)] text-white px-12 py-4 text-lg font-light tracking-wider transition-all duration-300 border-0 rounded-none min-w-[200px]"
            >
              RSVP 
            </Button>
          </div>
          
        </div>
      </div>
    </section>

    <section className="py-20 bg-[var(--elegant-beige)] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 pattern-animation">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--elegant-gold)] mb-4 gold-text-shadow">Our Love Story</h2>
          <p className="text-xl text-[var(--elegant-brown-dark)] max-w-2xl mx-auto font-medium">
            A beautiful journey of love, laughter, and shared dreams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/images/image0.jpg"
              alt="Diana and Michael engagement"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <Card className="border-2 border-[var(--elegant-gold)] shadow-2xl elegant-glass-gold transform hover:scale-105 transition-all duration-300">
              <CardHeader className="elegant-gradient-gold">
                <CardTitle className="flex items-center space-x-2 text-[var(--elegant-brown-dark)]">
                  <Heart className="h-5 w-5 text-[var(--elegant-gold-dark)] float-animation" />
                  <span className="elegant-text-shadow">How We Met</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[var(--elegant-white)] bg-opacity-95">
                <p className="text-[var(--elegant-brown-dark)] leading-relaxed font-medium">
It all began at the Parish of Maria Regina, not inside the church, but in the quiet familiarity of the parish home, where Diana's late cousin was serving as a priest (Rest in Peace Fr. Muhau). That is where Victor and Diana first crossed paths. There were no grand declarations or instant sparks, just two people meeting under ordinary circumstances, unaware that life had something in store for them.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[var(--elegant-brown)] shadow-2xl elegant-glass-brown transform hover:scale-105 transition-all duration-300">
              <CardHeader className="elegant-gradient-brown">
                <CardTitle className="flex items-center space-x-2 text-[var(--elegant-cream)]">
                  <Heart className="h-5 w-5 text-[var(--elegant-gold)] float-animation" />
                  <span className="elegant-text-shadow">From Friends to Forever</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[var(--elegant-white)] bg-opacity-95">
                <p className="text-[var(--elegant-brown-dark)] leading-relaxed font-medium">
In the years that followed, they became friends. The kind of friends who laugh easily, talk often, and genuinely enjoy each other's company. Their friendship was patient and steady, growing quietly in the background of their busy lives. But time has a way of revealing what is meant to be. What started as friendship slowly deepened into something more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[var(--elegant-gold)] shadow-2xl elegant-glass transform hover:scale-105 transition-all duration-300">
              <CardHeader className="elegant-gradient-cream">
                <CardTitle className="flex items-center space-x-2 text-[var(--elegant-brown-dark)]">
                  <Sparkles className="h-5 w-5 text-[var(--elegant-gold)] float-animation" />
                  <span className="elegant-text-shadow">The Puppy That Stole Hearts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[var(--elegant-white)] bg-opacity-95">
                <p className="text-[var(--elegant-brown-dark)] leading-relaxed font-medium">
                 And then, there was the puppy. Victor, knowing Diana's love for dogs, surprised her with a mischievous little one. That pup brought chaos and laughter into the house and quickly became a beloved member of the family. Just like Victor did. Their story has always been about love built on friendship, understanding, and shared joy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-[var(--african-green)] shadow-2xl african-glass-green transform hover:scale-105 transition-all duration-500 hover:rotate-2">
            <CardContent className="pt-6">
              <div className="w-20 h-20 african-gradient-green rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Camera className="h-10 w-10 text-[var(--african-cream)]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--african-green-dark)] african-text-shadow">Shared Adventures</h3>
              <p className="text-[var(--african-green-dark)] font-medium">From city explorations to quiet moments in nature</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 border-[var(--african-red)] shadow-2xl african-glass-red transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <CardContent className="pt-6">
              <div className="w-20 h-20 african-gradient-red rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Music className="h-10 w-10 text-[var(--african-cream)]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--african-red-dark)] african-text-shadow">Cultural Heritage</h3>
              <p className="text-[var(--african-green-dark)] font-medium">Celebrating our rich traditions and creating new ones</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 border-[var(--african-gold)] shadow-2xl african-glass transform hover:scale-105 transition-all duration-500 hover:rotate-2">
            <CardContent className="pt-6">
              <div className="w-20 h-20 african-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Heart className="h-10 w-10 text-[var(--african-red)]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--african-green-dark)] african-text-shadow">Forever Love</h3>
              <p className="text-[var(--african-green-dark)] font-medium">Building a future filled with love, laughter, and dreams</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>

    <section className="py-20 bg-[var(--elegant-white)] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16 pattern-animation">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--elegant-gold)] mb-4 gold-text-shadow">Wedding Details</h2>
          <p className="text-xl text-[var(--elegant-brown-dark)] font-medium">Join us for a celebration of love and unity</p>
        </div>
        
        <div className="mb-12">
          <Card className="border-2 border-[var(--elegant-gold)] shadow-2xl elegant-glass-gold transform hover:scale-105 transition-all duration-300 max-w-5xl mx-auto">
            <CardHeader className="elegant-gradient-gold">
              <CardTitle className="flex items-center justify-center space-x-3 text-[var(--elegant-brown-dark)]">
                <MapPin className="h-8 w-8 float-animation" />
                <span className="elegant-text-shadow text-3xl">Venue</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 bg-[var(--elegant-white)] bg-opacity-95">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-[var(--elegant-gold)] flex-shrink-0" />
                <div>
                    <p className="font-bold text-[var(--elegant-brown-dark)] text-xl">Saturday, November 29, 2025</p>
                    <p className="text-[var(--elegant-brown-dark)] font-medium text-lg">16:00 - 00:00</p>
              </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-8 w-8 text-[var(--elegant-gold)] mt-1 flex-shrink-0" />
                <div>
                    <a href="https://maps.app.goo.gl/ycymZbvMzYfXh5FBA" className="font-semibold text-[var(--elegant-gold)] hover:text-[var(--elegant-gold-dark)] transition-colors">Casa Social De Madeira</a>
                    <p className="text-[var(--elegant-brown-dark)] font-medium text-lg">34 Boschkop Rd, Zwavelpoort</p>
                    <p className="text-base text-[var(--elegant-brown)] italic mt-2">A beautiful ceremony surrounded by family and friends</p>
              </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* <Card className="border-2 border-orange-100 shadow-lg">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 text-center">Questions?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">3:30 PM</span>
                  <span>Guest Arrival & Seating</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4:00 PM</span>
                  <span>Wedding Ceremony</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5:00 PM</span>
                  <span>Photography & Cocktails</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">6:30 PM</span>
                  <span>Reception Begins</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">8:00 PM</span>
                  <span>Dinner Service</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">9:30 PM</span>
                  <span>Dancing & Celebration</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  </>
)



const renderRegistry = () => (
  <section className="py-20 bg-[var(--elegant-beige)] relative overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-12 pattern-animation">
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--elegant-gold)] mb-4 gold-text-shadow">Gift Registry</h2>
        {/* <p className="text-xl text-[#2a4b39] max-w-3xl mx-auto font-medium">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
          we've curated these registries and experiences to help us begin our new journey together.
        </p> */}
      </div>

      <div className="text-center mt-12 elegant-glass p-8 rounded-2xl max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl text-[var(--elegant-gold)] mb-4 gold-text-shadow">With Gratitude</h3>
        <p className="text-[var(--elegant-brown)] text-lg font-medium mb-4">
          We are delighted to share this special day with you. Should you wish to honour our union with a gift, it will be received with sincere gratitude and cherished as we begin our life together.
        </p>
        <p className="text-[var(--elegant-gold-dark)] font-medium">
          To assist you, we have prepared a gift registry for your convenience.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/logo.png"
            alt="Diana & Victor"
            width={150}
            height={75}
            className="object-contain float-animation"
          />
        </div>
      </div>
      
      {/* Creative Image12 - Part of Content */}
      <div className="flex justify-center mb-12 mt-15">
        <div className="pulse-glow-animation shimmer-effect">
          <Image
            src="/images/image12.jpg"
            alt="Wedding celebration"
            width={400}
            height={300}
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 border-4 border-[#d4a574]"
            style={{
              filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(212, 165, 116, 0.5)'
            }}
          />
        </div>
      </div>
      
      <div className="mb-12 mt-15">
        <h3 className="font-serif text-2xl text-[var(--elegant-gold)] mb-8 text-center gold-text-shadow">Our Curated Registries</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Le Creuset Registry */}
          <Card className="border-2 border-[var(--elegant-gold)] shadow-2xl elegant-glass-gold transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="elegant-gradient-gold text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[var(--elegant-brown-dark)]">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSg4CTX1Oqwzq-oQW5fH172BpQTsv1ribNw&s" alt="Le Creuset" width={24} height={24} />
                <span className="elegant-text-shadow text-xl">Le Creuset</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[var(--elegant-white)] bg-opacity-95 text-center">
              <h4 className="font-bold text-[var(--elegant-brown-dark)] text-lg">Premium Cookware & Kitchen Essentials</h4>
              <p className="text-[var(--elegant-brown)] text-sm">
                Discover our selection of high-quality cookware, bakeware, and kitchen accessories from the renowned French brand Le Creuset.
              </p>
              <Button 
                onClick={() => window.open('https://www.lecreuset.co.za/gift-registry.html?mrrid=4929886', '_blank')}
                className="w-full elegant-gradient-gold hover:elegant-gradient-brown text-[var(--elegant-brown-dark)] transform hover:scale-105 transition-all duration-300 gold-text-shadow"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>

          {/* Yuppiechef Registry */}
          <Card className="border-2 border-[var(--elegant-brown)] shadow-2xl elegant-glass-brown transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="elegant-gradient-brown text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[var(--elegant-cream)]">
              <Image src="https://upload.wikimedia.org/wikipedia/en/e/e1/Yuppiechef_Logo.png" alt="Le Creuset" width={24} height={24} />
                <span className="elegant-text-shadow text-xl">Yuppiechef</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[var(--elegant-white)] bg-opacity-95 text-center">
              <h4 className="font-bold text-[var(--elegant-brown-dark)] text-lg">Kitchen & Home Appliances</h4>
              <p className="text-[var(--elegant-brown)] text-sm">
                Find everything you need for the modern kitchen and home, from small appliances to gourmet ingredients and homeware.
              </p>
              <Button 
                onClick={() => window.open('http://www.yuppiechef.com/yc8796034', '_blank')}
                className="w-full elegant-gradient-brown hover:elegant-gradient-gold text-[var(--elegant-cream)] transform hover:scale-105 transition-all duration-300 elegant-text-shadow"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>

          {/* Mr Price Home Registry */}
          <Card className="border-2 border-[var(--elegant-gold)] shadow-2xl elegant-glass transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="elegant-gradient-cream text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[var(--elegant-brown-dark)]">
              <Image src="https://www.inspiredlivingsa.co.za/wp-content/uploads/2013/11/MRPHOME-LOGOWHITE.jpg" alt="Mr Price Home" width={24} height={24} />
                <span className="elegant-text-shadow text-xl">Mr Price Home</span>
              </CardTitle>
        </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[var(--elegant-white)] bg-opacity-95 text-center">
              <h4 className="font-bold text-[var(--elegant-brown-dark)] text-lg">Home Decor & Essentials</h4>
              <p className="text-[var(--elegant-gold-dark)] text-sm">
                Stylish and affordable home decor, furniture, and household essentials to help us create our perfect home together.
              </p>
              <div className="mb-3">
                <p className="text-xs text-[var(--elegant-brown-dark)] font-medium">Registry ID: <span className="font-bold text-[var(--elegant-gold)]">DWWEDD4381</span></p>
              </div>
              <Button 
                onClick={() => window.open('https://www.mrphome.com/en_za/giftregistry/view/index/id/DWWEDD4381', '_blank')}
                className="w-full elegant-gradient-cream hover:elegant-gradient-gold text-[var(--elegant-brown-dark)] transform hover:scale-105 transition-all duration-300 elegant-text-shadow border-2 border-[var(--elegant-gold)]"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>
              </div>
            </div>
            
      {/* Cash Contributions Section */}
      <Card className="border-2 border-[var(--elegant-gold)] elegant-glass-gold shadow-2xl max-w-4xl mx-auto">
        <CardHeader className="elegant-gradient-gold text-center">
          <CardTitle className="flex items-center justify-center space-x-3 text-[var(--elegant-brown-dark)]">
            <Gift className="h-8 w-8 float-animation" />
            <span className="elegant-text-shadow text-2xl">Cash Contributions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 space-y-6 bg-[var(--elegant-white)] bg-opacity-95">
          <p className="text-center text-[var(--elegant-brown-dark)] font-medium text-lg mb-6">
            For those who prefer to give cash gifts, we've made it easy with our banking details below
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="elegant-glass p-6 rounded-xl border-2 border-[var(--elegant-gold)]">
              <h4 className="font-bold text-[var(--elegant-brown-dark)] text-lg mb-4 elegant-text-shadow">Bank Information</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-brown)] font-medium">Bank Name:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold">Standard Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-brown)] font-medium">Branch:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold">Centurion Lifestyle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-brown)] font-medium">Branch Code:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold">2645</span>
            </div>
            </div>
            </div>
            
            <div className="elegant-glass p-6 rounded-xl border-2 border-[var(--elegant-gold)]">
              <h4 className="font-bold text-[var(--elegant-brown-dark)] text-lg mb-4 elegant-text-shadow">Account Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-gold-dark)] font-medium">Account Name:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold text-sm">Diana Mawoko/Victor Sitanimezi</span>
            </div>
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-gold-dark)] font-medium">Account Number:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold">10240912622</span>
    </div>
                <div className="flex justify-between">
                  <span className="text-[var(--elegant-gold-dark)] font-medium">Account Type:</span>
                  <span className="text-[var(--elegant-brown-dark)] font-bold">Current</span>
                </div>
              </div>
              </div>
      </div>
      
          <div className="text-center elegant-glass p-4 rounded-xl border-2 border-[var(--elegant-gold)]">
            <h4 className="font-bold text-[var(--elegant-brown-dark)] mb-2 elegant-text-shadow">Payment Reference</h4>
            <p className="text-[var(--elegant-gold-dark)] font-medium">Suggested Reference: <span className="text-[var(--elegant-brown-dark)] font-bold">Your name and surname</span></p>
          </div>
        </CardContent>
      </Card>

      {/* Thank You Message */}
      
    </div>
  </section>
)

const renderDressCode = () => (
  <section className="py-20 bg-[var(--elegant-white)] relative overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-12 pattern-animation">
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--elegant-gold)] mb-4 gold-text-shadow">Dress Code</h2>
        <p className="text-xl text-[var(--elegant-brown-dark)] font-medium mb-6">
          Celebrating our heritage with elegance and unity
        </p>
        <div className="elegant-glass p-6 rounded-2xl max-w-4xl mx-auto">
          <p className="text-lg text-[var(--elegant-brown-dark)] font-medium leading-relaxed">
            Uniforms are available for purchase based on who invited you - either the <span className="font-bold text-[var(--elegant-brown)]">Mawoko's (Green and Red)</span> or the <span className="font-bold text-[var(--elegant-gold-dark)]">Sitanimezi's (Navy Blue)</span>. While wearing a uniform is not mandatory, it is warmly encouraged to help us celebrate in unity.
          </p>
        </div>
      </div>
      
      {/* Uniform Options */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl text-[#2a4b39] mb-8 text-center african-text-shadow">Uniform Options - R200 Each</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Mawoko Family Uniform */}
          <Card className="border-2 border-[#3d6852] shadow-2xl african-glass-green transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="african-gradient-green text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[#f8f5f0]">
                <Users className="h-6 w-6 float-animation" />
                <span className="african-text-shadow text-xl">Mawoko Family</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[#f8f5f0] bg-opacity-95 text-center">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/green.jpeg"
                  alt="Mawoko Family Uniform - Green and Red"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <h4 className="font-bold text-[#2a4b39] text-lg">Green & Red Uniform</h4>
              <p className="text-[#3d6852] font-medium">
                Beautiful traditional design featuring rich green and red colors representing the Mawoko heritage.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="w-8 h-8 bg-[#3d6852] rounded-full border-2 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-[#c4403e] rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="african-glass p-3 rounded-lg border border-[#3d6852]">
                <p className="text-[#2a4b39] font-bold text-lg">R200</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Sitanimezi Family Uniform */}
          <Card className="border-2 border-[#2b4a84] shadow-2xl african-glass transform hover:scale-105 transition-all duration-300 hover:rotate-1" style={{backgroundColor: 'rgba(43, 74, 132, 0.1)'}}>
            <CardHeader className="text-center" style={{background: 'linear-gradient(135deg, #2b4a84, #4a6fa5)'}}>
              <CardTitle className="flex items-center justify-center space-x-2 text-white">
                <Users className="h-6 w-6 float-animation" />
                <span className="african-text-shadow text-xl">Sitanimezi Family</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[#f8f5f0] bg-opacity-95 text-center">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/blue.jpg"
                  alt="Sitanimezi Family Uniform - Navy Blue"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
                </div>
              <h4 className="font-bold text-[#2a4b39] text-lg">Navy Blue Uniform</h4>
              <p className="text-[#2b4a84] font-medium">
                Elegant navy blue traditional design representing the distinguished Sitanimezi family heritage.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="w-8 h-8 bg-[#2b4a84] rounded-full border-2 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-[#4a6fa5] rounded-full border-2 border-white shadow-lg"></div>
                </div>
              <div className="african-glass p-3 rounded-lg border border-[#2b4a84]">
                <p className="text-[#2a4b39] font-bold text-lg">R200</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Creative Image13 - Part of Content */}
      <div className="flex justify-center mb-12">
        <div className="bounce-rotate-animation">
          <div className="relative">
            <Image
              src="/images/image13.jpg"
              alt="Celebration moment"
              width={350}
              height={280}
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-[#c4403e]"
              style={{
                filter: 'brightness(1.2) contrast(1.1) saturate(1.3)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(196, 64, 62, 0.4)'
              }}
            />
            {/* Decorative dots around image13 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d4a574] rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#3d6852] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Payment Information */}
      <Card className="border-2 border-[#3d6852] african-glass-green shadow-2xl max-w-4xl mx-auto mb-8">
        <CardHeader className="african-gradient-green text-center">
          <CardTitle className="flex items-center justify-center space-x-3 text-[#f8f5f0]">
            <Gift className="h-8 w-8 float-animation" />
            <span className="african-text-shadow text-2xl text-[var(--elegant-brown-dark)]">Payment Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 space-y-6 bg-[#f8f5f0] bg-opacity-95">
          <p className="text-center text-[#2a4b39] font-medium text-lg mb-6">
            To purchase your material, please use the following Standard Bank details
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="african-glass p-6 rounded-xl border-2 border-[#d4a574]">
              <h4 className="font-bold text-[#2a4b39] text-lg mb-4 african-text-shadow">Bank Information</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#3d6852] font-medium">Bank Name:</span>
                  <span className="text-[#2a4b39] font-bold">Standard Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#3d6852] font-medium">Branch:</span>
                  <span className="text-[#2a4b39] font-bold">Centurion Lifestyle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#3d6852] font-medium">Branch Code:</span>
                  <span className="text-[#2a4b39] font-bold">2645</span>
                </div>
              </div>
            </div>
            
            <div className="african-glass p-6 rounded-xl border-2 border-[#c4403e]">
              <h4 className="font-bold text-[#2a4b39] text-lg mb-4 african-text-shadow">Account Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#c4403e] font-medium">Account Name:</span>
                  <span className="text-[#2a4b39] font-bold text-sm">Diana Mawoko/Victor Sitanimezi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c4403e] font-medium">Account Number:</span>
                  <span className="text-[#2a4b39] font-bold">10240912622</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c4403e] font-medium">Account Type:</span>
                  <span className="text-[#2a4b39] font-bold">Current</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center african-glass p-4 rounded-xl border-2 border-[#d4a574]">
            <h4 className="font-bold text-[#2a4b39] mb-2 african-text-shadow">Payment Reference</h4>
            <p className="text-[#d4a574] font-medium">Reference: Your Name - Family (Mawoko/Sitanimezi)</p>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="border-2 border-[#2b4a84] shadow-2xl african-glass">
        <CardContent className="text-center p-8">
          <h3 className="font-bold text-xl text-[#2a4b39] mb-6 african-text-shadow">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="african-glass p-4 rounded-lg border border-[#3d6852]">
              <h4 className="font-bold text-[#2a4b39] mb-3 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#c4403e]" />
                Delivery Process
              </h4>
              <p className="text-[#3d6852] font-medium">
                Once payment and RSVP are confirmed, the material will be delivered accordingly. Please ensure you send us your contact details.
              </p>
            </div>
            <div className="african-glass p-4 rounded-lg border border-[#2b4a84]">
              <h4 className="font-bold text-[#2a4b39] mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-[#c4403e]" />
                Unity in Celebration
              </h4>
              <p className="text-[#2b4a84] font-medium">
                While materials are encouraged, they are not mandatory. We celebrate the beauty of our cultural heritage in all its forms.
              </p>
            </div>
          </div>
          
          <div className="mt-8 african-glass p-6 rounded-xl border-2 border-[#d4a574]">
            <p className="text-[#2a4b39] font-medium text-lg">
              For uniform sizing, delivery questions, or other inquiries, please contact us at 
              <span className="text-[#c4403e] font-bold"> +27 79 246 8279</span> or 
              <span className="text-[#c4403e] font-bold"> weddingdianavictor@gmail.com</span>
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Creative Image14 - Part of Content */}
      <div className="flex justify-center mt-12">
        <div className="heartbeat-zoom-animation">
          <div className="relative">
            <Image
              src="/images/image14.jpg"
              alt="Joyful celebration"
              width={380}
              height={320}
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 border-4 border-[#3d6852]"
              style={{
                filter: 'brightness(1.15) contrast(1.2) saturate(1.2)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3), 0 0 40px rgba(61, 104, 82, 0.5)',
                background: 'linear-gradient(45deg, rgba(212, 165, 116, 0.1), rgba(196, 64, 62, 0.1))'
              }}
            />
            {/* Sparkle effects around image14 */}
            <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#d4a574] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-2 -right-8 w-3 h-3 bg-[#c4403e] rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-6 -right-6 w-5 h-5 bg-[#3d6852] rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute -bottom-2 -left-8 w-3 h-3 bg-[#d4a574] rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

return (
  <div className="min-h-screen bg-white">
    {renderNavigation()}
    <main className="pt-16 md:pt-20 pb-16 md:pb-0">
      {activeSection === 'home' && renderHome()}
      {activeSection === 'registry' && renderRegistry()}
      {activeSection === 'dresscode' && renderDressCode()}
    </main>
    
    <footer className="bg-[var(--elegant-beige)] relative overflow-hidden py-16">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Diana & Victor"
            width={200}
            height={100}
            className="object-contain float-animation"
          />
        </div>
        <div className="elegant-glass p-6 rounded-2xl max-w-2xl mx-auto mb-6">
          <p className="text-[var(--elegant-brown-dark)] mb-4 text-lg font-medium">November 29, 2025 • Pretoria, South Africa</p>
          <p className="text-[var(--elegant-brown)] text-base elegant-text-shadow">
          We can't wait to celebrate with you!
        </p>
        </div>
        <div className="elegant-glass p-4 rounded-xl max-w-xl mx-auto">
          <p className="text-sm text-[var(--elegant-brown-dark)] font-medium">
            For questions, please contact us at 
            <br className="sm:hidden" />
            <span className="text-[var(--elegant-gold)] font-semibold"> weddingdianavictor@gmail.com</span>
            <br className="sm:hidden" /><span> or 
            <span className="text-[var(--elegant-gold)] font-semibold"> +27 79 246 8279</span></span>
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-[var(--elegant-gold)] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[var(--elegant-brown)] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-[var(--elegant-gold-dark)] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </footer>
  </div>
)
}