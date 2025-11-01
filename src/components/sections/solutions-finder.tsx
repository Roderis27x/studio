'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { suggestSoftwareSolutions, type SuggestSoftwareSolutionsOutput } from '@/ai/flows/suggest-software-solutions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { BrainCircuit, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  businessNeeds: z.string().min(30, { message: 'Please describe your business needs in at least 30 characters.' }),
});

export default function SolutionsFinder() {
  const [result, setResult] = useState<SuggestSoftwareSolutionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { businessNeeds: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await suggestSoftwareSolutions(values);
      setResult(response);
    } catch (e) {
      setError('An error occurred while generating solutions. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
            Don't Know Where to Start?
          </h2>
          <p className="text-lg text-muted-foreground">
            Use our AI-powered Solutions Finder. Just describe your business challenges, and our smart assistant will recommend the perfect software stack for you.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-6 w-6" />
            <span className="font-semibold">Powered by Generative AI</span>
          </div>
        </div>

        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-6 w-6" />
                AI Solutions Finder
              </CardTitle>
              <CardDescription>
                Describe your needs, and we'll find the right fit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="businessNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Business Needs</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'We are a growing e-commerce business and need to automate inventory management and sync it with our sales channels...'"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Find My Solution'
                    )}
                  </Button>
                </form>
              </Form>

              {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
              
              {result && (
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-semibold mb-2">Suggested Solutions:</h3>
                  <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                    {result.suggestedSolutions}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
