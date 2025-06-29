export default function Footer() {
  return (
    <footer className="bg-primary-custom/90 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/80 hover:text-secondary-custom transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-secondary-custom transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
