const redirect = "http://srv235711.hoster-test.ru/sd/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirect,
    },
  })
);
