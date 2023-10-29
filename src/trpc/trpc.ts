import { initTRPC } from '@trpc/server';
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
//publicProcedure allows us to create an API endpoint that anyone can call
