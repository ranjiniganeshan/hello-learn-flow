import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface GuestbookFormProps {
  onSubmit: (entry: { name: string; email: string; message: string }) => void;
}

const GuestbookForm = ({ onSubmit }: GuestbookFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    onSubmit({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Thank you for signing the guestbook!");
  };

  return (
    <Card className="p-6 bg-card border-border shadow-[var(--shadow-soft)]">
      <h2 className="text-2xl font-bold text-foreground mb-6">Sign the Guestbook</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-input"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">Message</Label>
          <Textarea
            id="message"
            placeholder="Leave a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-background border-input min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Sign Guestbook
        </Button>
      </form>
    </Card>
  );
};

export default GuestbookForm;
