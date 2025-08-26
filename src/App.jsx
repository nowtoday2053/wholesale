import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Home, 
  Shield, 
  Clock,
  Phone,
  ChevronRight,
  Mail,
  MapPin,
  DollarSign,
  Quote,
  Heart,
  Users,
  Award
} from 'lucide-react';

const App = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
                        <motion.div
              className="font-display font-bold text-xl text-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              New Beginnings Properties
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</a>
              <a href="#specialties" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Specialties</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Process</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Reviews</a>
            </div>
            
            <motion.button 
              className="md:hidden btn-primary px-4 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Menu
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >

            
            <motion.h1 
              variants={fadeInUp}
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-900 mb-8 leading-tight tracking-tight"
            >
              We buy{' '}
              <span className="text-blue-600">problem<br className="sm:hidden" /> properties</span>{' '}
              <span className="block sm:inline">for cash</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Facing foreclosure, divorce, or need to sell fast? We buy houses in the Greater Houston area as-is, with cash, and close on your timeline. No repairs, no fees, no hassle.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.button 
                className="btn-secondary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.button>
            </motion.div>
            

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              New Beginnings Properties is a locally owned real estate solutions company based in the Greater Houston area, helping homeowners find win-win solutions for their unique situations.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                icon: Clock,
                title: "Fast Cash Offers",
                description: "We analyze your property and provide a fair cash offer quickly. No waiting for financing or loan approvals."
              },
              {
                icon: Shield,
                title: "No Fees or Commissions", 
                description: "When you sell to us, there are no real estate commissions or hidden fees. We cover all closing costs."
              },
              {
                icon: Home,
                title: "Any Condition",
                description: "We buy houses as-is. No need to make repairs, clean up, or stage your home. Sell it exactly as it is."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We help homeowners in difficult situations by providing fast, fair solutions for any property type.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Foreclosure Avoidance",
                description: "Stop foreclosure fast with our cash purchase program. Keep your credit intact.",
                icon: Shield
              },
              {
                title: "Divorce/Death in Family",
                description: "Quick, hassle-free property sales during difficult life transitions.",
                icon: Heart
              },
              {
                title: "Probate Properties",
                description: "We handle complex probate situations and provide fast estate liquidation.",
                icon: Users
              },
              {
                title: "Major Repairs Needed",
                description: "Sell houses with foundation, roof, or structural issues without fixing anything.",
                icon: Home
              },
              {
                title: "Underwater Mortgages",
                description: "Owe more than your house is worth? We can help you move forward.",
                icon: DollarSign
              },
              {
                title: "Need to Sell Fast",
                description: "Job relocation, financial hardship, or life changes? We close on your timeline.",
                icon: Clock
              }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                  <specialty.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-4">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Selling your house to us is fast and straightforward. Here's how it works in just 4 easy steps.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Share Property Details",
                description: "Tell us about your property through our simple form or give us a call."
              },
              {
                step: "2", 
                title: "We Analyze & Value",
                description: "Our team does a thorough analysis to determine a fair cash offer for your home."
              },
              {
                step: "3",
                title: "Receive Your Offer",
                description: "Get your fair all-cash offer plus alternative options if suitable."
              },
              {
                step: "4",
                title: "Close on Your Timeline", 
                description: "We close when it's convenient for you - as fast or slow as you need."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from homeowners who found the perfect solution with New Beginnings Properties.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Clayton M.",
                role: "Houston Homeowner",
                avatar: "CM",
                content: "I was going through a difficult divorce. New Beginnings Properties offered us a fair price for our house. The whole transaction was handled smoothly and professionally!",
                rating: 5
              },
              {
                name: "Megan B.",
                role: "Satisfied Seller",
                avatar: "MB",
                content: "Selling my home with New Beginnings Properties was stress-free. They paid us $13,000 more than we had been offered! I cannot thank them enough.",
                rating: 5
              },
              {
                name: "James M.",
                role: "Houston Resident",
                avatar: "JM",
                content: "Bob and his team were incredibly professional. They kept me informed throughout the process and explained everything clearly. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center"
              >
                <Quote className="w-8 h-8 text-gray-300 mx-auto mb-6" />
                
                <blockquote className="text-gray-700 mb-8 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
              Ready to sell your house?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Get a fair cash offer for your property today. No obligation, no pressure - just honest solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button 
                className="btn-secondary text-lg px-10 py-5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call (713) 555-0123
              </motion.button>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex rounded-2xl border border-gray-200 bg-white shadow-soft overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Enter your address"
                  className="flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <motion.button 
                  className="px-6 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Get your free property evaluation in 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="font-display font-bold text-2xl text-gray-900 mb-4">
                New Beginnings Properties
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Your trusted real estate solutions company in the Greater Houston area. We help homeowners navigate difficult situations with fair, fast cash offers.
              </p>
              <div className="flex space-x-4">
                <motion.div
                  className="flex items-center text-gray-600"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-sm">Greater Houston Area</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-gray-600"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="text-sm">(713) 555-0123</span>
                </motion.div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                {['Cash Home Buying', 'Foreclosure Help', 'Probate Properties', 'Fast Closings'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Our Process', 'Service Areas', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 New Beginnings Properties. All rights reserved. | Licensed Real Estate Solutions Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;