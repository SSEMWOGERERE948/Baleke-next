import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-green-600" />
              <span className="ml-2 text-lg font-bold">Baleke Foundation</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Making a difference in children's lives through care, education, and support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-600 dark:text-gray-400 hover:text-green-600">Our Programs</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-green-600">Contact</Link></li>
              <li><Link href="/donate" className="text-gray-600 dark:text-gray-400 hover:text-green-600">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                info@baleke.org
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                123 Charity Lane, NY 10001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              />
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Baleke Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}