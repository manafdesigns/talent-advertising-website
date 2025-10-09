import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Target, value: '1000+', label: 'Projects Completed' },
  { icon: TrendingUp, value: '95%', label: 'Client Retention' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc1OTkwNTUzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our creative team"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-primary mb-4">About Us</h3>
            <h2 className="text-4xl md:text-5xl mb-6">
              Crafting Stories That Resonate
            </h2>
            <p className="text-muted-foreground mb-6">
              We are a full-service creative agency passionate about bringing brands to
              life through innovative advertising campaigns, cutting-edge design, and
              strategic marketing solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              With over a decade of experience, our team of creative professionals has
              helped hundreds of brands stand out in competitive markets. We believe in
              the power of storytelling and data-driven strategies to create meaningful
              connections between brands and their audiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background p-6 rounded-2xl shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                  <div className="text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
