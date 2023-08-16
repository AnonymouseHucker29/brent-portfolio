"use client";

import axios from "axios";
import * as z from "zod";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { CheckCircledIcon, ReloadIcon } from "@radix-ui/react-icons";
import { avantgarde } from "@/app/layout";
import { useTheme } from "next-themes";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please provide a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Enter your message using no less than 10 characters.",
  }),
});

export default function ProfileForm() {
  type FormSchemaKeys = keyof (typeof formSchema)["_def"]["shape"];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitText, setSubmitText] = useState("send");

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    axios
      .post("/api/send-email/", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Email sent successfully!");
        form.reset();
        setSubmitText("check");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error sending email.");
        setIsSubmitting(false);
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitText("send");
        }, 6000);
      });

    console.log("Values:\n", JSON.stringify(values, null, 1));
  }

  const { theme } = useTheme();

  return (
    <Form {...form}>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {Object.entries(formSchema.shape).map(([fieldName]) => (
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName as FormSchemaKeys}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                  </FormLabel>
                  <FormControl>
                    {fieldName === "message" ? (
                      <Textarea
                        className="border-purple-600 dark:border-purple-600 resize-none"
                        placeholder={`Enter your ${fieldName}`}
                        {...field}
                      />
                    ) : (
                      <Input
                        className="border-purple-600 dark:border-purple-600"
                        placeholder={`Enter your ${fieldName}`}
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="flex justify-center items-center pt-2">
            <Button
              variant="outline"
              type="submit"
              disabled={[isSubmitting, submitText === "check"].some(Boolean)}
              className="rounded-full w-full border-purple-600 dark:border-purple-600 md:hover:bg-purple-600 md:dark:hover:bg-purple-600 lg:hover:bg-purple-600 lg:dark:hover:bg-purple-600 xl:hover:bg-purple-600 xl:dark:hover:bg-purple-600"
            >
              {isSubmitting ? (
                <ReloadIcon className="animate-spin" />
              ) : submitText === "check" ? (
                <CheckCircledIcon />
              ) : (
                "SEND"
              )}
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer
        closeOnClick={false}
        bodyClassName={avantgarde.className}
        position="top-center"
        theme={theme === "light" ? "light" : "dark"}
      />
    </Form>
  );
}
