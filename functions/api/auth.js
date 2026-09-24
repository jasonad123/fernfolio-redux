// Decap CMS "github" backend auth_endpoint - kicks off the GitHub OAuth flow.
// Requires a GITHUB_CLIENT_ID environment variable/secret on this Pages project.
export async function onRequest(context) {
  const { request, env } = context;

  try {
    const url = new URL(request.url);
    const redirectUrl = new URL('https://github.com/login/oauth/authorize');

    redirectUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
    redirectUrl.searchParams.set('redirect_uri', url.origin + '/api/callback');
    redirectUrl.searchParams.set('scope', 'repo user');
    redirectUrl.searchParams.set('state', crypto.getRandomValues(new Uint8Array(12)).join(''));

    return Response.redirect(redirectUrl.href, 301);
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
