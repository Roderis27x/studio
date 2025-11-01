import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const resources = [
  {
    id: "resource-1",
    title: 'The Future of ERP: A 2024 Outlook',
    description: 'Explore the trends shaping enterprise resource planning and how to stay ahead.',
    type: 'Whitepaper',
    image: PlaceHolderImages.find(p => p.id === 'resource-1'),
  },
  {
    id: "resource-2",
    title: 'Case Study: How Innovate Inc. Grew 50% with SynergyERP',
    description: 'A deep dive into the successful implementation and impact of our core ERP solution.',
    type: 'Case Study',
    image: PlaceHolderImages.find(p => p.id === 'resource-2'),
  },
  {
    id: "resource-3",
    title: 'Synergy Solutions Product Brochure',
    description: 'A complete overview of all our products and services in a single, convenient document.',
    type: 'Brochure',
    image: PlaceHolderImages.find(p => p.id === 'resource-3'),
  },
];

export default function ResourceLibrary() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
            Knowledge at Your Fingertips
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Download our free resources to learn more about industry best practices and our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {resource.image && (
                 <Image
                    src={resource.image.imageUrl}
                    alt={resource.image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-40"
                    data-ai-hint={resource.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
