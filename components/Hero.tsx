import { Container } from "./Container";
import { Heading } from "./Heading";
import { Subheading } from "./Subheading";
import { Button } from "./ui/button";
import { LandingImages } from "./LandingImages";

export const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Aura that do the work <br /> Approvals that keep you safe
        </Heading>
        <Subheading className="py-8">
          Simplify your workflow with Aura's seamless approval system, ensuring
          security and efficiency in every step.
        </Subheading>
        <div className="flex items-center gap-4">
          <Button>Get Started</Button>
          <Button variant={"outline"}>View role base demo</Button>
        </div>

        <LandingImages />
      </Container>
    </div>
  );
};
