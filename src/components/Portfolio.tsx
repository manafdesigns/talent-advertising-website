import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { useNavigate } from 'react-router-dom';

const portfolioItems = [
	{
		id: 1,
		title: 'Brand Revolution',
		category: 'Branding',
		description: 'Complete brand identity redesign for a tech startup',
		image: '/gallery/IMG-20251008-WA0016.jpg',
		tags: ['Design', 'Strategy'],
	},
	{
		id: 2,
		title: 'Digital Campaign',
		category: 'Marketing',
		description: 'Multi-channel marketing campaign with 300% ROI',
		image: '/gallery/IMG-20251008-WA0017.jpg',
		tags: ['Marketing', 'Analytics'],
	},
	{
		id: 3,
		title: 'Social Media Presence',
		category: 'Social',
		description: 'Building a 100k+ follower community in 6 months',
		image: '/gallery/IMG-20251008-WA0030.jpg',
		tags: ['Social Media', 'Content'],
	},
	{
		id: 4,
		title: 'Product Launch',
		category: 'Advertising',
		description: 'Nationwide advertising campaign for product launch',
		image: '/gallery/IMG-20251008-WA0033.jpg',
		tags: ['Advertising', 'Video'],
	},
	{
		id: 5,
		title: 'Creative Workshop',
		category: 'Branding',
		description: 'Corporate identity and workspace branding',
		image: '/gallery/IMG-20251008-WA0041.jpg',
		tags: ['Branding', 'Design'],
	},
	{
		id: 6,
		title: 'E-commerce Growth',
		category: 'Marketing',
		description: 'SEO and PPC strategy driving 500% sales increase',
		image: '/gallery/IMG-20251008-WA0048.jpg',
		tags: ['SEO', 'Marketing'],
	},
];

const categories = ['All', 'Branding', 'Marketing', 'Social', 'Advertising'];

export function Portfolio() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [selectedCategory, setSelectedCategory] = useState('All');
	const navigate = useNavigate();

	const filteredItems =
		selectedCategory === 'All'
			? portfolioItems
			: portfolioItems.filter((item) => item.category === selectedCategory);

	return (
		<section
			id="portfolio"
			ref={ref}
			className="py-24 bg-secondary/10 overflow-hidden"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h3 className="text-primary mb-4">Portfolio</h3>
					<h2 className="text-4xl md:text-5xl mb-6">Our Latest Work</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto mb-12">
						Explore our portfolio of successful campaigns and creative projects
					</p>

					<Tabs defaultValue="All" className="w-full">
						<TabsList className="inline-flex mb-12">
							{categories.map((category) => (
								<TabsTrigger
									key={category}
									value={category}
									onClick={() => setSelectedCategory(category)}
								>
									{category}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredItems.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className="group relative overflow-hidden rounded-3xl bg-card border border-border cursor-pointer"
						>
							<div className="relative overflow-hidden aspect-[4/3]">
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.6 }}
									className="w-full h-full"
								>
									<ImageWithFallback
										src={item.image}
										alt={item.title}
										className="w-full h-full object-cover"
									/>
								</motion.div>

								{/* Overlay */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-center justify-center"
								>
									<motion.div
										initial={{ scale: 0 }}
										whileHover={{ scale: 1 }}
										transition={{ duration: 0.3 }}
										className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
									>
										<ExternalLink className="w-8 h-8 text-primary" />
									</motion.div>
								</motion.div>
							</div>

							{/* <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div> */}
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-center mt-12"
				>
					<p className="text-muted-foreground">
						Want to see more?{' '}
						<span
							className="text-primary cursor-pointer hover:underline"
							onClick={() => navigate('/projects')}
						>
							View all projects
						</span>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
