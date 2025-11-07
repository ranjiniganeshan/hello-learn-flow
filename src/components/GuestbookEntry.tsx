import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface GuestbookEntryProps {
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

const GuestbookEntry = ({ name, email, message, timestamp }: GuestbookEntryProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] border-border">
      <div className="flex gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
            <time className="text-xs text-muted-foreground">
              {formatDistanceToNow(timestamp, { addSuffix: true })}
            </time>
          </div>
          <p className="text-foreground leading-relaxed">{message}</p>
        </div>
      </div>
    </Card>
  );
};

export default GuestbookEntry;
