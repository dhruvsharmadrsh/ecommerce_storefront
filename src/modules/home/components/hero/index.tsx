import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-wine-200 relative bg-gold-50">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl leading-[1.1] text-wine-900 font-serif font-bold mb-4"
          >
            Fine Wines & Spirits
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-9 text-wine-700 font-normal italic"
          >
            Curated for the Discerning Palate
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
