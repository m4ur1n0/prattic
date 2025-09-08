import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription } from './ui/form';
import { Input } from './ui/input';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from './ui/textarea';
import { PostSignUp } from '@/app/lib/GetInfo';


const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Enter a valid email address"),
    phone: z
      .string()
      .regex(/^\+?[0-9\s\-()]{7,15}$/, "Enter a valid phone number"),
    notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
})

const SignUpForm = ({show}) => {

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
          notes: "",
        },
    });

    async function onSubmit(values) {

        // before submitting, if this takes us over the cap, make sure we demonstrate the WAITLIST of it all
        // if (show.performers.length === show.maxPerformers) {
        //     // so this should happen just the first time. if we see double-counts (people signing up at the same time)
        //     // then we can add a check here on each submission, but it might be faster to have a recheck on the list itself every min or so

        //     const waitlistNotifier = {
        //         post_time : new Date().toLocaleString(),
        //         performance_name : "WAITLIST",
        //         name : "WAITLIST",
        //         email : "WAITLIST",
        //         phone : "WAITLIST",
        //         notes : "WAITLIST",
        //         sheetName : show.sheetName
        //     }

        //     await PostSignUp(waitlistNotifier);
        // }

        const submissionEvent = {
            post_time : new Date().toLocaleString(),
            performance_name : (show.performers.length >= show.maxPerformers) ? "WAITLIST" : show.showName,
            name : values["name"],
            email : values["email"],
            phone : values["phone"],
            notes : values["notes"],
            sheetName : show.sheetName
        }

        PostSignUp(submissionEvent);

        form.reset();
    }

    return (
        <Form {...form} >

            <form className="font-merri space-y-4" onSubmit={form.handleSubmit(onSubmit)}>

                {/* FULL NAME  */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (

                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Firstname Lastname" {...field} />
                            </FormControl>
                            {/* <FormDescription>This is your public display name.</FormDescription> */}

                        </FormItem>

                    )}

                />

                {/* EMAIL  */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                        </FormItem>
                    )}

                />

                {/* PHONE  */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                        </FormItem>
                    )}

                />

                {/* NOTES  */}
                <FormField
                    control={form.control}
                    name="notes"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Any notes you'd like us to know?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}

                />


                <div className='flex justify-center w-full'>
                    <button
                        type="submit"
                        className="static-render-sketch-button relative cursor-pointer button-shadow hover:bg-black/5 transition-colors duration-200 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-app-black"
                        style={{
                            width: `125px`,
                            height: `37px`
                        }}
                    >
                        {/* bg sketch image */}
                        <img
                            src={`vectors/sharpButton0.svg`}
                            alt="rough sketch button with label"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading='eager'
                        />

                        {/* label - stay centered */}
                        <p
                            className={`absolute inset-0 flex items-center justify-center font-bold text-center leading-none text-lg lg:text-xl font-amatic`}
                            style={{
                                padding: 0,
                                margin: 0,
                                fontFamily : "var(--font-amatic)"
                            }}
                        >
                            Sign Up
                        </p>
                    </button>
                </div>


            </form>

        </Form>
    )
}

export default SignUpForm
