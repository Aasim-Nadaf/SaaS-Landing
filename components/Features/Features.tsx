import { IconPlus } from "@tabler/icons-react";
import { Container } from "../Container";
import { Heading } from "../Heading";
import { Subheading } from "../Subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./Cards";
import { SkeletonOne } from "../Skeletons/First";

export default function Features() {
  return (
    <Container className="py-10">
      <div className="flex">
        <Heading>Build for developers by developers</Heading>
        <Subheading>
          Aura is built with a developer-first mindset, ensuring seamless
          integration and ease of use.
        </Subheading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:my-20">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton>
            <SkeletonOne />
          </CardSkeleton>
          <CardContent>
            <CardTitle>Aura Agents, Tuned to your Workspace</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Reduced OPS Frictions</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton></CardSkeleton>
          <CardContent>
            <CardTitle>Seamless Integration with your Tools</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
