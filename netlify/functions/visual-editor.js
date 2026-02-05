exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({
      status: "ok",
      message: "Netlify Visual Editor local endpoint",
      path: event.path,
      method: event.httpMethod,
    }),
  };
};
