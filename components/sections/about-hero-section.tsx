export default function HeroSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="font-bebas text-4xl text-black mb-6">What's RAF all about?</h1>
          <p className="font-poppins text-gray-600 leading-relaxed max-w-3xl mx-auto">
            RAF Window Manufacturing is a family owned business that has been revolutionizing the artisan window and
            door shopping experience. With over 100 years of combined experience, our team manufacturing plant in
            Toronto, Ontario, and a team of highly qualified professionals, we are convinced that this window buying
            experience will be unlike any other.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="RAF Window Manufacturing - German Engineered Hardware"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
