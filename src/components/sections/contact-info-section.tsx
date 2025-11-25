import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-background-secondary transition-transform hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 text-white">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone Us</h3>
            <p className="text-text-secondary mb-4">
              We're here to respond to your calls and inquiries.
            </p>
            <a
              href="tel:336-715-7224"
              className="text-primary font-semibold hover:underline text-lg"
            >
              336-715-7224
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-background-secondary transition-transform hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 text-white">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Write to Us</h3>
            <p className="text-text-secondary mb-4">
              Drop us a message and we'll respond to you promptly.
            </p>
            <a
              href="mailto:dreamcleantriad@gmail.com"
              className="text-primary font-semibold hover:underline text-lg"
            >
              dreamcleantriad@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-background-secondary transition-transform hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 text-white">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="text-text-secondary mb-1">
              Monday through Friday: 8:00 AM to 6:00 PM
            </p>
            <p className="text-text-secondary">
              Weekends: Not available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
