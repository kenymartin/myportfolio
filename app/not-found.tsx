export default function NotFound() {
  return (
    <div className="min-h-screen bg-gothic-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-gothic text-6xl md:text-8xl font-bold text-gothic-gold mb-4">
          404
        </h1>
        <p className="text-gray-400 text-xl mb-8">Page Not Found</p>
        <a
          href="/"
          className="gothic-button px-8 py-4 bg-gothic-gold text-gothic-black font-semibold rounded-lg hover:bg-gothic-accent transition-all duration-300 inline-block"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

