'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

import { Heart, MapPin, Calendar, Clock, Gift, Users, Sparkles, Camera, Music } from 'lucide-react'
import { AfricanTextileOverlay, AfricanCornerDecoration } from '../components/african-patterns'

export default function WeddingWebsite() {
const [activeSection, setActiveSection] = useState('home')




const renderNavigation = () => (
  <nav className="fixed top-0 w-full african-glass z-50 border-b african-border-pattern">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 float-animation">
          <Heart className="h-6 w-6 text-[#c4403e]" />
          <span className="font-serif text-xl text-[#2a4b39] african-text-shadow">Diana & Victor</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'registry', label: 'Registry' },
            { id: 'dresscode', label: 'Dress Code' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-[#c4403e] border-b-2 border-[#c4403e] transform scale-105' 
                  : 'text-[#2a4b39] hover:text-[#c4403e] hover:scale-105'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => window.open('https://tally.so/r/nPqb7V', '_blank')}
            className="african-gradient-red hover:african-gradient-green text-white px-6 py-2 text-sm rounded-full transform hover:scale-105 transition-all duration-300 african-text-shadow"
          >
            RSVP
          </Button>
        </div>
        <div className="md:hidden">
          <select 
            value={activeSection} 
            onChange={(e) => setActiveSection(e.target.value)}
            className="text-sm border-2 border-[#3d6852] rounded-lg px-3 py-2 african-glass"
          >
            <option value="home">Home</option>
            <option value="registry">Registry</option>
            <option value="dresscode">Dress Code</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
)

const renderHome = () => (
  <>
    <section className="min-h-screen relative flex items-center justify-center african-pattern-green overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/couple-ferns.jpg"
          alt="Diana and Victor"
          fill
          className="object-cover mix-blend-overlay opacity-80"
          priority
        />
        <div className="absolute inset-0 african-gradient-warm opacity-60"></div>
        <div className="absolute inset-0 african-pattern-red opacity-20"></div>
      </div>
      
      {/* Creative Corner Images */}
      {/* Top Left Corner */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-8 z-20 corner-image-container">
        <div className="relative group corner-image-animation">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 transform -rotate-12 hover:rotate-6 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image1.jpg"
              alt="Wedding moment 1"
              fill
              className="object-cover rounded-2xl shadow-2xl border-3 md:border-4 border-[#f8f5f0] group-hover:border-[#d4a574] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d6852]/20 to-[#c4403e]/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-[#d4a574] rounded-full animate-pulse">
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
      
      {/* Top Right Corner */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 z-20 corner-image-container">
        <div className="relative group corner-image-animation" style={{animationDelay: '0.5s'}}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 transform rotate-12 hover:-rotate-6 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image2.jpg"
              alt="Wedding moment 2"
              fill
              className="object-cover rounded-2xl shadow-2xl border-3 md:border-4 border-[#f8f5f0] group-hover:border-[#c4403e] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#c4403e]/20 to-[#3d6852]/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 bg-[#c4403e] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '0.3s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Left Corner */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 z-20 corner-image-container">
        <div className="relative group corner-image-animation" style={{animationDelay: '1s'}}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 transform rotate-6 hover:-rotate-12 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image3.JPG"
              alt="Wedding moment 3"
              fill
              className="object-cover rounded-2xl shadow-2xl border-3 md:border-4 border-[#f8f5f0] group-hover:border-[#3d6852] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a574]/20 to-[#c4403e]/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-[#3d6852] rounded-full animate-pulse" style={{animationDelay: '1s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '0.7s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Right Corner */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 z-20 corner-image-container">
        <div className="relative group corner-image-animation" style={{animationDelay: '1.5s'}}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 transform -rotate-6 hover:rotate-12 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image4.jpg"
              alt="Wedding moment 4"
              fill
              className="object-cover rounded-2xl shadow-2xl border-3 md:border-4 border-[#f8f5f0] group-hover:border-[#d4a574] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#3d6852]/20 to-[#d4a574]/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 bg-[#d4a574] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '1.2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Additional Creative Images */}
      {/* Left Edge - Image 5 */}
      <div className="absolute left-1 top-1/3 sm:left-2 md:left-4 z-15 corner-image-container">
        <div className="relative group gallery-drift-animation" style={{animationDelay: '2s'}}>
          <div className="w-12 h-16 sm:w-16 sm:h-20 md:w-24 md:h-32 lg:w-28 lg:h-36 transform rotate-3 hover:-rotate-6 transition-all duration-700 hover:scale-105 corner-image-frame">
            <Image
              src="/images/image5.jpg"
              alt="Wedding moment 5"
              fill
              className="object-cover rounded-xl shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#c4403e] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#c4403e]/15 to-[#d4a574]/15 rounded-xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-[#c4403e] rounded-full animate-pulse" style={{animationDelay: '2.2s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '1.8s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Right Edge - Image 6 */}
      <div className="absolute right-1 top-1/3 sm:right-2 md:right-4 z-15 corner-image-container">
        <div className="relative group gallery-drift-animation" style={{animationDelay: '2.3s'}}>
          <div className="w-12 h-16 sm:w-16 sm:h-20 md:w-24 md:h-32 lg:w-28 lg:h-36 transform -rotate-3 hover:rotate-6 transition-all duration-700 hover:scale-105 corner-image-frame">
            <Image
              src="/images/image6.jpg"
              alt="Wedding moment 6"
              fill
              className="object-cover rounded-xl shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#3d6852] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#3d6852]/15 to-[#d4a574]/15 rounded-xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-[#3d6852] rounded-full animate-pulse" style={{animationDelay: '2.5s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '2.1s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Top Edge Center Left - Image 7 */}
      <div className="absolute top-1 left-1/4 sm:top-2 md:top-4 z-15 corner-image-container">
        <div className="relative group corner-image-animation" style={{animationDelay: '2.6s'}}>
          <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32 transform rotate-12 hover:-rotate-3 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image7.jpg"
              alt="Wedding moment 7"
              fill
              className="object-cover rounded-full shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#d4a574] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574]/15 to-[#c4403e]/15 rounded-full group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-[#d4a574] rounded-full animate-pulse" style={{animationDelay: '2.8s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '2.4s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Top Edge Center Right - Image 8 */}
      <div className="absolute top-1 right-1/4 sm:top-2 md:top-4 z-15 corner-image-container">
        <div className="relative group corner-image-animation" style={{animationDelay: '2.9s'}}>
          <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-32 lg:h-32 transform -rotate-12 hover:rotate-3 transition-all duration-700 hover:scale-110 corner-image-frame">
            <Image
              src="/images/image8.JPG"
              alt="Wedding moment 8"
              fill
              className="object-cover rounded-full shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#c4403e] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#c4403e]/15 to-[#3d6852]/15 rounded-full group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-[#c4403e] rounded-full animate-pulse" style={{animationDelay: '3.1s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '2.7s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Edge Center Left - Image 9 */}
      <div className="absolute bottom-1 left-1/4 sm:bottom-2 md:bottom-4 z-15 corner-image-container">
        <div className="relative group gallery-drift-animation" style={{animationDelay: '3.2s'}}>
          <div className="w-12 h-18 sm:w-16 sm:h-24 md:w-22 md:h-32 lg:w-26 lg:h-36 transform rotate-8 hover:-rotate-4 transition-all duration-700 hover:scale-105 corner-image-frame">
            <Image
              src="/images/image9.JPG"
              alt="Wedding moment 9"
              fill
              className="object-cover rounded-lg shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#3d6852] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3d6852]/15 to-[#d4a574]/15 rounded-lg group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-[#3d6852] rounded-full animate-pulse" style={{animationDelay: '3.4s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Edge Center Right - Image 10 */}
      <div className="absolute bottom-1 right-1/4 sm:bottom-2 md:bottom-4 z-15 corner-image-container">
        <div className="relative group gallery-drift-animation" style={{animationDelay: '3.5s'}}>
          <div className="w-12 h-18 sm:w-16 sm:h-24 md:w-22 md:h-32 lg:w-26 lg:h-36 transform -rotate-8 hover:rotate-4 transition-all duration-700 hover:scale-105 corner-image-frame">
            <Image
              src="/images/image10.jpg"
              alt="Wedding moment 10"
              fill
              className="object-cover rounded-lg shadow-xl border-2 md:border-3 border-[#f8f5f0] group-hover:border-[#d4a574] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#d4a574]/15 to-[#c4403e]/15 rounded-lg group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-[#d4a574] rounded-full animate-pulse" style={{animationDelay: '3.7s'}}>
            <div className="absolute inset-0 bg-[#f8f5f0] rounded-full animate-ping opacity-75" style={{animationDelay: '3.3s'}}></div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-8 pattern-animation">
          <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight text-[#f8f5f0] african-text-shadow">
            Diana & Victor
          </h1>
          
          {/* Traditional Wedding & Dot Celebration */}
          <div className="mb-6 space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-2xl md:text-3xl font-bold text-[#f8f5f0]">
              <span className="african-glass px-6 py-3 rounded-2xl border-2 border-[#d4a574] african-text-shadow">
                Traditional Wedding
              </span>
              <span className="text-[#d4a574] text-4xl md:text-5xl font-light">•</span>
              <span className="african-glass px-6 py-3 rounded-2xl border-2 border-[#c4403e] african-text-shadow">
                Dot Celebration
              </span>
            </div>
            <p className="text-lg md:text-xl font-medium text-[#2a4b39] african-text-shadow">
              A beautiful union of cultures and traditions
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl font-light text-[#f8f5f0] mb-8">
            <span className="african-glass px-4 py-2 rounded-full">November 29th, 2025</span>
            <Heart className="h-8 w-8 text-[#c4403e] float-animation" />
            <span className="african-glass px-4 py-2 rounded-full">Pretoria, South Africa</span>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-[#f8f5f0] african-glass p-6 rounded-2xl">
            {"We're celebrating our Traditional Wedding and Dot ceremony, and we would love for you to join us on our special day as we begin this beautiful journey together, honoring both our heritage and our future."}
          </p>
          <Button 
            onClick={() => window.open('https://tally.so/r/nPqb7V', '_blank')}
            className="african-gradient-red hover:african-gradient-green text-white px-10 py-4 text-lg font-medium rounded-full transform hover:scale-110 transition-all duration-300 african-text-shadow border-2 border-[#d4a574]"
          >
            RSVP Now
          </Button>
        </div>
      </div>
    </section>

    <section className="py-20 african-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 african-pattern-green opacity-10"></div>
      <AfricanTextileOverlay className="opacity-30" />
      <AfricanCornerDecoration corner="top-left" className="opacity-80" />
      <AfricanCornerDecoration corner="bottom-right" className="opacity-80" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 pattern-animation">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a4b39] mb-4 african-text-shadow">Our Love Story</h2>
          <p className="text-xl text-[#2a4b39] max-w-2xl mx-auto font-medium">
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
            <Card className="border-2 border-[#3d6852] shadow-2xl african-glass-green transform hover:scale-105 transition-all duration-300">
              <CardHeader className="african-gradient-green">
                <CardTitle className="flex items-center space-x-2 text-[#f8f5f0]">
                  <Heart className="h-5 w-5 text-[#c4403e] float-animation" />
                  <span className="african-text-shadow">How We Met</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[#f8f5f0] bg-opacity-95">
                <p className="text-[#2a4b39] leading-relaxed font-medium">
It all began at the Parish of Maria Regina, not inside the church, but in the quiet familiarity of the parish home, where Diana's late cousin was serving as a priest (Rest in Peace Fr. Muhau). That is where Victor and Diana first crossed paths. There were no grand declarations or instant sparks, just two people meeting under ordinary circumstances, unaware that life had something in store for them.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[var(--african-red)] shadow-2xl african-glass-red transform hover:scale-105 transition-all duration-300">
              <CardHeader className="african-gradient-red">
                <CardTitle className="flex items-center space-x-2 text-[var(--african-cream)]">
                  <Heart className="h-5 w-5 text-[var(--african-gold)] float-animation" />
                  <span className="african-text-shadow">From Friends to Forever</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[var(--african-cream)] bg-opacity-95">
                <p className="text-[var(--african-green-dark)] leading-relaxed font-medium">
In the years that followed, they became friends. The kind of friends who laugh easily, talk often, and genuinely enjoy each other's company. Their friendship was patient and steady, growing quietly in the background of their busy lives. But time has a way of revealing what is meant to be. What started as friendship slowly deepened into something more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[var(--african-gold)] shadow-2xl african-glass transform hover:scale-105 transition-all duration-300">
              <CardHeader className="african-gradient-warm">
                <CardTitle className="flex items-center space-x-2 text-[var(--african-green-dark)]">
                  <Sparkles className="h-5 w-5 text-[var(--african-red)] float-animation" />
                  <span className="african-text-shadow">The Puppy That Stole Hearts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-[var(--african-cream)] bg-opacity-95">
                <p className="text-[var(--african-green-dark)] leading-relaxed font-medium">
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

    <section className="py-20 bg-[var(--african-cream)] relative overflow-hidden">
      <div className="absolute inset-0 african-pattern-red opacity-5"></div>
      <AfricanCornerDecoration corner="top-right" className="opacity-60" />
      <AfricanCornerDecoration corner="bottom-left" className="opacity-60" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16 pattern-animation">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--african-green-dark)] mb-4 african-text-shadow">Wedding Details</h2>
          <p className="text-xl text-[var(--african-green-dark)] font-medium">Join us for a celebration of love and unity</p>
        </div>
        
        <div className="mb-12">
          <Card className="border-2 border-[var(--african-green)] shadow-2xl african-glass-green transform hover:scale-105 transition-all duration-300 max-w-5xl mx-auto">
            <CardHeader className="african-gradient-green">
              <CardTitle className="flex items-center justify-center space-x-3 text-[var(--african-cream)]">
                <MapPin className="h-8 w-8 float-animation" />
                <span className="african-text-shadow text-3xl">Venue</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6 bg-[var(--african-cream)] bg-opacity-95">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-[var(--african-red)] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[var(--african-green-dark)] text-xl">Saturday, November 29, 2025</p>
                    <p className="text-[var(--african-green-dark)] font-medium text-lg">16:00 - 00:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-8 w-8 text-[var(--african-red)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[var(--african-green-dark)] text-xl">Casa Social De Madeira</p>
                    <p className="text-[var(--african-green-dark)] font-medium text-lg">34 Boschkop Rd, Zwavelpoort</p>
                    <p className="text-base text-[var(--african-green)] italic mt-2">A beautiful ceremony surrounded by family and friends</p>
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
  <section className="py-20 african-gradient-warm relative overflow-hidden">
    <div className="absolute inset-0 african-pattern-green opacity-5"></div>
    <AfricanCornerDecoration corner="top-left" className="opacity-60" />
    <AfricanCornerDecoration corner="bottom-right" className="opacity-60" />
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-12 pattern-animation">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2a4b39] mb-4 african-text-shadow">Gift Registry</h2>
        {/* <p className="text-xl text-[#2a4b39] max-w-3xl mx-auto font-medium">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
          we've curated these registries and experiences to help us begin our new journey together.
        </p> */}
      </div>

      <div className="text-center mt-12 african-glass p-8 rounded-2xl max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl text-[#2a4b39] mb-4 african-text-shadow">With Gratitude</h3>
        <p className="text-[#3d6852] text-lg font-medium mb-4">
          Your presence at our wedding is truly the greatest gift we could ask for. Any additional gifts you choose to give will be treasured as we build our life together.
        </p>
        <p className="text-[#c4403e] font-medium">
          Thank you for being part of our special day and for your love and support.
        </p>
        <div className="mt-6 flex justify-center space-x-2">
          <Heart className="h-6 w-6 text-[#c4403e] float-animation" />
          <span className="text-[#2a4b39] font-serif text-lg african-text-shadow">Diana & Victor</span>
          <Heart className="h-6 w-6 text-[#c4403e] float-animation" style={{animationDelay: '1s'}} />
        </div>
      </div>
      
      <div className="mb-12 mt-15">
        <h3 className="font-serif text-2xl text-[#2a4b39] mb-8 text-center african-text-shadow">Our Curated Registries</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Le Creuset Registry */}
          <Card className="border-2 border-[#3d6852] shadow-2xl african-glass-green transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="african-gradient-green text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[#f8f5f0]">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSg4CTX1Oqwzq-oQW5fH172BpQTsv1ribNw&s" alt="Le Creuset" width={24} height={24} />
                <span className="african-text-shadow text-xl">Le Creuset</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[#f8f5f0] bg-opacity-95 text-center">
              <h4 className="font-bold text-[#2a4b39] text-lg">Premium Cookware & Kitchen Essentials</h4>
              <p className="text-[#3d6852] text-sm">
                Discover our selection of high-quality cookware, bakeware, and kitchen accessories from the renowned French brand Le Creuset.
              </p>
              <Button 
                onClick={() => window.open('https://www.lecreuset.co.za/gift-registry.html?mrrid=4929886', '_blank')}
                className="w-full african-gradient-green hover:african-gradient-red text-[#f8f5f0] transform hover:scale-105 transition-all duration-300 african-text-shadow"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>

          {/* Yuppiechef Registry */}
          <Card className="border-2 border-[#c4403e] shadow-2xl african-glass-red transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="african-gradient-red text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[#f8f5f0]">
              <Image src="https://upload.wikimedia.org/wikipedia/en/e/e1/Yuppiechef_Logo.png" alt="Le Creuset" width={24} height={24} />
                <span className="african-text-shadow text-xl">Yuppiechef</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[#f8f5f0] bg-opacity-95 text-center">
              <h4 className="font-bold text-[#2a4b39] text-lg">Kitchen & Home Appliances</h4>
              <p className="text-[#c4403e] text-sm">
                Find everything you need for the modern kitchen and home, from small appliances to gourmet ingredients and homeware.
              </p>
              <Button 
                onClick={() => window.open('http://www.yuppiechef.com/yc8796034', '_blank')}
                className="w-full african-gradient-red hover:african-gradient-green text-[#f8f5f0] transform hover:scale-105 transition-all duration-300 african-text-shadow"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>

          {/* Mr Price Home Registry */}
          <Card className="border-2 border-[#d4a574] shadow-2xl african-glass transform hover:scale-105 transition-all duration-300 hover:rotate-1">
            <CardHeader className="african-gradient-warm text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-[#2a4b39]">
              <Image src="https://www.inspiredlivingsa.co.za/wp-content/uploads/2013/11/MRPHOME-LOGOWHITE.jpg" alt="Mr Price Home" width={24} height={24} />
                <span className="african-text-shadow text-xl">Mr Price Home</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 bg-[#f8f5f0] bg-opacity-95 text-center">
              <h4 className="font-bold text-[#2a4b39] text-lg">Home Decor & Essentials</h4>
              <p className="text-[#d4a574] text-sm">
                Stylish and affordable home decor, furniture, and household essentials to help us create our perfect home together.
              </p>
              <div className="mb-3">
                <p className="text-xs text-[#2a4b39] font-medium">Registry ID: <span className="font-bold text-[#d4a574]">DWWEDD4381</span></p>
              </div>
              <Button 
                onClick={() => window.open('https://www.mrphome.com/en_za/giftregistry/view/index/id/DWWEDD4381', '_blank')}
                className="w-full african-gradient-warm hover:african-gradient-red text-[#2a4b39] hover:text-[#f8f5f0] transform hover:scale-105 transition-all duration-300 african-text-shadow border-2 border-[#d4a574]"
              >
                View Registry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cash Contributions Section */}
      <Card className="border-2 border-[#3d6852] african-glass-green shadow-2xl max-w-4xl mx-auto">
        <CardHeader className="african-gradient-green text-center">
          <CardTitle className="flex items-center justify-center space-x-3 text-[#f8f5f0]">
            <Gift className="h-8 w-8 float-animation" />
            <span className="african-text-shadow text-2xl">Cash Contributions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 space-y-6 bg-[#f8f5f0] bg-opacity-95">
          <p className="text-center text-[#2a4b39] font-medium text-lg mb-6">
            For those who prefer to give cash gifts, we've made it easy with our banking details below
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
            <p className="text-[#d4a574] font-medium">Suggested Reference: <span className="text-[#2a4b39] font-bold">Your name and surname</span></p>
          </div>
        </CardContent>
      </Card>

      {/* Thank You Message */}
      
    </div>
  </section>
)

const renderDressCode = () => (
  <section className="py-20 bg-[#f8f5f0] relative overflow-hidden">
    <div className="absolute inset-0 african-pattern-red opacity-8"></div>
    <AfricanTextileOverlay className="opacity-20" />
    <AfricanCornerDecoration corner="top-right" className="opacity-70" />
    <AfricanCornerDecoration corner="bottom-left" className="opacity-70" />
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-12 pattern-animation">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2a4b39] mb-4 african-text-shadow">Dress Code & Uniforms</h2>
        <p className="text-xl text-[#2a4b39] font-medium mb-6">
          Celebrating our heritage with elegance and unity
        </p>
        <div className="african-glass p-6 rounded-2xl max-w-4xl mx-auto">
          <p className="text-lg text-[#2a4b39] font-medium leading-relaxed">
            Uniforms are available for purchase based on who invited you - either the <span className="font-bold text-[#3d6852]">Mawoko's (Green and Red)</span> or the <span className="font-bold text-[#2b4a84]">Sitanimezi's (Navy Blue)</span>. While wearing a uniform is not mandatory, it is warmly encouraged to help us celebrate in unity.
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

      {/* Payment Information */}
      <Card className="border-2 border-[#3d6852] african-glass-green shadow-2xl max-w-4xl mx-auto mb-8">
        <CardHeader className="african-gradient-green text-center">
          <CardTitle className="flex items-center justify-center space-x-3 text-[#f8f5f0]">
            <Gift className="h-8 w-8 float-animation" />
            <span className="african-text-shadow text-2xl">Uniform Payment Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 space-y-6 bg-[#f8f5f0] bg-opacity-95">
          <p className="text-center text-[#2a4b39] font-medium text-lg mb-6">
            To purchase your uniform, please use the following Standard Bank details
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
            <p className="text-[#d4a574] font-medium">Reference: <span className="text-[#2a4b39] font-bold">UNIFORM - Your Name - Family (Mawoko/Sitanimezi)</span></p>
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
                Once payment and RSVP are confirmed, uniforms will be delivered accordingly. Please ensure you send us your contact details.
              </p>
            </div>
            <div className="african-glass p-4 rounded-lg border border-[#2b4a84]">
              <h4 className="font-bold text-[#2a4b39] mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-[#c4403e]" />
                Unity in Celebration
              </h4>
              <p className="text-[#2b4a84] font-medium">
                While uniforms are encouraged, they are not mandatory. We celebrate the beauty of our cultural heritage in all its forms.
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
    </div>
  </section>
)

return (
  <div className="min-h-screen bg-white">
    {renderNavigation()}
    <main className="pt-16">
      {activeSection === 'home' && renderHome()}
      {activeSection === 'registry' && renderRegistry()}
      {activeSection === 'dresscode' && renderDressCode()}
    </main>
    
    <footer className="african-gradient-warm relative overflow-hidden py-16">
      <div className="absolute inset-0 african-pattern-green opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Heart className="h-8 w-8 text-[var(--african-red)] float-animation" />
          <span className="font-serif text-3xl text-[var(--african-green-dark)] african-text-shadow">Diana & Victor</span>
          <Heart className="h-8 w-8 text-[var(--african-red)] float-animation" style={{animationDelay: '1s'}} />
        </div>
        <div className="african-glass p-6 rounded-2xl max-w-2xl mx-auto mb-6">
          <p className="text-[var(--african-green-dark)] mb-4 text-lg font-medium">November 29, 2025 • Pretoria, South Africa</p>
          <p className="text-[var(--african-green)] text-base african-text-shadow">
            We can't wait to celebrate with you!
          </p>
        </div>
        <div className="african-glass p-4 rounded-xl max-w-xl mx-auto">
          <p className="text-sm text-[var(--african-green-dark)] font-medium">
            For questions, please contact us at 
            <br className="sm:hidden" />
            <span className="text-[var(--african-red)] font-semibold"> weddingdianavictor@gmail.com</span>
            <br className="sm:hidden" /><p> or 
            <span className="text-[var(--african-red)] font-semibold"> +27 79 246 8279</span></p>
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-[var(--african-gold)] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[var(--african-red)] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-[var(--african-green)] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </footer>
  </div>
)
}
