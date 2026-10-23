import { z } from 'zod';

export const loginUsernameSchema = z
  .string()
  .min(1, 'Preencha um valor.')
  .min(3, 'O usuário deve ter pelo menos 3 caracteres')
  .refine(
    (value) => !value.includes('@') || z.email().safeParse(value).success,
    'Email inválido',
  );

export const loginPasswordSchema = z.string().min(1, 'Preencha um valor.');

export const usernameSchema = z
  .string()
  .min(1, 'Preencha um valor.')
  .min(3, 'O usuário deve ter pelo menos 3 caracteres')
  .refine((value) => !value.includes('@'), 'O usuário não pode ter @');

export const emailSchema = z
  .string()
  .min(1, 'Preencha um valor.')
  .pipe(z.email('Email inválido'));

export const passwordSchema = z
  .string()
  .min(1, 'Preencha um valor.')
  .min(8, 'A senha deve ter pelo menos 8 caracteres')
  .regex(/[a-zA-Z]/, 'A senha deve ter pelo menos uma letra')
  .regex(/\d/, 'A senha deve ter pelo menos um número');

export const dogNameSchema = z.string().min(1, 'Preencha um valor.');

export const dogWeightSchema = z.coerce
  .number('O valor digitado deve ser um número.')
  .min(1, 'O valor deve ser maior que 0.')
  .max(150, 'O peso máximo é 160kg.');

export const dogAgeSchema = z.coerce
  .number('O valor digitado deve ser um número.')
  .min(1, 'O valor deve ser maior que 0.')
  .max(30, 'A idade máxima é de 30 anos.');
