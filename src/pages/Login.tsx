// src/pages/Login.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLoginSchema } from "@/schemas/useLoginSchema";
import type { LoginForm } from "@/schemas/useLoginSchema";
import { useEffect } from "react";



export const Login = () => {
  const { t ,i18n} = useTranslation();
  let loginSchema = useLoginSchema();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // Mevcut form değerlerini al
    const currentValues = form.getValues();
    
    // Form state'ini sıfırla ve değerleri koru
    form.reset(currentValues);
    
    // Validasyon hatalarını tetikle (isteğe bağlı)
    if (currentValues.email || currentValues.password) {
      form.trigger();
    }
  }, [i18n.language, form]);


  return (
    
  
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('login')}</h2>

        <Form {...form}>
          <form  key={i18n.language} onSubmit={form.handleSubmit(data => console.log(data))} className="space-y-4">
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
