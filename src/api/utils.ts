export const getClientUrl = () => {
  const slug = "api/graphql";
  if (process.env.NEXT_PUBLIC_IS_LOCAL) {
    return `http://localhost:3000/${slug}`;
  } else {
    switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
      case "preview": {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug}`;
      }
      case "production": {
        return `https://rat-tools.vercel.app/${slug}`;
      }
      default: {
        return `http://localhost:3000/${slug}`;
      }
    }
  }
};
