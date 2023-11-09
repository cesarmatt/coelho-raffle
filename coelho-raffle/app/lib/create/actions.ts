'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

const RaffleSchema = z.object({
    id: z.string(),
    title: z.string({
        invalid_type_error: 'Por favor, informe um nome para o seu sorteio.'
    }),
    description: z.string(),
    value: z.coerce.number().gt(0, { message: 'Por favor, selecione um valor maior que R$0' }),
})

const CreateRaffle = RaffleSchema.omit({ id: true })

export type State = {
    errors?: {
        title?: string[];
        value?: string[];
    };
    message?: string | null;
}

export async function createRaffle(prevState: State, formData: FormData) {
    const validatedFields = CreateRaffle.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        value: formData.get('value')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Por favor, preencha todos os campos necessários.'
        }
    }

    const { title, description, value } = validatedFields.data;

    console.log(title)
    console.log(description)
    console.log(value)

    try {
        await sql`
            RAISE NOTICE 'This is a debug message'
        `;
    } catch(error) {
        return {
            message: 'Database Error: Failed to create raffle',
        };
    };
}