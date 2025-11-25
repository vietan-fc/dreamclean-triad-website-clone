"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function QuoteFormSidebar() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.08)] border-4 border-primary w-full max-w-md mx-auto md:mx-0 md:max-w-none">
      <h3 className="text-2xl font-semibold italic text-primary text-center mb-2">
        REQUEST A QUOTE NOW
      </h3>
      <p className="text-text-secondary text-center mb-6 text-sm">
        To cut down on your waiting time, simply book your appointment online.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            required
            className="bg-secondary text-base px-4 py-3 h-auto rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            required
            className="bg-secondary text-base px-4 py-3 h-auto rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone"
            required
            className="bg-secondary text-base px-4 py-3 h-auto rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="notes" className="sr-only">
            Notes
          </label>
          <Textarea
            id="notes"
            placeholder="Notes"
            rows={4}
            className="bg-secondary text-base px-4 py-3 rounded-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-md uppercase tracking-wider text-base h-auto px-8 py-3"
        >
          Submit Form
        </Button>
      </form>
    </div>
  );
}