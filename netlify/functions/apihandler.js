exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Hello from Netlify Function!' }),
    };
  };
  