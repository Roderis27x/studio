import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Landmark, Users, Truck, HeartHandshake, AreaChart, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = [
  {
    id: 'product-1',
    name: 'SynergyERP Core',
    description: 'The all-in-one platform to manage your core business operations with modules for finance, HR, and CRM.',
    image: PlaceHolderImages.find(p => p.id === 'product-1'),
    features: ['Financial Management', 'Human Resources', 'Customer Relationships'],
    icons: [Landmark, Users, HeartHandshake],
    badge: 'Most Popular',
  },
  {
    id: 'product-2',
    name: 'SynergySCM',
    description: 'Optimize your supply chain from procurement to logistics with real-time tracking and analytics.',
    image: PlaceHolderImages.find(p => p.id === 'product-2'),
    features: ['Inventory Control', 'Order Management', 'Logistics & Warehouse'],
    icons: [Truck, CheckCircle2, Truck],
    badge: 'New',
  },
  {
    id: 'product-3',
    name: 'SynergyBI',
    description: 'Turn data into actionable insights with our powerful business intelligence and analytics suite.',
    image: PlaceHolderImages.find(p => p.id === 'product-3'),
    features: ['Interactive Dashboards', 'Predictive Analytics', 'Custom Reporting'],
    icons: [AreaChart, AreaChart, AreaChart],
    badge: '',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
            Tailored Software for Every Business Need
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our flagship products, engineered for performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative">
                {product.image && (
                    <Image
                    src={product.image.imageUrl}
                    alt={product.image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                    data-ai-hint={product.image.imageHint}
                    />
                )}
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{product.badge}</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 flex-grow">
                  {product.features.map((feature, index) => {
                    const Icon = product.icons[index];
                    return (
                      <li key={feature} className="flex items-center">
                        <Icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href="#" className="mt-6 text-sm font-semibold text-primary hover:underline">Learn More &rarr;</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
