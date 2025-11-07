import { useState } from "react";
import GuestbookEntry from "@/components/GuestbookEntry";
import GuestbookForm from "@/components/GuestbookForm";
import { BookOpen } from "lucide-react";

interface Entry {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

const MOCK_ENTRIES: Entry[] = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    message: "Great to see this guestbook! Looking forward to learning more about DevOps pipelines. This is a perfect starting project!",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah@example.com",
    message: "Love the clean UI! Can't wait to integrate this with a Spring Boot backend and set up CI/CD.",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    email: "mike@example.com",
    message: "This will be perfect for testing observability tools. Nice work on the design!",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const Index = () => {
  const [entries, setEntries] = useState<Entry[]>(MOCK_ENTRIES);

  const handleNewEntry = (entry: { name: string; email: string; message: string }) => {
    const newEntry: Entry = {
      id: entries.length + 1,
      ...entry,
      timestamp: new Date(),
    };
    setEntries([newEntry, ...entries]);
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-bg)]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">Guestbook</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple guestbook application for DevOps, CI/CD, and observability practice
          </p>
        </header>

        <div className="space-y-8">
          <GuestbookForm onSubmit={handleNewEntry} />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Recent Entries ({entries.length})
            </h2>
            <div className="space-y-4">
              {entries.map((entry) => (
                <GuestbookEntry
                  key={entry.id}
                  name={entry.name}
                  email={entry.email}
                  message={entry.message}
                  timestamp={entry.timestamp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
