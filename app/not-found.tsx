import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PlaceholderVisual icon="Anchor" tone="deep" className="aspect-[4/3] rounded-md" label="404" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Vessel Not Found.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-steel">
              The page you&apos;re looking for could not be located.
            </p>
            <Button href="/" className="mt-8" showArrow>
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
