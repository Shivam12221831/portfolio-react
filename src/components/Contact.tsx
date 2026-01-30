import contact_img from '../assets/contact.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
    fullname: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(50, "Full name must be at most 50 characters"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    subject: z
        .string()
        .min(2, "Subject must be at least 2 characters")
        .max(50, "Subject must be at most 50 characters"),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message must be at most 500 characters"),

    company: z
        .string()
        .optional(),
})

type ContactFieldNames = keyof z.infer<typeof formSchema>;

type FormFields = {
    fieldName: string,
    title: ContactFieldNames,
    htmlfor: string,
    placeholder: string,
}

const formFields: FormFields[] = [
    { 
        fieldName: "Full Name",
        title: "fullname",
        htmlfor: "form-contact-fullname",
        placeholder: "eg. Shivam Singh",
    },
    { 
        fieldName: "Email",
        title: "email",
        htmlfor: "form-contact-emal",
        placeholder: "shivam@gmail.com",
    },
    { 
        fieldName: "Subject",
        title: "subject",
        htmlfor: "form-contact-subject",
        placeholder: "eg. Job opportunity or General query",
    },
    { 
        fieldName: "Message",
        title: "message",
        htmlfor: "form-contact-message",
        placeholder: "Please enter your message",
    },
    { 
        fieldName: "Company",
        title: "company",
        htmlfor: "form-contact-company",
        placeholder: "Enter company name",
    },
]   

export default function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            subject: "",
            message: "",
            company: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast.success(`Thanks, ${data.fullname}!`, {
            description: "Your message has been sent. I’ll respond shortly.",
        });
    
        form.reset();
    }

    return (
        <div className="py-16 font-serif">
            <div className="ml-10">
                <h1 className="ml-10 text-4xl font-semibold font-serif underline">CONTACT</h1>
            </div>
            <div className="mx-20 mt-2 justify-center items-center grid grid-col-1 md:grid-cols-6">
                <Card style={{backgroundColor: "#F1F5EB"}} className="w-full px-4 border-none md:col-span-3">
                    <CardHeader>
                        <CardDescription className="text-md text-black">
                            Have a question or opportunity? Let’s talk.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup>
                                {formFields.map((item) => (
                                    <Controller
                                        name={item.title}
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field className="gap-1" data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor={item.htmlfor}>
                                                    {item.fieldName}
                                                </FieldLabel>
                                                {(item.title === "message") ? (
                                                    <InputGroup>
                                                        <InputGroupTextarea
                                                            {...field}
                                                            id={item.htmlfor}
                                                            placeholder={item.placeholder}
                                                            rows={2}
                                                            className="min-h-24 resize-none"
                                                            aria-invalid={fieldState.invalid}
                                                        />
                                                        <InputGroupAddon align="block-end">
                                                            <InputGroupText className="tabular-nums">
                                                            {field.value?.length}/100 characters
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                ) : (
                                                    <Input
                                                        {...field}
                                                        id={item.htmlfor}
                                                        aria-invalid={fieldState.invalid}
                                                        placeholder={item.placeholder}
                                                        autoComplete="off"
                                                    />
                                                )}

                                                { (item.title === "subject") && 
                                                    <FieldDescription className="pt-1 pl-2">
                                                        Helps me understand the purpose of your message.
                                                    </FieldDescription>
                                                }

                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                ))}
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Field orientation="horizontal">
                            <Button type="button" variant="outline" onClick={() => form.reset()} className="cursor-pointer">
                                Reset
                            </Button>
                            <Button type="submit" form="form-contact" className="cursor-pointer">
                                Submit
                            </Button>
                        </Field>
                    </CardFooter>
                </Card>
                <div className='col-span-3'>
                    <img src={contact_img} className='mx-auto rounded-full w-180 h-180' alt="Contact_Img" />
                </div>
            </div>
        </div>
    )
}