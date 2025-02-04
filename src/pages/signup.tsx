'use client'

import '../app/globals.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { registerUser } from '@/api/user'
import { useRouter } from 'next/router'
import Link from 'next/link'
import checkToken from '@/helpers/checkToken'
import { GetServerSidePropsContext } from 'next'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  name: z.string().min(1),
})

export default function Page() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    const response = await registerUser(data.name, data.email, data.password, data.confirmPassword)
    if ('error' in response) {
      console.error(response.error)
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      })
      return
    }
    document.cookie = `token=${response.token}`
    // TODO: handle error
    if (response) {
      router.push('/discover')
    }
  }

  return (
    <div className='bg-mainLight min-h-screen w-screen flex justify-center items-center'>
      <div className='bg-white rounded-lg p-4 w-3/4 md:w-1/2 lg:w-1/3'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
            <FormField
              control={form.control}
              name="name"
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input autoComplete='name' required placeholder="Enter your name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input autoComplete='email' required placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              rules={{ required: true, minLength: 8 }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input autoComplete='new-password' required placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              rules={{ required: true, minLength: 8, validate: (value) => value === form.getValues('password') }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input autoComplete='new-password' required placeholder="Confirm your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Signup</Button>
          </form>
        </Form>
        <div className='flex flex-col md:flex-row w-full gap-4 mt-4'>
          <Button onClick={() => signIn('google')} className='w-full'>Sign in with Google</Button>
          <Button onClick={() => signIn('facebook')} className='w-full'>Sign in with Facebook</Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">Already have an account? <Link href="/login" className="text-mainDark">Login</Link></p>
      </div>
      <Toaster />
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const token = context?.req?.cookies?.token
  const user = await checkToken(token ?? '')
  if (user) {
    return {
      redirect: { destination: '/discover' }
    }
  }
  return {
    props: {}
  }
}