"use client"

import axios from "axios"
import * as z from "zod"
import "react-toastify/dist/ReactToastify.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast, ToastContainer } from "react-toastify"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please provide a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Enter your message using no less than 10 characters."
    }),
})

export default function ProfileForm() {
    type FormSchemaKeys = keyof typeof formSchema['_def']['shape'];

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        axios.post("/send-email", {
            name: values.name,
            email: values.email,
            message: values.message
        })
            .then(response => {
                console.log(response.data);
                toast.success("Email sent successfully!")
                form.reset()
            })
            .catch(error => {
                console.error(error);
                toast.error("Error sending email.")
            });

        console.log(values)
    }

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
                                    <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                                    <FormControl>
                                        <Input className="border-purple-600 dark:border-purple-600" placeholder={`Enter your ${fieldName}`} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <div className="flex justify-center items-center">
                        <Button
                            variant="outline"
                            type="submit"
                            className="border-purple-600 dark:border-purple-600 hover:bg-purple-600 dark:hover:bg-purple-600"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" theme="colored" />
        </Form>
    )
}