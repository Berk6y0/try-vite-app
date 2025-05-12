// src/pages/Login.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const loginSchema = z.object({
  email: z.string().email(i18n.t('validation.email')),
  password: z.string().min(6, i18n.t('validation.password_min')),
});

type LoginForm = z.infer<typeof loginSchema>;

export const Login=() =>{
  const { t } = useTranslation();
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginForm) {
    console.log("Login:", values);
 
  }

  return (
    
  
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('login')}</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('welcome')}</FormLabel>
                  <FormControl>
<Input
  type="email"
  placeholder={t('placeholders.email')}
  {...field}
/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('password')}</FormLabel>
                  <FormControl>
<Input
  type="password"
  placeholder={t('placeholders.password')}
  {...field}
/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
             {t('login')}
            </Button>
            
          </form>
        </Form>
            <Link to="/register" className="text-blue-600 hover:underline">
             {t('register')}
          </Link>
      </div>
      
    </div>
  
  );
}
