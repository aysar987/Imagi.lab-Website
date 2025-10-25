export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-6 relative overflow-hidden">
      <div className="max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-6xl mb-8 text-[#40BFE5]" style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 500 }}>
          About Us
        </h2>
        <div className="space-y-6 text-gray-300 text-xl">
          <p>
            Imaji.lab adalah tim kreatif dan teknologi yang berfokus menghadirkan solusi digital.
          </p>
          <p>
            Mulai dari desain grafis, video editing, hingga pengembangan website dan software,
            kami membantu individu maupun bisnis dalam menyelesaikan kebutuhan digital yang kuat dan menarik.
          </p>
          <p>
            Dengan pendekatan kolaboratif dan efisien, setiap ide memiliki potensi besar untuk diwujudkan melalui sentuhan teknologi dan kreativitas.
          </p>
        </div>
      </div>
    </section>
  );
}
