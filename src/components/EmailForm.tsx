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
import { useState } from "react"
import { CheckCircledIcon } from "@radix-ui/react-icons"

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

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitText, setSubmitText] = useState("submit")

    function onSubmit(values: z.infer<typeof formSchema>) {

        setIsSubmitting(true)

        axios.post("https://stormy-onesies.cyclic.cloud/", {
            name: values.name,
            email: values.email,
            message: values.message
        })
            .then(response => {
                console.log(response.data)
                toast.success("Email sent successfully!")
                form.reset()
                setSubmitText("check")
            })
            .catch(error => {
                console.error(error)
                toast.error("Error sending email.")
                setIsSubmitting(false)
            })
            .finally(() => {
                setIsSubmitting(false)
                setTimeout(() => {
                    setSubmitText("submit")
                }, 6000)
            })

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
                            disabled={[isSubmitting, submitText === "check"].some(Boolean)}
                            className="border-purple-600 dark:border-purple-600 hover:bg-purple-600 dark:hover:bg-purple-600"
                        >
                            {isSubmitting ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-purple-600 dark:text-purple-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    >
                                    </circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm9-1.37l3 2.646C19.865 17.825 21 15.043 21 12h-4a7.96 7.96 0 01-2 4.92zM7 6.708l3 2.647V3.061L7 6.708z"
                                    >
                                    </path>
                                </svg>
                            ) : submitText === "check" ? (
                                <CheckCircledIcon color="#af4bfb" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" theme="colored" />
        </Form>
    )
}