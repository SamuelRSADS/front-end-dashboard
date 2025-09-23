import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string('O nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  nameComplement: z
    .string()
    .max(50, 'O complemento deve ter no máximo 20 caracteres')
    .optional(),
  email: z.email('Email inválido'),
  password: z
    .string('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(
      /[^a-zA-Z0-9]/,
      'A senha deve conter pelo menos um caractere especial',
    ),
  ddi: z.string('O DDI é obrigatório'),
  ddd: z
    .string('O DDD é obrigatório')
    .min(2, 'O DDD deve ter pelo menos 2 dígitos')
    .max(2, 'O DDD deve ter no máximo 3 dígitos'),
  telefone: z
    .string('O telefone é obrigatório')
    .min(8, 'O telefone deve ter pelo menos 8 dígitos')
    .max(9, 'O telefone deve ter no máximo 9 dígitos'),
});

export const addressSchema = z.object({
  zipCode: z
    .string()
    .min(8, 'O CEP deve ter 8 dígitos')
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido'),
  address: z
    .string()
    .min(3, 'O endereco deve ter pelo menos 3 caracteres')
    .max(50, 'O endereco deve ter no máximo 100 caracteres'),
  number: z
    .string()
    .min(1, 'O número é obrigatório')
    .max(5, 'O número deve ter no máximo 5 caracteres'),
  city: z
    .string()
    .min(2, 'A cidade deve ter pelo menos 2 caracteres')
    .max(25, 'A cidade deve ter no máximo 25 caracteres'),
  state: z
    .string()
    .length(2, 'O estado deve ter exatamente 2 letras')
    .regex(
      /^[a-zA-Z]{2}$/,
      'O estado deve estar em formato de sigla (ex: SP, RJ)',
    ),
  addressComplement: z
    .string()
    .max(100, 'O complemento deve ter no máximo 100 caracteres')
    .optional(),
});

export const loginSchema = z.object({
  email: z.email('Email inválido'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(
      /[^a-zA-Z0-9]/,
      'A senha deve conter pelo menos um caractere especial',
    ),
});
