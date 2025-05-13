import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo } from "react";

export const Register = () => {
  const { t, i18n } = useTranslation();
  
  // Şemayı useMemo ile dil değişimlerine duyarlı hale getirme
  const registerSchema = useMemo(() => {
    return z.object({
      email: z.string().email(t('validation.email')),
      password: z.string().min(6, t('validation.password_min')),
      confirmPassword: z.string().min(6, t('validation.doesnt_match')),
    }).refine((data) => data.password === data.confirmPassword, {
      message: t('validation.password_match'),
      path: ['confirmPassword'],
    });
  }, [t, i18n.language]); // Dil değişikliğini takip et
  
  type RegisterForm = z.infer<typeof  registerSchema>;
  
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  
  // Dil değiştiğinde formu sıfırla
  useEffect(() => {
    // Mevcut form değerlerini al
    const currentValues = form.getValues();
    
    // Form state'ini sıfırla ve değerleri koru
    form.reset(currentValues);
    
    // Eğer form alanlarında değer varsa validasyonu tekrar tetikle
    if (currentValues.email || currentValues.password || currentValues.confirmPassword) {
      form.trigger();
    }
  }, [i18n.language, form]);
  
  function onSubmit(values: RegisterForm) {
    console.log("Register:", values);
  }
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('register')}</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} key={i18n.language} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
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
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('confirm_password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('placeholders.confirm_password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              {t('register')}
            </Button>
          </form>
        </Form>
        
        <Link to="/login" className="text-blue-600 hover:underline mt-4 block text-center">
          {t('go_to_login')}
        </Link>
      </div>
    </div>
  );
}