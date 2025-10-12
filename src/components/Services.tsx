import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Flex Printing',
    description: 'High-quality flex printing solutions for vibrant and durable signage.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // {
  //   icon: Video,
  //   title: 'Video Production',
  //   description: 'Cinematic storytelling that engages viewers and delivers your message with impact.',
  //   gradient: 'from-purple-500 to-pink-500',
  // },
  // {
  //   icon: BarChart3,
  //   title: 'Digital Marketing',
  //   description: 'Data-driven strategies to maximize ROI and grow your online presence.',
  //   gradient: 'from-rose-500 to-red-600',
  // },
  {
    icon: Megaphone,
    title: 'Signboard Advertising',
    description: 'Captivating signboard designs that grab attention and drive foot traffic.',
    gradient: 'from-red-500 to-orange-500',
  },
  // {
  //   icon: Globe,
  //   title: 'Social Media',
  //   description: 'Building engaged communities and amplifying your brand voice across platforms.',
  //   gradient: 'from-indigo-500 to-blue-500',
  // },
  // {
  //   icon: Lightbulb,
  //   title: 'Strategy & Consulting',
  //   description: 'Expert guidance to align your marketing efforts with business objectives.',
  //   gradient: 'from-amber-500 to-orange-500',
  // },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-primary mb-4">Our Services</h3>
          <h2 className="text-4xl md:text-5xl mb-6">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to execution, we provide comprehensive creative solutions
            tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300" />
              
              <div className="relative bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-6`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}