const authConfig = {
  providers: [
    {
      domain: process.env.NEXT_CLERK_CONVEX_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
