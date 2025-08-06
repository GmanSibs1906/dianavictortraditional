'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Heart, MapPin, Calendar, Clock, Gift, Users, Sparkles, Camera, Music } from 'lucide-react'

export default function WeddingWebsite() {
const [activeSection, setActiveSection] = useState('home')
const [rsvpForm, setRsvpForm] = useState({
  name: '',
  email: '',
  phone: '',
  attending: '',
  guests: '1',
  dietary: '',
  message: ''
})

const handleRsvpSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('RSVP submitted:', rsvpForm)
  alert('Thank you for your RSVP! We look forward to celebrating with you.')
}

const giftRegistry = [
  { item: 'Fine China Dinner Set', price: '$450', store: 'Williams Sonoma', purchased: false },
  { item: 'Egyptian Cotton Bedding', price: '$280', store: 'Pottery Barn', purchased: true },
  { item: 'Professional Knife Set', price: '$200', store: 'Sur La Table', purchased: false },
  { item: 'Vintage Wine Collection', price: '$150', store: 'Wine.com', purchased: false },
  { item: 'Smart Home Assistant', price: '$99', store: 'Amazon', purchased: true },
  { item: 'Artisanal Coffee Machine', price: '$380', store: 'Williams Sonoma', purchased: false }
]

const renderNavigation = () => (
  <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-red-600" />
          <span className="font-serif text-xl text-gray-900">Diana & Victor</span>
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
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => setActiveSection('rsvp')}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm rounded-full"
          >
            RSVP
          </Button>
        </div>
        <div className="md:hidden">
          <select 
            value={activeSection} 
            onChange={(e) => setActiveSection(e.target.value)}
            className="text-sm border rounded px-2 py-1"
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
    <section className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/couple-ferns.jpg"
          alt="Diana and Victor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight">
            Diana & Victor
          </h1>
          <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl font-light">
            <span>November 29th,2025</span>
            <Heart className="h-6 w-6 text-red-400" />
            <span>Pretoria, South Africa</span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {"We're getting married and we would love for you to join us on our special day as we begin this beautiful journey together."}
          </p>
          <Button 
            onClick={() => setActiveSection('rsvp')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-full"
          >
            RSVP Now
          </Button>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our Love Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful journey of love, laughter, and shared dreams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/images/couple-indoor.jpg"
              alt="Diana and Michael engagement"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>How We Met</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
It all began at the Parish of Maria Regina, not inside the church, but in the quiet familiarity of the parish home, where Diana's late cousin was serving as a priest (Rest in Peace Fr. Muhau). That is where Victor and Diana first crossed paths. There were no grand declarations or instant sparks, just two people meeting under ordinary circumstances, unaware that life had something in store for them.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>From Friends to Forever</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
In the years that followed, they became friends. The kind of friends who laugh easily, talk often, and genuinely enjoy each other's company. Their friendship was patient and steady, growing quietly in the background of their busy lives. But time has a way of revealing what is meant to be. What started as friendship slowly deepened into something more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-red-600" />
                  <span>The Puppy That Stole Hearts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                 And then, there was the puppy. Victor, knowing Diana's love for dogs, surprised her with a mischievous little one. That pup brought chaos and laughter into the house and quickly became a beloved member of the family. Just like Victor did. Their story has always been about love built on friendship, understanding, and shared joy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Shared Adventures</h3>
              <p className="text-gray-600">From city explorations to quiet moments in nature</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">Celebrating our rich traditions and creating new ones</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Forever Love</h3>
              <p className="text-gray-600">Building a future filled with love, laughter, and dreams</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Wedding Details</h2>
          <p className="text-xl text-gray-600">Join us for a celebration of love and unity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-red-100 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <Calendar className="h-5 w-5" />
                <span>Ceremony</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-semibold">Saturday, November 29, 2025</p>
                  <p className="text-gray-600">16:00 - 00:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-semibold">Casa Social De Madeira</p>
                  <p className="text-gray-600">34 Boschkop Rd, Zwavelpoort</p>
                  <p className="text-sm text-gray-500">A beautiful ceremony surrounded by family and friends</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-red-100 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <Users className="h-5 w-5" />
                <span>Reception</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-semibold">Saturday, June 15, 2024</p>
                  <p className="text-gray-600">6:30 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-semibold">Nairobi Safari Club</p>
                  <p className="text-gray-600">University Way, Nairobi</p>
                  <p className="text-sm text-gray-500">Dinner, dancing, and celebration under the stars</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-2 border-orange-100 shadow-lg">
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
        </Card>
      </div>
    </section>
  </>
)

