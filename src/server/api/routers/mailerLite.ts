/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { env } from "~/env.mjs";

const mailerlite = new MailerLite({
  api_key: env.MAILER_LITE_API_KEY,
});

const groupId = "100108284519777536";

export const mailerLiteRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      try {
        const params = {
          email: input.email,
          groups: [groupId],
        };
        const response = await mailerlite.subscribers.createOrUpdate(params);
        const subscriberData = response.data.data;
        return {
          id: subscriberData.id,
          email: subscriberData.email,
          status: subscriberData.status,
          subscribed_at: subscriberData.subscribed_at,
        };
      } catch (error) {
        throw new Error("Failed to subscribe");
      }
    }),
});
