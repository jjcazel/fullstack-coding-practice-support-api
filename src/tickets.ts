export type Ticket = {
  id: string;
  subject: string;
  status: "open" | "in_progress" | "closed";
};

export const tickets: Ticket[] = [
  {
    id: "ticket-1",
    subject: "Unable to sign in",
    status: "open",
  },
  {
    id: "ticket-2",
    subject: "Update contact information",
    status: "in_progress",
  },
  {
    id: "ticket-3",
    subject: "Question about account notifications",
    status: "closed",
  },
];