const renderRSVP = () => (
  <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">RSVP</h2>
        <p className="text-xl text-gray-600">
          Please respond by May 1st, 2024
        </p>
      </div>
      
      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center bg-red-50 rounded-t-lg">
          <CardTitle className="text-red-700 text-xl">We Hope You Can Join Us!</CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleRsvpSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={rsvpForm.name}
                  onChange={(e) => setRsvpForm({...rsvpForm, name: e.target.value})}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={rsvpForm.email}
                  onChange={(e) => setRsvpForm({...rsvpForm, email: e.target.value})}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={rsvpForm.phone}
                onChange={(e) => setRsvpForm({...rsvpForm, phone: e.target.value})}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label>Will you be attending? *</Label>
              <RadioGroup 
                value={rsvpForm.attending} 
                onValueChange={(value) => setRsvpForm({...rsvpForm, attending: value})}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">{"Yes, I'll be there! 🎉"}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">{"Sorry, I can't make it 😢"}</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select value={rsvpForm.guests} onValueChange={(value) => setRsvpForm({...rsvpForm, guests: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2">Me + 1</SelectItem>
                  <SelectItem value="3">Me + 2</SelectItem>
                  <SelectItem value="4">Me + 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dietary">Dietary Restrictions or Allergies</Label>
              <Input
                id="dietary"
                value={rsvpForm.dietary}
                onChange={(e) => setRsvpForm({...rsvpForm, dietary: e.target.value})}
                placeholder="Please let us know about any dietary needs"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Special Message (Optional)</Label>
              <Textarea
                id="message"
                value={rsvpForm.message}
                onChange={(e) => setRsvpForm({...rsvpForm, message: e.target.value})}
                placeholder="Share your excitement or any special wishes!"
                className="mt-1"
                rows={3}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium"
            >
              Send RSVP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
)

const renderRegistry = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Gift Registry</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your presence is the greatest gift, but if you'd like to contribute to our new life together, 
          here are some items that would help us build our home.
        </p>
      </div>
      
      <div className="grid gap-6 mb-8">
        {giftRegistry.map((gift, index) => (
          <Card key={index} className={`border-2 shadow-lg ${gift.purchased ? 'border-green-200 bg-green-50' : 'border-red-100'}`}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <Gift className={`h-8 w-8 ${gift.purchased ? 'text-green-600' : 'text-red-600'}`} />
                <div>
                  <h3 className={`font-semibold text-lg ${gift.purchased ? 'text-green-800' : 'text-gray-900'}`}>
                    {gift.item}
                  </h3>
                  <p className={`${gift.purchased ? 'text-green-600' : 'text-gray-600'}`}>
                    {gift.store} • {gift.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {gift.purchased ? (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Purchased ✓
                  </Badge>
                ) : (
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                    Purchase Gift
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-2 border-orange-100 bg-orange-50">
        <CardContent className="text-center p-8">
          <h3 className="font-semibold text-xl text-orange-800 mb-4">Alternative Gift Options</h3>
          <p className="text-orange-700 mb-4">
            Prefer to give cash or contribute to our honeymoon? You can also:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Honeymoon Fund
            </Button>
            <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100">
              Cash Gift
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
)

const renderDressCode = () => (
  <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Dress Code</h2>
        <p className="text-xl text-gray-600">
          Celebrating our heritage with elegance and style
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <Image
            src="/images/couple-traditional.jpg"
            alt="Traditional African attire inspiration"
            width={500}
            height={700}
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-red-700 text-xl">Dress Code: Semi-Formal with Cultural Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">For Ladies:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Elegant dresses or traditional African attire</li>
                  <li>• Rich colors welcome (red, gold, blue, green)</li>
                  <li>• Midi or maxi length preferred</li>
                  <li>• Comfortable shoes for dancing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">For Gentlemen:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Suits or traditional African shirts</li>
                  <li>• Dress shirts with ties or bow ties</li>
                  <li>• Navy, black, or coordinating colors</li>
                  <li>• Dress shoes or clean leather shoes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-orange-700">Color Palette Inspiration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-red-600 rounded"></div>
                  <p className="text-sm text-center">Deep Red</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-orange-500 rounded"></div>
                  <p className="text-sm text-center">Orange</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-yellow-600 rounded"></div>
                  <p className="text-sm text-center">Gold</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-blue-900 rounded"></div>
                  <p className="text-sm text-center">Navy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="border-2 border-red-100 shadow-lg">
        <CardContent className="text-center p-8">
          <h3 className="font-semibold text-xl text-red-700 mb-4">Special Notes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Weather Considerations:</h4>
              <p className="text-gray-600 text-sm">
                • December is summer in South Africa 
                • Expected temperature: 20-28°C
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Cultural Appreciation:</h4>
              <p className="text-gray-600 text-sm">
                We celebrate the beauty of African heritage! Traditional prints and 
                cultural attire are encouraged and deeply appreciated.
              </p>
            </div>
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
      {activeSection === 'rsvp' && renderRSVP()}
      {activeSection === 'registry' && renderRegistry()}
      {activeSection === 'dresscode' && renderDressCode()}
    </main>
    
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="h-6 w-6 text-red-400" />
          <span className="font-serif text-2xl">Diana & Victor</span>
        </div>
        <p className="text-gray-300 mb-4">November 29, 2025 • Pretoria, South Africa</p>
        <p className="text-sm text-gray-400">
          We can't wait to celebrate with you!
        </p>
        <div className="mt-6 text-xs text-gray-500">
          <p>For questions, please contact us at weddingdianavictor@gmail.com or +27 79 246 8279</p>
        </div>
      </div>
    </footer>
  </div>
)
}
