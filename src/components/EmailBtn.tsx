import EmailForm from "@/components/EmailForm";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";

export const EmailBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-40 p-8 rounded-full border-2 border-purple-600 dark:border-purple-600 hover:bg-purple-600 dark:hover:bg-purple-600 animate-pulse hover:animate-none"
        >
          <PersonIcon className="mr-2 h-5 w-5" />
          Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-2 border-purple-600 dark:border-purple-600">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <span className="text-3xl">Email me!</span>
          </DialogTitle>
        </DialogHeader>
        <EmailForm />
      </DialogContent>
    </Dialog>
  );
};
