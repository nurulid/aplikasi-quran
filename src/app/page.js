import { Button } from "@nextui-org/react";
import { Badge, Avatar } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="m-5">
      <Button color="success">Success</Button>

      <Badge content="5" color="primary">
        <Avatar
          radius="md"
          size="lg"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
    </main>
  );
}
