import { z } from "zod";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export let useLoginSchema = () => {
  const { t, i18n } = useTranslation();

  return useMemo(() => {
    return z.object({
      email: z.string().email(t("validation.email")),
      password: z.string().min(6, t("validation.password_min")),
    });
  }, [t, i18n.language]); // Hem t hem de i18n.language değişimini takip et
};

export type LoginForm = z.infer<ReturnType<typeof useLoginSchema>>;
