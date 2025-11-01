'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting software solutions based on user-specified business needs.
 *
 * The flow takes user input describing their business needs and uses a generative AI model to recommend suitable ERP or software configurations.
 *
 * @exports suggestSoftwareSolutions - The main function to trigger the software suggestion flow.
 * @exports SuggestSoftwareSolutionsInput - The input type for the suggestSoftwareSolutions function.
 * @exports SuggestSoftwareSolutionsOutput - The output type for the suggestSoftwareSolutions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSoftwareSolutionsInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe(
      'A detailed description of the user\u2019s business needs, requirements, and current challenges.'
    ),
});
export type SuggestSoftwareSolutionsInput = z.infer<
  typeof SuggestSoftwareSolutionsInputSchema
>;

const SuggestSoftwareSolutionsOutputSchema = z.object({
  suggestedSolutions: z
    .string()
    .describe(
      'A list of suggested software solutions or ERP configurations that best fit the user\u2019s business needs, along with brief explanations of why each solution is recommended.'
    ),
});
export type SuggestSoftwareSolutionsOutput = z.infer<
  typeof SuggestSoftwareSolutionsOutputSchema
>;

export async function suggestSoftwareSolutions(
  input: SuggestSoftwareSolutionsInput
): Promise<SuggestSoftwareSolutionsOutput> {
  return suggestSoftwareSolutionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSoftwareSolutionsPrompt',
  input: {schema: SuggestSoftwareSolutionsInputSchema},
  output: {schema: SuggestSoftwareSolutionsOutputSchema},
  prompt: `You are an expert ERP and software solutions architect.

  Based on the user's description of their business needs, suggest the best software solutions or ERP configurations. Explain why each solution is a good fit for their specific requirements.

  Business Needs: {{{businessNeeds}}}`,
});

const suggestSoftwareSolutionsFlow = ai.defineFlow(
  {
    name: 'suggestSoftwareSolutionsFlow',
    inputSchema: SuggestSoftwareSolutionsInputSchema,
    outputSchema: SuggestSoftwareSolutionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
